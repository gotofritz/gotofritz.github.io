---
excerpt: In OS X, PDF files can be concatenated manually using Preview. But if you are happy using Terminal there's an easier way, thanks to a Python script installed by default in /System/Library/Automator
date: 2010-07-13 13:05
title: Joining PDF files in OS X from the command line
tags:
  - os x
  - pdf
prev: finding-files-inside-archive
next: svn-status-codes
---

## Combining PDF files manually using Preview

Preview allows PDF files to be combined by dragging and dropping, as long as you are careful when do it - or it won't work.

First of all, open the first PDF file in Preview as per normal. Then drag each of the other PDFs in turn, over the last page thumbnail in the drawer. This is where you need to be careful - you need to drop the document _over_ the thumbnail of the previous document last page, not underneath it. Otherwise Preview will treat them as separate document and won't merge them. The difference is quite easy to spot - when doing it right Preview will show a border around the thumbnail in the sidebar, instead of a line underneath it - see image below.

![How to spot whether Preview will merge PDF documents or treat them as separate files](/assets/joining-pdf-files-in-os-x-from-the-command-line/joining-pdf.jpg)

Also, if you read "NAME OF YOUR FILE.pdf (1 Document)" in Preview's title bar, you are good to go, and you can start dragging the next file, until they are all done. Then you need to save the file, perhaps with a new name.

So that works well - slightly laborious but easy for everyone to understand.

## Combining PDF files on the command line in OSX

It turns out that from Tiger onwards, OSX ships with a Python script that does exactly what you need. The script is already executable, and Python is pre-installed on OS X, so all you need to do to run it is opening the Terminal and typing

```bash
> "/System/Library/Automator/Combine PDF Pages.action/Contents/Resources/join.py" \
    -o PATH/TO/YOUR/MERGED/FILE.pdf \
    /PATH/TO/ORIGINAL/1.pdf \
    /PATH/TO/ANOTHER/2.pdf \
    ...
    /PATH/TO/A/WHOLE/DIR/*.pdf
    ...
```

[Benjamin Han](http://www.cs.cmu.edu/~benhdj/Mac/unix.html#joinPDF) recommends setting up a [symbolic link](http://is.gd/dqddx) to make typing easier. I prefer putting the link in /usr/local/bin, as it is in the $PATH and therefore I can run the command from anywhere. To setup the link, you need to navigate to the directory where you want the link.

```bash
> cd /usr/local/bin
sudo ln "/System/Library/Automator/Combine PDF Pages.action/Contents/Resources/join.py" PDFconcat
```

Terminal will ask you for your password (you need Admin rights to do this). After the command is run, you will be able to concatenate PDF files anywhere on Terminal by typing

```bash
> PDFconcat -o PATH/TO/YOUR/MERGED/FILE.pdf \
    /PATH/TO/ORIGINAL/1.pdf \
    /PATH/TO/ANOTHER/2.pdf \
    ...
```

You can even pass a 'shuffle' argument to make the script take one page per document in turn instead:

```bash
> PDFconcat -s -o PATH/TO/YOUR/MERGED/FILE.pdf  /PATH/TO/DIR/*.pdf
```
