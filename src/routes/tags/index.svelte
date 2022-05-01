<script context="module">
  // @ts-ignore
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    const postsByTags = arrangePostsByTag(allPosts);
    const tags = Object.keys(postsByTags).sort();

    return {
      props: {
        postsByTags,
        tags,
      },
    };
  };

  /** @param {any} files */
  function arrangePostsByTag(files) {
    const storage = {};
    for (let file of files) {
      for (let tag of file.tags) {
        if (tag in storage) {
          // @ts-ignore
          storage[tag].push(file);
        } else {
          // @ts-ignore
          storage[tag] = [file];
        }
      }
    }
    return storage;
  }
</script>

<script>
  import Header from "$lib/Header.svelte";
  import PostSummary from "$lib/PostSummary.svelte";

  /** @type any*/
  export let postsByTags = {};
  /** @type string[]*/
  export let tags = [];
</script>

<svelte:head>
  <title>tags || gotofritz</title>
  <meta name="description" content="All the tags used on this site" />
</svelte:head>

<Header />
<article class="content-tags">
  {#each tags as tag}
    {#each postsByTags[tag] as post, i}
      <PostSummary
        tag={i === 0 ? tag : "&nbsp;"}
        when={post.when}
        permalink={post.permalink}
        excerpt={post.excerpt}
        title={post.title}
        isEmpty={post.isEmpty}
      />
    {/each}
  {/each}
</article>

<style>
</style>
