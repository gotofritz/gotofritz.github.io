<script>
  export let tags = [];
</script>

<div class="block lg:inline-block">
  {#each tags as tag}
    <div
      class="rounded-lg bg-gray-200 py-1 px-2 leading-tight mr-4 mb-2 text-center text-gray-600 tag text-xs inline-block "
    >
      <a href={`/tags/${tag}`} class="no-underline">{tag}</a>
    </div>
  {/each}
</div>

<style>
  a {
    @apply font-sans;
  }
</style>
