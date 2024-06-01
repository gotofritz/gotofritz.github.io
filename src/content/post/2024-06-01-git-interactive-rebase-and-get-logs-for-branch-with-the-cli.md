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

If you have never bothered with Git's internals, you might expect a command like `git log BRANCH` to display all the log messages for `BRANCH`, and `git rebase -i BRANCH` to do an interactive rebase for the branch. That would make sense, right? After all that's how you work in the file system. You create a folder `mkdir FOLDER`, and then all the files you put in that folders are just there, you can list them with `ls FOLDER/`. But git isn't that straightforward. Under the hood, it is a much more complex piece of software than one may think.

## Git is a Wonder of Technology

Git is essentially a single list of commits that keep growing as teams append to it. Each commit has a link to its parent commit, and that's how Git can track the commit history. Different teams can work on different branches, but all the commits end in the same history, all mixed together. They just point to a different parent. It's like a very busy chat where there are several conversations going on at once, and people are replying to a message posted two comments ago and ignoring those posted in between.

Branches are really just pointers to 'fork in the roads', so to speak. They signal to Git that 'at commit xyz a new branch started'. Then of course, a branch could branch off from another branch, and then you can merge the main branch into it, until explaining what "all the commits in this branch" mean becomes quite fuzzy.

If you start digging into how it is all implemented, it is quite mind-blowing that the whole thing works at all with hardly any glitches, to be honest.

## But why aren't There Commands to Make the "Common Jobs" easier?

But does a user need to know all this? After all we don't need to understand how video codecs and streaming across a distributed network work when we watch a video on YouTube, we just click "play" or "next". Indeed there are Git clients that shield you from all the complexity and allow you to treat branches as if they were folders.

The command line version of Git, instead, follows the Unix philosophy: a limited set of powerful, configurable commands that can be combined together to handle most scenarios. That keeps the maintenance and learning burden reasonably low. Git was created by the same person who created Linux, after all, and it is a tool for software developers. It tends to give you only the raw building blocks.

## Enter `git merge-base`

So, the task "give me all the commits messages for branch X" has to be broken down into simpler commands, and similarly for "rebase the branch interactively". These are some commands you could use

- [log](https://git-scm.com/docs/git-log), "get the commit messages between A and B"

  ```bash
  ❯ git log A..B
  ```

- [HEAD](https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref), not really a command, but a reference to the latest commit

  ```bash
  ❯ cat .git/HEAD
  # HEAD gets translated by git
  # into the content of a file
  # like this
  ref: refs/heads/32-new-post

  ❯ cat .git/refs/heads/32-new-post
  # i.e., a commit hash
  d367d70df9361e993e84fa89a2854254fd816d53

  ❯ ls -1 .git/refs/heads/
  # every branch has its HEAD
  main
  32-new-post
  54-another-post
  fix/and-so-on
  ```

- [merge-base](https://git-scm.com/docs/git-merge-base), "starting from COMMIT, go back in history until you find the commit which is is also in BRANCH, i.e. the point where history split"

  ```bash
  ❯ git merge-base COMMIT BRANCH
  ```

### Git log all the commit messages for the branch

Putting it all together

```bash
❯ git log --pretty=short --oneline $(git merge-base HEAD main)..HEAD
ac470ac added some more test
0b4b095 added some test
...
48bac73 created branch
```

<dl class="code-breakdown">
<dt>git</dt>
<dd>launches the Git command-line tool</dd>

<dt>log</dt>
<dd>displays the commit history of the repository</dd>

<dt class="long-line">--pretty=short --oneline</dt>
<dd class="long-line">condenses the output to one line per commit. These flags simplify the display, but they are just a few of <a href="https://git-scm.com/docs/git-log">many available</a></dd>

<dt>$(</dt>
<dd>starts a subshell to execute a command and use its output in the git log command</dd>

<dt>git</dt>
<dd>this is another git command, running separately</dd>

<dt>merge-base</dt>
<dd>find the commit which is parent to both...</dd>

<dt>HEAD</dt>
<dd>...this branch (the latest commit)</dd>

<dt>main</dt>
<dd>...and a branch called 'main' (adapt as needed)</dd>

<dt>)</dt>
<dd>ends the subshell command, i.e. the 'A' in `git log A..B`</dd>

<dt>..</dt>
<dd>indicates that we are passing a range of commits to git log, which ends at...</dd>

<dt>HEAD</dt>
<dd>...the most recent commit in this branch</dd>
</dl>

### Interactively rebase all the commits

An interactive rebase opens an editor where you can decide what to do with each commit in the history. If you write `pick` next to a commit it will stay; if you write `squash` or `fixup` it will be merged with the next commit that stays (there must be at least one that stays). `squash` lets you rewrite the commit message of the merged commit, and `fixup` just merges without changing the messages.

The commit history has the oldest commit at the top and the most recent below it. To squash, you want to `pick` the first commit, and `fixup` all the others:

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
<dd>makes the rebase interactive, i.e., before putting the commits back, it opens an editor window where you can decide what to do with each commit. It's the only way you can squash them, sadly you can't simply tell Git "squash them all".</dd>

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
<dt style="flex-basis: calc(35% - .5rem);">GIT_SEQUENCE_EDITOR='</dt>
<dd style="flex-basis: 100%;">put a tiny script into this variable. Note that we use ' instead of " because there is a ! later on, and bash gets all confused when it finds ! inside "</dd>

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
<dd>now the actual command starts. It's our old friend, the Git command-line tool</dd>

<dt>rebase</dt>
<dd>puts the commits from the current branch into a temporary area, updates the commit history, then move the current commits back</dd>

<dt>-i</dt>
<dd>make the rebase interactive, but before opening the editor it checks whether GIT_SEQUENCE_EDITOR has somehing ini it. In this case it does, so it uses it without further feedback</dd>

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

Actually not. The beauty of the command line is that you can create _aliases_ of complex commands like these, and then you can just fire them up by typing a few letters. In this case, there are two ways of doing this - you can create a Git alias in the global Git configuration, or a generic command alias in whatever CLI you use (for me it's bash). The benefit of a git alias is that it works regardless of what shell you are in; however if you use different Git configs for different environments (e.g. work / home) then it's a pain to keep them synchronised. I already have a few Git commands in my [dotfiles](/blog/storing-bash-profile-and-so-on-on-github/), so I'll just add them there

```bash
# glog is an existing alias which has a lot of formatting options
alias glogb='glog $(git merge-base HEAD main)..HEAD'
alias gsqb='GIT_SEQUENCE_EDITOR="sed -i -e ''1!s/pick/fixup/''" git rebase -i $(git merge-base HEAD main)'
```

So now I can just type `glogb` or `gsqb` without having to remember those long commands.
