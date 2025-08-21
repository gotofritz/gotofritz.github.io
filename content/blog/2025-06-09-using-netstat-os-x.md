---
title: "Using Netstat on OS X"
date: "2025-06-09T12:24:32+02:00"

description: |-
  On macOS, `netstat` is a BSD-based tool that is still fully supported.
  It is great for seeing open connections, routing tables, and interface stats.
  When you want to see which process owns a connection or port, `lsof` is the tool to use.

tags: ["cli", "networking"]
---

I use `netstat` to see the state of connections and ports, then use `lsof` to find the process that owns them. This combination covers most day to day network troubleshooting on macOS.

## Checking connections and ports with netstat

### `netstat -an`

Shows all active connections and listening ports in numeric form (no hostname lookups).
This is your "what is open" and "who is connected" view.

Sample output:

```bash
Active Internet connections
Proto Recv-Q Send-Q  Local Address          Foreign Address        (state)
tcp4       0      0  192.168.0.10.22        192.168.0.25.51234     ESTABLISHED
tcp4       0      0  *.80                   *.*                    LISTEN
udp4       0      0  *.68                   *.*
```

---

### `netstat -r`

Shows the routing table. Useful for checking gateways and network paths.

Sample output:

```bash
Routing tables

Internet:
Destination        Gateway            Flags        Refs      Use   Netif Expire
default            192.168.0.1        UGSc           51        0     en0
192.168.0          link#4             UCS             2        0     en0
```

---

### `netstat -i`

Shows interface statistics. Helps spot dropped packets or errors.

Sample output:

```bash
Name  Mtu   Network       Address            Ipkts Ierrs    Opkts Oerrs  Coll
en0   1500  <Link#4>      a4:5e:60:aa:bb:cc  20481     0    18934     0     0
lo0   16384 <Link#1>      00:00:00:00:00:00   1542     0     1542     0     0
```

---

### `netstat -s`

Shows protocol statistics. Useful for diagnosing TCP or UDP issues.

Sample output:

```bash
tcp:
    245 connections initiated
    2 connections failed
    1 connections dropped
udp:
    300 packets sent
    295 packets received
```

---

## Finding the process for a port with lsof

`lsof` stands for "list open files". On Unix-like systems, sockets are files too, so `lsof` can show you which process has a port open.

### `lsof -i :80`

Shows which process is using port 80.

Sample output:

```bash
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
nginx   12345 root   10u  IPv4 0x7f9b1d9cbe4     0t0  TCP *:http (LISTEN)
```

---

### `lsof -i tcp`

Shows all TCP connections.

Sample output:

```bash
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
Google    222 user   21u  IPv4 0x7f9b1d9cc3d     0t0  TCP 192.168.0.10:54321->172.217.3.110:https (ESTABLISHED)
```

---

### `lsof -i udp`

Shows all UDP sockets.

Sample output:

```bash
COMMAND  PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
mDNSRespo  78 root   10u  IPv4 0x7f9b1d9ce4f     0t0  UDP *:mdns
Spotify   44821 fritz   62u  IPv4 0x1d6203917a762cb8      0t0  UDP *:52520
```
