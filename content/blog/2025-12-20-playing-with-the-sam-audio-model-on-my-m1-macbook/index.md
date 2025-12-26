---
title: "Playing With the SAM-Audio Model on My M1 MacBook"
date: "2025-12-20T13:50:43+01:00"

description: |-
  Meta recently released [SAM-Audio](https://about.fb.com/news/2025/12/our-new-sam-audio-model-transforms-audio-editing/), an exciting new audio LLM capable of separating sounds from complex mixtures using text or visual prompts. Like many research models, it isn't installable out of the box for macOS users. To get it running on my M1 Mac was a bit of an adventure, but I managed in the end.

tags: ["audio", "llm", "macos", "conda", "python"]
draft: false
mastodon: https://hachyderm.io/@gotofritz/115781342044764240
---

## Getting access to the model

The model is gated. You must fill out [Meta's access form](https://huggingface.co/facebook/sam-audio-large-tv). I received approval within 48 hours.

## Issues with installing sam-audio on a Mac

Before I get to the solution, here are the two biggest dead ends I hit:

### 1. Installing decord on macOS

```bash
ERROR: Could not find a version that satisfies the requirement decord (from perception-models) (from versions: none)
ERROR: No matching distribution found for decord
```

[perception-models](https://github.com/facebookresearch/perception_models) (a SAM-Audio dependency) requires [decord](https://github.com/dmlc/decord), which is a specialised video loader. I spent hours trying to build this from source by downgrading FFmpeg to v6 and stripping out codecs. That eventually worked, but it was a waste of time; the real fix is removing the dependency entirely (more on that below).

### 2. Trying to install xformer on macOS

[xformer](https://github.com/facebookresearch/xformers) is a toolbox to accelerate Transformers, and is also needed by perception_models. On a Mac, trying to build it results in a massive <nobr>clang++</nobr> failure because it expects -fopenmp (standard on Linux/Windows but not Apple's Clang). Spoiler: You cannot run xformers on macOS. It is simply not compatible with Apple Silicon's architecture.

## What worked: Installing SAM-Audio on macOS

I used Conda, as recommended by perception_models, to get it all to work. Conda is package and environment manager geared towards data science and machine learning. I’ll be honest: I am not a big fan of Conda. It invariably clashes with pyenv, creating a mess that takes days to clean up. However, when working with high-end research code like SAM-Audio, Conda’s ability to manage C++ binaries and linked libraries makes it the only viable choice.

### Installing miniconda on macOS

Miniconda is the minimal package installer version of it, Anaconda being the complete thing with lots of preinstalled packages. Conveniently they both use `conda` as CLI prompt, so you can install either. I went for the smallest.

```bash
❯ brew install miniconda

# I use bash, and this sets it up
❯ conda init bash

# refresh bash
❯ source ~/.bash_profile

# Prevent conda from hijacking every terminal session.
# For day to day use I am happy with pyenv as my default python manager.
❯ conda config --set auto_activate_base false
```

### Set up the conda environment

I create a folder to contain all the dependences I need to fiddle with, and initialised a conda environment in it. All the SAM-Audio related dependencies will sit here.

```bash
❯ mkdir sam-audio-playground

# Create a fresh virtual environment
# -n name of the environment
# -y always answer 'yes' to all prompts
❯ conda create -n sam-audio python=3.12 -y
❯ conda activate sam-audio

```

### Adding environmental vars via conda

pip by default will complain and fail if you try to install anything without a virtualenv. That is a good idea in general, but pip doesn't understand that conda _is_ a virtualenv and complains anyway. Luckily this is something that can be changed by setting the correct environmental variable, `PIP_REQUIRE_VIRTUALENV`.

For now I will set it up up with this command; at the end of the post I'll create a couple of scripts to make all the env variable permanent within the env

```bash
# stop pip complaining about virtual env
❯ conda env config vars set PIP_REQUIRE_VIRTUALENV=false

# reactivate to make it sticky
❯ conda activate sam-audio
```

### Install a project specific version of ffmpeg

ffmpeg is the essential building block most video or audio processing is based on. I have a global version I keep up to date with `brew upgrade ffmpeg`, but I needed a version specific to this project. This is where conda shines, handling binaries in addition to python packages.

```bash
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio
❯ conda install -c conda-forge ffmpeg=7.1 -y
```

Everything in the sam-audio environment will use this version of ffmpeg and not the global one.

### The PyTorch & TorchCodec "Handshake"

To avoid the `string_view` C++ compilation error on macOS (caused by strict AppleClang 16 checks), we skip building from source and use the **Nightly** binaries. These are pre-aligned with the latest C++ standards.

Note that I use a different `--index-url` from the one recommended in the perception_models repo; that repo is not macOS compliant and recommends a GPU that simply won't work for us Mac users. Instead I am downloading the (slowest) CPU version

Note that order matters. If you install torchcodec before the nightly torch, pip might try to pull in the stable version of PyTorch as a dependency, which can cause version-mismatch hell.

```bash
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio
❯ pip install --pre torch torchvision torchaudio \
  --force-reinstall \
  --index-url https://download.pytorch.org/whl/nightly/cpu
❯ pip install --pre torchcodec --index-url https://download.pytorch.org/whl/nightly/cpu
```

### Resolving the `_iconv` Symbol Conflict

On macOS, `PyAV` (a dependency for many audio-video models) often fails with an `ImportError: Symbol not found: _iconv`. I fixed this by forcing a local build that respects the Conda environment's library paths.

```bash
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio
# Force-build PyAV from source
❯ pip uninstall av -y
❯ pip install av --no-binary av

```

### Installing Meta dependencies

SAM-Audio requires several Meta research modules. I installed these in order:

```bash
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio
❯ pip install git+https://github.com/facebookresearch/ImageBind.git
❯ pip install git+https://github.com/facebookresearch/dacvae.git
❯ pip install git+https://github.com/lematt1991/CLAP.git

```

## Making Meta's perception_models work on a Mac

As mentioned at the start of the post, I needed to strip out the Linux-only dependencies [decord](https://github.com/dmlc/decord) and [xformer](https://github.com/facebookresearch/xformers). Fortunately, xformer is only used for optimization, and decord is not used much by SAM-audio. For that I followed the instructions provided by [@chikim](https://mastodon.social/@chikim) in a [github issue](https://github.com/facebookresearch/sam-audio/issues/29#issuecomment-3686543925)

```bash
# start from the parent folder
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio
❯ gh repo clone facebookresearch/perception_models

# create a branch, so that I can still pull bug fixes etc to main
❯ cd perception_models
❯ git checkout -b "changed-by-me"

❯ nvim ./core/probe.py
```

And apply these edits to remove references to xformers

```diff
# line 35
-from xformers.ops import fmha
+try:
+    from xformers.ops import fmha
+except ImportError:
+    fmha = None

# line 488
-        elif func._overloadpacket == fmha.flash.FwOp.OPERATOR:
+        elif fmha is not None and func._overloadpacket == fmha.flash.FwOp.OPERATOR:
```

Then the same here

```bash
❯ nvim ./core/transformer.py
```

```diff
# line 13
-from xformers.ops import AttentionBias, fmha
+try:
+    from xformers.ops import AttentionBias, fmha
+except ImportError:
+    class AttentionBias: pass
+    fmha = None
```

And finally remove the sentencepiece duplicate and make it and numpy more lenient, and remove decord

```bash
❯ nvim ./requirements.txt
```

```diff
# line 1
-numpy==2.1.2
+numpy<2.0.0
omegaconf==2.3.0
msgspec==0.19.0
rouge-score==0.1.2
sacrebleu==2.5.1
-sentencepiece==0.2.0
tiktoken==0.9.0

# line 22
-decord==0.6.0
opencv-python==4.11.0.86
pycocoevalcap==1.2
scikit-learn==1.6.1
scipy==1.15.2
-sentencepiece==0.2.0
+sentencepiece
```

Now I can install the package. Note that I have already tweaked [the official installation instructions](https://github.com/facebookresearch/perception_models?tab=readme-ov-file#installation-wrench) by installing versions of torchvision and torchcodec which work for me, so that is left is just installing the package itself. The <nobr>`-e`</nobr> option ensures that other packages in the project can refer to this one.

```bash
❯ pip install -e .

# test that it works
❯ python -c "import core.vision_encoder.pe as pe; ..."
```

Before moving on, a little clean up

```bash
# installation created an egg directory; make sure it's not committed
❯ echo 'perception_models.egg-info/' >> .gitignore

# commit all changes
❯ git commit -a -m "feat: remove xformer and decord"
```

## Installing SAM-audio on macOS

Before installing SAM-Audio, I changed the pyproject.toml to point it to the local version of perception_models

```bash
# start from the parent folder
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio
❯ gh repo clone facebookresearch/sam-audio

# create a branch, so that I can still pull bug fixes etc to main
❯ cd sam-audio
❯ git checkout -b "changed-by-me"

❯ nvim ./pyproject.toml
```

```diff
# line 24
-    "perception-models@git+https://github.com/facebookresearch/perception_models@unpin-deps"
+    "perception-models@file:///Users/fritz/work/sam-audio-playground/perception_models",
```

And then on with the installation, again with the `-e` flag

```bash
❯ pip install -e .

# test that it works
❯ python -c "import sam_audio; ..."
```

## Using SAM-audio on macOS

Finally I am ready to play with the thing. I created a new project using the [copier template](https://github.com/gotofritz/copier-python-template) I described in [another post](../2025-08-10-copier-python-template-with-uv/index.md)

Because the template is based on uv, and uv doesn't play nicely with conda (nothing does - that's why I don't like conda), I had to make a simple change to the pyproject toml first. Luckily I just needed to change the build system. And, of course, add the dependencies

```bash
# start from the parent folder
❯ cd ~/work/sam-audio-playground
❯ conda activate sam-audio

# create project scaffolding from copier
❯ copier copy https://github.com/gotofritz/copier-python-template --trust --vcs-ref=HEAD audio-playground

❯ cd audio-playground
❯ nvim ./pyproject.toml
```

```diff
# line 1
[build-system]
-requires = ["hatchling"]
-build-backend = "hatchling.build"
+requires = ["setuptools>=61.0", "wheel"]
+build-backend = "setuptools.build_meta"

# line 14
dependencies = [
  "pydantic>=2.10.6",
  "pydantic-settings>=2.6.1",
  "click>=8.1.7",
  "rich>=14",
+  "sam-audio@file:///Users/fritz/work/sam-audio-playground/sam-audio",
+  "torch",
+  "torchaudio",
]
```

I created a simple command `test-run` which tests the model on two hard coded files:

```python
import click
import torch
import torchaudio
from sam_audio import SAMAudio, SAMAudioProcessor

from audio_playground.app_context import AppContext


@click.command(name="test-run")
@click.pass_context
def test_run(
    ctx: click.Context,
) -> None:
    """
    Just a test run
    """
    try:
        app_context: AppContext = ctx.obj
        logger = app_context.logger
        logger.info("Starting...")

        # up to here it's my usual CLI set up.
        # Now starts the SAM-audio specific code
        device = (
            torch.accelerator.current_accelerator().type
            if torch.accelerator.is_available()
            else "cpu"
        )
        logger.info(f"Using {device} device")

        model = (
            SAMAudio.from_pretrained(
                "facebook/sam-audio-large",
                map_location=device,
            )
            .to(device)
            .eval()
        )
        processor = SAMAudioProcessor.from_pretrained(
            "facebook/sam-audio-large",
        )

        # Load and process
        audio_path = "/Users/fritz/work/sam-audio-playground/wav/"
        source_path = audio_path + "sources/"
        dest_path = audio_path + "processed/"

        bass_source = source_path + "slap-bass.wav"
        bass_description = "The bass track"
        bass_dest = dest_path + "slap-"

        voice_source = source_path + "voice-over-clapping.wav"
        voice_description = "A man talking"
        voice_dest = dest_path + "voice-"

        with torch.inference_mode():
            inputs = processor(
                audios=[bass_source, voice_source],
                descriptions=[bass_description, voice_description],
            ).to(device)

            result = model.separate(
                inputs,
                predict_spans=False,
                reranking_candidates=8,
            )

            sr = processor.audio_sampling_rate

            target = result.target[0].unsqueeze(0).cpu()
            torchaudio.save(bass_dest + "target.wav", target, sr)
            residual = result.residual[0].unsqueeze(0).cpu()
            torchaudio.save(bass_dest + "residual.wav", residual, sr)

            target = result.target[1].unsqueeze(0).cpu()
            torchaudio.save(voice_dest + "target.wav", target, sr)
            residual = result.residual[1].unsqueeze(0).cpu()
            torchaudio.save(voice_dest + "residual.wav", residual, sr)

        logger.info("Done")

    except Exception as e:
        click.echo(f"CLI Error: {str(e)}")
        ctx.exit(1)
```

Of the hard coded files, one is an announcer speaking over a clapping audience, and I'm trying to extract the voice. It should be easy, since a crowd clapping is practically white noise. The other is a short slap bass snippet by the masterly Charles Berthoud; the bass is very clear and stands out (not often the case with bass!) but audio separators often struggle with slap bass because the popped notes don't sound "bassy".

```bash
# ensures it files fetched from Hugging Face are
# not downloaded at every run
❯ conda env config vars set HF_DATASETS_OFFLINE=1
❯ conda env config vars set TRANSFORMERS_OFFLINE=1
# reactivate to make it sticky
❯ conda activate sam-audio
❯ pip install -e .
❯ audio-playground test-run
```

Both came out well; although I originally passed `predict_spans=True` to the separate call, and then the model missed some of the popped bass notes. The logs showed `[INFO] Using mps device`, so the M1 GPU is actually being used!

## Making the environmental variable sticky

`conda env config vars set HF_DATASETS_OFFLINE=1` does the job but the env vars are not permament; you'll need to recreate them next time you activate the environment. There are a few ways to handle this, as you can read in the long [section on env variables in the conda documentation](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#setting-environment-variables). But one way or another they get involved quite quickly. As far as I'm concerned, the easiest to handle are [activation scripts](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#macos-and-linux), which look like this. Basically a shell script run on activate (and another on deactivate)

```bash
❯ mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
❯ cat <<EOF > $CONDA_PREFIX/etc/conda/activate.d/env_vars.sh
#!/bin/sh

export HF_DATASETS_OFFLINE=1
export TRANSFORMERS_OFFLINE=1
export PIP_REQUIRE_VIRTUALENV=false
EOF
```

The downside is that it's not so elegant to distribute in repos, which is why I have wrapped it in [a bash script](https://github.com/gotofritz/audio-playground/blob/main/setup_conda_env_variables.sh) to be run after checkout.

## How well does it run?

The bad news is that on my M1 (Apple M1 Max chip, 64Gb RAM) it cannot really handle clips longer than 15 secs

| Clip length, s | Processing time, s        | Processing time, mins |
| -------------- | ------------------------- | --------------------- |
| 4.77           | 57.8                      | ~ 1                   |
| 9.54           | 144.4                     | ~ 2.5                 |
| 14.32          | 258.76                    | ~ 4.5                 |
| 23.86          | 704.31                    | ~ 12                  |
| 38.17          | MPS backend out of memory |                       |

## Next

The next step is to determine whether splitting a sound file into short segments, processing each segment individually, and then concatenating them back together is feasible.

I pushed the code I worked on so far to [gotofritz/audio-playground](https://github.com/gotofritz/audio-playground).
