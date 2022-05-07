<script>
  import MoonIcon from "heroicons-svelte/solid/MoonIcon.svelte";
  import SunIcon from "heroicons-svelte/solid/SunIcon.svelte";
  import SearchIcon from "heroicons-svelte/solid/SearchIcon.svelte";
  import RssIcon from "heroicons-svelte/solid/RssIcon.svelte";

  import { browser } from "$app/env";

  let prefersLight = browser
    ? Boolean(JSON.parse(localStorage.getItem("prefersLight")))
    : false;
</script>

<nav class="navigation overflow-hidden relative">
  <div class="max-w-4xl mx-auto z-50">
    <div class="min-w-min flex justify-end items-center gap-12 h-24 pr-12">
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
            <MoonIcon class="text-slate-500" />
          {:else}
            <SunIcon class="text-slate-400" />
          {/if}
        </button>
      {/if}
      <div class="flex gap-1">
        <SearchIcon class="h-3 w-3 sm:h-6 sm:w-6" color="white" />
        <a href="/searc">search </a>
      </div>
      <a href="mailto:info@gotofritz.net">email</a>
      <a href="/fritz-stelluto_resume.pdf">resume</a>
      <a href="/feed.xml"
        ><RssIcon class="h-3 w-3 sm:h-6 sm:w-6" color="white" /></a
      >
    </div>
  </div>
</nav>

<style lang="postcss">
  .navigation {
    background-image: linear-gradient(
      172deg,
      hsl(45, 69%, 65%),
      hsl(22, 98%, 49%)
    );
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03), 0 2px 2px rgba(0, 0, 0, 0.03),
      0 4px 4px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.03);
  }

  a {
    color: white;
  }
</style>
