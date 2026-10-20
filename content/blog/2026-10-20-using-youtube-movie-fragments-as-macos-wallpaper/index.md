---
title: 'Using Youtube Movie Fragments as Macos Wallpaper'
date: "2026-10-20T00:45:38+02:00"

description: |-
 I like Apple laptops, but that sels-satisfied "Made in California"
 vibe is just too much. When they started forcing people to watch aerial
 shots of the Sonoma valley every time they log in, I decided enough was enough.
 Eventually it developed into a CLI tool which I use to replace their cheesy
 videos with something more meaningful to me

tags: [
 "macos",
 "osx",
]


---

## TL;DR

Make sure you have XCode and ffmpeg installed, then

```bash
# 1. clone the repo
# if you don't have gh: brew install gh
❯ gh repo clone gotofritz/macos-custom-video-wallpaper-fix
❯ cd  macos-custom-video-wallpaper-fix

# 2. get a list of all the original Apple videos on your system
❯ ./wallpaper list
4C108785-A7BA-422E-9C79-B0129F1D5550  3840x2160    300.0s  2026-10-19 21:05

# 3. find a you tube video you like, and make note of the time stamps you want to use

# 4. use it
❯ ./wallpaper make "bFpC5KiRjzU" "4C108785-A7BA-422E-9C79-B0129F1D5550" "00:12" "00:25"
...

# 5. Open System preferences, make sure the video you
# overwrite is selected. You can try switching over
# quickly to another one then back
```


## You gotta hack

For some reason Apple _really_ wants you to look at those videos of Cool California when you log in. It's non negotiable and you are not supposed to change it. There is no official ways to add your own movieclips to a folder, the way you can with pictures. But there are hacks.


## The general idea: overwrite Apple's movies

Since you cannot add your own movies, the only way to do it is to overwrite theirs with your own. But the codecs, size, frame rate, etc must match. This is easy enough to do with ffmpeg. It's safe to do, because OS X will re-download those movies if it realises they are not the original (it checks sha hashes). OS X stores these movies in ~/Library/Application Support/com.apple.wallpaper/aerials/videos/

## A bash script

Originally I had a bash script that would use yt-dlp to download a clip from youtube, ffmpeg to extract the section I wanted and make it match the Apple video settings, and then copied it over. It worked well until Tahoe

## Golden Gate ruins everything

With the Golden Gate update simply using ffmpeg was no longer an option. The screen would go black, and eventually OS X would download the original again. Eventually an LLM told me [AlexisBCD](https://github.com/AlexisBCD/) had a solution. They discovered the encoded videos had temporal-layers to let OS X do clever stuff with slowing down the animation. ffmpeg cannot handle those, but Swift can.

I forked the repo, merged with my own script to create a hybrid, and lo and behold! Problem solved.

## Thou Shall Not Kill

Well almost. In the original version, the command<br>`pkill -x WallpaperAgent` is used to reload the Wallpaper Agent. But in Golden Gate, the agent does more than just reload. It checks whether the movies are the same, and overwrite your version with the original if they aren't. So I skipped that part.

## The repo

Thanks to AlexisBCD brilliant detective work I was able to remove those inane Californian videos. Yeah!

Here's the repo, with full instructions [gotofritz/macos-custom-video-wallpaper-fix](https://github.com/gotofritz/macos-custom-video-wallpaper-fix)
