---
description: Apple Music / iTunes "helpfully" adds ratings to songs for you, based on the ratings of the other songs in the album. This messes some of my smart playlists up. Only Applescript will get rid of those ratings
publishDate: 2020-03-12
draft: false
archived: false
title: Removing album ratings from Apple Music App
tags:
  - apple music
  - os x
---

## TL;DR: just give me the code

1. Open <strike>iTunes</strike> Music and select the songs from which you want to remove the album rating
2. Open the Script Editor (you'll find easily with Spotlight, just type 'Script Editor' into it) and paste the following code into it

   ```applescript
   tell application "Music"
     repeat with theSong in selection
       set album rating of theSong to 1
     end repeat
   end tell
   ```

3. Click on the 'play' button in the Script Editor. At the bottom of the editor you'll see a tiny spinning animation
4. You will probably need to press 'play' a few times before _all_ the songs are done (it's the Apple way..)

## What is this all about?

I have 'smart' playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the "normal" ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can't find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue.

## An alternative script, editing all tracks without selecting first

Alternatively, here's a script which goes through your _whole_ library and does the same thing. I don't do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you.

```applescript
tell application "Music"
  set result to (file tracks whose album rating is greater than 1)
  repeat with theSong in result
    set album rating of theSong to 1
  end repeat
end tell
```
