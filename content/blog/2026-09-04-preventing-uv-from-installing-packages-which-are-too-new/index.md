---
title: 'Preventing Uv From Installing Packages Which Are Too New'
date: "2026-09-04T01:35:05+02:00"

description: uv, the python package manager, has a settings to prevent installation of packages which are too new. You can set it globally and override it on a per project basis

tags: [
  "python",
  "uv"
]

---

[uv](https://docs.astral.sh/uv/reference/settings/#exclude-newer) can prevent packages newer than a fixed date. This is to prevent installation of malicious packages; a few days buffer should be enough for the PyPI admins to remove any offending packages from the registry.

### How to prevent new packages on a project basis

In the pyproject.toml, add

```toml
[tool.uv]
exclude-newer = "5 days"

# less useful
exclude-newer = "2006-12-02T02:07:43Z"
```

## How to prevent new packages globally

To set it up globally, use an environmental variable. Add this to whatever file your CLI loads up when it boots up. For example, `~/.bash_profile`

```bash
export UV_EXCLUDE_NEWER="7 days"
```

### How to override the setting

There is another setting which allows you to set a different date for specific packages, or turn them off completely. This is [exclude-newer-package](https://docs.astral.sh/uv/reference/settings/#exclude-newer); unlike `exclude-newer`, this is a dictionary where you can set criteria for individual package

```bash
[tool.uv]
exclude-newer = "5 days"
exclude-newer-package = { tqdm = "2022-04-04T00:00:00Z", markupsafe = false }
```
