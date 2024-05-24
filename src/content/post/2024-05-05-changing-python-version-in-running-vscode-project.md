---
publishDate: 2024-05-05
draft: false
archived: false
title: "Changing python version in a running VSCode project"
tags:
  - Python
  - VSCode
description: I was working on a python project with 3.11, and then found out I needed to upgrade to 3.12. Tried to deactivate my current venv, but VScode wouldn't let me - it threw a "Permission denied" error. The solution was pretty straightforward.
---

VSCode is doing some fancy background work to automatically activate virtual environments, (see: [Activate Environments in Terminal Using Environment Variables](https://github.com/microsoft/vscode-python/wiki/Activate-Environments-in-Terminal-Using-Environment-Variables)). That approach has a limitation though: it prevents `deactivate` from working. Luckily it can be easily fixed

## Why I'm still using venv instead of poetry or pipenv

I tried using both poetry and pipenv in the past. But I went back to vanilla venv because quite frankly I don't see the great improvements the alternatives offer. Changing a running virtual environment or disabling it is painful in all of them. Dependencies conflicts are just as hard to solve in all of them (it's a problem with python itself, not the package manager). Yes it's nice to have all the settings in a single pyproject file, but it's a very minor issue not worth the extra dependencies IMHO. And flake8 doesn't support it anyway. In the absence of measurable benefits, I prefer to stick to the simplest and most standard approach that doesn't require extra dependencies. And that would be good old venv.

## Changing python version from 3.11 to 3.12 using venv in VScode

I had my project running with python 3.11 and venv on OS X, and decided to switch to 3.12. When trying to deactivate the running environment, VSCode refused with the error

```bash
bash: /Users/fritz/.vscode-insiders/extensions/ms-python.python-2024.6.0/python_files/deactivate/bash/deactivate: Permission denied
```

Luckily [the fix is documented in the wiki](https://github.com/microsoft/vscode-python/wiki/Fixing-%22deactivate%22-command-for-Virtual-Environments). With that information, I could easily switch using [pyenv](https://github.com/pyenv/pyenv?tab=readme-ov-file#installation)

```bash
# stop the current running venv and nuke it
❯ source /Users/fritz/.vscode-insiders/extensions/ms-python.python-2024.6.0/python_files/deactivate/bash/deactivate
grep: /bin/envVars.txt: No such file or directory
grep: /bin/envVars.txt: No such file or directory
grep: /bin/envVars.txt: No such file or directory
❯ rm -rf venv

# install python 3.12 and make it default for the project
❯ pyenv install 3.12.2
❯ pyenv local 3.12.2

# create a new virtual env
❯ python -m venv venv

# reinstall the dependencies
❯ pip install -r requirements.txt

# activate the new environment
❯ source venv/bin/activate

# confirm it works
❯ python -V
Python 3.12.2
```

Then restarted VSCode, to make sure the changes were picked up, and bingo.
