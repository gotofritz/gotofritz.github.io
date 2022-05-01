---
title: Install a specific version of a tool on OS X with Homebrew
date: 2013-07-17 12:40
excerpt: Sometimes you need to install an older version of a package with <a href="http://mxcl.github.io/homebrew/" title="[new window] Homebrew — MacPorts driving you to drink? Try Homebrew!">Homebrew</a>. Here&#39;s how I installed version 1.7.10 of Subversion
prev: copying-files-matching-pattern-cpio
next: storing-bash-profile-and-so-on-on-github
published: true
tags:
  - os x
---

## Why?

I couldn't connect to my company's repository using the latest 1.8.0 - svn failed with the message `svn: E120171: Error running context: An error occurred during SSL communication`. A quick <a href="https://duckduckgo.com/" title="[new window] Search DuckDuckGo - they respect your privacy, unlike google" target="_blank">DuckDuckGo</a> (gosh that's a mouthful) took me to <a href="https://groups.google.com/forum/#!topic/subversion-development/13KWf3N2myk" title="[new window] RE: svn commit: r1501049 - in /subversion/trunk/subversion: include/svn_error_codes.h libsvn_ra_serf/util_error.c - Google Groups" target="_blank">some mail group where Subversion developers bicker among themselves</a>, but no solution. So I went down to a known stabler version.

All the information here comes from <a href="http://stackoverflow.com/questions/3987683/homebrew-install-specific-version-of-formula" title="[new window] Homebrew install specific version of formula? - Stack Overflow" target="_blank">this SO answer</a>.

## Uninstall the previous version

Make sure you don't have an old version of the package installed:

```bash
> brew uninstall svn
> sudo mv /usr/bin/svn /usr/bin/svn1.6
```

In the case of svn, I also needed to remove the version that comes by default with OS X, as Homebrew is not able to unlink the two.

## Find out how old versions are called

```bash
> brew search subversion
subversion
homebrew/versions/subversion16  homebrew/versions/subversion17
```

The above tells you what svn packages are available. Note that searching for `svn` instead of `subversion` returns the current version only for some reason.
So that tells me that svn 1.7.something is called `subversion17` in Homebrew world, and it can be found into `versions`

## Install old versions

```bash
> brew tap homebrew/versions
Cloning into '/usr/local/Library/Taps/homebrew-versions'...
remote: Counting objects: 1022, done.
remote: Compressing objects: 100% (566/566), done.
remote: Total 1022 (delta 585), reused 873 (delta 456)
Receiving objects: 100% (1022/1022), 250.05 KiB | 428 KiB/s, done.
Resolving deltas: 100% (585/585), done.
Tapped 98 formula

> brew install subversion17
==> Downloading http://www.apache.org/dyn/closer.cgi?path=subversion/subversion-1.7.10.tar.bz2
Already downloaded: /Library/Caches/Homebrew/subversion17-1.7.10.tar.bz2
==> ./configure --prefix=/usr/local/Cellar/subversion17/1.7.10 --with-apr=/usr/bin --with-ssl --with-zlib=/usr --with-sqlite=/usr/local/opt/sqlite --with-serf=/usr/local/opt/serf --disable-neon-version-check --disable-mod-activation --disable-nls --without-apache-libexecdir --without-berkel
==> make
==> make install
==> make tools
==> make install-tools
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
/usr/local/Cellar/subversion17/1.7.10: 106 files, 7.7M, built in 3.1 minutes
```

Before you install a version you need to enable the whole "getting old versions" thing - you do that with the `tap` command. Afterwards, it's just a matter of installing the package I found earlier.

## That's it

Job done.
