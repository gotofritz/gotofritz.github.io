---
title: "vm_stat and Iostat on OS X"
date: "2025-03-09T13:01:40+02:00"

description: |-
  When you want to check how your Mac's disk and CPU are doing, or peek at memory and swap activity, the commands iostat and vm_stat come in super handy. Both are built-in and give you quick snapshots of system performance.

tags: ["cli", "networking"]
---

Both tools are super useful for quick performance checks and spotting resource bottlenecks on your Mac.

## iostat - Disk and CPU Stats

iostat shows how busy your disks are and how your CPU time is split. It helps you figure out if your disk or CPU is the bottleneck.

### Basic command

```bash
# run once
❯ iostat
# run every 2 secs, for 3 times
iostat 2 3
            disk0              disk10               disk6       cpu    ..
KB/t  tps  MB/s     KB/t  tps  MB/s     KB/t  tps  MB/s  us sy id   1m   ..
14.90   75  1.10     6.31    0  0.00    27.12    0  0.00  53 31 16  1.70 ..
...
```

### Important columns

| Column | Meaning                               |
| ------ | ------------------------------------- |
| KB/t   | Kilobytes transferred per transaction |
| tps    | Number of IO transactions per second  |
| MB/s   | Megabytes transferred per second      |
| us     | CPU time spent in user space (%)      |
| sy     | CPU time spent in system/kernel (%)   |
| id     | CPU idle time (%)                     |

### What to watch

- High `tps` or `MB/s` may indicate disk bottlenecks.
- High `us` or `sy` means CPU is busy with user or system tasks.
- If `id` is low, CPU is heavily used.

## vm_stat - macOS virtual memory stats

vm_stat shows you info about memory, swap, and CPU usage. It is great for spotting memory pressure, paging, and CPU load.

### Basic command

```bash
❯ vm_stat
Mach Virtual Memory Statistics: (page size of 4096 bytes)
Pages free:                               12345.
Pages active:                             67890.
Pages inactive:                           23456.
Pages speculative:                        7890.
Pages throttled:                          0.
Pages wired down:                         45678.
Pages purgeable:                          1234.
"Translation faults":                     3456789.
Pages copy-on-write:                      123456.
Pages zero filled:                        789012.
Pages reactivated:                        4567.
Pages purged:                            2345.
File-backed pages:                        56789.
Anonymous pages:                          34567.
Pages stored in compressor:               1234.
Pages occupied by compressor:             567.
Decompressions:                           890.
Compressions:                             1234.
Pageins:                                 5678.
Pageouts:                                123.
Swapins:                                 456.
Swapouts:                                789.
```

The following will repeat twice, at 1 sec intervals

```bash
❯ vm_stat -c 2 1
Mach Virtual Memory Statistics: (page size of 16384 bytes)
    free   active   specul inactive throttle    wired  prgable   faults ..
  110829  1722815    35133  1710051        0   236486    38767   19361M ..
  108623  1724850    35133  1710050        0   236527    38771     5640 ..

```

### What to look for

- Pages free - Amount of free memory available. Low values might mean memory pressure.
- Pages active and inactive - Memory currently in use or recently used.
  Pages wired down - Memory that can't be paged out, usually kernel memory.
- Pageins and Pageouts - Number of pages read from or written to disk. High numbers may indicate swapping and can slow performance.
- Swapins and Swapouts - Swapping activity, usually bad if high.
