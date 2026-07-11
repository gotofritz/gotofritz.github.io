---
title: 'quote-bot: Send a Daily Quote to a WhatsApp Number'
date: "2026-07-11T17:30:03+02:00"

description: |-
    When I'm making music in the evenings, I like a little creative nudge. So I built a self-hosted system that sends me a daily [Oblique Strategy](https://en.wikipedia.org/wiki/Oblique_Strategies) quote on WhatsApp while I play - free to run and using WhatsApp Web directly from my machine. Here's how it works.

mastodon: https://hachyderm.io/@gotofritz/116902832122853266
tags: ["cli","osx"]

---

`quote-bot` is a command-line tool that:

- Reads quotes from a YAML config file you curate
- Sends the next one to a WhatsApp number (yours, a group, anyone)
- Remembers where it left off between runs
- Runs on a schedule via launchd (macOS) or cron (Linux)

## The Stack

- **Python** with `click` for the CLI
- **Playwright** for WhatsApp Web automation
- **Pydantic** for config validation and modelling
- **YAML** for quotes, config, and state
- **uv** for package management and installation

## How WhatsApp Automation Works

WhatsApp has no public API for personal accounts. The workaround: automate [WhatsApp Web](https://web.whatsapp.com) using a headless browser.

Playwright's `launch_persistent_context()` is what makes this work, not cookie injection. Injecting saved cookies triggers WhatsApp's fingerprint detection and logs you out immediately. A persistent browser profile on disk looks like a returning user.

WhatsApp Web also detects headless automation via the `navigator.webdriver` flag. Disabling `AutomationControlled` and passing a real user-agent string hides both:

```python
def _open_context(p: Playwright, session_dir: str, headless: bool) -> BrowserContext:
    return p.chromium.launch_persistent_context(
        str(_profile_dir(session_dir)),
        headless=headless,
        args=[
            "--no-sandbox",
            "--disable-blink-features=AutomationControlled",
        ],
        user_agent=(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/131.0.0.0 Safari/537.36"
        ),
    )
```

First run opens a visible browser window. You scan the QR code once, and the authenticated session is saved to a profile directory. Every subsequent run reuses that profile silently in headless mode.

The bot waits for whichever appears first - QR code or chat list - so it works whether the session is fresh or already authenticated:

```python
initial = _any_selector(page, _QR_SELECTORS + _CHAT_LIST_SELECTORS, timeout=30_000)
if any(page.query_selector(s) for s in _QR_SELECTORS):
    logger.info("QR code displayed. Scan it with your phone WhatsApp app.")
    matched = _any_selector(page, _CHAT_LIST_SELECTORS, timeout=120_000)
```

WhatsApp Web's selectors change over time, so the bot tries multiple fallbacks for each element:

```python
_COMPOSE_SELECTORS = [
    '[data-testid="conversation-compose-box-input"]',
    'div[contenteditable="true"][data-tab="10"]',
    'div[role="textbox"][title="Type a message"]',
    'div[contenteditable="true"][spellcheck="true"]',
]
```

## The CLI

Four commands:

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `init`            | Open a browser, authenticate WhatsApp Web, save the session |
| `send`            | Send the next quote from the list                           |
| `start`           | Show scheduling instructions and the manual run command     |
| `install-launchd` | Install (or replace) a launchd agent - macOS only           |

`init` requires `phone` to already be set in the config, then opens the browser for QR authentication. Run `send` afterwards to verify everything works before setting up a schedule.

## Quotes Format

Quotes live in the main config YAML:

```yaml
quotes:
  - text: >-
      Use filters
    topic: ENO
  - text: >-
      Cultivate imposterdom
    topic: WALSH
```

Use `>-` (folded scalar, strip trailing newline) to write long quotes across multiple lines without embedding literal newlines in the WhatsApp message. Topics allow filtering; I'm not using them actively yet.

## State Tracking

A small YAML file tracks where to pick up next:

```yaml
next_index: 7
```

After each send, the index advances. When it reaches the end of the list, it wraps back to zero (configurable via `repeat: false` to stop instead).

## Configuration

All config lives in a single YAML file, defaulting to `~/.config/quote-bot/config.yml`. Override with `--config`:

```sh
quote-bot --config ~/work/quotes/config.yml send
```

Example config:

```yaml
phone: "447700900000" # international format, no +
headless: true # false to watch the browser while debugging
repeat: true # cycle back to the first quote after the last
log_level: INFO

schedule:
  Hour: 9
  Minute: 0
  # Weekday: 1            # optional - 0=Sun … 6=Sat

quotes:
  - text: "Take away the important parts"
    topic: ENO
  - text: "Take the sound of the stone aging"
    topic: YOKO ONO
```

The `schedule` field uses [launchd `StartCalendarInterval`](https://www.manpagez.com/man/5/launchd.plist/) key names (`Hour`, `Minute`, `Day`, `Month`, `Weekday`). Omitted keys mean "every" - omitting `Weekday` runs daily.

## Scheduling

Install the tool system-wide first:

```sh
uv tool install /path/to/quote-bot
```

### macOS - launchd (recommended)

On Apple Silicon, cron jobs silently miss their schedule after a sleep cycle. The M1/M2 keeps the kernel partially alive, but the cron daemon isn't among what gets woken. launchd is the scheduler macOS uses for its own work, and it fires correctly regardless of sleep state.

After editing the schedule in config, run `install-launchd` again to replace the existing agent:

```sh
quote-bot install-launchd

# Logs go to:
# ~/Library/Logs/quote-bot.log
```

The command writes a plist to `~/Library/LaunchAgents/local.quote-bot.plist`, unloads any previous version, and loads the new one.

Worth knowing: launchd catches up on missed sends once the machine wakes, but it does not wake the machine itself. If the machine is asleep at send time, the quote goes out as soon as you open the lid. Good enough for my use case.

### Linux - cron

On Linux, `quote-bot start` prints a ready-to-paste cron entry with the resolved binary path. Run `crontab -e` and add it.

## Project Structure

```
src/quote_bot/
├── cli/
│   ├── __main__.py            # entry point
│   ├── init_cmd.py            # quote-bot init
│   ├── install_launchd_cmd.py # quote-bot install-launchd
│   ├── send_cmd.py            # quote-bot send
│   └── start_cmd.py           # quote-bot start
├── config/
│   └── app_config.py          # Pydantic config + Schedule model
├── quotes.py                  # YAML loader + Quote model
├── state.py                   # state persistence
└── whatsapp.py                # Playwright automation
```

## Things that tripped me up

- The obvious first attempt for session persistence was saving and restoring cookies. That doesn't work - WhatsApp detects the injection and kicks you straight out. The browser profile directory is what you actually want: Playwright persists it between runs and WhatsApp treats it as a returning device.
- Headless mode was a separate problem. With a visible browser everything worked; switch to headless and it would open WhatsApp Web then fail to find the message compose box. The culprit is `navigator.webdriver` - Chromium sets this flag in automation mode and WhatsApp reads it. Adding `--disable-blink-features=AutomationControlled` and a real user-agent string sorted it.
- I initially ran this via cron on my M1 Mac and it worked fine during the day, then started missing jobs. Turns out the cron daemon isn't woken on schedule after a sleep cycle on Apple Silicon. Switching to launchd was the next attempt.
- launchd is better than cron here because it queues missed jobs and fires them on wake. But it still needs the machine to be awake at some point - it won't wake the machine for you. I looked at using `pmset repeat wake` to schedule an automatic wake before the send time, but `pmset` stores a single global wake schedule for the whole system. Any other app (or a future config change) silently overwrites it. Too fragile to be worth wiring in for a bunch of quotes.
- One YAML gotcha: use `>-` not `|-` for multi-line quotes. The literal block scalar (`|-`) preserves newlines; the folded scalar (`>-`) joins them with spaces. A WhatsApp message with embedded newlines looks like a formatting mistake, so `>-` is what you want.

The full source is at [github.com/gotofritz/quote-bot](https://github.com/gotofritz/quote-bot).


