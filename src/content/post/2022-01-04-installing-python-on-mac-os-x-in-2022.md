---
description: There are many different ways of doing it; my favourite involves using pyenv
publishDate: 2022-01-04
draft: false
archived: false
title: How I install python on OS X in 2022
tags:
  - OsX
  - Python
---

## Ignore OS X's own python version(s)

Mac OS X comes with its own version of python; one which is deprecated since 2020. Given its age, it's better ignored; I treat it as an internal system tool, nothing to do with me. OS X also comes with python 3, which is available with the command `$ python3`. I ignore that too

## Homebrew can manage python versions

You can also use homebrew to install python, with `brew install python`. But I found aliasing different versions for different projects always tricky when doing it that way

## Using pyenv to manage different versions of python

Pyenv is very versatile and simple. I install the main version with the following commands in Terminal

```bash
# homebrew is still involved
❯ brew install pyenv

# check which versions are available
❯ pyenv install -l
Available versions:
  2.1.3
  2.2.3
  ...
  stackless-3.7.5

# the latest at the time of writing
❯ pyenv install 3.10.1
...

# make it the default version
❯ pyenv global 3.10.1
```

Then I need to update my $PATH. I use the [dotfiles](/blog/storing-bash-profile-and-so-on-on-github/) concept to manage my CLI defaults. The [.path](https://github.com/gotofritz/dotfiles/blob/master/.path) file from that project handles the $PATH variable. I made changes to it:

```bash
❯ if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi

# This is actually a simplified version of what's in my .path file
export PATH="$(pyenv root)/shims:..OTHER STUFF...:$PATH"
```

The important part is the `$(pyenv root)/shims` in the $PATH. This is what makes the terminal load the pyenv version on the CLI instead of the standard OS X one. To prove it works, open a new terminal window and type

```bash
❯ python -V
3.10.1
```

## Install pipenv

I use pipenv to manage python versions in my projects; for those coming from node, it’s kind of a mixture of nvm and yarn. That is installed with a simple pip command. Installing python also installs pip, so it should be already on your system

```bash
❯ pip install --user pipenv
Collecting pipenv
  Downloading pipenv-2021.11.23-py2.py3-none-any.whl (3.6 MB)
  ...
  WARNING: The script virtualenv-clone is installed in '/Users/fritz/.local/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
  WARNING: The script virtualenv is installed in '/Users/fritz/.local/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
  WARNING: The scripts pipenv and pipenv-resolver are installed in '/Users/fritz/.local/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
  Successfully installed certi...etc
```

And yes, it creates yet another config directory, and I need to add that to the path too. I could move all the files to the `~/bin`directory, where I keep all this kind of stuff. But the benefits are minimal, compared to the risks when upgrading pipenv. So I do what pipenv asks and add the directory to the path.

```bash
# This is the .path file from my dotfile repo again
export PATH="$HOME/.local/bin:$(pyenv root)/shims:..OTHER STUFF...:$PATH"
```

## Trying to prevent python issues when installing node-gyp

I have had all sort of troubles trying to run node 17 on Mac OS X Monterey. `node-gyp`, which has always been tricky, seems to be acting up again. It must be hard for those open source contributors to keep up with all the new versions of al the OSes… I don’t envy them. To avoid issues, [they suggest setting the path to the Python executable in the npm config](https://github.com/nodejs/node-gyp#configuring-python-dependency). I do that in the same .path file, in the pyenv block created during the pyenv installation

```diff
# .path
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
+  if command -v npm 1>/dev/null 2>&1; then
+    eval "$(npm config set python $(pyenv root)/shims/python)"
+  fi
fi
```

I reload the dotfiles and the .npmrc file does indeed contain the Python path

```bash
# this creates a new .bash_profile out of my dotfiles
❯ ./bootstrap -f
From github.com:gotofritz/dotfiles
 * branch            master     -> FETCH_HEAD
Already up to date.
building file list ... done

sent 402 bytes  received 20 bytes  844.00 bytes/sec
total size is 80123  speedup is 189.86

# did it work?
❯ cat ~/.nprmc
python=/Users/fritz/.pyenv/shims/python
```

## Prior art

I found these posts helpful:

[opensource.com/article/20/4/pyenv](https://opensource.com/article/20/4/pyenv)
[opensource.com/article/19/5/python-3-default-mac](https://opensource.com/article/19/5/python-3-default-mac)
[www.freecodecamp.org/news/python-version-on-mac-update/](https://www.freecodecamp.org/news/python-version-on-mac-update/)
[github.com/nodejs/node-gyp](https://github.com/nodejs/node-gyp)
