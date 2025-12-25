---
title: "Creating a Random Git Branch or Commit on the Cli"
date: "2025-12-25T23:05:35Z"

description: |-
  There are times when you need unique branch names or commit messages. This is easy to do directly from the command line.

tags: ["git", "github", "bash", "cli"]
mastodon: https://hachyderm.io/@gotofritz/115782847352458008
---

If you use GitHub workflows, GitHub can get confused when a branch name is reused after it has already been merged. This often happens with generic branch names like fix-typo. The same problem comes up when troubleshooting code that requires many merges, such as infrastructure code or workflow changes.

In those cases I use variations of these commands that use the [date](https://linuxcommandlibrary.com/man/date) and [jot](https://linuxcommandlibrary.com/man/jot) commands

```bash
# create branch named like fix-typo-20251225-2250-0027
❯ git checkout -b \
  "fix-typo-$(date "+%Y-%m-%dT%H%M")-$(jot -w %04d -r 1 1 100)"

# commit with message `fix: attempt 1234`
> git commit -m \
  "fix: attempt $(jot -w %04d -r 1 1 100)"
```
