---
publishDate: 2024-06-01
draft: false
archived: false
title: "Git: interactive rebase and get logs for a branch with the CLI"
tags:
  - git
description: Asking Git to display all the logs for a given branch, or to squash commits within a branch, is not as straightforward as you might expect if you've never tried it before.
---

## TL;DR

Assuming the branch was created from main:

```bash
git rebase -i $(git merge-base HEAD main)
git log --oneline $(git merge-base HEAD main)..HEAD
```

## The Nine Circles of Git

If you have never bothered with Git's internals, you might expect a command like `git log BRANCH` to display all the log messages for `BRANCH`, and `git rebase -i BRANCH` to do an interactive rebase for the branch. That would make sense, right? After all that's how you work in the file system. `ls SIMPSONS/` gives you the file listing in `SIMPSONS/`, but `ls SIMPSONS/HOMER/` restricts the listing. But git isn't that straightforward. Under the hood, it is a much more complex piece of software than one may think.

## Git is a Wonder of Technology

Git is essentially a single list of commits that keep growing as teams append to it. Pretty much like a blockchain. Each commit has a link to its parent commit, and that's how Git can track the commit history. Branches may feel like directories, but they are much more abstract. They are pointers to 'fork in the roads', so to speak. They signal to Git that 'at commit xyz, a branch was created'.

It's similar to how forms in bureaucracy work. When you have to fill out a form for a mortgage or a medical procedure, you typically start at page 1. At some point the form might say "if your earnings for the past year are below €20000 turn to page 5". Git does the same; it goes down the commit history and when it encounters a branch pointer it's equivalent to "if you are looking for the history of branch X, turn to commit c53806e". Some commits can exist in multiple branches. And an extra complication is that unlike blockchains, which are immutable, git commit histories are rewritten all the time.

If you start digging into how it is all implemented, it is quite mind-blowing that the whole thing works at all with hardly any glitches, to be honest.

## But why aren't There Commands to Make the "Common Jobs" easier?

But does a user need to know all this? After all we don't need to understand how video codecs and streaming across a distributed network work when we watch a video on YouTube, we just click "play" or "next". Indeed there are Git clients that shield you from all the complexity and allow you to treat branches as if they were folders, and do just that. The command line version, though, follows the Unix philosophy: a limited set of powerful, configurable commands that can be combined together to handle most scenarios. That keeps the maintenance and learning burden reasonably low. Git was created by the same person who created Linux, after all, and it is a tool for software developers. It tends to give you only the raw ingredients.

## Enter `git merge-base`

So, the objective "give me all the commits messages for branch X" can be achieved by combining the commands (give me all the commits messages for...) and (the commit were the history branches off into X). And "rebase the branch interactively" could be achieved with (start an interactive rebase from), (the commit were the history branches off into X) and (the current commit). The command for "the commit were the history branches off into X" is [merge-base](https://git-scm.com/docs/git-merge-base)

### Git log all the commit messages for the branch

This will give you a result similar to

```bash
❯ git log --oneline $(git merge-base HEAD main)..HEAD
ac470ac gotofritz      2024-06-01 17:39:59.. added some more test
0b4b095 gotofritz      2024-06-01 17:34:27.. added some test
...
48bac73 gotofritz      2024-05-14 22:53:55.. created branch
```

<dl class="code-breakdown">
<dt>git</dt>
<dd>launches the Git command-line tool</dd>

<dt>log</dt>
<dd>displays the commit history of the repository</dd>

<dt>--oneline</dt>
<dd>condenses the output to one line per commit. This flag simplifies the display but is just one of e <a href="https://git-scm.com/docs/git-log">many available</a></dd>

<dt>$(</dt>
<dd>starts a subshell to execute a command and use its output in the git log command</dd>

<dt>git</dt>
<dd>it's gits all the way down</dd>

<dt>merge-base</dt>
<dd>find the commit which is parent to both...</dd>

<dt>HEAD</dt>
<dd>...this branch (the latest commit)</dd>

<dt>main</dt>
<dd>...and a branch called 'main' (adapt as needed)</dd>

<dt>)</dt>
<dd>ends the subshell command, passes the commit it found to the git log command</dd>

<dt>..</dt>
<dd>indicates that we are passing a range of commits to git log, which ends at...</dd>

<dt>HEAD</dt>
<dd>...the most recent commit in this branch</dd>
</dl>

### Interactively rebase all the commits

An interactive rebase opens an editor where you can decide what to do with each commit in the history. If you write `pick` next to a commit it will stay; if you write `squash` or `fixup` it will be merged with the next commit that stays (there must be at least one that stays). `squash` lets you rewrite the commit message of the merged commit, and `fixup` just merges without changing the messages.

The commit history has the oldest commit at the top and the most recent below it. To squash, you want to `pick` one commit, and `fixup` all the others:

```bash
❯ git rebase --i $(git merge-base HEAD main)
------ INSIDE THE EDITOR -----------------------
pick cdcd2a9 post(new): git interactive rebase
fixup 0b4b095 added some test
fixup ac470ac added some more test
fixup fd894c7 even more text changes

# Rebase 1ed1613..fd894c7 onto 1ed1613 (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit
#     message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into
#    previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep
#    only the previous
#
# ... etc ...
```

<dl class="code-breakdown">
<dt>git</dt>
<dd>launches the Git command-line tool</dd>

<dt>rebase</dt>
<dd>puts the commits from the current branch into a temporary area, updates the commit history, then moves the current commits back</dd>

<dt>-i</dt>
<dd>makes the rebase interactive, i.e., before putting the commits back, it opens an editor window where you can decide what to do with each commit. It's the only way you can squash them, as there is no built-in option that does it for you.</dd>

<dt>$(</dt>
<dd>starts a subshell to execute a command and use its output in the git log command</dd>

<dt>git</dt>
<dd>it's gits all the way down</dd>

<dt>merge-base</dt>
<dd>find the commit which is parent to both...</dd>

<dt>HEAD</dt>
<dd>...this branch (the latest commit)</dd>

<dt>main</dt>
<dd>...and a branch called 'main' (adapt as needed)</dd>

<dt>)</dt>
<dd>ends the subshell command, passes the commit it found to the git log command</dd>
</dl>

## Automating interactive rebases

I understand the Unix philosophy, and combining simple commands to achieve complex behaviour. But interactive rebases are way too laborious. Surely there must be a way to just run a command without having to fiddle with a text editor all the time? Well, “jein” as the Germans say. There is, but it’s ugly.

```bash
❯ GIT_SEQUENCE_EDITOR='sed -i -e "1!s/pick/fixup/"' \
    git rebase -i $(git merge-base HEAD main)
```

`GIT_SEQUENCE_EDITOR` is an environmental variable that can contain a command or editor program to replace the editor you get when running git rebase -i. So you can put a tiny script there, that does what you want.

<dl class="code-breakdown">
<dt style="flex-basis: calc(45% - .5rem);">GIT_SEQUENCE_EDITOR='</dt>
<dd style="flex-basis: calc(55% - .5rem);">put a tiny script into this variable. Note that we use ' instead of " because there is a ! later on, and bash gets all confused when it finds ! inside "</dd>

<dt>sed</dt>
<dd>the tiny script is a standard Unix text editor which...</dd>

<dt>-i</dt>
<dd>...edits the commit history there and then without creating a copy (by default sed likes to create copies for safety)</dd>

<dt>-e "</dt>
<dd>...and itself runs a little script</dd>

<dt>1!</dt>
<dd>on any line except the first (we want the first commit to stay as "pick"). Note that the ! inside " is ok here, because we have a ' outside</dd>

<dt>s/pick/fixup/</dt>
<dd>change the first "pick" on each line to "fixup"</dd>

<dt>"'</dt>
<dd>get me out of here</dd>

<dt>git</dt>
<dd>now the actual command start. It's our old friend, the Git command-line tool</dd>

<dt>rebase</dt>
<dd>puts the commits from the current branch into a temporary area, updates the commit history, then move the current commits back</dd>

<dt>-i</dt>
<dd>make the rebase interactive, i.e. open an editor window where you can decide what to do with each commit. It's the only way you can squash them, there is no built-in option that does it for you</dd>

<dt>$(</dt>
<dd>start a command inside the command, so that you can use its output</dd>

<dt>git</dt>
<dd>it's gits all the way down</dd>

<dt>merge-base</dt>
<dd>find the commit which is parent to both...</dd>

<dt>HEAD</dt>
<dd>...this branch (the latest commit)</dd>

<dt>main</dt>
<dd>...and a branch called 'main' (adapt as needed)</dd>

<dt>)</dt>
<dd>end of sub command, use the result in the git log command</dd>
</dl>

## Am I supposed to remember all that??

Actually not. The beauty of the command line is that you can create _aliases_ of complex commands like these, and then you can just fire it up by typing a few letters. In this case, there are two ways of doing this - you can create a Git alias in the global Git configuration, or a generic command alias in whatever CLI you use (for me it's bash). The benefit of a git alias is that it works regardless of what shell you are in; however if you use different Git configs for different environments (e.g. work / home) then it's a pain to keep them synchronised. I already have a few Git commands in my [dotfiles](/blog/storing-bash-profile-and-so-on-on-github/), so I'll just add them there

Actually not. The beauty of the command line is that you can create aliases of complex commands like these, and then you can just fire it up by typing a few letters. In this case, there are two ways of doing this - you can create a Git alias in the global Git configuration, or an alias in whatever CLI you use (for me it’s Bash). The benefit of a Git alias is that it works regardless of what shell you are in; however, if you use different Git configs for different environments (e.g., work/home) then it’s a pain to keep them synchronized. I already have a few Git commands in my dotfiles, so I’ll just add them there:

```bash
# glog is an existing alias which has a lot of formatting options
alias glogb='glog $(git merge-base HEAD main)..HEAD'
alias gsqb='GIT_SEQUENCE_EDITOR="sed -i -e ''1!s/pick/fixup/''" git rebase -i $(git merge-base HEAD main)'
```

So now I can just type `glogb` or `gsqb` without having to remember those long commands.
