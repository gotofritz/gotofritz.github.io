---
description: I am a big fan of Faker for testing. I find having a random mock data generator keeps tests clean. In fact, I tend to extend Faker with project specific providers. Here's how
publishDate: 2022-09-24
draft: false
archived: false
title: Faker providers for project specific data structure fakes, in Python
tags:
  - python
  - testing
---

## Use case

I am working on a small language training app. One data structure I use is called a "Cloze", inspired by [Anki](https://docs.ankiweb.net/editing.html#cloze-deletion). It has two strings: a to-be-solved version and a solved version. There is also a boolean flag to show whether it was solved or not. These Clozes appear throughout the app. I could create a mock, and I will when I need to call its methods or check the code. But most of the time, I just need data in the right shape to pass around in my tests. Faker is great for that.

## Creating a provider in Faker

At the time of writing, the Faker doc does not explain how to create your own provider. But you can reverse engineer some of the existing ones. Extend the BaseProvider class. Then every method becomes a generator. For example:

```python
from faker.provider import BaseProvider
from models.cloze import Cloze

class Provider(BaseProvider):

    def cloze(
        self,
        text: Optional[str] = None,
        obfuscated: Optional[str] = None,
        guessed: Optional[bool] = False,
    ):
        """Model a Cloze entity"""
        return Cloze(
            text=text or "".join(self.random_letters()),
            obfuscated=obfuscated or "".join(self.random_letters()),
            guessed=guessed,
        )

    def clozes(self, nb=3):
      return [Cloze() for _ in range(nb)]

    def exercise(... etc

```

Note how I can use Faker's BaseProvider's methods in my own provider, like "random_letters" in "".join(self.random_letters()). Once I add the provider to Faker (more below), I can use it in my tests. In the example above, I can create a single Cloze or a list of them with:

```python

cloze = faker_instance.cloze()
# Cloze(text='zTbJuPgkCvtGJtms', obfuscated='LkqKBZBNLRYbAvXj', guessed=False)

cloze = faker_instance.cloze(text="TEXT")
# Cloze(text='TEXT', obfuscated='pdyQXUBhSyflBXvZ', guessed=False)

list_of_clozes = faker_instance.clozes(nb=2)
# [
#   Cloze(text='EQKHvVUIJFllEZUg', obfuscated='ymEaSvqcYPdsGeFw', guessed=False)
#   Cloze(text='IvSMtFGVXEGdODoC', obfuscated='pPTkcmlvCOizEqZe', guessed=False)
# ]
```

## Accessing Faker's standard providers' methods in a custom provider

In the example above, I could use self.random_letters from BaseProvider and all the other [BaseProvider fakes](https://faker.readthedocs.io/en/master/providers/baseprovider.html). But not others. I used random_letters because I did not know how to access the one I really wanted: words, from the Lorem provider. It can be done, but it is hacky.

```python
from faker.provider.lorem.en_US import Provider as LoremProvider
from models.cloze import Cloze

class Provider(LoremProvider):
  def words_words(self, nb=3):
    return [
      twice
      for w in self.words(nb=nb) # outer loop
      for twice in [w, w]        # inner loop
      ]

```

In the example above, I import a specific locale of the provider (`faker.provider.lorem.en_US`). Then I have all its methods. Here, I use a nested array comprehension to repeat each list item twice. Using a fixed locale works well because my fakes rarely need localization.

## Adding a provider to Faker

Providers in Faker follow an odd structure. A provider is a class called Provider that inherits from Faker's BaseProvider. The code lives in the package's`__init__.py`, not a _provider.py_ file. That Provider class is all you need for a basic use case with no locales. If you need localised versions, they are always packages named after the locale. They are one level down from the main Provider and consist of a class also called Provider, which inherits from the Provider one level up.

```bash
src/language_learning/
│
 ...
└── faker_providers
    ├── __init__.py
    ├── en_US
    ├── └── __init__py
    ├── ... other locales ..
 ...
│
```

I import my providers in my `conftest.py` file and add them to the centralised Faker instance, which is passed to the texts as a fixture, with:

```python
# tests/conftest.py
from faker import Faker

from app.fake_providers.language_training import \
  Provider as LanguageTrainingProvider

fake = Faker()
A_RANDOM_SEED = 1369
Faker.seed(A_RANDOM_SEED)
fake.add_provider(LanguageTrainingProvider)

@pytest.fixture(name="fake")
def fixture_fake():
    """Pass a seeded Faker instance as a fixture"""
    return fake
```

Now I can use the provier in my tests with

```python

def test_something(fake):
  # fake.words is from a standard Faker provider
  assert fake.words() != 123

  # fake.clozes is the one I just created
  assert len(fake.clozes(nb=7)) != 8
```

## A Faker provider for all locales

If I never use locales, a simple class like the one in the example above will Just Work&trade;. But if I use different locales for my fakes for testing, it won't. Since I'll never create a different version for each locale, I need a workaround. I can create a single locale, en_US, that simply inherits from my main provider. Then Faker will fall back to it when it can't find any of the other locales.

```bash
└── language_learning
    ├── __init__.py
    └── en_US
        └── __init__py
```

The class is minimal

```python
# src/fake_providers/language_learning/en_US/__init__.py
from .. import Provider as LanguageLearningProvider


class Provider(LanguageLearningProvider):
    """Fallback locale"""

```

## Conclusion

I find using Faker keeps the code clean. Of course, I cannot call any of Cloze's methods. I would need to create mocks for that, but that is a different story
