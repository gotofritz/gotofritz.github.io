---
excerpt: I copy audiobooks from CDs to USB sticks to play them in cars and random device like old radios. But often those devices play the files out of order. Reordering files in <abbr title="File Allocation Table">FAT</abbr> USB sticks is harder than I thought. Luckily, a chap by the name of Boris Leidner has written a useful tool for that.
date: 2022-04-01
published: true
archived: false
prev: fixing-autoformatting-django-templates-in-visual-studio-code
next: blog-with-sveltekit-and-markdown
title: Reordering audio files in a FAT USB stick
tags:
  - tools
---

## FAT formatting

I use Macs, and have no use for the FAT system. But it is the most widely supported by consumer devices like my SONY CD/MP3 player, for example. So i have no choice.

Those devices play back songs in date creation order. That would be the creation time on the stick; i.e., the time one started transferring them to the stick. Your typical laptop copies a few of these files in parallel. So one never knows what those creation times might be. This is why they get jumbled up.

One solution could be to write a little script to change those times after copying those files. It could traverse the directory structure of the stick, and use the bash command `touch`. Or its python version. But it turns out neither works well on FAT. The python version of touch, `os.utime`, doesn't handle creation time. There are extensions which seem would work well, like `pywintypes`, `win32file`, `wintypes` or `win32-setctime`. But they rely on C executables that only run on Windows.

A better solution would be to write a script that copies the files one at the time. With a little pause to make sure the creation times are in order. That should work. But it would make copying files last much longer.

## Enter fatsort

Luckily there is a C utility that does the job quite well. And there is a precompiled version for homebrew, the standard installer for OS X.

### Step 1: install it

Your typical homebrew installation

```bash
> brew install fatsort
==> Downloading https://ghcr.io/v2/homebrew/core/help2man/manifests/1.49.1
...
```

### Step 2: find out where the drive is mounted

The first instinct is to run it on the drive as it appears in Finder, i.e. `/Volumes/--SOMETHING--`. So for my USB stick, called `DIE_DREI`, it would be like in the command below. But that turns out to be too easy

```bash
> fatsort /Volumes/DIE_DREI
device_open: Is a directory!
openFileSystem: Is a directory!
sortFileSystem: Failed to open file system!
main: Failed to sort file system!
```

Instead I needed to find out what directory the USB device is _mounted to_. There is a handy command for that, `mount`. So step 2 goes

```bash
> mount
 /dev/disk1s5s1 on / (apfs, sealed, local, read-only, journaled)
devfs on /dev (devfs, local, nobrowse)
/dev/disk1s2 on /System/Volumes/Preboot (apfs, local, journaled, nobrowse)
...
/dev/disk5s1 on /Volumes/DIE_DREI (msdos, local, nodev, nosuid, noowners)
```

It's `/dev/disk5s1` I need to run fatsort on, not /Volumes/DIE_DREI.

### Step 3: unmount the drive

`fatsort` doesn't work on the USB stick if it's mounted. I didn't even know a device's content would be available even after unmounted! TIL. To unmount and run the next steps I will need `sudo` to gain superuser permissions

```bash
>  sudo diskutil unmount /Volumes/DIE_DREI
Password:
 Volume DIE_DREI on disk5s1 unmounted
```

### Step 4: reorder the files

Now I am ready to reorder the files

```bash
> sudo fatsort /dev/disk5s
File system: FAT32.

Sorting directory /
...
Directory reordered. Writing changes.
```

## And that was it.

It only takes a few seconds. It's a great little tool. Thanks Boris! If you enter `fatsort -h` you can [see some of the options you can pass to it](https://fatsort.sourceforge.io/fatsort.1.html)

## Prior art

- [fatsort homepage](https://fatsort.sourceforge.io/)
- I found [useful information about fatsort](https://unfinishedbitness.info/2014/04/16/alphabetically-sorting-fat-usb-drives-with-mac-osx/) in a blog called 'Unfinished Bitness'
