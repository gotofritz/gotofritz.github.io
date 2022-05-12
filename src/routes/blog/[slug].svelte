<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ params, fetch }) {
    const { slug } = params;

    // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
    const posts = await fetch("/posts.json").then((res) => res.json());
    const post = posts.find((post) => slug === post.slug);

    if (!post) {
      return {
        status: 404,
        error: "Post not found",
      };
    }

    console.log(
      post.isIndexFile
        ? `../../../posts/blog/${post.slug}/index.md`
        : `../../../posts/blog/${post.slug}.md`,
    );
    const component = post.isIndexFile
      ? // vite requires relative paths and explicit file extensions for dynamic imports
        await import(`../../../posts/blog/${post.slug}/index.md`)
      : await import(`../../../posts/blog/${post.slug}.md`);

    return {
      props: {
        ...post,
        component: component.default,
      },
    };
  }
</script>

<script>
  import PostDate from "$lib/components/PostDate.svelte";
  import PostTags from "$lib/components/PostTags.svelte";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
  import { name, website } from "$lib/info";
  import ToC from "$lib/components/ToC.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";
  import ArrowLeftIcon from "$lib/components/ArrowLeftIcon.svelte";

  export let component;

  // metadata
  export let title;
  export let date;
  export let preview;
  export let readingTime;
  export let slug;
  export let next;
  export let previous;
  export let excerpt;
  export let tags;

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    title,
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;

  const url = `${website}/${slug}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={preview.text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={preview.text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<article class="relative post grid mb-12">
  <header class="mt-8">
    <h1 class="font-display text-6xl">
      {title}
    </h1>
  </header>

  <main class="intro font-intro text-2xl leading-tight">
    {@html excerpt}
    <div class="opacity-70 mb-28">
      <PostDate {date} {readingTime} />
      <PostTags {tags} />
    </div>
  </main>

  <div class="relative post-content">
    <!-- render the post -->
    <svelte:component this={component} />

    <!-- table of contents -->
    <div
      class="hidden xl:block absolute not-prose left-[100%]"
      aria-label="Table of Contents"
    >
      <div class="fixed z-10 px-4 py-2 ml-8 top-[6.5rem] w-60 right-0">
        <ToC allowedHeadings={["h2", "h3", "h4", "h5", "h6"]} />
      </div>
    </div>
  </div>
</article>

<div class="pt-12 flex justify-between">
  <ButtonLink href={`/blog`}>
    <slot slot="icon-start">
      <ArrowLeftIcon class="h-5 w-5" />
    </slot>
    Back to Posts
    <slot slot="icon-end" />
  </ButtonLink>
</div>

{#if previous || next}
  <hr />
  <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
    {#if previous}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label">Previous Post</h6>
        <div class="flex-1 post-preview">
          <PostPreview post={previous} small />
        </div>
      </div>
    {:else}
      <div />
    {/if}
    {#if next}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label flex justify-end">Next Post</h6>
        <div class="flex-1 post-preview">
          <PostPreview post={next} small />
        </div>
      </div>
    {/if}
  </div>
{/if}

<style lang="postcss">
  :global(h2) {
    @apply text-2xl mb-4 font-bold;
  }

  :global(h2:not(:first-of-type)) {
    @apply mt-8;
  }

  :global(pre[class^="language"]) {
    /* margin: 1rem -6rem 1rem -10rem; */
    overflow-x: scroll;
  }

  :global(pre > code) {
    /* margin: 1rem -6rem 1rem -10rem; */
    width: 100%;
  }

  .post {
    grid-template-columns: 4rem 46rem 6rem;
    grid-template-areas:
      "header header header"
      "intro  intro  intro "
      " .. posts .."
      "footer footer footer ";
  }

  header {
    grid-area: header;
  }
  header h1 {
    line-height: 1.1;
  }

  .intro {
    grid-area: intro;
  }

  .post-content {
    grid-area: posts;
  }
</style>
