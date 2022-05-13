---
title: "How To Avoid sudo npm"
date: 2015-12-14 22:12
excerpt: You know the story. You try to do <code>npm install hipster-package</code> on OS X and you get a whole load of errors; the easy way out is to just use <code>sudo npm install</code>. Everyone, however, keep saying how that is bad idea. But how do you make npm work without sudo? It&#39;s quite simple actually
published: true
prev: pretty-printing-xml
next: stop-chrome-navigating-back-when-swiping-horizontally
tags:
  - js
  - os x
---

## On your dev machine

If you are the typical js developer who works on OS X, all you need to do is just change the owner of the node binaries

```bash
# this should solve the problem
sudo chown -R MY_USER_NAME /usr/local

# this may also help
sudo chmod -R 777 ~/.npm
```

If you are working on projects and someone has already checked in a package.json run with sudo, you need to make sure the whole team changes the permissions of at the same time

```bash
# if someone has checked in a version
# of package.json with the wrong permissions
chmod -775 package.json
```

Unix purists will find this hacky; and rightly so. The _proper_ way of doing is to create a group for everyone who should be allowed to run npm, even if it's just you. However for a simple dev machine that is good enough.
