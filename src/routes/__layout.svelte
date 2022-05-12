<script>
  import "../app.css";
  import "../prism.css";
  import "focus-visible";
  import NavHeader from "$lib/components/NavHeader.svelte";
  import TwitterIcon from "$lib/svgs/TwitterIcon.svelte";
  import GithubIcon from "$lib/svgs/GithubIcon.svelte";
  import LinkedinIcon from "$lib/svgs/LinkedinIcon.svelte";
  import WayfairIcon from "$lib/svgs/WayfairIcon.svelte";
  import BerlinFlag from "$lib/svgs/BerlinFlag.svelte";
  import GermanFlag from "$lib/svgs/GermanFlag.svelte";
</script>

<NavHeader />
<div class="flex flex-col min-h-screen">
  <div class="mx-auto w-full max-w-4xl">
    <slot />
  </div>
</div>
<footer>
  <section class="details w-full">
    <div class="info-block">
      <h4 class="title">Location</h4>
      <div class="label">
        Berlin <BerlinFlag class="home-icon inline-block" /><br />
        Germany <GermanFlag class="home-icon inline-block" />
      </div>
    </div>
    <div class="info-block">
      <h4 class="title">Working for</h4>
      <div class="label">
        <a href="https://wayfair.de"
          >Wayfair <WayfairIcon class="home-icon inline-block" /></a
        >
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
      <div class="flex flex-row gap-2">
        <a
          aria-label="twitter profile"
          class="inline-block"
          href="https://twitter.com/gotofritz"
          ><TwitterIcon class="home-icon inline-block" /></a
        >
        <a
          aria-label="github profile"
          class="inline-block"
          href="https://github.com/gotofritz"
          ><GithubIcon class="home-icon inline-block" /></a
        >
        <a
          aria-label="medium profile"
          class="inline-block"
          href="https://linkedin.com/in/gotofritz"
          ><LinkedinIcon class="home-icon inline-block" /></a
        >
      </div>
    </div>
  </section>
</footer>

<style>
  footer {
    background: black;
    color: white;
  }
  .details {
    grid-area: details;
    justify-self: end;
  }

  .info-block {
    @apply mb-4;
  }

  .info-block .title {
    @apply font-bold font-display;
  }
  .info-block .label {
    @apply font-intro;
    text-align: left;
  }
</style>
