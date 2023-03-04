---
title: Removing duplicates from youtube playlists with a Python script
publishDate: 2022-09-01
description: Thanks to a bug while <a href="/blog/migrating-youtube-playlists-by-adding-videos-via-cli">copying a youtube playlist with a Python script</a>, I ended up with a lot of duplicates videos in the playlist. Surprisingly, the YouTube interface doesn't let you remove them. So I put together another small Python script
draft: false
tags:
  - google
  - youtube api
  - python
---

## Google deprecated the button that allowed you to remove duplicate videos from your playlist

A long time ago (about a year ago), the Youtube interface included [a useful button](https://webapps.stackexchange.com/questions/130496/how-to-remove-duplicates-from-youtube-playlist). You clicked on it, and all duplicates videos from the playlist would be removed! That would have been just I needed. But then [they deprecated it](https://www.androidpolice.com/2020/09/17/youtube-is-removing-the-button-that-deleted-duplicate-videos-from-playlists/). That made a lot of people very angry, as you can read from the comments in that post. But working in software development myself I understand why they did. They have a lot of products, and during their lifetime features grow exponentially. And old feature don't just go away - you still need to test them whenever new ones are added. Even if they seem small, the cumulative effort in having to maintain them can make a team unable to work on new features. Regularly pruning away rarely used functionality is a smart move. Although yes, it does upset some users

Luckily for me, I was able to reproduce the functionality I was after with a Python script

## Step 0: set up the python project

I re-used the same setup from the [Adding videos to a youtube playlists via a terminal python script](/blog/migrating-youtube-playlists-by-adding-videos-via-cli) post. I simply added a new script to it

## Step 1: Read and manage csv files with list of video ids to add to playlist

The general structure of the script is the same as that of the duplicating playlist one. The main difference is that there is no reading from / writing to CSV files here. The script will be passed one or more playlist_ids, and from them on it will only send calls to the YouTube API. Of course the API call limits still hold, so I will have to set it up in such a way that tomorrow I can pick it up again from where I left off

```python
# delete_duplicates.py

import sys
import os
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google_auth_oauthlib.flow import InstalledAppFlow

MAX_RESULTS = 50
LABEL_QUOTA_EXCEEDED = "quotaExceeded"

# This scope allows for full read/write
# access to the authenticated user's account
# and requires requests to use an SSL connection.
SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"]
API_SERVICE_NAME = "youtube"
API_VERSION = "v3"
CLIENT_SECRETS_FILE = "client_secret.json"

# exit if at least one playlist id wasn't passed

def get_authenticated_service():
    """straight from the YouTube API documentation"""
    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
    credentials = flow.run_console()
    return build(API_SERVICE_NAME, API_VERSION, credentials=credentials)

def delete_video_and_maybe_stop(client, playlist_item_id) -> bool:
    """return true if it should stop, false otherwise"""

def get_videos_to_delete_for_playlist_and_maybe_stop(client, playlist_id):
    """return a tuple: true if it should stop, false otherwise; and a list of video ids"""


def main(client):
    for playlist_id in sys.argv[1:]:
        should_stop, videos_to_delete = get_videos_to_delete_for_playlist_and_maybe_stop(
            client, playlist_id
        )
        if should_stop:
            break
        deleted = 0
        for playlist_item_id in videos_to_delete:
            should_break = delete_video_and_maybe_stop(client, playlist_item_id)
            if should_break:
                break
            deleted += 1
        print(
            f"deleted {deleted} videos out of {len(videos_to_delete)} for playlist {playlist_id}"
        )


if __name__ == "__main__":
    # When running locally, disable OAuthlib's
    # HTTPs verification. When running in production
    # * do not * leave this option enabled.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
    client = get_authenticated_service()
    main(client)
    print("DONE")
```

## Step 2: Getting a list of videos from a playlist

Results are paginated, so you need to fetch all the pages to get the complete list. The maximum page size you can request is 50 items, so that can take a few calls. While doing that, the function keeps track of the videos already seen, and adds any duplicates to a list, which will be returned.

Note that there are two different IDs at play. One is the `video_id`, which represents the original video file someone uploaded to YouTube. This is the id that appears in the browser's address bar when viewing the video. The other is the `id` of the `playlistItem`. A playlistItem holds information about which video is in position x of a playlist. When you remove the clip by `video_id`, the clip will disappear from everywhere within YouTube. When you remove a playlistItem by `id`, you are removing a video from a playlist. But the video might still be in other playlists. So duplicate videos will share the same `video_id`, but each instance in the playlist will have its own `id`.

To fetch the playlist, use the [playlistItems().list](https://developers.google.com/youtube/v3/docs/playlistItems/list) call. The `nextPageToken` attribute allows you to fetch the next page. Keep doing that until nextPageToken is no longer in the response

```diff
def get_vides_to_delete_for_playlist_and_maybe_stop(client, playlist_id):
    """return a tuple: true if it should stop, false otherwise; and a list of video ids"""
+    videos_already_done = []
+    videos_to_delete = []
+    page_token = ""
+    should_stop = False
+    try:
+        while True:
+            response = (
+                client.playlistItems()
+                .list(
+                    part="snippet,contentDetails",
+                    playlistId=playlist_id,
+                    pageToken=page_token,
+                    maxResults=MAX_RESULTS,
+                )
+                .execute()
+            )
+            for item in response["items"]:
+                if item["contentDetails"]["videoId"] in videos_already_done:
+                    videos_to_delete.append(item["id"])
+                    print(f"found a duplicate: {item['snippet']['title']}")
+                else:
+                    videos_already_done.append(item["contentDetails"]["videoId"])

+            if not "nextPageToken" in response:
+                print("that was the last page")
+                break

+            page_token = response["nextPageToken"]
+    except HttpError as e:
+        if e.error_details[0]["reason"] == LABEL_QUOTA_EXCEEDED:  # type: ignore
+            print(f">>>> Quota exceeded that was it for today, tray again tomorrow!")
+            should_stop = True
+        else:
+            print(f">>>> ERROR {e.error_details[0]['message']}")
+    return (should_stop, videos_to_delete)
```

## Step 3: Deleting a video from a playlist

This is even simpler: it's a single API call to `playlistItems.delete`, with a single argument, the `id`.

```diff
def delete_video_and_maybe_stop(client, playlist_item_id) -> bool:
    """return true if it should stop, false otherwise"""
    try:
+        print(f"-> Deleting {playlist_item_id}")
+        (client.playlistItems().delete(id=playlist_item_id)).execute()
+        return False
+    except HttpError as e:
+        if e.error_details[0]["reason"] == LABEL_QUOTA_EXCEEDED:  # type: ignore
+            print(f">>>> Quota exceeded - that was it for today, tray again tomorrow!")
+            return True
+        else:
+            print(f">>>> ERROR {e.error_details[0]['message']}")
+            return False
```

### Conclusion

Given the the project was already set up this was fairly straight forward. The code is [available on GitHub](https://github.com/gotofritz/quick_and_dirty/tree/master/youtube_migration) if you need it - at your own risk, of course.

### References

- YouTube API [playlistItem.list](https://developers.google.com/youtube/v3/docs/playlistItems/list) reference
- YouTube API [playlistItem.delete](https://developers.google.com/youtube/v3/docs/playlistItems/delete) reference
