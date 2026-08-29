---
title: 'macOS 26.6 Breaks Command Line Tools'
date: "2026-08-29T12:29:18+02:00"

description: "My Mac updated itself to 26.6, and git stopped working. I found a fix on the internets."

tags: ["osx"]
---

## TL;DR the fix

I found the fix on the [Apple Forum](https://discussions.apple.com/thread/256335209?sortBy=rank), and it's just a couple of commands

```bash
❯ sudo xcode-select -switch /Library/Developer/CommandLineTools
Password: ....

❯ open /Applications/Xcode.app/Contents/Resources/Packages/XcodeSystemResources.pkg
# and then install
```

## The error

The error I was getting when trying to run git was

```bash
❯ git
Error loading required libraries. If there is an ongoing installation please wait for it to complete. Otherwise reinstall. (dlopen(@rpath/libxcodebuildLoader.dylib, 0x0001): Symbol not found: _XPCTypeBool
  Referenced from: <6A4DB321-2742-38A5-9557-146EE0FE957F> /Library/Developer/PrivateFrameworks/CoreDevice.framework/Versions/A/CoreDevice
  Expected in:     <781B8B5D-634D-3B6B-82FB-9080774ECF61> /Library/Apple/System/Library/PrivateFrameworks/Mercury.framework/Versions/A/Mercury)
sh: line 1: 52117 Abort trap: 6           /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -sdk /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk -find git 2> /dev/null
git: error: sh -c '/Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -sdk /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk -find git 2> /dev/null' failed with exit code 34304: (null) (errno=Invalid argument)
xcode-select: Failed to locate 'git', requesting installation of command line developer tools.
```


