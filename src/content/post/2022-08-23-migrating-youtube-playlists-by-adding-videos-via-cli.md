---
title: Adding videos to a youtube playlists via a terminal python script
publishDate: 2022-08-23
description: I wanted to duplicate another user's playlist to one of my free google accounts. But it's no longer possible from the web interface. None of <a href="https://webapps.stackexchange.com/questions/39686/how-to-copy-youtube-playlist-from-one-account-to-another" title="read those answers in Stack Overflow">the methods described in various SO answers</a> are functional, they are obsolete. But it can be done with a Python script in your terminal.
draft: false
tags:
  - Google
  - YouTubeApi
  - Python
---

## Copying another user's playlist? Why?

It all began when Google decided to start charging me for using my own domain name on their servers. I don't mind paying for the service, but if I'm paying then I can shop around. Google is not the only game in town. Having decided to move away, the next step was to migrate the data. There is not much I can do with YouTube data. Either I download the videos and store them myself (which I do, for some videos). Or transfer the playlists to a different user account, a free one. But one doesn't simple "transfer a playlist" on YouTube. You need to create a script and register to access their api. And this is what this post is all about

## Step 0: set up the python project

Since this is going to be a python project, let's set it up that way.

Started by creating a folder on my local machine. Then initialised the project with poetry and the right version of python

```bash
❯ mkdir my-project && cd my-project
❯ python -V
3.8.5
❯ pyenv local 3.10.1
...
❯ python -V
3.10.1
❯ poetry init
... accept all default except for
... `Would you like to define your main dependencies interactively?`
❯ poetry shell
/Users/gotofritz/Library/Caches/pypoetry/virtualenvs/youtube-migration--G8ptBqy-py3.10
```

Set up VScode to use the poetry environment. To do that I click on the status bar at the bottom right of the editor, where it shows the python version. Clicking it brings up a list of possible python runtimes. I paste in the path that was given when I run `poetry shell`, plus the fragment `bin/python3.10` - i.e., `/Users/gotofritz/Library/Caches/pypoetry/virtualenvs/youtube-migration--G8ptBqy-py3.10/bin/python3.10`

Then I added the dependencies - for now just the black formatter. My VSCode is set up to format on save and use Black as default formatter, so if it's there it will find it and use it

```bash
❯ poetry add -D black
```

I created a `.gitignore` with settings for python and VSCode, and initialised the git project

```bash
# toptal.com offers a free, comprehensive .gitignore generator
❯ curl -L https://www.toptal.com/developers/gitignore/api/python,visualstudiocode > .gitignore
❯ git init
 ... accept all defaults
```

Now I'm ready to start

## Step 1: download the playlist information as CSV files

This step only applies because the source account, the one I am copying the playlist from, is mine. Later on I will make this step general and replace it with a script too. But for now, a manual download is fine. There isn't much to it - you just go to the [google takeout page](https://takeout.google.com/settings/takeout/) and follow the instructions there. The result is a zip file. Inside the zip a folder called `playlists`, full of CSV files. That's what we are after.

(_TODO: Fetch playlists using the same API I use for creating them._)

## Step 2: preprocess the youtube takeout data and concat into a single file

The takeout data has one file per playlist. For reasons that will become clear later (spoiler: it's to do with API quotas), I prefer working with a single CSV file. That means two things. First, concatenating the csvs, and removing unneeded metadata at the top as I do so. Second, for each row, adding the playlist id in a new spreadsheet column. That means those playlists must already exist; I go and create them manually in the YouTube page. I then rename each CSV file with the id of the playlist the videos in that file will go to. A bit of a hack, but sufficient for a quick one-off job.

(_TODO: later on I could also automate the playlist creation._)

Pandas is the standard library for CSV massaging in python, although I could get away with the built-in csv module. So the first step is installing it

```bash
❯ poetry add pandas
Using version ^1.4.3 for pandas
...
```

The initial script just finds the source csv files and list them. Note the `skiprows=3` in the read_csv - that's because the playlist files have 3 lines of metadata at the top.

```python
# csv-concat.py

from pathlib import Path
import pandas as pd

SOURCE_DIR = Path("~/Downloads/takeout/playlists")
TARGET_DIR = Path("./data")

def get_csv_files():
    for p in SOURCE_DIR.glob("*.csv"):
        df = pd.read_csv(SOURCE_DIR / p.name, skiprows=3)
        print(df)

def main():
    get_csv_files()

if __name__ == "__main__":
    main()
```

After a few iterations I ended up with this. It concats the csv files to a csv with the timestamp in its name. The `with_timestamp` I will probably reuse later

```python
from pathlib import Path
import pandas as pd
from datetime import datetime

SOURCE_DIR = Path("~/Downloads/takeout/playlists")
TARGET_DIR = Path("./data")

def with_timestamp(stem: str) -> str:
    dt = datetime.now()
    dt_string = dt.strftime("%Y%m%dT%H%M%S")
    return dt_string + "_" + stem

def get_csv_files():
    csvs = []
    for p in SOURCE_DIR.glob("*.csv"):
        print(f"reading {p.name}")
        playlist = Path(p.name).stem
        df = pd.read_csv(SOURCE_DIR / p.name, skiprows=3)
        df["Status"] = pd.Series(["" for x in range(len(df.index))])
        df["Playlist ID"] = pd.Series([playlist for x in range(len(df.index))])
        csvs.append(df)
    return pd.concat(csvs)

def main():
    concatenated_df = get_csv_files()
    destination_csv = TARGET_DIR / with_timestamp("data.csv")
    concatenated_df.to_csv(destination_csv, index=False)
    print(f"Created {destination_csv}")

if __name__ == "__main__":
    main()
```

It does the job

```bash
❯ python csv-concat.py
reading PLZ6Ih9wLHQ2H1u5cOpSWgVGsn8YLWMmdy.csv
reading PLZ6Ih9wLHQ2Em6nwtgGZ9q-eBRlSSbDRU.csv
reading PLZ6Ih9wLHQ2HDOnRZaKQSWz8R4II0163v.csv
reading PLZ6Ih9wLHQ2FDvivyW8_xcp6qG4-D45yh.csv
Created data/20220828T170021_data.csv

❯ head -n 3 data/20220828T170021_data.csv
Video ID,Time Added,Status,Playlist ID
nmdUMwlrezs,2022-05-01 16:28:50 UTC,,PLZ6Ih9wLHQ2H1u5cOpSWgVGsn8YLWMmdy
8qIMIAG5Z_E,2022-05-01 16:31:08 UTC,,PLZ6Ih9wLHQ2H1u5cOpSWgVGsn8YLWMmdy
```

As a final step, I add a `.gitkeep` file to the `data/` folder, and then add the rest of that folder to `.gitignore`

```bash
❯ touch data/.gitkeep
❯ echo "data/*.csv" >> .gitignore
❯ git add -a .
❯ git commit -m "initial commit"
```

## Step 3: setting up a GCP project and getting YouTube API access

1. Went to <https://console.developers.google.com/> with my free Google account, created a new project
1. Searched for 'YouTube API' and enabled it
1. Clicked on 'credentials' on side bar, and then 'Configure consent screen'. I had to pick 'External'. Added the email address and a made up app name in the next screen.
1. Click on 'add scopes' and find the YouTube API ones in the list. Select them all and clicked on 'save'
1. In the next screen, added myself as a test user, then 'Save and Continue'
1. Back on 'credentials' on side bar, then `Create OAuth client ID`. Picked `OAuth Client Id`
1. In the next screen I entered some app details. NOTE: Type should not be "web application", but "desktop app". Clicked on "create" and then "download JSON" in the modal box on the next screen
1. Moved the `client_json_xxxxx` file and playlists files to my project folder. Don't forget to add to .gitignore!

   ```bash
   ❯ cp ~/Downloads/client....json client_secret.json
   ❯ echo "client_secret.json" >> .gitignore
   ```

## Step 4: Read and manage csv files with list of video ids to add to playlist

I now start with the python script that adds the songs to the playlist. The first iteration will simply read a timestamped CSV file with pandas, and copy it to a new timestamped CSV file. This is needed because of quotas. Basically you won't be able to run the whole job in one go. Google limits the amount of calls you can make. You will have to run it a bit every day, and carry on from where you left off the previous day.

```python
# uploader.py

import pandas as pd
from datetime import datetime
from pathlib import Path

DATA_DIR = Path("./data")
FILE_STEM = "data.csv"

def pick_latest_file(dir: Path) -> Path:
    """assume that all files have a timestamp in the name, and hence the
    last in the list is the most recent
    """
    return sorted(DATA_DIR.glob("*.csv")).pop()

def with_timestamp(stem: str) -> str:
    """prepend a timestamp to a string. Typically used for filenames"""
    dt = datetime.now()
    dt_string = dt.strftime("%Y%m%dT%H%M%S")
    return dt_string + "_" + stem

def partly_processed_csv(source_df: pd.DataFrame) -> pd.DataFrame:
    processed_df = source_df.copy()
    """ THIS IS WHERE THE MAGIC WILL HAPPEN """
    return processed_df

def main():
    source_file = pick_latest_file(DATA_DIR)
    source_df = pd.read_csv(source_file)
    processed_df = partly_processed_csv(source_df)
    latest_file = with_timestamp(FILE_STEM)
    processed_df.to_csv(DATA_DIR / latest_file, index=False)

if __name__ == "__main__":
    main()
    print("DONE")
```

Run it to test it works

```bash
# see what we've got before starting
❯ ls -1 data
20220828T170021_data.csv
20220828T172321_data.csv

❯ python uploader.py
DONE

# we got a new file
❯ ls -1 data
20220828T170021_data.csv
20220828T172321_data.csv
20220828T225131_data.csv

# it is the same as the old one? YES - there is no output
❯ diff data/20220828T225131_data.csv data/20220828T172321_data.csv

```

## Step 5: Extract video and playlist IDs from csv rows

For the next iteration I try to do as much of the work as I can without actually accessing the YouTube API. Working with it is time consuming because the constant signing in. `partly_processed_csv` will use pandas to iterate through the rows and process each file. `itertuples` has a bad rep in pandas, but in my case I need to stop and call an API at each iteration.

```diff
+DATA_DIR = Path("./data")
+FILE_STEM = "data.csv"
+COL_VIDEO_ID = "Video ID"
+COL_STATUS = "Status"
+COL_PLAYLIST_ID = "Playlist ID"
+LABEL_DONE = "done"

...

def partly_processed_csv(source_df: pd.DataFrame) -> pd.DataFrame:
    processed_df = source_df.copy()
-    """ THIS IS WHERE THE MAGIC WILL HAPPEN """
+    for row in processed_df.itertuples():
+        data = processed_df.loc[row.Index, [COL_VIDEO_ID, COL_STATUS, COL_PLAYLIST_ID]]
+        video_id, status, playlist_id = data.values
+        if status == LABEL_DONE:
+            continue
+        try:
+            print(f"-> Adding {video_id} to {playlist_id}")
+            # TODO
+            processed_df.at[row.Index, COL_STATUS] = LABEL_DONE
+        except Exception as e:
+            processed_df.at[row.Index, COL_STATUS] = e
    return processed_df
```

I run the command as before, this time the new csv file has 'done' in the column status for each row, as expected.

## Step 6: connect to YouTube API

It's time to start accessing the YouTube API. First, install the dependencies

```bash
❯ poetry add google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
```

Then amend the script to test the connection works. The big change is that main function will be passed a client, which is created with the `get_authenticated_service` function. I copied that straight from the documentation.

```diff
# uploader.py

import pandas as pd
from datetime import datetime
from pathlib import Path
+import os
+from googleapiclient.discovery import build
+from google_auth_oauthlib.flow import InstalledAppFlow

..
LABEL_DONE = "done"
+CLIENT_SECRETS_FILE = "client_secret.json"

+# This scope allows for full read/write
+# access to the authenticated user's account
+# and requires requests to use an SSL connection.
+SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"]
+API_SERVICE_NAME = "youtube"
+API_VERSION = "v3"

+def get_authenticated_service():
+    """straight from the YouTube API documentation"""
+    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
+    credentials = flow.run_console()
+    return build(API_SERVICE_NAME, API_VERSION, credentials=credentials)

def pick_latest_file(dir: Path) -> Path:
...

-def partly_processed_csv(source_df: pd.DataFrame) -> pd.DataFrame:
+def partly_processed_csv(client, source_df: pd.DataFrame) -> pd.DataFrame:
...

-def main():
+def main(client):
    ...

if __name__ == "__main__":
-    main()
+    # When running locally, disable OAuthlib's
+    # HTTPs verification. When running in production
+    # * do not * leave this option enabled.
+    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
+    client = get_authenticated_service()
+    main(client)
    print("DONE")
```

When it runs it stops and asks me for an authorisation code:

```bash
❯ python uploader.py
Please visit this URL to authorize this application: \
https://accounts.google.com/o/oauth2/auth?response_type=code&....etc...
Enter the authorization code:
```

I paste the URL in a browser, authenticate, copy the code, and paste it on the CLI. I have to do this every time I run the script, but it works

## Step 7: add videos to playlist using the YouTube API

The last step is to finally send the calls to the YouTube API and decode the response. The call itself is to `client.playlistItems().insert`. It takes a while to get the correct shape for the payload, but got there in the end. The try / except block listens for errors. A `quotaExceeded` error means I am done for the day, Google won't accept any more calls from me. A `videoNotFound` error means the video has been deleted; no need to stop, but no point in trying again. Any other errors we'll have to wait and see until they occur

```diff
+ LABEL_404 = "videoNotFound"
+ LABEL_QUOTA_EXCEEDED = "quotaExceeded"
...

def partly_processed_csv(client, source_df: pd.DataFrame) -> pd.DataFrame:
    processed_df = source_df.copy()
    for row in processed_df.itertuples():
        data = processed_df.loc[row.Index, [COL_VIDEO_ID, COL_STATUS, COL_PLAYLIST_ID]]
        video_id, status, playlist_id = data.values
+        if status in [LABEL_DONE, LABEL_404]:
            continue
        try:
            print(f"-> Adding {video_id} to {playlist_id}")
+            response = (
+                client.playlistItems()
+                .insert(
+                    part="snippet, contentDetails",
+                    body={
+                        "contentDetails": {"videoId": video_id},
+                        "snippet": {
+                            "playlistId": playlist_id,
+                            "resourceId": {
+                                "kind": "youtube#video",
+                                "videoId": video_id,
+                            },
+                        },
+                    },
+                )
+                .execute()
+            )
+            print(
+                f" + {response['snippet']['title']} / "
+                f"{response['snippet']['position']} in playlist"
+            )
            processed_df.at[row.Index, COL_STATUS] = LABEL_DONE
-       except Exception as e:
+       except HttpError as e:
+            if e.error_details[0]["reason"] == LABEL_QUOTA_EXCEEDED:
+                print(f">>>> Quota exceeded when trying to add {video_id}")
+                return processed_df
-            processed_df.at[row.Index, COL_STATUS] = e
+            processed_df.at[row.Index, COL_STATUS] = e.error_details[0]["reason"]
+            print(f">>>> ERROR {e.error_details[0]['message']}")
    return processed_df
```

Finally, let's run it

```bash
❯ python uploader.py
Please visit this URL to authorize this application:
 https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=xxxxx....
Enter the authorization code: xxxx....
-> Adding RbjONfRaMDs to PLZ6Ih9wLHQ2HDOnRZaKQSWz8R4II0163v
+ Hey, Uh, What You Say Come On / 178 in playlist
-> Adding bxN1xrLRvGU to PLZ6Ih9wLHQ2HDOnRZaKQSWz8R4II0163v
>>>> ERROR 'Video not found.'
-> Adding B2qI6UDD2uQ to PLZ6Ih9wLHQ2HDOnRZaKQSWz8R4II0163v
+ Donna Summer  I Feel Love Original  8 minute 12" version 1977 / 179 in playlist
...
...
-> Adding F2QF_7N85lQ to PLZ6Ih9wLHQ2HDOnRZaKQSWz8R4II0163v
>>>> Quota exceeded when trying to add F2QF_7N85lQ
DONE
```

Checking the generated CSV file, it has some rows marked as 'done', some with 'videoNotFound', and all the rows from 'F2QF_7N85lQ' on are untouched. Just as I expected. I shall do the rest tomorrow.

## Step 8: avoiding duplicates

There was a bug in one of my early iterations. I hadn't realised that the result of python's [Pathlib.glob](https://docs.python.org/3/library/pathlib.html#pathlib.Path.glob) are not ordered by default. So the script kept using the same CSV file and adding the same 100 video to my playlist. 600 videos later... I made [a post about the script I used to remove youtube duplicates](/blog/deleting-duplicates-from-youtube-playlists-with-python-script). But I also wanted to make sure duplicates wouldn't get in in the first place, so I put a check for that. That also called for some refactoring.

First of all, the loop was getting too busy. So I moved all the video adding stuff to a new function, `add_another_video_to_playlist`, and created a new one for checking whether it should add the video at all

```diff
def partly_processed_csv(client, source_df: pd.DataFrame) -> pd.DataFrame:
    processed_df = source_df.copy()
    for row in processed_df.itertuples():
        data = processed_df.loc[row.Index, [COL_VIDEO_ID, COL_STATUS, COL_PLAYLIST_ID]]
        video_id, status, playlist_id = data.values
        if status in [LABEL_DONE, LABEL_404]:
            continue

-       try:
-            print(f"-> Adding {video_id} to {playlist_id}")
-            response = (
-                client.playlistItems()
-                .insert(
-                    part="snippet, contentDetails",
-                    body={
-                        "contentDetails": {"videoId": video_id},
-                        "snippet": {
-                            "playlistId": playlist_id,
-                            "resourceId": {
-                                "kind": "youtube#video",
-                                "videoId": video_id,
-                            },
-                        },
-                    },
-                )
-                .execute()
-            )
-            print(
-                f" + {response['snippet']['title']} / "
-                f"{response['snippet']['position']} in playlist"
-            )
-           processed_df.at[row.Index, COL_STATUS] = LABEL_DONE
-       except HttpError as e:
-            if e.error_details[0]["reason"] == LABEL_QUOTA_EXCEEDED:
-                print(f">>>> Quota exceeded when trying to add {video_id}")
-                return processed_df
-            processed_df.at[row.Index, COL_STATUS] = e.error_details[0]["reason"]
-            print(f">>>> ERROR {e.error_details[0]['message']}")

+       should_skip, reason = video_is_already_in_playlist(
+           client, video_id=video_id, playlist_id=playlist_id
+       )
+       if should_skip:
+           processed_df.at[row.Index, COL_STATUS] = reason
+           continue

+       should_stop, status = add_another_video_to_playlist(
+           client, video_id=video_id, playlist_id=playlist_id
+       )
+       processed_df.at[row.Index, COL_STATUS] = status
+       if should_stop:
+           return processed_df

    return processed_df
```

`video_is_already_in_playlist` returns a tuple, a boolean that tells you whether to skip to the next item in the list, and a string with the reason why (either yes, the video is already in the list, or an error)

```python
def video_is_already_in_playlist(client, video_id: str, playlist_id: str):
    try:
        print(f"-> Searching whether {video_id} is already in {playlist_id}")
        response = (
            client.playlistItems()
            .list(
                part="snippet, contentDetails",
                playlistId=playlist_id,
                videoId=video_id,
            )
            .execute()
        )
        if len(response["items"]) > 0:
            print("... yes it is, doing next")
            return (True, LABEL_DONE)
    except HttpError as e:
        if e.error_details[0]["reason"] == "videoNotFound":  # type: ignore
            print(f">>>> Are you sure about this video? ID not found {video_id}")
        else:
            print(
                ">>>> ERROR LOOKING FOR VIDEO IN PLAYLIST"
                f"{e.error_details[0]['message']}"
            )  # type: ignore
        return (True, e.error_details[0]["reason"])
    return (False, None)
```

`add_another_video_to_playlist` also returns a tuple, a boolean that tells you whether the job should be stopped, and the status of the last video processed

```python
def add_another_video_to_playlist(client, video_id: str, playlist_id: str):
    try:
        print(f"-> Adding {video_id} to {playlist_id}")
        response = (
            client.playlistItems()
            .insert(
                part="snippet, contentDetails",
                body={
                    "contentDetails": {"videoId": video_id},
                    "snippet": {
                        "playlistId": playlist_id,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": video_id,
                        },
                    },
                },
            )
            .execute()
        )
        print(
            f" + {response['snippet']['title']} / "
            f"{response['snippet']['position']} in playlist"
        )
        return (False, LABEL_DONE)
    except HttpError as e:
        if e.error_details[0]["reason"] == LABEL_QUOTA_EXCEEDED:  # type: ignore
            print(f">>>> Quota exceeded when trying to add {video_id}")
            return (True, LABEL_BLANK)
        processed_df.at[row.Index, COL_STATUS] = e.error_details[0]["reason"]  # type: ignore
        print(f">>>> ERROR {e.error_details[0]['message']}")  # type: ignore
        return (False, e.error_details[0]["reason"])
```

I then create an empty playlist, add a video manually, and then create a new csv file. That contains three rows: one for the video that I just added manually, one for a video that doesn't exist, and one for a video that exist and should be added to the playlist.

```bash
Video ID,Time Added,Status,Playlist ID
SoJVZh50bDo,2022-04-30 23:17:35 UTC,,PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
apHrRnRN_8Q,2022-06-05 21:43:28 UTC,,PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
y_DDqg1A8lw,2022-06-05 21:43:28 UTC,,PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
```

I expect the first video not to be added again, the second to be logged as an error but not stop the script, and the third to be added to the playlist. Which should end up with two videos in it

```bash
❯ python uploader.py
Please visit this URL to authorize this application:
https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=...xx...
Enter the authorization code: ....
opening data/20220831T225517_data.csv
-> Searching whether SoJVZh50bDo is already in PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
... yes it is, doing next
-> Searching whether apHrRnRN_8Q is already in PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
>>>> Are you sure about this video? ID not found apHrRnRN_8Q
-> Searching whether y_DDqg1A8lw is already in PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
-> Adding y_DDqg1A8lw to PLZ6Ih9wLHQ2FEVn2-NsdlTZnS86-GCFOP
 + Greentea Peng - Mr. Sun (miss da sun) / 3 in playlist
DONE
```

Great. It does the job!

### Conclusion

This was a couple of simple scripts to get the job done. There are a couple of possible improvements (I marked them as TODO in the post above). If I were to extend this I would start using Typer and of course add tests. But for now, it has served its purpose, which was to help me migrate away from the paid Google account. Hope there was something useful for you in there. The code is [available on GitHub](https://github.com/gotofritz/quick_and_dirty/tree/master/youtube_migration) if you need it - at your own risk, of course.

### References

- YouTube API [playlistItem.insert](https://developers.google.com/youtube/v3/docs/playlistItems/insert) reference
- YouTube API [playlistItem.delete](https://developers.google.com/youtube/v3/docs/playlistItems/delete) reference
