---
title: "Using Continue and Ollama Locally, for free"
date: "2025-09-28T18:38:35+02:00"

description: |-
  I have started using [Continue](https://docs.continue.dev/) with [Ollama](https://ollama.com/) to have a local llm assist my coding. Initially it was too slow to be of real use, but since adopting [GLM4](https://ollama.com/library/glm4), it now rivals [Cursor](https://cursor.com/) in performance.

tags: ["llm", "vscode"]
---

## Installation

The installation went as follow:

- install Ollama with brew: `brew install ollama`
- install the [Continue plugin](https://marketplace.visualstudio.com/items?itemName=Continue.continue) in VSCode
- Clicked on the Continue icon on the vertical toolbar, and configured it to work locally. It's pretty self-explanatory, and the defaults make sense. **NOTE**: when I installed it you could edit the yaml file directly. Now you have to use their interface; however, the Continue yaml settings file can still be edited, you'll find it at `~/.continue/config.yaml`

## The experience

It's not as good as Cursor, which I use at work. A nice touch that it handles [contexts](https://docs.continue.dev/customize/custom-providers) better; they are all configurable and it has a wider selection. However that is all undone by having to retype the context before each prompt. Oddly they don't see that as important, given that [the relevant GitHub issues](https://github.com/continuedev/continue/issues/5180) were closed as non-planned.

But the major issue is that it's **a lot slower** than the commercial counterparts. And depending on the model you use, **the results are not as good**. So far I have only tried qwen2.5-coder, deepseek-coder-v2, llama3.1:8b, mistral-small3.2, and devstral. It takes a lot more tries to get something acceptable, to the point it becomes less than useful.

Here's a typical interaction

```toml
[human] @Codebase Please refactor @file_x to replace library A with B
[LLM] Since your file_x doesn't have a variable for storing blah, I will add one..
[human] But file_x _does_ have a variable for storing blah. Look again at line 123
[LLM] You are right! ...
... several interactions and 10 minutes later...
[LLM] @file_x has successfully been upgraded to use library A.
[human] But I wanted you to replace it with library B!
[LLM] You are right! ...
... and so on
```

I found myself still reaching out for Claude if I wanted to do some extreme refactoring. But it's still early days, I need to play with it more.

## Enter GLM4

Well, that was true until I installed [GLM4](https://ollama.com/library/glm4) from [Zhipu.ai](https://www.zhipuai.cn/en/), a Beijing-based company spun out of Tsinghua University. It's the first model I've been able to run on my MacBook Pro with an Apple M1 Max chip which compares favourably to any other paid-for options available.
