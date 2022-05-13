---
date: 2013-03-23 11:23
title: Copying sourcefiles without .git folders with cpio
published: true
prev: os-x-extended-attibutes
next: install-specific-version-homebrew
tags:
  - bash
excerpt: Sometimes you need to copy your local version of a project under subversion to a new location, without all the .git stuff. Here's a couple of ways of doing it.
---

TL;DR

```sh
> cd DIR_FROM
> find .  \\! \\( -name . -or -name ".git" -or -path "*/.git/*" \\) \\
   -print | cpio -padv PTH_TO
```

## Finding files matching a set of conditions

The shell command to find files matching certain conditions is called, unsurprisingly, [find](http://unixhelp.ed.ac.uk/CGI/man-cgi?find), a powerful command. It includes 'actions' which can be performed on the found files. The command below finds all the files we want to copy and ignores the rest.

```sh
> find DIR_FROM \\! \\( -path "*/.git/*" -or -name ".git" \\) -print
```

It breaks down as

<dl class="code-breakdown">
<dt>find DIR_FROM</dt>
<dd>run the find command, searching in DIR_FROM (in OS X, you can just drag DIR_FROM from the Finder to the Terminal window instead of typing it all out)</dd>

<dt>\!</dt>
<dd>since we are ignoring files, use ! (negative) to find files which do NOT match the pattern. The slash is needed, because esclamation marks mean something to Terminal, and we want Terminal to ignore that</dd>

<dt>\( </dt>
<dd>the parenthesis groups conditions together, since we have more than one. Again, the slash is needed because we want Terminal to ignore its special meaning</dd>

<dt>-path "*/.git/*"</dt>
<dd>this is the condition "the path includes '/.git' anywhere in it"</dd>

<dt>-or</dt>
<dd>adds conditions together, matching any of them</dd>

<dt>-name ".git"</dt>
<dd>this is the condition "the name of the files is exactly '.git'</dd>

<dt>\)</dt>
<dd>ends the group of condition. The negative ! applies to all of them.</dd>

<dt>-print</dt>
<dd>At this stage, just prints the names out on the terminal. Always safe to run this first, to double check the results are as expected.</dd>
</dl>

## Delete all .git directories from a project

In an ideal world, I'd run the find command above with "-print", check it's ok, then I'd run it again with "-copy". Except that there is no "-copy" action, so it's back to `man find` to work out an action that will help.

It turns out the simplest way is to copy all files first, then find the .git ones and use the '-delete' action to get rid of them.

```sh
> cp -R DIR_FROM DIR_TO
> find DIR_FROM \\( -path "*/.git/*" -or -name ".git" \\) -delete
```

<dl class="code-breakdown">
<dt>cp -R DIR_FROM DIR_TO</dt>
<dd>this is how you copy a directory in Terminal. cp is the command to copy files on the shell, but it won't do directories. cp -R is used to copy directories. R stands for "recursive", it is common to many other shell commands</dd>

<dt class="long-line">find DIR_TO \( -path "*/.git/*" -or -name ".git" \)</dt>
<dd class="long-line">almost as before - but note there is no \! this time. That's because we want to find the files we don't need, rather than ignore them.</dd>

<dt>-delete</dt>
<dd>deletes the files it finds. I suggest to try it with -print first, just to double check</dd>
</dl>

The above works fine, but read on for another way of doing it.

## Finding files and passimg them to the cp command

My initial approach when trying to move files across was to use find with the '-exec' action and the cp command, like this:

```sh
> find DIR_FROM \\! \\( -path "*/.git/*" -or -name ".git" \\) \\
  -exec cp {} DIR_TO \\;
```

This looks good at first, but there's a problem - it finds and copies the files, but it doesn't preserve the directory structure, and the files end up all in the same directory. Apparently on Linux you can tell cp to preserve the directory structure with the -b --parent option, but this doesn't work on OS X.

```sh
> find DIR_FROM \\! \\( -path "*/.git/*" -or -name ".git" \\) \\
    -exec cp -b --parent {} DIR_TO \;
```

## Using cpio to copy files

[cpio](http://en.wikipedia.org/wiki/Cpio) is an archiving utility similar to tar, but it has an important difference - it can copy files into and archive and then out again to a different location, without actually creating an archive in between. In other words, it copies directory structures. The only snag is that you have to cd to the directory where you are copying from.

```sh
> cd DIR_FROM
> find .  \\! \\( -name . -or -name ".git" -or -path "*/.git/*" \\) \\
    -print | cpio -padv PTH_TO
```

<dl class="code-breakdown">
<dt>cd DIR_FROM</dt>
<dd>move to the directory you are copying - this is where the directory structure will be calculated from</dd>

<dt class="long-line">find . \! \(  -name . -or -path "*/.git/*" -or -name ".git" \)</dt>
<dd class="long-line">similar to the previous find command, but note how DIR_FROM is replaced with '.', which means 'here'. Also, there is an extra condition, `-name .`, without which empty .git directories would be created.</dd>

<dt>-print </dt>
<dd>prints out the filename</dd>

<dt>|</dt>
<dd>pass the results of the command on the left (find) to the one on the right (cpio)</dd>

<dt>cpio -padv PTH_TO</dt>
<dd>run the cpio command in 'move files across' mode (p) with options d (create directory structure) -a (reset access time on copied files) -v (verbose, i.e., show me what you are doing)</dd>
</dl>

And that's that - exciting Unix fun.
