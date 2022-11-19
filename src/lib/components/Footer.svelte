<script>
  import { browser } from "$app/env";
  import BerlinFlag from "$lib/svgs/BerlinFlag.svelte";
  import GermanFlag from "$lib/svgs/GermanFlag.svelte";
  import GithubIcon from "$lib/svgs/GithubIcon.svelte";
  import LinkedinIcon from "$lib/svgs/LinkedinIcon.svelte";
  import MastodonIcon from "$lib/svgs/MastodonIcon.svelte";
  import WayfairIcon from "$lib/svgs/WayfairIcon.svelte";

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
</script>

<footer class="bg-slate-800 text-slate-50 p-8">
  <div class="lg:max-w-4xl mx-auto flex flex-col lg:flex-row">
    <div class="info-block">
      <h4 class="title">Location</h4>
      <div class="label">
        <div class="flex align-center">
          <div><BerlinFlag class="home-icon inline-block mr-2" /></div>
          <div>Berlin</div>
        </div>
        <div class="flex align-center">
          <div><GermanFlag class="home-icon inline-block mr-2" /></div>
          <div>Germany</div>
        </div>
      </div>
    </div>
    <div class="info-block">
      <h4 class="title">Working for</h4>
      <div class="label">
        <div class="flex align-center">
          <div>
            <a href="https://wayfair.de"
              ><WayfairIcon class="home-icon inline-block mr-2" /></a
            >
          </div>
          <div><a href="https://wayfair.de">Wayfair</a></div>
        </div>
      </div>
    </div>
    <div class="info-block">
      <h4 class="title">Previously</h4>
      <div class="label">
        Advertima<br />
        Tourlane<br />
        Quandoo<br />
        Flaconi<br />
        pro!vision<br />
        AKQA
      </div>
    </div>
    <div class="info-block">
      <h4 class="title">Social</h4>
      <div class="flex flex-row gap-2 social">
        <a rel="me" href="https://fosstodon.org/@gotofritz"
          ><MastodonIcon class="home-icon inline-block" /></a
        >
        <a
          aria-label="github profile"
          class="inline-block"
          href="https://github.com/gotofritz"
          ><GithubIcon class="home-icon inline-block" /></a
        >
        <a
          aria-label="linkedin profile"
          class="inline-block"
          href="https://linkedin.com/in/gotofritz"
          ><LinkedinIcon class="home-icon inline-block" /></a
        >
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  .info-block {
    @apply mb-4 flex-1;
  }

  .info-block .title {
    @apply font-bold font-display mb-2;
  }
  .info-block .label {
    @apply font-intro;
  }

  .social {
    fill: white;
    color: white;
  }

  .label div div {
    display: inline-self;
  }
</style>
