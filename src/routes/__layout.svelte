<script>
  import "../app.css";
  import "../prism.css";
  import "focus-visible";
  import NavHeader from "$lib/components/NavHeader.svelte";
</script>

<NavHeader />
<div class="flex flex-col min-h-screen">
  <div class="mx-auto w-full max-w-5xl">
    <slot />
  </div>
</div>
