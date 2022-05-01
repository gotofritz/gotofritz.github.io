---
title: "Stop Chrome navigating back when swiping horizontally"
date: 2016-01-09 02:07
excerpt: If you try to use Google Chrome on a small window on a laptop, perhaps because you are comparing two web pages side by side, swiping left or right doesn't move the page around, but it jumps to the previous or next page. Here's how to prevent that on OS X.
published: true
tags:
  - chrome
  - os x
prev: how-to-avoid-sudo-npm
next: backing-up-hard-disk-os-x
---

## The El Capitan way

Since OS X 10.11 (El Capitan) the setting is system wide, and Chrome respects that as you can see in this [Chrome bug report](https://bugs.chromium.org/p/chromium/issues/detail?id=682508).

To change it, go in System Preferences > Trackpad > More Gestures and untick "Swipe Between Pages".

## The old, pre-El Capitan way

Before El Capitan Chrome had its own setting, which you could change by typing the following commands in Terminal

```bash
defaults write com.google.Chrome.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
defaults write com.google.Chromium.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
defaults write com.google.ChromeCanary.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
```
