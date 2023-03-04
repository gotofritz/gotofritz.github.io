---
title: "OS X DNS lookups too slow for local hosts"
publishDate: 2015-04-24 13:03
description: OS can sometimes take forever to resolve hosts setup on my local machine. Here is how I solved it.
draft: false
tags:
  - networks
  - os x
---

I have several local hosts set up on my dev OS X machine in my `/etc/hosts` file . The browser hangs for several seconds while trying to load them. Which doesn't make any sense, since they are local. The solution is to change the hosts file so that all hosts are on one line, the very first line where localhost is defined.

In other words, change from this...

```bash
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
fe80::1%lo0     localhost
127.0.0.1       my-host.dev
127.0.0.1       another-host.dev
127.0.0.1       oh-that-host.dev
```

...to this.

```bash
127.0.0.1       localhost  my-host.dev another-host.dev oh-that-host.dev
255.255.255.255 broadcasthost
::1             localhost
fe80::1%lo0     localhost
```

It doesn't make sense, but it works and that's all that matters. It's probably an OS X bug which at some point will be fixed.

### Prior art

Answer from [Stack Overflow](http://stackoverflow.com/questions/10064581/how-can-i-eliminate-slow-resolving-loading-of-localhost-virtualhost-a-2-3-secon)
