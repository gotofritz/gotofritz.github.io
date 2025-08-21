---
title: OS X Software Update from the Command Line
publishdate: 2015-08-25T00:41:00+01:00
description: Software updates can be quite tedious - you have to click a lot of buttons, then get into the Apple Store etc. But you can avoid all that by running it from the command line.
draft: false
tags:
  - macOs
slug: os-x-software-update-from-command-line
---

```bash
❯ sudo softwareupdate -i -r
Password:
Software Update Tool
Copyright 2002-2012 Apple Inc.

Finding available software

Downloaded OS X Update
Installing OS X Update
Done.
```

Which breaks down as

<dl class="code-breakdown">
  <dt>sudo</dt>
  <dd>needs to run as admin (you will have to enter a password after you type return)</dd>

  <dt>softwareupdate</dt>
  <dd>this is the command line utility that does the job</dd>

  <dt>-i</dt>
  <dd>install - you can specify what to install, all, or just...</dd>

  <dt>-r</dt>
  <dd>...the recommended updates</dd>
</dl>
This is all there is to it.

## Slightly more complex usage of softwareupdate

You can ask for a list of available software before you install:

```bash
❯ softwareupdate -l
Software Update Tool
Copyright 2002-2012 Apple Inc.

Finding available software
Software Update found the following new or updated software:
    * MacBookAirEFIUpdate2.4-2.4
        MacBook Air EFI Firmware Update (2.4), 3817K [recommended] [restart]
    * ProAppsQTCodecs-1.0
        ProApps QuickTime codecs (1.0), 968K [recommended]
    * JavaForOSX-1.0
        Java for OS X 2012-005 (1.0), 65288K [recommended]

```

You can then install individual packages by simply naming them

```bash
❯ sudo softwareupdate -i JavaForOSX-1.0
```

Or you can ignore some packages and then install everything else (`-a, all`)

```bash
❯ softwareupdate --ignore JavaForOSX-1.0
❯ sudo softwareupdate -i -a
```

Note that the --ignore flag will persist until it is reset with `--reset-ignored` (which clears _all_ flags)

```bash
❯ softwareupdate --reset-ignored
```

More options can be viewed with `softwareupdate -h` or `man softwareupdate
