<script>
  import "../app.css";
  import "../prism.css";
  import "focus-visible";
  import { name } from "$lib/info";
  import NavHeader from "$lib/components/NavHeader.svelte";
</script>

<NavHeader />
<div class="flex flex-col min-h-screen">
  <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
    <div class="flex h-16 px-4 py-2 justify-between items-center">
      <h2
        class="!text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 dark:from-violet-500 dark:to-pink-500"
      >
        <a class="text-lg sm:text-2xl font-bold" href="/">
          {name}
        </a>
      </h2>
    </div>
    <main
      class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full flex-grow py-4 px-4"
    >
      <slot />
    </main>
  </div>
</div>
