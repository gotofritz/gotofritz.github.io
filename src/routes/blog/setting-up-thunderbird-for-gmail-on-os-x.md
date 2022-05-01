---
excerpt: I have recently switched to Thunderbird from <a href="http://www.gyazsquare.com/gyazmail/">Gyazmail, the obscure mail program</a> I have been using for years. Here are some setup tips that worked for me
date: 2020-08-06
published: true
archived: false
prev: using-say-command-to-make-os-x-talk-and-fixing-it
next: installing-python-on-mac-os-x-in-2022
title: Setting up and managing Thunderbird for OS X
tags:
  - os x
---

## Why Thunderbird?

It's a modern, cross platform, community developed mail program battle harded for decades. It has some UX oddities (like having four different types of search) but all in all it's a no brainer, really

## Setting up Thunderbird to work with Gmail

Wiring up Thunderbird to use a Gmail account is simplicity itself. Just select 'File > New > Existing account' and enter your email address and pick IMAP. If you use a password manager don't enter a passowrd in Thunderbird - just click 'OK', and the program will use OpenID to open a web browser window where you can authorize the app. And ... that's all there is to it

## Unsubscribe from 'All Mail' and other standard folders

Besides the folders you may have created yourself, Gmail has a few standard ones like 'important', 'all mail', 'spam', and so on. You should get rid of them as soon as possible.

Gmail doesn't actually have folders; its main abstraction is labels. But Thunderbirds' abstraction is folders, and it convert labels to them. So if a message has three labels, it will appear as if it's stored in three folders. But of course that's not possible; what happens instead, is that Thunderbird creates one duplicate of the messages for each label.

Now, self-explanatory <strike>labels</strike> folders such as 'important', 'bin' and 'spam' probably don't get too full, so it's not a big deal. But 'All Mail' is assigned to each and every message which hasn't been moved to any folders. And let's face it, a lot of people don't bother with assigning labels to emails which were dealt with. The end result is that 'All Mail' will contain a duplicate of your whole inbox, which can take Gb's worth of precious space on your harddisk, as well as cluttering search results.

### Finding IMAP subscriptions in Thunderbird

Finding how to unsubscribe from folders in Thunderbird can be confusing - the subscription list is not IN the settings, but _next_ to them. No, I don't get it either. Be as it may, all you need to do is right click on your email address in the folders list in the folder panel on the left, and select 'Subscribe...'. There you can untick all the folders you are not interested in.

### Monitoring Disk Usage

Mail is saved in `~/Library/Thunderbird/Profiles`; if you want to have a look at what is being saved, you can run the commnad

```bash
du -hS  ~/Library/Thunderbird/Profiles | gsort -hr
```

which breaks down as

<dl class="code-breakdown">
<dt>du</dt>
<dd>a utility to summarise disk space</dd>

<dt>-h</dt>
<dd>_human readable_, i.e. 1k and not 1023</dd>

<dt>S</dt>
<dd>_separate-dirs_, i.e. just list the content of the dir itself and not its descendants</dd>

<dt>~/Library/Thunderbird/Profiles</dt>
<dd>this is where all your mails are on OS X</dd>

<dt>|</dt>
<dd>each line from the du command will be fed into the gsort command</dd>

<dt>gsort</dt>
<dd>sort text by line</dd>

<dt>-hr</dt>
<dd>understand human readable sizes, and sort by them. Reversed</dd>
</dl>

This will list you all the .sbd files in your system, including the _all_ directory (see above). You can delete them if you have already have unsubscribed from the folder

### Forget add-ons (mostly)

Thunderbirds's add-ons situation is quite dire - they have changed format not so long ago, so most add-ons don't work with the version of Thunderbird you have just downloaded. When you go to the add-ons page, the vast majority of them will be greyed out and marked as incompatible. Sadly there is no way to list _only_ the plugins you can actually install. And when you do install them, they don't necessarily work as well as you were hoping. The whole experience is quite frustrating, quite frankly

The only plugin I have found useful is the Google Calendar Tab on, which simply puts a button in your toolbar which loads Google Calendar in another tab.
