---
publishDate: 2023-06-04
draft: false
archived: false
title: Clearing commands and other history tales in bash
tags:
  - Tips
  - Bash
description: Clearing the command history is good practice when, for example, one has mistakenly pasted sensitive info.<br><code>❯ history -c</code> will do the trick. More details inside.
---

## Bash command history file

Bash saves a list of the commands run in a session into the `.bash_history` file in the home directory. You can view its contents by symply typing `❯ history` in the terminal. Another way to clear the history is simply to delete this file.

## Delete just a command, or a range of commands

Besides `❯ history -c` to delete the complete history, there is also a `❯ history -s N` and `❯ history -s N:M` to delete command N, or all commands between N and M, inclusive. N and M can be absolute numbers (the one you get next to each command when you run `❯ history`) or relative, but I avoid the relative ones. I never need the extra complexity. Talking of complex edge case I've never needed, you can also _write_ to the history file with a few different variations. Here's [a good reference from the GNU manual](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Builtins.html)

## Cycling through only the commands starting with a certain string

If you press the up arrow key at the start of a command line prompt, bash will cycle backwards through all the commands you typed previously.
Pressing the up arrow cycles through _all_ the commands, which can be tedious if the one you are after is far away. But if you know how the command started, you can type the start and then the up / down arrow to limit your search only to the commands starting with that string. To enable that you need to add these two lines to your `.inputrc` file (if the file doesn't exist, just create it):

```bash
"\e[B": history-search-forward
"\e[A": history-search-backward
```

## Searching through the command history

A more powerful way is to use `reverse-i-search`. The i stands for "incremental", because bash shows you a result as soon as you type a character, and then it refines the search as you type the next character, and so on. A typical incremental search goes like this

1. Enter `<CTRL>-R` on the terminal. That will bring up the prompt `` (reverse-i-search)`': ``
1. Type a few characters from the commands you are after
1. As you type, bash will bring up the most recent command that matches it
1. You can cycle backwards through the list of matching commands by entering more `<CTRL-R>`. In theory you could use `<CTRL-S>` to cycle forward, but that's not enabled on many terminals. I jave never needed it enough to make me want to research how to enable it, but [here's a starting point on Stack Overflow](https://unix.stackexchange.com/questions/73498/how-to-cycle-through-reverse-i-search-in-bash) if you are interested.
1. Once you find the command you can
   1. Press `<ENTER>` to run the command again
   1. Press right arrow ➡️ to enter in the command and edit
   1. Press `<CTRL>-G` to exit the search without running the command

## Prevent certain commands from getting into the history in the first place

It can also be useful to prevent certain commands from getting into the history in the first place. There are two different approaches.

To keep your history file size down, you can ignore sequential duplicates with the `export HISTCONTROL=ignoredups` line in your `.bash_profile`. Another trick, to allow you to bail out of history on a command by command basis, is to ignore commands that start with a blank character. That is achieved with `export HISTCONTROL=ignorespace`. If you want both, combine them with a colon - mine, for example is `export HISTCONTROL=ignoredups:ignorespace`

Another useful setting is a list of commands (or regexes) you don't want to go in the history. These are typically generic commands that don't add any value to the history, like looking up a man page. The variable to set is `HISTIGNORE`, and again, the separator is the colon. For example mine is `export HISTIGNORE="ls:cd:cd -:pwd:exit:date:* --help:man *:la:history"`

## Change how many commands bash remembers in its history

The **number of commands** saved by bash is controlled by the environmental variable `HISTSIZE`, which is by default 500. You can add `export HISTSIZE=XXX`, where XXX is another number, as a new line to `.bash_profile` if you want to change that. I have a large one, 32768.

## Don't use a history file at all

Or you can avoid having a history file at all by deleting HISTSIZE altogether. That can be achieved by adding the line `unset HISTSIZE` to your `.bash_profile`. Or alternatively, setting it to 0, it does the same thing. This may be useful on shared server environments.

## Comments?

I haven't got around adding a comment section to my blog, but [there is a companion post on mastodon](https://fosstodon.org/@gotofritz) if you fancy adding a comment.
