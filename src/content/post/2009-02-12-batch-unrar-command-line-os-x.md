---
obsolete: true
publishDate: 2009-02-12 03:59
title: Batch unrar from the command line on Mac OS X
tags:
  - Bash
  - OsX
description: Rar is a popular archive format on the web. When I need to unarchive several rar files at once, I use <a href="http://www.rarlab.com/download.htm">RarLab&#39;s command line tool</a>. Here&#39;s how
---

Unlike its cousins .zip or .tar, to handle .rar archives you still need a third party app such as [UnRarX](http://www.unrarx.com/), [Zipeg](http://www.zipeg.com/), or [Stuffit](http://shop.smithmicro.com/). Rarlab offers the two freeware command line tools.

## Downloading rar and unrar

After you [download rar from RarLab](http://www.rarlab.com/download.htm)'s download section, you should find a file called something like rarosx-3.8.0.tar.gz depending on the version you downloaded. If you double click on it, OS X will unarchive and create a folder called rar, which contains three "Unix executable files", and a bunch of text / html files. The executables are the command line rar and unrar, plus a support file used for installation. Rar is a demo that expires after 40 days, so don't bother installing it unless you are planning to buy the licence (instructions are in one of the html files in the folder). Luckily unrar is freeware and you can just use it.

## Installing unrar on OS X

To install unrar, open the Terminal application (Applications/Utilties/Terminal) and navigate to the rar folder. If you don't know how, the easiest way is to type 'cd ' with a space after it, then drag the rar folder onto the terminal window - Terminal will type out the path to the folder for you. Typicall on OS X Leopard it would be
`cd Downloads/rar`

Once in that folder, type the following command

```bash
❯ sudo install -c -o  SHORTNAME unrar /usr/local/bin
```

where SHORTNAME is the short version of your user name. If you are not sure what it is, just type
`whoami` and Terminal will tell you.

Breaking down the command:

<dl class="code-breakdown">
<dt>sudo</dt>
<dd>runs this command in administrator mode, a security measure to prevent viruses installing software at will; you will be asked for your password when you type return</dd>
<dt>install</dt>
<dd>call the 'install' utility, which does just what it says on the tin</dd>
<dt>-c</dt>
<dd>tells the install utility to copy the unrar file to its destination</dd>
<dt>-o SHORTNAME</dt>
<dd>tells the install utility to make you the owner of the binary, so that you won't have to type a password every time you want to use it</dd>
<dt>unrar</dt>
<dd>the file to install - if you want to install rar instead, replace unrar with rar here</dd>
<dt>/usr/local/bin</dt>
<dd>the place where this will be installed - the /usr/local/bin folder is a common Unix location for binaries</dd>
</dl>

After pressing ENTER and typing your password, you will be able to use unrar on the command line. To test it, type the following followed by ENTER:

```bash
❯ cd unrar
```

where

<dl class="code-breakdown">
<dt>cd</dt>
<dd>takes you out of the rar folder and back to your home folder, because we want to test this will work from any location, and this is the fastest way to move out of the rar folder</dd>

<dt>unrar</dt>
<dd>this will run unrar, and since you haven't passed any parameters, it should just print out instructions on how to use it.</dd>
</dl>

## Using unrar on the command line on Mac OS X

Using unrar is very simple - in the Terminal window (Applicatons/Utilities/Terminal) you simply navigate to the folder where you want the archive to be _extracted to_. If you are not sure how to do that, the simplest way would be to type 'cd ', including the space at the end, then drag the folder you want to navigate to onto the window, and Terminal will type its path for you. Then you type the unrar command, for example:

```bash
❯ cd ~/Documents/extracted_files
❯ unrar x ~/Downloads/test-archive.rar
```

Here's what the example above does:

<dl class="code-breakdown">
<dt>cd ~/Documents</dt>
<dd>navigate to the Documents folder</dd>

<dt>unrar</dt>
<dd>calls the unrar utility</dd>

<dt>x</dt>
<dd>runs command 'x' within the unrar utility; this will extract files maintaining the directory structure within the archive. If you type 'e', instead, all files will be extracted without enclosing folders</dd>

<dt>~/test-archive.rar</dt>
<dd>this is the location of the archive - again, the easiest way to do that is to drag the actual file onto the Terminal window</dd>
</dl>

That was the simplest way to use the utilities. In fact, unrar offers several options, which you can discover by typing 'unrar' followed by return on the terminal, and reading the instructions. As an example, the following

```bash
❯ unrar x -pSECRET -y archive.rar
```

can be broken down as

<dl class="code-breakdown">
<dt>unrar x</dt>
<dd>tells unrar to run the 'x' command, which is 'extract files to current directory maintaining directory structure'</dd>

<dt>-pSECRET</dt>
<dd>use option -p, password, and passes the string SECRET as the password - yes, without a space in between</dd>

<dt>-y</dt>
<dd>uses option -y, 'assumes yes on all queries'</dd>

<dt>archive.rar</dt>
<dd>the name of the file to be extracted</dd>
</dl>

## Using unrar on the command line to unarchive a batch of files

This is where the command line version of unrar comes into its own - try and uncompress a bunch of password protected archives with any other utility, and see what I mean. To unarchive a batch of files, we'll use the 'find' command (which does exactly what it says), and pass its results to unrar.

```bash
❯ cd ~/Documents/
❯ find ~/Downloads/ -name "*.rar" -exec unrar -pSECRET -y -ad x {} \;
```

<dl class="code-breakdown">
<dt>cd ~/Documents/</dt>
<dd>navigate to the Documents folder</dd>

<dt>find</dt>
<dd>starts the find utility</dd>

<dt>~/Downloads/</dt>
<dd>tells the find utility to look for files in the Downloads directory within your home (that's what ~ stands for). If your rar files are somewhere else, just replace the folder name with the one you need. If the rar files are in the same directory, you can just type a dot, '.', which in Unix means 'the current directory'</dd>

<dt>-name "*.rar"</dt>
<dd>tells find to look for files which ends in .rar - the `*` before it means 'anything'. If you want, say, to look for all files which start with b and end in .rar, you'd type "b*.rar" instead</dd>

<dt>-exec unrar</dt>
<dd>tells find to pass the results to unrar. If you want to test before you start extracting, replace this with -print, and don't type the following commands. This will just print a list of files.</dd>

<dt>-pSECRET</dt>
<dd>passes password SECRET to unrar; ignore if you don't need it</dd>

<dt>-y</dt>
<dd>tells unrar to answer 'yes' to all queries, so it won't hang waiting for you to type it in manually</dd>

<dt>-ad</dt>
<dd>for each archive, this will create a folder of the same name as the archive, and save all files in it. This is very useful, otherwise if your archives do not have any folders inside them, all files would be mixed together</dd>

<dt>x</dt>
<dd>tells unrar which command to run</dd>

<dt>&lbrace;} \;</dt>
<dd>this is used by find, &lbrace;} means the file you just found and \; ends it all</dd>
</dl>

Now you can go make yourself a cup of tea, and all the archives will be magically extracted when you come back. Well not always _all_ - occasionally there are quirks and unrar fails. I always check the Terminal window for errors (APPLE-F for find, and then look for word 'error') and if there were any errors, I will re-extract that particular archive again with a different utility. But errors don't happen too often, and using the command line tool saves a lot of time.
