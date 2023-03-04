---
title: "Backing up a hard disk to another in OS X"
publishDate: 2016-01-16 22:44
draft: false
description: <a href="https://en.wikipedia.org/wiki/Time_Machine_(OS_X)">Time Machine</a> does its own backup magic, but sometimes you just simply want two identical copies of the same hard disk. For that <a href="https://en.wikipedia.org/wiki/Rsync">rsync</a> is the way to go
tags:
  - backup
  - os x
---

rsync is a utility you run by typing commands in Terminal. It was designed exactly for doing that one job: keeping folders or devices in sync (in Unix everything is a file or a folder, even an external hard disk). rsyinc looks at one source folder and all its subfolders, finds all the files in there, then looks at the destination folder and copies over only what needs to be copied, making it very fast. It's got a ton of options and can become very involved. But all you need is to find that one command that works for you and use it again and again as needed.

## Syncing two hard disks with rsync

Let's say you have two hard disks, "ORIGINAL" and "BACKUP DISK". For the first transfer, you may as well copy manually all the files from ORIGINAL to BACKUP DISK by dragging them, rsync doesn't do it any better or faster. From then on, whenever you want to backup the disk (every day, every week, whatever) you can start with this command:

```bash
❯ rsync -aS --delete --progress \
    /Volumes/ORIGINAL/ /Volumes/BACKUP\ DISK/
```

The command breaks down as follows:

<dl class="code-breakdown">
  <dt>rsync</dt>
  <dd>calls the utility</dd>

  <dt>-a</dt>
  <dd>turns on archive mode, which basically ensures all subfolders, permissions and files parameters are copied </dd>

  <dt>S</dt>
  <dd>if there wasn't already a dash for -a, this would be -S. This compacts sparse files for efficiency </dd>

  <dt>--delete</dt>
  <dd>this ensures that any files in the destination that were not there in the source will be deleted</dd>

  <dt>/Volumes/ORIGINAL</dt>
  <dd>the original</dd>

  <dt>/Volumes/BACKUP\ DISK</dt>
  <dd>the destination. Note that I have typed a backslash before the space after BACKUP, BACKUP\ DISK - that tells Terminal that the word isn't finish yet, and the space is part of the word</dd>
</dl>

### Excluding files from rsync

If you want to skip some files or folders, you can add their paths to the command:

```bash
❯ rsync -aS --delete --progress --exclude *.Trash* \
    --exclude /that_file.txt --exclude /other_file.jpg \
    /Volumes/ORIGINAL/ /Volumes/BACKUP\ DISK/
```

Note that you have one `--exclude` options for every patter you want to exclude. Also note the `*` wildcards, which basically means "anything here"

### Creating a list of files to exclude from rsync

If you have a lot of excludes it makes sense to put the list in a file, and then tell rsync to use that. It makes sense even if you only have a few files, because then you can easily add and remove things from there without having to change the command - as you start playing with rsync you soon find out there are a few system folders you don't want to backup, like Spotlight indices and so on.

```bash
❯ rsync -aS --delete --progress \
    --exclude-from ~/.rsync_exclude_list \
    /Volumes/ORIGINAL/ /Volumes/BACKUP\ DISK/
```

and .rsync_exclude_list can have all the patterns in there, one per line. The file can be named whatever you want - I have put it in the home folder (that's what ~/ at the beginning means) and used a name that starts with a dot because it works well with my [dotfiles](/blog/storing-bash-profile-and-so-on-on-github/).

```bash
# list of files not to be included when running alias backupext
*.Trash*
.TemporaryItems*
.DocumentRevisions-*
.Spotlight-*
```

## Making things easier with an alias

Instead of trying to remember that command every time you need to back up, you can create an alias, i.e. a shortcut to the command. Depending on your setup, you can just add it to your `.bash_profile` file. If you use [dotfiles](/blog/storing-bash-profile-and-so-on-on-github/), just add it to the .alias file and then run bootstrap.sh again.

```bash
# this will create it if it doesn't exist. Nano is a
# text editor that runs inside
# Terminal. It's simple and it shows the shortcuts at
# the bottom (^ = control key)
nano ~/.bash_profile

# or if you use vscode...
code ~/.bash_profile

# then type this anywhere in the file, in a sincle line
alias backupext="rsync -aS --delete --progress \n  --exclude-from ~/.rsync_exclude_list \n  /Volumes/ORIGINAL/ /Volumes/BACKUP\ DISK/"

# to save and quit in nano press CTRL-X:
# it will ask you to save the file
```
