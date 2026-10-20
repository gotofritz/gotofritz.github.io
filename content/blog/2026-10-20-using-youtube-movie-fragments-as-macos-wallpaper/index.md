---
title: 'Using Youtube Movie Fragments as Macos Wallpaper'
date: "2026-10-20T00:45:38+02:00"

description: |-
 I like Apple laptops, but that self-satisfied "Made in California"
 vibe is just too much. When they started forcing people to watch aerial
 shots of the Sonoma Valley every time they log in, I decided enough was enough.
 Eventually it developed into a CLI tool which I use to replace their cheesy
 videos with something more meaningful to me

tags: [
 "macos",
 "osx",
]


---

### TL;DR

Make sure you have Xcode (the command line tools are enough: `xcode-select --install`), ffmpeg and uv installed (`brew install ffmpeg uv`), then

```bash
# 1. clone the repo
# if you don't have gh: brew install gh
❯ gh repo clone gotofritz/macos-custom-video-wallpaper-fix
❯ cd macos-custom-video-wallpaper-fix

# 2. open System Settings → Wallpaper and pick one of the Apple aerials,
# so that macOS downloads it

# 3. get a list of all the original Apple videos on your system
❯ ./wallpaper list
4C108785-A7BA-422E-9C79-B0129F1D5550  3840x2160    300.0s  2026-10-19 21:05

# 4. find a YouTube video you like, and make note of the timestamps you want to use

# 5. use it
# the download waits 60-90 seconds first, to be nice to YouTube
❯ ./wallpaper make "bFpC5KiRjzU" "4C108785-A7BA-422E-9C79-B0129F1D5550" "00:12" "00:25"
...

# 6. Open System Settings, make sure the video you
# replaced is selected. You can try switching over
# quickly to another one then back
```


### You gotta hack

For some reason Apple _really_ wants you to look at those videos of Cool California when you log in. It's non-negotiable and you are not supposed to change it. There is no official way to add your own movie clips to a folder, the way you can with pictures. But there are hacks.


### The general idea: overwrite Apple's movies

Since you cannot add your own movies, the only way to do it is to overwrite theirs with your own. But the codecs, size, frame rate, etc. must match. This is easy enough to do with ffmpeg. It's safe to do: you can't break macOS this way, and you can always walk away from it. If it goes wrong, macOS will simply re-download the originals (apparently it checks hashes) and everything goes back to normal. macOS stores these movies in `~/Library/Application Support/com.apple.wallpaper/aerials/videos/`

### A bash script

Originally I had a bash script that would use yt-dlp to download a clip from YouTube, ffmpeg to extract the section I wanted and make it match the Apple video settings, and then copied it over. It worked well until Golden Gate.

### Golden Gate ruins everything

With the Golden Gate update simply using ffmpeg was no longer an option. The screen would go black, and eventually macOS would download the original again. Then an LLM pointed me to [AlexisBCD](https://github.com/AlexisBCD/), who had a solution. They discovered that Apple's videos have temporal layers, which macOS uses to slow the animation down when you unlock. ffmpeg can't produce those, but Swift (through VideoToolbox) can.

I forked the repo and merged it with my own script to create a hybrid, and lo and behold! Problem solved.

### Thou Shalt Not Kill

Well almost. In the original version, the command<br>`pkill -x WallpaperAgent` is used to reload the Wallpaper Agent. But in Golden Gate, the agent does more than just reload. It checks whether the movies are the same, and overwrites your version with the original if they aren't. So I removed it.

### The repo

Thanks to AlexisBCD's brilliant detective work I was able to remove those inane Californian videos. Yeah!

Here's the repo, with full instructions: [gotofritz/macos-custom-video-wallpaper-fix](https://github.com/gotofritz/macos-custom-video-wallpaper-fix)
