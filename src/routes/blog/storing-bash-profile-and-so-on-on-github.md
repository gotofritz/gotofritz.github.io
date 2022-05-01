---
title: "dotfiles"
date: 2013-09-01 16:11
excerpt: Storing your CLI config files (.bash_profile and all the rest) on github makes sense - as a backup, but also to compare and learn.
prev: install-specific-version-homebrew
next: directory-listings-in-apache-2-4
published: true
tags:
  - bash
---

I first learned about them from [Mathias Bynes](https://github.com/mathiasbynens/dotfiles), of jsPerf fame and so I cloned his project and created [my own dotfiles](https://github.com/gotofritz/dotfiles). Meanwhile [it has become a thing](https://dotfiles.github.io/)

## Using Git and the bootstrap script

I have a cloned version of the dotfile directory on my machine. To update

```bash
cd path/to/dotfile/clone
git pull origin master
./bootstrap.sh #./bootstrap.sh -f to avoid the prompt
. ~/.bash_profile
```

## Path

I have no problem with putting the path under github - there's no confidential stuff in there.

## Add custom commands without creating a new fork

If `~/.extra` exists, it will be sourced along with the other files. You can use this to add a few custom commands without the need to fork this entire repository, or to add commands you don’t want to commit to a public repository.

My `~/.extra` looks something like this:

```bash
# Git credentials
# Not in the repository, to prevent people from
# accidentally committing under my name
GIT_AUTHOR_NAME="Fritz Stelluto"
GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"
git config --global user.name "$GIT_AUTHOR_NAME"
GIT_AUTHOR_EMAIL="xxxxxxx"
GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"
git config --global user.email "$GIT_AUTHOR_EMAIL"
```

You could also use `~/.extra` to override settings, functions and aliases from my dotfiles repository. It’s probably better to [fork this repository](https://github.com/mathiasbynens/dotfiles/fork) instead, though.

## Sensible OS X defaults

When setting up a new Mac, you may want to set some sensible OS X defaults:

```bash
./.osx
```

## Install Homebrew formulae

When setting up a new Mac, you may want to install some common [Homebrew](http://brew.sh/) formulae (after installing Homebrew, of course):

```bash
brew bundle ~/Brewfile
```

## Install native apps with `brew cask`

You could also install native apps with [`brew cask`](https://github.com/phinze/homebrew-cask):

```bash
./.cask
```
