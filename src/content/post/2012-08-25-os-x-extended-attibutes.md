---
description: Extended attributes store extra information about files in OS X. They replaced resource forks. Sometimes those extra hidden files confuse peripherals (e.g. mp3 players) that were not setup to deal with them. Here are some terminal commands to handle them.
publishDate: 2012-08-25 13:55
title: Dealing with extended attributes on OS X
tags:
  - bash
  - os x
---

```bash
❯ ls -al
-rw-r--r--@   1 me  staff     962 22 Aug 22:06 .bash_profile
drwxr-xr-x  119 me  staff    4046 28 Jul 19:03 Bluetooth
drwx------+  14 me  staff     476 25 Aug 12:18 Desktop
drwx------+  14 me  staff     476 25 Aug 09:42 Documents
drwx------+   7 me  staff     238 25 Aug 09:42 Downloads
drwx------@  20 me  staff     680 25 Aug 09:42 Dropbox
drwxr-xr-x@  20 me  staff     680 25 Aug 09:42 Google Drive
```

The @ sign you get in the listing with the -l option tells you that that file or folder has some extended properties.

```bash
❯ ls -al@
-rw-r--r--@   1 me  staff     962 22 Aug 22:06 .bash_profile
com.apple.FinderInfo      32
com.apple.TextEncoding      15
drwxr-xr-x  119 me  staff    4046 28 Jul 19:03 Bluetooth
drwx------+  14 me  staff     476 25 Aug 12:18 Desktop
drwx------+  14 me  staff     476 25 Aug 09:42 Documents
drwx------+   7 me  staff     238 25 Aug 09:42 Downloads
drwx------@  20 me  staff     680 25 Aug 09:42 Dropbox
com.apple.FinderInfo      32
drwxr-xr-x@  20 me  staff     680 25 Aug 09:42 Google Drive
com.apple.FinderInfo      32
```

On OS X the ls command has an @ option, which lists the extended property for each entry, if any.

```bash
❯ xattr *
Dropbox: com.apple.FinderInfo
Google Drive: com.apple.FinderInfo
```

The xattr command lets you interact with the extended attributes. Just running it by itself it will list them all, Note that it doesn't handle hidden files though.

```bash
❯ xattr -l *
Dropbox: com.apple.FinderInfo:
00000000  00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00  |................|
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|
00000020
Google Drive: com.apple.FinderInfo:
00000000  00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00  |................|
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|
00000020
```

The -l flag lets shows the content for all extended properties for a file. They are not always hex data.

```bash
❯ xattr -p com.apple.TextEncoding .bash_profile
UTF-8;134217984
```

The -p flag lists the content of a specific extended attribute (in this case, com.apple.TextEncoding) for a specific file (in this case .bash_profile). This particular attribute is a string.

```bash
❯ xattr -w test "what is this" .bash_profile
> xattr -l .bash_profile
com.apple.FinderInfo:
00000000  54 45 58 54 00 00 00 00 00 00 00 00 00 00 00 00  |TEXT............|
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|
00000020
com.apple.TextEncoding: UTF-8;134217984
test: what is this
```

-w allows you create your own extended attributes. Here one is written and then read out.

```bash
❯ xattr -d test .bash_profile
> xattr -l .bash_profile
com.apple.FinderInfo:
00000000  54 45 58 54 00 00 00 00 00 00 00 00 00 00 00 00  |TEXT............|
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|
00000020
com.apple.TextEncoding: UTF-8;134217984
```

-d complements -w by allowing one to delete an extended attribute.

```bash
❯ xattr -d com.apple.FinderInfo *
```

This allows you to delete all the com.apple.FinderInfo extended attributes from all the files in a folder
