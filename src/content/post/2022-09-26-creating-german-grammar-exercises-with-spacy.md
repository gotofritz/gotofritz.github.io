---
description: Textbooks are good for learning grammar, but their exercises tend to be too limited. Doing 10 or 12 exercises once is a good start but does not come anywhere near what I need. Which is hundreds of exercises over the course of days, weeks even.
publishDate: 2022-09-26
draft: true
archived: false
title: A simple Python app for German grammar exercises, with SpaCy
tags:
  - german
  - python
  - spacy
---

## What I'm trying to do

Oh, the never ending quest to master German. I am at the stage where I get it most of it right and can hold conversations. But I still make a lot of small mistakes. I do take language classes every so often to raise the level. But although the improvement is visible, it never fully eradicates those mistakes. I need many more repetitions than the the 10-12 offered by textbooks. In other words, I need Python.

Textbooks exercises seem to follow a few patterns. Sentences with words in the wrong order, and missing words seem to be the most popular. It shouldn't be too hard to replicate those exercises. Better, to _automate_ this replication so that I have an endless supply of exercises. I can use [the free dataset Timo Block made available on GitHub](https://tblock.github.io/10kGNAD/) as a starting point.

### The end result

The end result will have some similarities with flashcards software. Particularly [Anki](https://apps.ankiweb.net/), which I use a lot. I will use fall back on Anki concepts when needed, as I have vague plans to integrate some of these exercises with it. But what I am building now is a self contained CLI script. It will pick a German document and feed it to the interface sentence by sentence. The UI will obscure, or partially obscure, parts of the sentences. The task is to guess the obscured words. The first iteration will obscure "[adpositions](https://universaldependencies.org/u/pos/ADP.html)", (or "prepositions" in traditional grammar). And will partially obscure "[determiners](https://universaldependencies.org/u/pos/DET.html)" (articles and some pronounous and some adjectives). An example should make this clearer

```bash
foo foo [nach dem] bar bar => foo foo [xxxx dxxx] bar bar
foo foo [in diesem]  bar bar => foo foo [xxxxx diesxxx] bar bar
foo foo [mit einem] bar bar => foo foo [xxxx einxxx] bar bar
```

A nice to have would also be to insert trick ones where there shouldn't be any. For example before years - it's a common mistake by English speakers to say "In 1989...", but in German it's either "1989..." or "Im Jahr 1989..."

### The plan

1. The raw dataset is a CSV file with a list of "docs" and labels. I don't need the label, but I need each doc's sequential "sentences". That makes the CSV in its current form unsuitable. I will need to preprocess the CSV file
1. A repository will load up the persistent storage (the CSV file). It will fetch a 'next' sentence whenever asked. It may also save updated versions of the CSV file.
1. An exercise generator will ask the repository for a sentence. It will then use NLP to turn into an exercise.
1. A session service will ask the exercise generator for N exercises. It will organise them as a queue, and will provide them to the UI when asked. It will also reorganise the queue depending on the outcome of the exercise.
1. The UI will ask the session service for the next exercise, display it, and allow the user to guess. It will then communicate success / error to the session service and get the next exercise.

## Step 0: Setting up the python project

For that I simply use [my trusty cookiecutter template](/blog/creating-a-poetry-driven-python-project-template-with-cookiecutter)

```bash
❯ cookiecutter gh:gotofritz/cookiecutter-gotofritz-poetry
You've downloaded /Users/fritz/.cookiecutters/cookiecutter-gotofritz-poetry before. Is it okay to delete and re-download it? [yes]:
project_name [new-project]: german-learning
package_name [germanlearning]:
verbose_project_name [My Awesome Project]: German Language Drills
full_name [Your Name]: gotofritz
github_username [github_username]: gotofritz
mastodon_handle [@your_name@mastodon.social]: @gotofritz@mastodon.social
mastodon_url [https://mastodon.social/@your_name]: https://mastodon.social/@gotofritz
project_description [this is a project]: Some basic German language drills
python_version [3.10.4]: 3.10.6
3.10.6
Updating dependencies
Resolving dependencies... (0.4s)
...
```

And I'm good to go. All I need is to create a folder with the article data

```bash
❯ mkdir data
❯ cp ~/Downloads/articles.csv data/
❯ tree .
.
├── CHANGELOG.md
├── LICENSE.md
├── Makefile
├── README.md
├── data
│   └── articles.csv
├── mkdir
├── poetry.lock
├── pyproject.toml
├── src
│   └── germanlearning
│       ├── __init__.py
│       └── __pycache__
└── tests
    ├── __init__.py
    ├── __pycache__
    ├── conftest.py
    └── test_setup.py
```

## Creating a CLI app for prepositions training

### Step 1: Preprocessing the documents

So the source data is a csv where each row has two fields: a label which I don't need, and a "doc" which I need to split into "sentences". I can think of two ways of handling that:

1. remove the labels from the CSV and turn it into a TXT with a doc on each line. The repository will then be responsible for lazily splitting a doc in sentences, and holding them in memory
1. remove the labels and split each row's single doc field into multiple sentence fields. The repository will not do any splitting

(1) is easier on the pre-processing side; it can be a one line awk command. But I think (2) is cleaner. Typically a repository only knows about I/O and interactions with the persistent layer. It shouldn't need to know how to extract sentences from docs.

I will use [SpaCy](https://spacy.io/) to split docs into sentences. Before using it I need not only to install SpaCy, but to download the model too. [A list of downloadable language models](https://spacy.io/usage/models) is available on the SpaCy website.

```bash
❯ poetry add spacy
Using version ^3.4.1 for spacy
...
❯ python -m spacy download de_core_news_sm
Collecting de-core-news-sm==3.4.0
...
```

This is the script I came up with. Nothing fancy and no tests, it's just a one off script. No CLI frameworks, it simply reads input from sys.argv.

```python
# scripts/convert_raw_csv_to_something_usable.py
"""Converts a raw document with a full article per line to one split into sentences

Usage: python scripts/convert_raw_csv_to_something_usable.py data/articles.csv data/docs.tsv
"""

import re
import sys
from pathlib import Path

import spacy

MIN_WORDS_IN_SENTENCE = 3


def die(msg: str):
    """print an error message and exit"""
    print(msg)
    exit(1)


if len(sys.argv) != 3:
    die("Expecting two arguments: path to input file and path to output file")

input_path = Path(sys.argv[1])
if not input_path.exists():
    die(f"Path doesn't exist {input_path}")

output_path = Path(sys.argv[2])
if not output_path.parent.exists():
    die(f"Path doesn't exist {output_path}")
if output_path.suffix != ".tsv":
    die(f"Path should be a tsv file {output_path}")

# loads the fast model for German
nlp = spacy.load("de_core_news_sm")

# ARTICLES_FILE is a CSV with two semicolon separated fields; I only care about the second.
# Also remove any tabs, as they will interfere with
noise_remover = re.compile(r"^.+?;|\t+")
with open(input_path, "r") as csvfile:
    docs = [noise_remover.sub(" ", line).strip() for line in csvfile]

output_lines = []
for doc in docs:
    # nlp(doc).sent splits a doc into sentences
    sents = [sent.text for sent in nlp(doc).sents if len(sent) >= MIN_WORDS_IN_SENTENCE]
    output_lines.append("\t".join(sents) + "\n")

print(output_lines)
with open(output_path, "w") as csvfile:
    csvfile.writelines(output_lines)
```

It runs for about 10 mins on an M1 laptop, but gets the job done

<!-- spell-checker: disable -->

```bash
❯ python scripts/convert_raw_csv_to_something_usable.py data/articles.csv data/docs.tsv

# look at first line of source
❯ head -n1 data/articles.csv  | fold -w 52
Etat;Die ARD-Tochter Degeto hat sich verpflichtet,
ab August ein er Quotenregelung zu folgen, die für
die Gleichstellung von Regi sseurinnen sorgen soll.
In mindestens 20 Prozent der Filme, die die
ARD-Tochter Degeto produziert oder mitfinanziert,
sollen ab Mitte August Frauen Regie führen.
Degeto-Chefin Christine Strobl folgt mit dieser
Selbstverpflichtung der Forderung von Pro Quot e
Regie. Die Vereinigung von Regisseurinnen hatte im
vergangenen Jahr eine Quotenregelung gefordert, um
den weiblichen Filmschaf fenden mehr Gehör und
ökonomische Gleichstellung zu verschaffen.  Pro
Quote Regie kritisiert, dass, während rund 50
Prozent der R egie-Studierenden weiblich seien, der
Anteil der Regisseurinnen bei Fernsehfilmen nur bei
13 bis 15 Prozent liege.  In Österreich sieht die
Situation ähnlich aus, auch hier wird von
unterschied lichen Seiten Handlungsbedarf
angemahnt. Aber wie soll dieser au ssehen? Ist die
Einführung der Quotenregelung auch für die öster
reichische Film- und Fernsehlandschaft sinnvoll?
Diskutieren Sie im Forum.

# Try to see whether it has split them into fields
❯ head -n1 data/docs.tsv  |  awk -F\t '{ print $2 }' | fold -w 52
In mindestens 20 Prozent der Filme, die die
ARD-Tochter Degeto p roduziert oder mitfinanziert,
sollen ab Mitte August Frauen Regie führen.
```

<!-- spell-checker: enable -->

### Step 2: a repository for German sentences

The repository module is responsible for

- interacting with the persistent storage
- fetching a 'next' sentence from the doc currently marked as 'current'
- if no doc is marked as 'current', one will be picked randomly
- when the last sentence of a doc is picked, the 'current' marker is cleared

In my personal projects I like using TDD, so I'll start with a test

```python
# tests/repositories/tsv_sentence_repository.py
from germanlearning.repositories.tsv_sentence_repository import TsvSentenceRepository
from tests.conftest import is_sentence

def test_first_sentence_from_random_article():
    """Happy path for get_sentence"""
    sut = TsvSentenceRepository()
    assert is_sentence(sut.next_sentence())

```

The <i>is_sentence</i> is an as yet to coded util function. It can easily be overcomplicated, so I will create tests for it too.

```python
# tests/test_utils.py
from tests.conftest import is_sentence

are_sentences = frozenset([
        "By default, the Faker generates the data in English.",
        "What if you - want localized data?",
        "There are two: different; types of provides!",
    ])

def test_is_sentence_ends_with_punctuation():
    """True if it ends with ?.! and false otherwise"""
    assert all(is_sentence(sentence) for sentence in are_sentences)

    should_not_pass = [sentence[:-3] for sentence in are_sentences]
    assert not any(is_sentence(sentence) for sentence in should_not_pass)
```

And a few more; the [test file is available on github](TODO). But back to the task at and. Here's the minimum amount of scaffolding needed to run the tests...

```python
class TsvSentenceRepository:
    """Simple TSV based sentence repository

    Reads sentences from disk storage and allows a consumer to request
    the next one

    next_sentence: returns the next unread sentence from current doc

    """

    def __init__(self):
        """Read document source and stores all line boundaries"""

    def next_sentence(self) -> str:
        """Return a sentence from the data store"""
        return ""
```

...and fail them, as expected - I am returning an empty string after all

```bash
❯       assert is_sentence(sut.get_sentence())
E       AssertionError: assert False
E        +  where False = is_sentence('')
```

Returning a sentence requires a few steps. First the repo must get hold of the data file and open it. As this is a first iteration, I'm going to keep the 'getting hold of the data' part as simple as possible. But a config file in which to store the location of the data file is a must. Even at this early stage, coupling the location of the code and the data is a bad idea.

```python
# src/germanlearning/config.py

from pathlib import Path

ROOT_DIR = Path.cwd()
DATA_DIR = ROOT_DIR / "data"
DOCS_FILE = DATA_DIR / "docs.tsv"
```

Since the .tsv file could be quite large, I'd rather not load it in memory. Instead the `__init__` method will store all the boundaries between lines. When needed, it will use that information to fetch a doc's sentences. And finally, next_sentence will pop the next sentence from memory. When the repo runs out of sentences, it will fetch a new doc. For now it's always the same doc that is being fetched. That's enough to pass the test.

```python
from typing import List

from germanlearning.config import DOCS_FILE

SENTENCES_SEPARATOR = "\t"


class TsvSentenceRepository:
    """Simple TSV based sentence repository

    Reads sentences from disk storage and allows a consumer to request
    the next one

    fetch_doc: reads a doc's list of sentences from storage
    next_sentence: returns the next unread sentence from current doc

    """

    def __init__(self):
        """Read document source and stores all line boundaries"""
        self.doc_boundaries: List[int] = [0]
        self.current: List[str] = []

        # SIM115: file kept open on purpose to minimise I/O activity
        self.docs = open(DOCS_FILE, "rt")  # noqa SIM115
        while self.docs.readline():
            self.doc_boundaries.append(self.docs.tell())

    def next_sentence(self) -> str:
        """Return a sentence from the data store"""
        self._ensure_doc()
        return self.current.pop(0)

    def fetch_doc(self, index=0) -> List[str]:
        """Use the data boundaries to find a list of sentences for a given line"""
        self.docs.seek(self.doc_boundaries[index])
        return str(self.docs.readline()).split(SENTENCES_SEPARATOR)

    def _ensure_doc(self):
        """Ensure there is a current doc"""
        if not self.current:
            self.current = self.fetch_doc()
```

A quick smoke test on the REPL shows it works. Calling `t.next_sentence` a few times shows the repo going through all the sentences, and then starting again when they run out

```python
>>> from germanlearning.repositories.tsv_sentence_repository import TsvSentenceRepository
>>> t = TsvSentenceRepository()
>>> t.next_sentence()
'Die ARD-Tochter Degeto hat sich verpflichtet, ab August einer Quotenregelung zu folgen, die für die Gleichstellung von Regisseurinnen sorgen soll.'
>>> t.next_sentence()
'In mindestens 20 Prozent der Filme, die die ARD-Tochter Degeto produziert oder mitfinanziert, sollen ab Mitte August Frauen Regie führen.'
..
>>> t.next_sentence()
'Die ARD-Tochter Degeto hat sich verpflichtet, ab August einer Quotenregelung zu folgen, die für die Gleichstellung von Regisseurinnen sorgen soll.'
...
```

There are a lot of improvements to be done - for example the docs file is hard coded, there is no error handling, and so on. But at this stage the aim is to get a working MVP, so I'll move on to the next step.

### Step 3: generating the exercises

This module will take a German sentence as input. It will turn it into a data structure with some slots at various stages of guessing.

```bash
foo foo nach  dem  bar bar für   einen pop pop
foo foo xxxxx dxxx bar bar xxxxx einxx pop pop
```

How best to represent that? I'll go for a sequence of tokens. Some will be strings ("foo foo") and some will be guessable slots ("nach dem/xxxxx dxxx"). Anki has a similar concept to "guessable slot", i.e., '[cloze deletions](https://docs.ankiweb.net/editing.html#cloze-deletion)'. I will use that name.

#### Cloze: an entity to represent a guessable slot within exercise

The cloze will be initialised with the string to be guessed and the obfuscated version. It will keep an internal state: guessed or not guessed. The behaviours it will need to implement are

- return the correct string representation depending on state (method: `__str__`)
- return the state as a boolean (property: `guessed`)
- accept a guess and change state accordingly; return state (method: `guess(str)`)
- being an entity, it has a unique, immutable ID

That's it for now - no hints like Anki, no counting wrong attempts, nothing fancy. Just focus on the minimal functionality to get something that works. As usual I'll start with a test, and watch it fail. "fake" is a Faker instance which is included in the cookiecutter template which generates the project. I use it all the time.

```python
# tests/models/test_cloze_entity.py
from germanlearning.models import Cloze

def test_new_cloze_returns_obfuscated(fake):
    """When a cloze is created, it will return the obfuscated text in string context"""
    text = fake.pystr()
    obfuscated = fake.pystr()
    sut = Cloze(text=text, obfuscated=obfuscated)
    assert f"{sut} 123" == f"{obfuscated} 123"
```

What I am creating is essential an Entity, in DDD speak, and will live in the /models folder. I use pydantic for enforcing validation and some type checking. Pydantic is already installed because it's a dependency of SpaCy. Sadly SpaCy decided to pin its versions to ^1.7.4, so I am forced to do the same

```bash
❯ poetry add pydantic@^1.7
Updating dependencies
Resolving dependencies... (0.3s)
...
```

Never mind. On with the model. First of all I create an `__init__.py` file, since this is a new folder

```python
# src/models/__init__.py
from .cloze_entity import Cloze
```

Then the Cloze itself

```python
# src/models/cloze_entity.py
from pydantic import BaseModel, Field


class Cloze(BaseModel):
    text: str = Field(description="The text to be guessed")
    obfuscated: str = Field(description="Shows the text as")
```

The test will fail with a more sensible message

```bash
❯ make test
poetry run pytest tests
======================== test session starts ========================
...
❯       assert sut == obfuscated
E       AssertionError: assert Cloze(text='FdscvPGgwNGEUxZCvWnj', obfuscated='ZGErTPzfeNSnbSFvvtPR') == 'ZGErTPzfeNSnbSFvvtPR'
```

Getting closer. All I need to pass the text is a `__str__` method

```diff
class Cloze(BaseModel):
    text: str = Field(description="The text to be guessed")
    obfuscated: str = Field(description="Shows the text as")

+    def __str__(self) -> str:
+        """In string context it should return the string that reflects its state"""
+        return self.text if self.guessed is True else self.obfuscated
```

The next requirements are about being able to guess, and the state changing. Here's the test...

```python
# tests/models/test_cloze_entity.py

def test_cloze_guess(fake):
    """When you guess the state can change"""
    text = fake.pystr(count=12)
    obfuscated = fake.pystr()
    sut = Cloze(text=text, obfuscated=obfuscated)
    assert sut.guessed is False
    assert sut.guess(fake.pystr(count=10)) is False
    assert sut.guessed is False
    assert sut.guess(text)
    assert sut.guessed is True
```

And the code that makes it pass

```diff
class Cloze(BaseModel):
    text: str = Field(description="The text to be guessed")
    obfuscated: str = Field(description="Shows the text as")
+    guessed = False

    def __str__(self) -> str:
        """In string context it should return the string that reflects its state"""
        return self.text if self.guessed is True else self.obfuscated

+    def guess(self, candipublishDate: str) -> bool:
+        """If the candidate str is the same as the text, it's guessed"""
+        self.guessed = candidate == self.text
+        return self.guessed
```

I can also improve the previous test to ensure the string representation changes to mimic the state. It should still pass.

```diff
def test_new_cloze_returns_obfuscated(fake):
    """When a cloze is created, it will return the obfuscated text in string context"""
    text = fake.pystr()
    obfuscated = fake.pystr()
    sut = Cloze(text=text, obfuscated=obfuscated)
    assert f"{sut} 123" == f"{obfuscated} 123"

+    sut.guess(fake.pystr())
+    assert f"{sut} 123" == f"{obfuscated} 123"

+    sut.guess(text)
+    assert f"{sut} 123" == f"{text} 123"
```

And it does. The last requirement is an immutable ID field.

```python
# tests/models/test_cloze_entity.py

def test_cloze_has_unique_id(fake):
    """Like all entities, a Cloze has an immutable, unique ID"""
    sut = Cloze(text=fake.pystr(), obfuscated=fake.pystr())

    immutable_id = sut.id
    assert immutable_id

    with pytest.raises(ValueError, match='"Cloze" object has no field "id"'):
        sut.id = fake.uuid4()  # type: ignore

    assert sut.id == immutable_id
```

To make a Pydantic field immutable after initialisation, I create a similarly named private field (in this case, "\_id"). It doesn't _need_ to be similarly named, but it would just be confusing if it wasn't. Then I add a @property with the name I want to expose. But I will not add a setter - therefore there will be no way to overwrite the id

```diff
# src/models/cloze_entity.py

class Cloze(BaseModel):
    text: str = Field(description="The text to be guessed")
    obfuscated: str = Field(description="Shows the text as")
    guessed: bool = Field(False, read_only=True)
+    _id: UUID = uuid4()

+    @property
+    def id(self):
+        """This is read only"""
+        return self._id

-    @id.setter
-    def id(self, whatever):
-        """You don't need this in this case"""
```

This is enough for now - all tests pass. As usual, there's plenty more I could do. But right now the focus is on getting a working prototype

##### Creating a Faker provider for the Cloze

Actually, that was _almost_ all. Another thing I tend to do when creating data structures, is to create Faker providers for them. It makes stubbing them in tests much more easier. I have [a post about creating Faker providers](/blog/create-fake-dataset-fixtures-testing-with-faker), so I won't repeat myself here.

#### An exercise entity

An Exercise is also an entity; it contains a list of either strings or clozes. Since it is an entity, some of the tests will be the same as Cloze. That's repetitive and hence error prone. It's time for the first refactor! I will extract the entity-ness of Cloze into a BaseEntity class. Since I'm refactoring, no need for new tests just yet; the existing ones should do.

I extract the \_id/id handling part to a new class, BaseEntity...

```python
# src/models/base_entity.py
"""Represent a very basic DDD entity"""

from uuid import UUID, uuid4

from pydantic import BaseModel

class BaseEntity(BaseModel):
    """Represents a very basic DDD entity

    An entity has an immutable ID, and then some ValueObjects.
    """

    _id: UUID = uuid4()

    @property
    def id(self):
        """This is read only"""  # noqa D401
        return self._id
```

...and make the Cloze inherit from it

```diff
# src/models/cloze_entity.py

-class Cloze(BaseModel):
+class Cloze(BaseEntity):
    text: str = Field(description="The text to be guessed")
    obfuscated: str = Field(description="Shows the text as")
    guessed: bool = Field(False, read_only=True)
-    _id: UUID = uuid4()

-    @property
-    def id(self):
-        """This is read only"""
-        return self._id

```

The tests still pass. I move the id test from test_cloze to a new test file, `test_base_entity.py`, and commit.

I'm read to start on the Exercise entity. The requirement:

- it consists of a list of tokens which can be either strings or Clozes
- there must be at least one of each in the list
- it can provide a guessed flag, which is true if _all_ Clozes are guessed, false otherwise
- it returns the current string representation of the exercise, with each Cloze either obfuscated or not depending on status
- it can receive a guess for a given Cloze, and flip its state accordingly
- it can return a list of all Clozes

So there are quite a lot of requirements. I'm not going to go through all of them here; this entity is not that interesting. It's similar to Cloze but with a couple more bells and whistles. Just like a Cloze, I built a fake for it. If interested, [the code is available in the repo](TODO).

#### An exercises service

OK, I have a data structure for an exercise. But what will I do with it? A service will provide them to the rest of the application. The requirements for the service are:

- it can be asked to provide N exercises, where N is one by default
- these exercises will be based on raw sentences from the sentence repository
- it will not remember any information about the last fetched sentence, but it will rely on the repository for that

This is just the bare minimum for a working MVP. But it's totally non-scalable. In a production app I'd either cache or precompute the exercises. But on with the tests. Starting with the simplest step, make sure I get a list back

```python
# tests/services/guess_preposition_exercise_service.py

from germanlearning.models.exercise import Exercise
from germanlearning.services.guess_preposition_exercise_service import (
    GuessPrepositionExerciseService,
)

def test_return_an_exercise_by_default():
    sut = GuessPrepositionExerciseService()
    exercises_got = sut.get()
    assert isinstance(exercises_got, list)
```

This is the minimal code that fails the test _properly_. Note that failing the test properly is part of the process. The point is to avoid tests that never fail, or fail for the wrong reason. Failing with "method not implemented" or similar is not useful. The test should fail with an _AssertionError_, so that I know it's by design. Not only that, but it should be the _last_ assertion. Again, it's all about ensuring failures are controlled, not just coincidental. The worst thing in testing is tests that keep on passing after you have changed the code. [Mark Seemann's "A red-green-refactor checklist "](https://blog.ploeh.dk/2019/10/21/a-red-green-refactor-checklist/) is a good read on this topic

The minimal code that breaks the test is

```python
# germanlearning/services/guess_preposition_exercise_service.py

class GuessPrepositionExerciseService:
    """Fetch raw sentences from Repository and generate Exercises on demand"""

    def get(self):
        """Provide exercises on demand"""
        return ""
```

Which indeed fails with my last assertion

```diff
    def test_return_an_exercise_by_default():
        sut = GuessPrepositionExerciseService()
        exercises_got = sut.get()
❯       assert isinstance(exercises_got, Exercise)
E       AssertionError: assert False
E        +  where False = isinstance('', Exercise)
```

And I can easily fix by turning the return value to a []

```python
# germanlearning/services/guess_preposition_exercise_service.py

class GuessPrepositionExerciseService:
    """Fetch raw sentences from Repository and generate Exercises on demand"""

    def get(self):
        """Provide exercises on demand"""
        return []
```

I tend to avoid mocks when building prototypes. They often end up taking up a lot of development effort. But to trust a service that transforms data, one needs to test it with different data. For that, I need the ability to inject different data repositories into the service. I.e., I need mocks, and dependency injection. I start by writing a test for that.

```python
# tests/services/guess_preposition_exercise_service.py

def test_can_inject_a_repo_in_service():
    """Use dependency injection to push repo into service"""

    repo = mock.MagicMock(spec=TsvSentenceRepository)
    sut = GuessPrepositionExerciseService(repository=repo)
    sut.get()
    repo.next_sentence.assert_called_once()
```

Which fails, as expected, but can be fixed with

```diff
# germanlearning/services/guess_preposition_exercise_service.py

class GuessPrepositionExerciseService:
    """Fetch raw sentences from Repository and generate Exercises on demand"""

+    repository: TsvSentenceRepository | None = Field(
+        default_factory=TsvSentenceRepository,
+        description="the source of sentences",
+    )

+    class Config:
+        # this is needed otherwise pydantic will complain
+        arbitrary_types_allowed = True

    def get(self):
        """Provide exercises on demand"""
+        sentence = self.repository.next_sentence()  # type: ignore
-        return ""
+        return [sentence]
```

Now finally generating an exercise. I need to pick some German sentences to use in the mock. I do it with the following bash command. It sorts all the lines randomly. Then it passes them to head which picks the top (1). The selected, random line has its tabs separated by a \n character

```bash
❯ sort -R data/docs.tsv | head -n1 | awk '{gsub(/\t/,"\n"); print}
Kapitalkontrollen bleiben in Kraft –
Bürger bekommen erste Steuererhöhungen zu spüren –
Neuer Arbeitsminister kündigt harte Verhandlungen an.
Auch mit Kanzlerin Angela Merkel sei Schäuble in einem Riesenkonflikt.
...
Er wird voraussichtlich 2016 von der Zhejiang University in Hangzhou an das Department für Molekulare Evolution und Entwicklung der Universität Wien wechseln.
...
```

I'm going to skip the rest of the TDD journey, fun as it was, and jump straight to the end result. Here's probably the most important test (the rest are avaialble [on github](TODO)). It uses the same mock as before, but this time it also returns a sentence (the `repo.next_sentence =...` line). The sentence is [parametrised](https://docs.pytest.org/en/7.1.x/example/parametrize.html), meaning the test will be run once for each sentence.

```python
# tests/services/test_guess_preposition_exercise_service.py

from tests.testsupport import sentences_as_arrays as sentences
...

@pytest.mark.parametrize(
    "sentence",
    [
        sentences.with_adp,
        sentences.manche,
        sentences.diesx,
        sentences.with_article_no_prep,
        sentences.standard,
    ],
)
def test_extract_exercise_starts_with_adp(sentence):
    """Check it works for a variety of sentences that were problematic"""
    repo = mock.Mock(spec=TsvSentenceRepository())
    repo.next_sentence = mock.Mock(return_value="".join(sentence))
    sut = GuessPrepositionExerciseService(repository=repo)
    exercises_got = sut.get()

    for (actual_token, expected) in zip(exercises_got[0].tokens, sentence):
        if isinstance(actual_token, Cloze):
            assert actual_token.text == expected  # type: ignore
        else:
            assert actual_token == expected
```

The sentences are in a separate folder, `tests/testsupport`. They are organised as an array. Each item should correspond to a token. So "Auch" would be a string, "mit" would be a cloze, "Kanzlerin Angela Merkel sei Schäuble " would be a string, etc.

```python
# tests/testsupport/sentences.py
"""Test sentences as array. Each item should be translated to an ExerciseToken"""

standard = [
    "Auch ",
    "mit ",
    "Kanzlerin Angela Merkel sei Schäuble ",
    "in einem ",
    "Riesenkonflikt.",
]

with_article_no_prep = [
  ...
```

The code that makes it happen was quite complex. `GuessPrepositionExerciseService` has a private spacy instance, `_nlp`, which it is used to parse sentences on demand. The result of the spacy parsing is a series of token objects, one for each word or punctuation. Organising those spacy word tokens into my own exercise string fragment tokens was the complex part. I moved it to a separate class, `TokenParser`. A new instance is create whenever a sentence needs parsing. It uses the centralised `_nlp` instance.

```python
# germanlearning/services/guess_preposition_exercise_service/guess_preposition_exercise_service.py

class GuessPrepositionExerciseService(BaseModel):
    """Fetch raw sentences from Repository and generate Exercises on demand"""

    repository: TsvSentenceRepository | None = Field(
        default_factory=TsvSentenceRepository,
        description="the source of sentences",
    )
    _nlp: Language = PrivateAttr(default_factory=lambda: spacy.load("de_core_news_sm"))

    class Config:  # noqa: D106, WPS431
        arbitrary_types_allowed = True

    def get(self, how_many: int = 1) -> List[Exercise]:
        """Provide exercises on demand"""
        collected_exercises: List[Exercise] = []
        while len(collected_exercises) < how_many:
            sentence = self.repository.next_sentence()  # type: ignore
            if sentence is None:
                raise TypeError("No sentences available")
            tokens = self._parse(sentence)
            collected_exercises.append(Exercise(tokens=tokens))
        return collected_exercises

    def _parse(self, sentence: str) -> List[ExerciseToken]:
        parser = TokenParser()
        return parser.parse(self._nlp(sentence))  # type: ignore
```

The TokenParser is inspired by XML Sax parser. Sax parsers go through the tokens (words, or chars, doesn't matter), keeping a copy. Whenever there is a boundary (the start of a comment, the closing of a tag, etc) it fires an event, and adds the tokens saved so to the event.
Different parts of the code listen for specific events, and run when those happen. In my case I followed the basic idea of looking out for boundary events and firing off a specific function corresponding to each boundary. But I didn't use events at this stage. The only three boundaries I am interested in are end of a string (I need to add the string to the list of tokens), and end of cloze (I need to create the Cloze and add it to the list of tokens).

```python
class TokenParser:  # noqa: WPS214
    """Parse nlp tokens generated by Spacy and generate events.

    Inspired by SAX parsers
    """

    def __init__(self):
        ...

    def parse(self, nlp_tokens: Doc) -> List[ExerciseToken]:
        """Go through the Spacy tokens and generates DSL based ExerciseToken"""
        for nlp_token in nlp_tokens:
            change_event = self._change_event(nlp_token)
            if change_event == ParseEvents.ENDSTR:
                self._end_string()
            elif change_event == ParseEvents.ENDCLOZE:
                self._end_cloze()
            self._dispatch_to_buffer(nlp_token)
        self._end_doc()
        return self.exercises_tokens
```

#### A session service

I am getting close the user interface now. A Session is a service that manages Exercises for a user. Its requirements

- When asked by user, it fetches n Exercises from the Exercise service (by default N=4) and organises them as a queue
- When asked by user, it provides the next exercise to the user
- It receives the user attempts at guessing and returns either 'success' or 'failure'
- It does a very basic scheduling (like Anki) - exercises need to be solved successfully twice in a row per Session. When the current exercise is solved successfully for the first time, or when it is a failure, it is re-added to the end of the queue. When solved successfully for the second time, it is removed from the queue

<!-- <<<<<<<<<<HERE>>>>>>>>>> -->

## A CLI app with blessed. And a state machine

The fastest way to play with the app is to make it a CLI app. For that I could use [click](https://pypi.org/project/click/), or [typer](https://pypi.org/project/typer/). Or even just the built-in [input](https://docs.python.org/3/library/functions.html?highlight=input#input) and [argparse](https://docs.python.org/3/library/argparse.html?highlight=argparse#module-argparse). But even on the CLI, it needs a minimal interface. It must show the user an exercise, allow them to pick any of the answers, update itself, eventually show which answers where right and which weren't.

<https://medium.com/steve-cruz/domain-driven-design-ddd-file-structure-ade7fb26553d>

<https://blog.jacobsdata.com/2020/03/02/a-clean-domain-driven-design-architectural-template>
