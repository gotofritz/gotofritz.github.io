---
description: My python toolchain for small projects does not change often. It makes sense to save it and then replicate it whenever I start a project. Or better, use <a href="https://cookiecutter.readthedocs.io/">cookiecutter</a> and a config file to generate it
publishDate: 2022-09-24
draft: false
archived: false
title: Poetry-driven python project template with cookiecutter
tags:
  - python
---

## Creating a python project from scratch? How boring

Starting work on a new project involves many repetitive steps: setting up a virtual env, code quality tools, packages, etc. By the time I finish, I have lost half the motivation to start the project. There must be a better way. And there is - generate it all from a template! In JS-land, I used [plop](https://plopjs.com/). But for Python projects, I use [cookiecutter](https://cookiecutter.readthedocs.io/). Of course, that means starting a new project and going through the tedious steps _again_, but it is the last time!

## Tl;DR: here's the template

To use the template, just run

```bash
❯ cookiecutter gh:gotofritz/cookiecutter-gotofritz-poetry
```

## The plan

This is my plan:

1. Create a small project specimen manually and make sure it works.
1. Duplicate it and transform the duplicate into a cookiecutter template.
1. Push to github, and use cookiecutter to generate a project with it.

## Step 0: Prerequisites

For this, you need python and pyenv (I have a post on [how I installed them on OS X](installing-python-on-mac-os-x-in-2022))), plus [poetry](https://python-poetry.org/) and cookiecutter. On a mac, you can install most of them with homebrew.

## Step 1: Create a project specimen

### Specimen setup: poetry

This is a python project, so I will set it up with poetry. I already have python and pyenv installed, so I just need to make sure the expected version is there:

```bash
❯ mkdir specimen && cd specimen
❯ python -V
3.8.5
❯ pyenv local 3.10.1
...
❯ python -V
3.10.4

# this was created by pyenv local
❯ cat .python-version
3.10.4
```

I use poetry to control dependencies. It is good at managing versions and keeps most of the config in one central place. Here, I generate a minimal config file, pyproject.toml. There is no point in fine tuning it since it will be parametrised later.

```bash
❯ poetry init --no-interaction
❯ cat pyproject.toml
[tool.poetry]
name = "specimen"
version = "0.1.0"
description = ""
authors = ["Your Name <you@example.com>"]
readme = "README.md"
description = "blah blah"
license = "MIT"
readme = "README.md"
homepage = "https://github.com/blah"
repository = "https://github.com/blah"

[tool.poetry.dependencies]
python = "^3.10"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```

### Specimen setup: git

I will set up git now, so I can commit code as I create it. I am not going to push this repo to github, this is just a local repo for safety. I download a .gitignore from [TopTal](https://www.toptal.com/) and add the project to git. I name my main branch 'trunk', like in the old SVN days. I find it more meaningful than either the fashionable `main` or unfashionable `master`. I also add a user name and email for each project, since they may be for different orgs.

```bash
# toptal.com offers a free, comprehensive .gitignore generator
❯ curl -L https://www.toptal.com/developers/gitignore/api/python,visualstudiocode > \n  .gitignore
❯ git init --initial-branch=trunk
Initialized empty Git repository in /Users/ ... etc
❯ git config user.email "gotofritz@users.noreply.github.com"
❯ git config user.name "gotofritz"
❯ git add .
❯ git commit -m "initial commit"
[trunk (root-commit) 5299312] initial commit
3 files changed, 647 insertions(+)
create mode 100644 .gitignore
create mode 100644 poetry.lock
create mode 100644 pyproject.toml
```

### Specimen setup: initial folder structure

I create the skeleton folder structure. The `__init__.py` inside `src/specimen` has a version number in it, and the `__init__.py` in tests is only there to make the tests folder a package.

```bash
❯ mkdir -p src/specimen
❯ echo '__version__ = "0.1.0"' >> src/specimen/__init__.py
❯ mkdir tests
❯ touch tests/__init__.py
❯ tree .
.
├── pyproject.toml
├── src
│   └── specimen
│       └── __init__.py
└── tests
    └── __init__.py
```

### Specimen setup: wire up VSCode to the poetry python environment

Before going further, I will make sure VSCode knows about the environment and where the packages are. First, make sure the python executable from the virtual env is the one being used. The virtual env is created by poetry whenever you run any install or add command, if it doesn't yet exist. Or you can create it explicitly with `poetry shell` (if the env already exists it will just say where it is). I will do that here to be safe. `poetry env info` then gives some information about the shell.

```bash
❯ poetry shell
Spawning shell within /Users/fritz/Library/Caches/pypoetry/virtualenvs/specimen-xQlBT47A-py3.10
. /Users/fritz/Library/Caches/pypoetry/virtualenvs/specimen-xQlBT47A-py3.10/bin/activate

❯ poetry env info
Virtualenv
Python:         3.10.6
Implementation: CPython
Path:           /Users/fritz/Library/Caches/pypoetry/virtualenvs/specimen-jsQemb2j-py3.10
Executable:     /Users/fritz/Library/Caches/pypoetry/virtualenvs/specimen-jsQemb2j-py3.10/bin/python
Valid:          True

System
Platform:   darwin
OS:         posix
Python:     3.10.6
Path:       /opt/homebrew/opt/python@3.10/Frameworks/Python.framework/Versions/3.10
Executable: /opt/homebrew/opt/python@3.10/Frameworks/Python.framework/Versions/3.10/bin/python3.10
```

I want to extract the name of the python executable from that info. I could do that with `poetry env info --path`, which is just the path to the shell, and then feed it into `"$(poetry env info --path)/bin/python3.10"` but that means I would need to hard code the python3.10 part. For a more solid solution, I turn to trusty awk.

```bash
❯ poetry env info | awk '/Executable/ { print $2; exit }'
/Users/fritz/Library/Caches/pypoetry/virtualenvs/specimen-jsQemb2j-py3.10/bin/python
```

The awk command breaks down as follows:

<dl class="code-breakdown">
<dt>poetry env info</dt>
<dd>run that command, which prints a lot of text</dd>

<dt>|</dt>
<dd>pass that text on to the next command</dd>

<dt>awk</dt>
<dd>...which is awk. awk processes text one line at the time, as it passes through it, and splits it into columns</dd>

<dt>'</dt>
<dd>everything from now until the next ' is an awk program</dd>

<dt>/Executable/ &lbrace;</dt>
<dd>if the current line contains 'Executable', do all those things until the next }</dd>

<dt>print $2;</dt>
<dd>awk will split <code>Python:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.10.6</code> etc into two fields; <code>Python</code> and <code>3.10.6</code>. I want the second one, i.e. $2</dd>

<dt>exit</dt>
<dd>if one looks at the output of <code>poetry env info</code>, there are actually two lines with "Executable" in it. Luckily I want the first one, so I can simply stop after it is found</dd>

<dt>}</dt>
<dd>stop telling awk what to do if the line has "Executable" in it</dd>

<dt>'</dt>
<dd>stop telling awk what to do and run the script now</dd>
</dl>

But what do I do with that path? The manual way is to add it to VSCode with the command `CMD+SHIFT+P` to open the command palette, and select `Python: select interpreter`. In the textbox, I can then enter that path. To do it without a manual step, I add it to the VSCode workspace settings file. Note that I am using vim because VSCode does not let me treat settings.json as a normal file:

```bash
❯ mkdir .vscode
❯ vim .vscode/settings.json
[opens editor]
```

And this is the content of the settings.json file. It points to an .env file, which I will have to create. It's pretty convoluted if you ask me. But that's how it is:

_(Project idea: a VSCode plugin which automatically sets this up for you)_ <!-- markdownlint-disable-line MD036 -->

```json
{
  "python.defaultInterpreterPath": "/Users/fritz/Library/Caches/pypoetry/virtualenvs/specimen-jsQemb2j-py3.10/bin/python",
  "terminal.integrated.env.windows": {
    "PYTHONPATH": "${workspaceFolder}/src;${workspaceFolder}/tests"
  },
  "python.envFile": "${workspaceFolder}/.env"
}
```

and the .env file. NOTE: this will be ignored by most standard .gitignores, IDEs, and possibly CI/CD pipelines. Bear that in mind when creating the cookiecutter template:

```bash
# .env
WORKSPACE_FOLDER=/Users/fritz/work/cookiecutter-gotofritz-poetry/specimen
PYTHONPATH=${WORKSPACE_FOLDER}/src;${WORKSPACE_FOLDER}/tests
```

Now I can open a file in the tests folder, type `from specimen import`, and VSCode will autocomplete. If that does not work by default, it could be that VSCode has already picked a Python interpreter. That means it will ignore all the settings just created. If I then do `CMD+SHIFT+P` and `select the python interpreter`, there should be the option to use the settings file I have just created.

### Specimen setup: tests

I write the first, trivial test:

```python
# tests/test_setup.py
def test_version():
    assert True
```

Python comes with a test runner, but pytest is the most popular. Let's add it and run it:

```bash
❯ poetry add --group dev pytest
Using version ^7.1.3 for pytest

Updating dependencies
Resolving dependencies... (0.1s)

...etc
❯ poetry run pytest
=========================== test session starts ============================
platform darwin -- Python 3.10.6, pytest-7.1.3, pluggy-1.0.0
rootdir: /Users/fritz/work/cookiecutter-gotofritz-poetry/specimen
collected 1 item

tests/test_setup.py .                                                [100%]

============================ 1 passed in 0.00s =============================
```

So far so good. Let's add coverage:

```bash
❯ poetry add --group dev coverage[toml] pytest-cov
...
```

Coverage settings can be added to the pyproject.toml file:

```toml
# pyproject.toml
[tool.coverage.paths]
source = ["src"]

[tool.coverage.run]
branch = true
source = ["specimen"]

[tool.coverage.report]
fail_under = 100
show_missing = true
```

I'll run the test again. Notice the `--cov` flag to include test coverage:

```bash
❯ poetry run pytest --cov
=========================================================================================== test session starts ============================================================================================
platform darwin -- Python 3.10.6, pytest-7.1.3, pluggy-1.0.0
rootdir: /Users/fritz/work/cookiecutter-gotofritz-poetry/specimen
plugins: cov-3.0.0
collected 1 item

tests/test_setup.py .                                                                                                                                                           [100%]/Users/fritz/L....etc...
WARNING: Failed to generate report: No data to report.
...
```

The test fails fast because I did not import the code. Fair enough. I will import the version number from the code and test it is in the right format. I did not hard code the version because this would mean changing, or getting rid of, the test every time the version goes up. Instead, I test that the version number validates. It is a simple validation, but there is no benefit in getting more complicated:

```python
# tests/test_setup.py
import re
from specimen import __version__ as version


def test_version():
    assert re.match(r"^\d+\.\d+\.\d+$", version)
```

When I run the test, it breaks again. Poetry does not know how to make the test find the package `specimen` from which to load `__version__`. One would think it could work it out by itself... no.

```bash
...
ImportError while importing test module ...
...
tests/test_setup.py:2: in <module>
    from specimen import __version__ as version
E   ModuleNotFoundError: No module named 'specimen'
...
```

The solution is to add this setting to the `pyproject.toml`:

```toml
[tool.pytest.ini_options]
pythonpath = ["src"]
```

Now it runs:

```bash
❯ poetry run pytest --cov
=========================== test session starts ===========================
platform darwin -- Python 3.10.6, pytest-7.1.3, pluggy-1.0.0
rootdir: /Users/fritz/work/cookiecutter-gotofritz-poetry/specimen, configfile: pyproject.toml
plugins: cov-3.0.0
collected 1 item

tests/test_setup.py .                                               [100%]

---------- coverage: platform darwin, python 3.10.6-final-0 ----------
Name                       Stmts   Miss Branch BrPart  Cover   Missing
----------------------------------------------------------------------
src/specimen/__init__.py       1      0      0      0   100%
----------------------------------------------------------------------
TOTAL                          1      0      0      0   100%

Required test coverage of 100.0% reached. Total coverage: 100.00%

============================ 1 passed in 0.01s ============================

❯ git add . && git commit -m "add trivial test to prove test+coverage works"
```

#### Adding a Faker fixture to the template

I don’t always use mocks or patch in my tests, but I almost always need Faker. So I create a fixture for it:

````python
# tests/conftest.py
from faker import Faker
import pytest

fake = Faker()
Faker.seed(1369)


@pytest.fixture(name="fake")
def fixture_fake():
    """Pass a seeded Faker instance as a fixture"""
    return fake


```
And add it to the current test

```python
def test_version(fake):
    """Sanity check that there is a version in the right place"""
    assert re.match(r"^\d+\.\d+\.\d+$", version)
    assert fake.pystr() != version
````

### Specimen setup: Makefile

I use Makefiles for running my Python projects. I have a standard one I use when setting up a new project (see [gist](https://gist.github.com/gotofritz/62b58e89d2100448af5503940736bd1f)). From that gist, I extract this:

<!-- markdownlint-disable MD010 -->

```make
PYTHON_VERSION ?= 3.10.4
CMD := poetry run
SRC_DIR := src
TESTS_DIR := tests

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \\033[36m\\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \\033[36m%-15s\\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\\033[1m%s\\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
.PHONY: help

test: ## runs tests in the tests/ directory, with coverage
	$(CMD) pytest --cov $(TESTS_DIR)
.PHONY: test
```

<!-- markdownlint-enable MD010 -->

It has a command to show nicely formatted help, courtesy of awk:

```bash
❯ make help

Usage:
  make
  help             Display this help
  test             runs tests in the tests/ directory, with coverage
```

And, of course, it runs the tests:

```bash
❯ make test
poetry run pytest --cov tests
=========================================================================================== test session starts ============================================================================================
platform darwin -- Python 3.10.6, pytest-7.1.3, pluggy-1.0.0
rootdir: /Users/fritz/work/cookiecutter-gotofritz-poetry/specimen, configfile: pyproject.toml
plugins: cov-3.0.0
collected 1 item

tests/test_setup.py .                                                                                                                                                                                [100%]

---------- coverage: platform darwin, python 3.10.6-final-0 ----------
Name                  Stmts   Miss Branch BrPart  Cover   Missing
-----------------------------------------------------------------
tests/__init__.py         0      0      0      0   100%
tests/test_setup.py       4      0      0      0   100%
-----------------------------------------------------------------
TOTAL                     4      0      0      0   100%

Required test coverage of 100.0% reached. Total coverage: 100.00%

============================================================================================ 1 passed in 0.02s =============================================================================================

❯ git add . && git commit -m "add tests and Makefile to run them"
[trunk c15e669] add tests and Makefile to run them
 4 files changed, 263 insertions(+), 3 deletions(-)
 create mode 100644 Makefile
 create mode 100644 poetry.lock
```

### Specimen setup: formatting with black and isort

First of all, I create commands in the Makefile.

Now I can add all the code quality tools. I still find the JS ecosystem slicker than Python's. Python is still struggling with allowing static analysis tools to fix the code. But now I'll install the two python tools that do it right - Black and isort. [isort can be controversial](https://github.com/psf/black/issues/333#issuecomment-414123095), but it has always worked for me.

First, I create commands in the Makefile:

<!-- markdownlint-disable MD010 -->

```diff
+format: ## rewrites code with black and isort
+	$(CMD) black $(SRC_DIR) $(TESTS_DIR)
+	$(CMD) isort $(SRC_DIR) $(TESTS_DIR)
+.PHONY: format

+lint-black: ## checks src and tests with mypy
+	$(CMD) black --check --fast $(SRC_DIR) $(TESTS_DIR)
+.PHONY: lint-black

+lint: lint-black ## runs all static analysis tools
+.PHONY: lint

test: ## runs tests
	$(CMD) pytest --cov=src --cov-report term --cov-report html:tests/.coverage $(TESTS_DIR)
.PHONY: test

+qa: lint test ## for CI/CD. Runs all code quality tools
+.PHONY: qa

+qa-local: format qa ## for local development (before checking in). Formats code and runs qa
+.PHONY: qa-local
```

<!-- markdownlint-enable MD010 -->

The help rule shows what they all do:

```bash
❯ make help

Usage:
  make
  help             Display this help
  format           rewrites code with black and isort
  lint-black       checks src and tests with mypy
  lint             runs all static analysis tools
  test             runs tests
  qa               for CI/CD. Runs all code quality tools
  qa-local         for local development (before checking in). Formats code and runs qa
```

`make format` is for local development before committing (a git pre-commit hook could also be useful). `make lint-black` is for code quality. Note that it is run with `black --check`, so it doesn't rewrite code. `make lint` runs black and all the code quality tools I will add later. `make qa-local` is for local development, as a check before pushing. Whereas `make qa` is for CI/CD. Now I have to install...

```bash
❯ poetry add --group dev black isort
Using version ^22.8.0 for black
Using version ^5.10.1 for isort
...
```

...configure...

```diff
# pyproject.toml

+[tool.black]
+line-length = 88
+target-version = ['py310']
+include = '\.pyi?$'

+[tool.isort]
+multi_line_output = 3
+line_length = 88
+include_trailing_comma = true
```

...and test those tools

```bash
❯ make format
poetry run black src tests
All done! ✨ 🍰 ✨
3 files left unchanged.
poetry run isort src tests
Fixing /Users/fritz/work/cookiecutter-gotofritz-poetry/specimen/tests/test_setup.py

❯ git add . && git commit -m "add black and isort and amend Makefile"
4 files changed, 146 insertions(+), 6 deletions(-)
```

### Specimen setup: add flake8 and plugins

This is one of the main reasons why I need a template for my python projects. Who's got the time to remember and configure all of these every time? Anyway. I use [flakeheaven](https://flakeheaven.readthedocs.io/) to configure flake8 and its plugins from within the pyproject.toml file. It has the issue that [it doesn't support flake8 5](https://github.com/flakeheaven/flakeheaven/issues/132), but then again neither do a lot of plugins, so... sticking to flake8 4 is fine for now.

```bash
❯ poetry add --group dev flake8@^4 flakeheaven
Using version ^5.0.4 for flake8
Using version ^0.9.0 for flakeheaven
...
```

Then, in pyproject.toml... Note that in the 'tool.flakeheaven.plugins' section, I list three plugins: mccabe, pycodestyle, and pyflake. This is actually what flake8: a wrapper around those three plugins. Plus a list of optional plugins one may want to add. `["+*"]` is the notation for 'enable this plugin in its entirety' (`+` means enable, and `*` is a wildcard, i.e. 'anything')

```diff
+[tool.flakeheaven]
+exclude = ["*.md", ".env", ".git", ".gitignore"]
+format = "colored"
+max_line_length = 88
+show_source = true
+format = "grouped"

+[tool.flakeheaven.plugins]
+mccabe = ["+*"]
+pycodestyle = ["+*"]
+pyflake = ["+*"]
```

And in the Makefile

<!-- markdownlint-disable MD010 -->

```diff
lint-black: ## checks src and tests with mypy
	$(CMD) black --check --fast $(SRC_DIR) $(TESTS_DIR)
.PHONY: lint-black

+lint-flake: ## checks src and tests with mypy
+	$(CMD) flakeheaven lint $(SRC_DIR) $(TESTS_DIR)
+.PHONY: lint-flake

-lint: lint-black ## runs all static analysis tools
+lint: lint-black lint-flake ## runs all static analysis tools
.PHONY: lint
```

<!-- markdownlint-enable MD010 -->

Finally, the optional plugins and their configuration

#### flake8-bandit

Provides automated security testing. I need to force version 3.0, as the latest version requires flake8 5

```bash
❯ poetry add --group dev flake8-bandit@^3.0
Updating dependencies
...
```

Here I allow everything _except_ rule 322, which is not relevant for python 3. Also note that there is an extra setting: `[tool.flakeheaven.exceptions."tests/"]` which only applies to the tests/ folder. In this folder, I want to allow assert statement. In the src folder they shouldn't be - that's because asserts are stripped by the compiler when python run with the `-O` option (O stand for optimizer)

```diff
[tool.flakeheaven.plugins]
+flake8-bandit = ["+*", "-S322"]

+[tool.flakeheaven.exceptions."tests/"]
+flake8-bandit = ["+*", "-S322", "-S101"]

```

#### flake8-bugbear

Adds more checks to the standard flake8 plugins

```bash
❯ poetry add --group dev flake8-bugbear
Using version ^22.8.23 for flake8-bugbear
...
```

I disable B950, the line length one. Bugbear does with a 10% tolerance, I prefer the standard hard limit.

```diff
[tool.flakeheaven.plugins]
+flake8-bugbear = ["+*", "-B950"]
```

#### darglint and flake8-docstrings

**Darglint** checks whether a docstring's description matches the actual function/method implementation. **flake8-docstrings** checks compliance with Python docstring conventions (most of PEP 257)

```bash
❯ poetry add --group dev darglint flake8-docstrings
Using version ^1.8.1 for darglint
Using version ^1.6.0 for flake8-docstrings
...
```

```diff
[tool.flakeheaven.plugins]
+darglint = ["+*"]
+flake8-docstrings = ["+*"]
```

#### ...and many more

- **flake8-builtins** checks for python builtins being used as variables or parameters
- **flake8-comprehension** helps write better list/set/dict comprehension
- **flake8-isort** ensures I have run isort on the code before committing
- **flake8-mutable** prevents issues when passing mutable default values to a function (for example, `def fnc(a, b={}):`)
- **flake8-pytest-style** checks common style issues or inconsistencies with pytest-based tests
- **flake8-simplify** gives hints for simplification
- **pep8-naming** enforces basic capitalisation practices, as per PEP 8
- **pyflakes** checks for unused imports

```bash
❯ poetry add --group dev flake8-comprehensions flake8-isort flake8-mutable flake8-simplify pep8-naming pyflakes
Using version ^22.8.23 for flake8-builtins
Using version ^3.10.0 for flake8-comprehensions
Using version ^4.2.0 for flake8-isort
Using version ^1.2.0 for flake8-mutable
Using version ^1.6.0 for flake8-pytest-style
Using version ^0.19.3 for flake8-simplify
Using version ^0.13.2 for pep8-naming
...

❯ git add . && git commit -m "add flake8 plugins"
3 files changed, 539 insertions(+), 13 deletions(-)
```

```diff
[tool.flakeheaven.plugins]
+flake8-builtins = ["+*"]
+flake8-isort = ["+*"]
+flake8-comprehensions = ["+*"]
+flake8-mutable = ["+*"]
+flake8-pytest-style = ["+*"]
+flake8-simplify = ["+*"]
+pep8-naming = ["+*"]
```

### Specimen setup: safety

Safety checks third party packages against a database of known compromised ones.

```bash
❯ poetry add --group dev safety
Using version ^2.1.1 for safety
...
```

I run it from the Makefile. It could also be useful in a git hook

<!-- markdownlint-disable MD010 -->

```diff
+safety: ## tests third part packages against a database of known compromised ones
+ poetry export --with dev --format=requirements.txt --without-hashes | poetry run safety check --stdin

-qa: lint test ## for CI/CD. Runs all code quality tools
+qa: safety lint test ## for CI/CD. Runs all code quality tools
.PHONY: qa
```

```bash
❯ make safety
error: No such remote 'origin'
+=======================================================================+

                               /$$$$$$            /$$
                              /$$__  $$          | $$
           /$$$$$$$  /$$$$$$ | $$  \__//$$$$$$  /$$$$$$   /$$   /$$
          /$$_____/ |____  $$| $$$$   /$$__  $$|_  $$_/  | $$  | $$
         |  $$$$$$   /$$$$$$$| $$_/  | $$$$$$$$  | $$    | $$  | $$
          \____  $$ /$$__  $$| $$    | $$_____/  | $$ /$$| $$  | $$
          /$$$$$$$/|  $$$$$$$| $$    |  $$$$$$$  |  $$$$/|  $$$$$$$
         |_______/  \_______/|__/     \_______/   \___/   \____  $$
                                                          /$$  | $$
                                                         |  $$$$$$/
  by pyup.io                                              \______/

+=======================================================================+

 REPORT
...
+=======================================================================+

 No known security vulnerabilities found.

+=======================================================================+

  You are using Safety's free vulnerability database. This data
is outdated, limited, and
  licensed for non-commercial use only.
  All commercial projects must sign up and get an API key at
https://pyup.io

+=======================================================================+

❯ git add . && git commit -m "add safety"
 4 files changed, 242 insertions(+), 2 deletions(-)
 create mode 100644 requirements.txt
```

<!-- markdownlint-enable MD010 -->

### Specimen setup: mypy

The last code quality tool: mypy, to check for type annotations.

```bash
❯ poetry add --group dev mypy
Using version ^0.971 for mypy
...
```

and the pyproject.toml changes

```diff
+[tool.mypy]
+warn_return_any = true
+warn_unused_configs = true
```

Add to the Makefile

<!-- markdownlint-disable MD010 -->

```diff
lint-flake: ## checks src and tests with mypy
	$(CMD) flakeheaven lint $(SRC_DIR) $(TESTS_DIR)
.PHONY: lint-flake

+lint-mypy: ## checks type annotation
+	$(CMD) mypy $(SRC_DIR) $(TESTS_DIR)
+.PHONY: lint-mypy

-lint: lint-black lint-flake ## runs all static analysis tools
+lint: lint-black lint-flake lint-mypy ## runs all static analysis tools
.PHONY: lint

```

<!-- markdownlint-enable MD010 -->

Check it works

```bash
❯ make lint-mypy
poetry run mypy src tests
Success: no issues found in 3 source files

❯ git add . && git commit -m "add mypy"
 3 files changed, 67 insertions(+), 3 deletions(-)
```

### Specimen setup: README, LICENCE and static documents

The last piece of the puzzle is various static documents.

- I adapted a README.md and a CHANGELOG.md from [https://github.com/othneildrew/Best-README-Template/](othneildrew/Best-README-Template)
- the LICENSE file is standard MIT

That is all I need. Of course, I could keep adding and fine tuning stuff (and I probably will). But this is good enough to start.

## Step 2: Creating the Cookiecutter template from the specimen project

With that out of the way, I make a copy of the whole directory and start turning it into a minimal cookiecutter template. For starters, just an exact copy of the project, with only the folder name changed:

```bash
# copy somewhere out of the way
❯ cp -r specimen ../

# remove all git info
❯ rm -rf specimen/.git

# remove all caches
❯ find . -type d -name __pycache__ -exec rm -rf {} \;
find: ./tests/__pycache__: No such file or directory
find: ./src/specimen/__pycache__: No such file or directory
❯ rm -rf .pytest_cache .mypy_cache .coverage

# start turning it into a template
❯ mv specimen {{cookiecutter.project_name}}

# initial settings, just to test
❯ echo '{ "project_name": "new-project" }' > cookiecutter.json

# go somewhere new
❯ cd ../test

# try to run it
❯ cookiecutter ../cookiecutter-gotofritz-poetry/
project_name [new-project]:

# test it
❯ tree -a
.
└── new-project
    ├── .env
    ├── .gitignore
    ├── .python-version
    ├── .vscode
    │   └── settings.json
    ├── CHANGELOG.md
    ├── LICENSE.md
    ├── Makefile
    ├── README.md
    ├── poetry.lock
    ├── pyproject.toml
    ├── requirements.txt
    ├── src
    │   └── specimen
    │       └── __init__.py
    └── tests
        ├── __init__.py
        └── test_setup.py

5 directories, 14 files
```

That's it, it works. But that's not a real test, it's just a sanity check. I can do better.

### Testing a cookiecutter template with pytest-cookies

Before attempting testing, I should apply the same code quality tooling as in the template. I copy the Makefile, and cannibalize the bits of the pyproject.toml I need, then run poetry install. You can see the result [in the template repo](https://github.com/gotofritz/cookiecutter-gotofritz-poetry). Now, on with the testing.

Cookiecutter templates can, and should, be tested with `pytest-cookies`.

```bash
❯ cp ..
❯ poetry add -D pytest-cookies
Using version ^0.6.1 for pytest-cookies
...
❯ mkdir tests
❯ code tests/test_create_template.py
[opens editor]
```

The initial test is simple, it checks that the template is created:

```python
def test_run_cookiecutter_result(cookies):
    """Create a new plugin via cookiecutter and run its tests."""
    project_name = "sancho panza"
    result = cookies.bake(
        extra_context={
            "project_name": project_name,
        }
    )

    assert result.exit_code == 0
    assert result.exception is None
    assert result.project_path.name == project_name
    assert result.project_path.is_dir()

    readme_path = result.project_path / "README.md"
    assert readme_path.is_file()

    readme = open(readme_path, "r").read()
    assert project_name in readme
    assert "project_name" not in readme

```

The pytest_cookies package injects a `cookies` fixture in all your tests. It is a wrapper around cookiecutter that makes it run in a private directory. The run returns an instance of the Result class, which includes almost all the properties in the example above. Here, I check the general idea of it and one of the generated files.

Now, I just need to go through each file and directory and see what can be parametrised and moved to `cookiecutter.json`. For example, replace the content of `/.python-version` with:

```json
{{cookiecutter.python_version}}
```

and then add it to the `cookiecutter.json`

```json
{ "project_name": "new-project", "python_version": "3.10.4" }
```

and so on.

At the end of this step I'm left with this directory tree

```bash
❯ cd tree ..
├── cookiecutter.json
├── pyproject.toml
├── specimen
└── {{cookiecutter.project_name}}
    ├── CHANGELOG.md
    ├── LICENSE.md
    ├── Makefile
    ├── README.md
    ├── poetry.lock
    ├── pyproject.toml
    ├── requirements.txt
    ├── src
    │   └── specimen
    │       └── __init__.py
    └── tests
        ├── __init__.py
        └── test_setup.py
```

And a `cookiecutter.json` with

```json
{
  "project_name": "new-project",
  "verbose_project_name": "My Awesome Project",
  "full_name": "Your Name",
  "github_username": "github_username",
  "mastodon_handle": "@your_name@mastodon.social",
  "mastodon_url": "https://mastodon.social/@your_name",
  "project_description": "this is a project",
  "python_version": "3.10.4"
}
```

I will not test every value. However, I will expand the existing test to add a few more values that should go in the same file. I can also get slightly fancier.

### Automatically run tests in a generated cookiecutter template

First, I can test the generated files to see if none of them have `{{cookiecutter.xxxx}}` in them. That is easy. The Result object gives me a Posix path of the root of the generated project. So, I can call its glob method to get the whole folder tree below it.

```python
def test_cookiecutter_generated_files(cookies):
    """tests the generated files names make sense"""
    re_bad = re.compile(r"{{\s?cookiecutter\..*?}}")
    result = cookies.bake()

    assert all(
        re_bad.search(str(file_path)) is None
        for file_path in result.project_path.glob("*")
    )
```

Second, I can run the project's own tests after it is generated. It doesn't get safer than that! Again, thanks to _pytest-cookies_, which generates the project in a sandboxed folder and then provides a Posix object of its location.

```python
def test_cookiecutter_make_qa(cookies):
    """runs tests on the generated dir"""
    result = cookies.bake()

    make_proc = subprocess.Popen(
        ["/usr/bin/make", "lint-flake"],
        shell=False,  # noqa
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        cwd=result.project_path,
    )
    # stdout, stderr are for debuggin
    stdout, stderr = make_proc.communicate()
    assert make_proc.returncode == 0
```

Almost there. Now I need to take care of the dynamically generated values.

### Using post generation hooks in Cookiecutter templates

First the easy one. The `.env` file need to include the path of the directory of the newly created project. I write a test for that.

```python
def test_cookiecutter_env_file(cookies):
    """ensures the .env file contains what I expect"""
    result = cookies.bake()

    env_path = result.project_path / ".env"
    assert env_path.is_file()

    with open(env_path, "r") as f:
        file_content = f.read()
        assert f"={result.project_path}\n" in file_content
```

Luckily, the cwd is made available in cookiecutter as "\_output_dir". So the .env file in the template simply becomes

```sh
WORKSPACE_FOLDER={{cookiecutter._output_dir}}/{{cookiecutter.project_name}}
PYTHONPATH=${WORKSPACE_FOLDER}/src;${WORKSPACE_FOLDER}/tests
```

Now the python executable path. This is tricky. It can only be run once the project is generated and `poetry install` has run. But then the cookiecutter variables will no longer be available. So I have to come up with my own replacement engine. Not too happy about that, but it's only a small string fragment:

First I set up the json template. `<interpreter_path>` will be the variable I need to replace.

```diff
{
-  "python.defaultInterpreterPath": "/Users/fritz/Library/Caches/pypoetry/virtualenvs/cookiecutter-gotofritz-poetry-wyPgAlEH-py3.10/bin/python",
+  "python.defaultInterpreterPath": "<interpreter_path>",
  "terminal.integrated.env.windows": {
    "PYTHONPATH": "${workspaceFolder}/src;${workspaceFolder}/tests"
  },
  "python.envFile": "${workspaceFolder}/.env"
}
```

Then the cookiecutter hook installs the poetry dependencies, updates the settings file, and creates the first git commit. Cookiecutter offers two hooks: `pre_gen_project.sh` and `post_gen_project.sh`. Both live in the hooks directory and can be either python or shell scripts. <i>pre_gen_project</i> runs before generating the project. It is mostly used for validation. Since it cannot change the values loaded from `cookiecutter.json`, its usefulness is limited. <i>post_gen_project</i> runs after the build.

I will use the _awk_ command from earlier to determine the location of the python executable. This will be fed into a sed command, which will replace the string in the json file. Sed and awk are similar CLI programs. They both are stream based. Meaning you feed text into them, and they spit text out at the other end. You can manipulate the text before it is spit out. But there is only one pass. Awk assumes the input text is spreadsheet-like and tries to split it into columns. Then it gives access to the individual columns. Sed treats lines of text as lines and allows overwriting them before spitting them out again.

```bash
# hooks/post_gen_project.sh

#! /usr/bin/env bash

pyenv local
poetry install

# location of python executable
EXECUTABLE=$(poetry env info | awk '/Executable/ { print $2; exit }')

# replace the placeholder in the json file
sed -i.bak "/<interpreter_path>/ s#<interpreter_path>#$EXECUTABLE#" \
  .vscode/settings.json

# the sed program created a backup (with the `-i.bak` part). Remove it
rm .vscode/settings.json.bak

# create the first git commit
git init
git add .
git commit -m "generate project with cookiecutter"
```

## Step 3: push to github and test

The final test is to push the template to github and try to fetch it from there

```bash
❯ cookiecutter gh:gotofritz/cookiecutter-gotofritz-poetry --no-input
3.10.4
Updating dependencies
Resolving dependencies... (0.5s)
...

❯ cd new-project/
❯ make qa
...
```

And that's finally it. A basic Python project template. It's very bare - it has neither CLI framework nor DS tools nor a web server. Just the code quality tools and VSCode. But it's a starting point, and I'll be adding to it. Hope you find it useful.

## Acknowledgements

Half way through writing this post I came across a very similar one from PythonCheatSheet: <https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2>. I carried on with mine, regardless.

The awk command comes from SO, of course <https://stackoverflow.com/questions/15331259/use-awk-to-find-first-occurrence-only-of-string-after-a-delimiter>

Discussion on how to fetch the executable path on the CLI for poetry env command <https://github.com/python-poetry/poetry/pull/731>

More info on how the VSCode settings work <https://stackoverflow.com/questions/53653083/how-to-correctly-set-pythonpath-for-visual-studio-code>

Pytest coverage and code layout <https://browniebroke.com/blog/convert-existing-poetry-to-src-layout/>

The article that showed me about Flakeheaven
<https://dev.to/bowmanjd/using-flake8-and-pyproject-toml-with-flakehell-1cn1>

A README file template <https://github.com/othneildrew/Best-README-Template/blob/master/CHANGELOG.md>
