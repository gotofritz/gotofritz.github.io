---
excerpt: With Thunderbird, forget syncing profiles across devices. It&#39;s too old for that, as you can see from <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=446444">this unresolved issue from 14 years ago</a>...
date: 2021-12-14
draft: true
prev: using-say-command-to-make-os-x-talk-and-fixing-it
title: Sharing Thunderbird Message Filters across computers
permalink: /blog/sharing-thunderbird-message-filters-across-computers
tags:
  - os x
  - thunderbird
---

The main issue is that profiles contain _everything_: preferences, settings - and emails. So they could take up gigabites. Even if Mozilla was still involved, storing all that information on their servers for syncing would amount to become a back up for your mail. I doubt they'd want to do that. And since they are no longer involved, there is no interest in separating settings from mail messages, or provide a way to decide what to sync. Whatever solution you'll come up with, it will involve manually copying files, or scripts to manage the copying for you.

## Thunderbird and profiles

Thunderbird allow different user profiles, but the developers don't seem to trust their implementation too much, since they hide them. To reveal them, you'll need to be comfortable with the CLI, and run the application as

https://support.mozilla.org/en-US/kb/profiles-where-thunderbird-stores-user-data
https://support.mozilla.org/en-US/kb/using-multiple-profiles
https://support.mozilla.org/en-US/questions/1160187
https://support.mozilla.org/en-US/questions/1272053
