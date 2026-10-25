---
title: 'Creating Shell Aliases From Bash History'
date: "2026-10-25T00:14:50+02:00"

description: |-
 I hacked together my own low-tech solution to the problem of constantly having to type out paths for cd

tags: [
 "bash",
 "cli",
]

mastodon: https://hachyderm.io/@gotofritz/117498562229556816

---

## TL;DR

I have [a script called gen_folder_aliases](https://gist.github.com/gotofritz/e4d961b6e902b19f67d689f41b335131) that cureates a dotfile containing aliases for most of the directories I cd into, in the form `goh`, `gotw`, `gowuw` and so on. I can edit the file by hand and change aliases I don't like or no longer need. There is also a `gohelp` command that prints the list so I can remind myself what each alias does. Simple but effective.

## The idea

I am not the first person to have had this idea. Other tools, such as [zoxide](https://zoxide.org/) and [autojump](https://github.com/wting/autojump), are great dynamic directory jumpers. But I wanted something hardcoded that I could build muscle memory for. I didn't want to stop and think at every turn.

[scd](https://github.com/chetaniitbhilai/scd) keeps a directory history, but it's also a fuzzy searcher. What I wanted were immutable aliases that I could learn. I also wanted the aliases to be as short as possible, with a way to print them all out.

## The bluntness of history

The bash command history is a very blunt instrument. For example, I have multiple terminal sessions and it's unclear which ones get recorded, and how they influence each other. Just because there are two entries `cd work` followed by `cd ..`, doesn't mean thy are in the same session. Also my history is quite long, so old projects where I moved around folder trees that I no longer use still pollute the list. That's why the more established tools actually listen to where you are in the cli tree. But with all the limitations, it does a decent job. And I can always clear up the aliases files by hand; it's the kind of jobs I will run twice a year or so.

## How it works

I have a directory called `~/bin` in my home folder (actually an alias to a Dropbox folder) that's in my `$PATH`. This means I can type the name of any executable script there and macOS knows where to find it.

One of those scripts is [gen_folder_aliases](https://gist.github.com/gotofritz/e4d961b6e902b19f67d689f41b335131). When I run it, it generates a file in my home folder called `.folder_aliases`, which does exactly what it says on the tin.

I run the script every few months to update the file, then open it and make any manual adjustments. It doesn't take long. If I forget what an alias does, there's also a `gohelp` function that simply cats the alias file.

The nice touch is that once an alias makes it into the file, it stays there. The script only adds aliases for new directories, so I don't have to relearn my shortcuts.

```bash
# One-off: copy the gist into a file in your PATH
pbpaste > ~/bin/gen_folder_aliases

# Make it executable
chmod +x ~/bin/gen_folder_aliases

# Run it
gen_folder_aliases
Reading /Users/fritz/.bash_history
Wrote /Users/fritz/.folder_aliases
Kept 20 existing directory aliases.
Generated 8 new/home aliases

# Optionally, adjust ~/.folder_aliases

# Reload the shell to pick up the new aliases
. ~/.bash_profile

# Use an alias
gow
...

# Print the aliases
gohelp
# Generated automatically by gen_folder_aliases
# Source this file from ~/.bashrc

alias goh='cd -- "$HOME"'
alias gow='cd -- /Users/fritz/work'
...
```

And that's it. The aliases I wanted, with a minimum of fuss and without having to learn a new tool.
