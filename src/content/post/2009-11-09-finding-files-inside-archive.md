---
publishDate: 2009-11-09 19:26
title: Finding files inside an archive with Terminal
description: Looking for files inside an archive, without having to extract them first using <a href="http://en.wikipedia.org/wiki/Apple_Terminal">Apple&#39;s Terminal</a>.
tags:
  - Bash
  - OsX
---

## find command

How to find files inside an archive, without having to extract them first using [Apple's Terminal](http://en.wikipedia.org/wiki/Apple_Terminal), or any Unix / Linux [bash](http://en.wikipedia.org/wiki/Bash) shell.

```sh
❯ find /dir/ -iname archive.tar -print0 | \
  xargs -0 tar t -f | grep "filename you are searching for"

❯ find /dir/ -iname archive.zip -print0 | \
  xargs -0 unzip -l | grep "filename you are searching for"

❯ find /dir/ -iname archive.rar -print0 | \
  xargs -0 unrar l | grep "filename you are searching for"

```

## Command breakdown

<dl class="code-breakdown">
<dt>find /dir/</dt>
<dd>use the powerful <a href="http://en.wikipedia.org/wiki/Find" title="[new window] find - Wikipedia, the free encyclopedia" target="_blank">find</a> command, inside the folder where the archive is</dd>

<dt>-iname archive.tar</dt>
<dd>look for the archive (case insensitive search)</dd>

<dt>-print0</dt>
<dd>when files are found, spit them out in a list with a NULL at the end instead of a new line - this helps with the next step</dd>

<dt>|</dt>
<dd>pass the list generated by find to the next command...</dd>

<dt>xargs -0</dt>
<dd>...which is <a href="http://en.wikipedia.org/wiki/Xargs" title="[new window] xargs - Wikipedia, the free encyclopedia" target="_blank">xargs</a>, used to take a list of results and pass them on. The -0 is telling xargs to use NULL as the separator</dd>

<dt>tar t -f</dt>
<dd>use <a href="http://en.wikipedia.org/wiki/Tar_(Unix)" title="[new window] tar (computing) - Wikipedia, the free encyclopedia" target="_blank">tar</a> to list (t) the content of the archive, files only (-f)</dd>

<dt>unzip -l</dt>
<dd>use <a href="http://en.wikipedia.org/wiki/Unzip" title="[new window] Zip (file format) - Wikipedia, the free encyclopedia" target="_blank">unzip</a> to list  the content of the archive</dd>

<dt>unrar l</dt>
<dd>use <a href="http://en.wikipedia.org/wiki/Unrar" title="[new window] Unrar - Wikipedia, the free encyclopedia" target="_blank">unrar</a> to list  the content of the archive</dd>

<dt>|</dt>
<dd>pass the list generated by find to the next command...</dd>

<dt class="long-line">grep "filename you are searching for"</dt>
<dd class="long-line">only show the items in the list that match the fillename, using  <a href="http://en.wikipedia.org/wiki/Grep" title="[new window] grep - Wikipedia, the free encyclopedia" target="_blank">grep</a></dd>
</dl>
