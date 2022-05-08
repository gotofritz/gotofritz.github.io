<script context="module">
  export const prerender = true;

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch("/posts.json?limit=100").then((res) =>
          res.json(),
        ),
      },
    };
  };
</script>

<script>
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { makeTitle } from "$lib/info.js";
  import TwitterIcon from "$lib/svgs/TwitterIcon.svelte";
  import GithubIcon from "$lib/svgs/GithubIcon.svelte";
  import LinkedinIcon from "$lib/svgs/LinkedinIcon.svelte";
  import WayfairIcon from "$lib/svgs/WayfairIcon.svelte";
  import BerlinFlag from "$lib/svgs/BerlinFlag.svelte";
  import GermanFlag from "$lib/svgs/GermanFlag.svelte";

  export let recentPosts;
</script>

<svelte:head>
  <title>{makeTitle("Fritz Stelluto")}</title>
</svelte:head>

<div class="home grid">
  <header class="mt-4"><h1 class="font-display">Fritz Stelluto</h1></header>
  <main class="intro font-intro text-4xl leading-tight mb-28">
    I'm Fritz, an engineer based in Berlin. I currently work in the Machine
    Learning department at <a href="https://wayfair.de">Wayfair</a>. I tend to
    write short posts about technical stuff
  </main>

  <section class="details mr-8 w-36">
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
  <section class="posts pr-8">
    {#each recentPosts as post}
      <div class="flex">
        <PostPreview {post} small />
      </div>
    {/each}
  </section>
</div>

<style>
  .home {
    grid-template-columns: 12rem 2rem auto;
    grid-template-areas:
      "header header header"
      "intro  intro  intro"
      "details .. posts"
      "footer footer footer";
  }
  header {
    grid-area: header;
  }
  header h1 {
    font-size: 9.4rem;
    line-height: 1.1;
  }

  .intro {
    width: 49ch;
    grid-area: intro;
  }

  .details {
    grid-area: details;
    justify-self: end;
  }

  .posts {
    grid-area: posts;
  }

  .info-block {
    @apply mb-4;
    width: 140px;
  }

  .info-block .title {
    @apply font-bold font-display;
  }
  .info-block .label {
    @apply font-intro;
    text-align: left;
  }
  :global(.home-icon) {
    height: 1rem;
    width: 1rem;
  }
</style>
