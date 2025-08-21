---
title: Debugging in Kubernetes
date: "2024-08-09T12:10:36+02:00"

description: Debugging in Kubernetes is not rocket science, but it can feel like it when your pod refuses to behave. Here are some useful `kubectl` commands.

tags: ["kubernetes"]
---

Typically you'll want to start wide (`get`), then zoom in (`describe`), then dive inside (`exec` or `attach` or `debug`), and always keep an eye on logs.
Debugging is basically detective work, just with YAML.

## `kubectl logs <pod>`

- First stop when stuff breaks.
- Shows what your app has been saying.
- Add `-f` to watch logs in real time.
- Use `--previous` if the pod crashed and restarted.

Sample output

```bash
Starting server on port 8080...
2025-08-09T14:30:01Z INFO  Server started
2025-08-09T14:30:10Z INFO  Received request: GET /health
2025-08-09T14:30:10Z INFO  Responded with status 200
2025-08-09T14:30:20Z ERROR Failed to connect to database: timeout
2025-08-09T14:30:25Z INFO  Retrying database connection
2025-08-09T14:30:30Z INFO  Database connection established
2025-08-09T14:31:00Z INFO  Received request: POST /api/data
2025-08-09T14:31:00Z INFO  Data saved successfully
```

## `kubectl get pods` (and friends)

- The "where am I" command.
- Lists what is running, their status, and if something is stuck in `CrashLoopBackOff`.
- Use `-o wide` to see node info; use `kubectl get all` if you are feeling nosy.

Sample output

```bash
NAME              READY   STATUS    RESTARTS   AGE
my-pod-12345      1/1     Running   0          15m
backend-6789abc   2/2     Running   1          2h
db-0              1/1     Pending   0          5m
cache-xyz         1/1     CrashLoopBackOff  3     10m
```

## `kubectl describe <pod>`

- Like a medical chart for your pod.
- Shows events, reasons for restarts, and resource usage hints.
- Great for catching "Oh... it could not pull the image" kind of mistakes.

Sample output

```bash
❯ kubectl describe pod my-pod-12345
Name:         my-pod-12345
Namespace:    default
Priority:     0
Node:         node-01.example.com/192.168.1.10
Start Time:   Fri, 09 Aug 2025 14:20:00 +0000
Labels:       app=webserver
Annotations:  <none>
Status:       Running
IP:           10.244.1.15
IPs:
  IP: 10.244.1.15
Containers:
...
```

## `kubectl exec -it <pod> -- /bin/sh` (or `/bin/bash`)

- Get inside the pod and run commands from there.
- Perfect for poking around logs, configs, or testing commands.
- Use it when "It works on my laptop" needs to be tested in the pod's real world.

Sample output

```bash
❯ kubectl exec -it my-pod-12345 -- /bin/sh
/ #
```

## `kubectl attach <pod>`

- Connect to a pod's main process as if you started it yourself.
- Good for interactive apps or quick checks.
- Be careful: you are talking directly to the process with no guardrails.

Sample output

```bash
❯ kubectl attach my-pod-12345 -c my-container -i
Starting container with command: /bin/sh
Welcome to the container shell!
#
```

## `kubectl debug`

- Your "drop a toolbox" command.
- Spin up an ephemeral container inside the pod with debugging tools you did not ship in the original image.
- Saves you from baking `curl` into every image.

Sample output

```bash
❯ kubectl debug my-pod-12345 -it --image=busybox
If you don't see a command prompt, try pressing enter.
/ #
```
