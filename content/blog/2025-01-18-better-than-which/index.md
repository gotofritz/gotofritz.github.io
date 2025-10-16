---
title: "Better Than Which"
date: "2025-01-18T15:20:41+01:00"
draft: true

description: "The `type` command is better than `which` or `whereis` to find where scripts live"

tags: ["bash"]
---

I was looking for a script that I had added to my OS X years ago and rarely used, and the usual `which` and `whereis` (even with the helpful `-a` option) where of no help. Then thanks to StackOverflow I discovered the [type](https://linuxize.com/post/linux-type-command/) command, which is much more useful. This is how I found out the missing command was in fact a bash alias.

```bash
❯ type -a pwd
pwd is a shell builtin
pwd is /bin/pwd
pwd is aliased to `git status'
```
