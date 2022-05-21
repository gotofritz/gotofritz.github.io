<script>
  import { page } from "$app/stores";
  import MoonIcon from "heroicons-svelte/solid/MoonIcon.svelte";
  import SunIcon from "heroicons-svelte/solid/SunIcon.svelte";
  import SearchIcon from "heroicons-svelte/solid/SearchIcon.svelte";
  import RssIcon from "heroicons-svelte/solid/RssIcon.svelte";

  import { browser } from "$app/env";
  import { searching } from "$lib/stores/searching";

  let prefersLight = browser
    ? Boolean(JSON.parse(localStorage.getItem("prefersLight")))
    : false;

  let isSearching = true;

  searching.subscribe((value) => {
    isSearching = value;
    if (browser) {
      if (isSearching) {
        document.querySelector("html").classList.add("searching");
      } else {
        document.querySelector("html").classList.remove("searching");
      }
    }
  });

  export let isHome = $page.url.pathname === "/";
</script>

<nav class="navigation overflow-hidden relative" class:isSearching>
  <div class="max-w-4xl mx-auto z-50">
    <div class="min-w-min flex justify-end items-center gap-12 h-24 pr-12">
      {#if isSearching}
        <form
          action="https://google.com/search"
          method="get"
          class="search w-full h-full"
        >
          <div class="flex">
            <SearchIcon class="h-24 w-24" color="white" />
            <input
              type="text"
              id="search-str"
              class="placeholder-white w-full h-full font-display text-black text-6xl"
              name="q"
              results="0"
              placeholder="search"
              aria-label="search"
              on:blur={() => searching.set(false)}
            />
            <input type="hidden" name="q" value="site:gotofritz.net" />
          </div>
        </form>{:else}
        {#if browser}
          <button
            type="button"
            role="switch"
            aria-label="Toggle Dark Mode"
            aria-checked={!prefersLight}
            class="h-3 w-3 sm:h-6 sm:w-6 mr-auto"
            on:click={() => {
              prefersLight = !prefersLight;
              localStorage.setItem("prefersLight", prefersLight.toString());

              if (prefersLight) {
                document.querySelector("html").classList.remove("dark");
              } else {
                document.querySelector("html").classList.add("dark");
              }
            }}
          >
            {#if prefersLight}
              <MoonIcon class="text-slate-800" />
            {:else}
              <SunIcon class="text-slate-100" />
            {/if}
          </button>
        {/if}
        {#if !isHome}
          <a href="/">home</a>
        {/if}
        <div class="flex gap-1">
          <SearchIcon class="h-3 w-3 sm:h-6 sm:w-6" color="white" />
          <button
            class="text-white"
            on:focus={() => {
              searching.set(true);
            }}
            >search
          </button>
        </div>
        {#if isHome}
          <a href="mailto:info@gotofritz.net">email</a>
          <a href="/fritz-stelluto_resume.pdf">resume</a>
          <a href="/feed.xml"
            ><RssIcon class="h-3 w-3 sm:h-6 sm:w-6" color="white" /></a
          >
        {/if}
      {/if}
    </div>
  </div>
</nav>

<style lang="postcss">
  :root {
    --bg-main: hsl(22, 98%, 89%);
    --bg-line: hsl(22, 98%, 49%);
  }
  .navigation {
    background: linear-gradient(172deg, hsl(45, 69%, 65%), hsl(22, 98%, 49%));
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03), 0 2px 2px rgba(0, 0, 0, 0.03),
      0 4px 4px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.03);
  }
  .isSearching {
    background: var(--bg-main);
  }
  .search input[type="text"] {
    background: linear-gradient(
      var(--bg-main) 5rem,
      var(--bg-line) 5rem,
      var(--bg-line) 5.25rem,
      var(--bg-main) 5.25rem
    );
  }

  .search input[type="text"]:focus,
  .search input[type="text"]:focus-within {
    outline: none;
  }

  a {
    color: white;
  }
</style>
