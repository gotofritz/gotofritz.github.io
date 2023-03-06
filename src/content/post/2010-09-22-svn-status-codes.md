---
description: Running the status command in the command line version of <a href="http://en.wikipedia.org/wiki/Apache_Subversion">subversion</a> returns a list of files with a one letter code in front of each file name. Here&#39;s a list of those one letter codes and what they mean.
publishDate: 2010-09-22 16:46
title: SVN status codes
tags:
  - SVN
---

## SVN status columns

```bash
❯ $ svn status
L index.html
```

The output of the command is split into six columns, but that is not obvious because sometimes the columns are empty. Perhaps it would have made more sense to indicate the empty columns with dashes, the way `ls -l` does, instead of nothing. Then, for example, `L index.html` would look like `--L--- index.html`, which makes it obvious the only information we have is in the third column the one about locking. Anyway, once you know that it begins to make more sense.

## SVN Status first column: A, D, M, R, C, X, I, ?, !, ~

The first column indicates that an item was added, deleted, or otherwise changed.

<dl class="code-breakdown">
<dt>&nbsp;</dt>
<dd>No modifications.</dd>

<dt>A</dt>
<dd>Item is scheduled for Addition.</dd>

<dt>D</dt>
<dd>Item is scheduled for Deletion.</dd>

<dt>M</dt>
<dd>Item has been modified.</dd>

<dt>R</dt>
<dd>Item has been replaced in your working copy. This means the file was scheduled for deletion, and then a new file with the same name was scheduled for addition in its place.</dd>

<dt>C</dt>
<dd>The contents (as opposed to the properties) of the item conflict with updates received from the repository.</dd>

<dt>X</dt>
<dd>Item is related to an externals definition.</dd>

<dt>I</dt>
<dd>Item is being ignored (e.g. with the svn:ignore property).</dd>

<dt>?</dt>
<dd>Item is not under version control.</dd>

<dt>!</dt>
<dd>Item is missing (e.g. you moved or deleted it without using svn). This also indicates that a directory is incomplete (a checkout or update was interrupted).</dd>

<dt>~</dt>
<dd>Item is versioned as one kind of object (file, directory, link), but has been replaced by different kind of object.
</dl>

## SVN Status second column: M, C

The second column tells the status of a file's or directory's properties.

<dl class="code-breakdown">
<dt>&nbsp;</dt>
<dd>No modifications.</dd>

<dt>M</dt>
<dd>Properties for this item have been modified.</dd>

<dt>C</dt>
<dd>Properties for this item are in conflict with property updates received from the repository.</dd>
</dl>

## SVN Status third column: L

The third column is populated only if the working copy directory is locked (an svn cleanup should normally be enough to clear it out)

<dl class="code-breakdown">

<dt>&nbsp;</dt>
<dd>Item is not locked.</dd>

<dt>L</dt>
<dd>Item is locked.</dd>
</dl>

## SVN Status fourth column: +

The fourth column is populated only if the item is scheduled for addition-with-history.

<dl class="code-breakdown">

<dt>&nbsp;</dt>
<dd>No history scheduled with commit.</dd>

<dt>+</dt>
<dd>History scheduled with commit.</dd>
</dl>

## SVN Status fifth column: S

The fifth column is populated only if the item's working copy is switched relative to its parent

<dl class="code-breakdown">

<dt>&nbsp;</dt>
<dd>Item is a child of its parent directory.</dd>

<dt>S</dt>
<dd>Item is switched.</dd>
</dl>

## SVN Status sixth column: K, O, T, B

The sixth column is populated with lock information.

<dl class="code-breakdown">

<dt>&nbsp;</dt>
<dd>When --show-updates is used, the file is not locked. If --show-updates is not used, this merely means that the file is not locked in this working copy.</dd>

<dt>K</dt>
<dd>File is locked in this working copy.</dd>

<dt>O</dt>
<dd>File is locked either by another user or in another working copy. This only appears when --show-updates is used.</dd>

<dt>T</dt>
<dd>File was locked in this working copy, but the lock has been  stolen and is invalid. The file is currently locked in the repository. This only appears when --show-updates is used.</dd>

<dt>B</dt>
<dd>File was locked in this working copy, but the lock has been  broken and is invalid. The file is no longer locked This only appears when --show-updates is used.</dd>

</dl>

## SVN Status seventh column: \*

The out-of-date information appears in the seventh column (only if you pass the --show-updates switch). This is something people who are new to SVN expect the command to do, not realizing it only compare the current state of the file with what information it fetched from the server on the last update.

<dl class="code-breakdown">

<dt>&nbsp;</dt>
<dd>The item in your working copy is up-to-date.</dd>

<dt>*</dt>
<dd>A newer revision of the item exists on the server.</dd>
</dl>
