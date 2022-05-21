<script>
  import { dateAsString, datetime } from "$lib/date-format";

  export let date;
  export let readingTime;
</script>

<time class="font-summary text-base" datetime={datetime(date)}
  >{dateAsString(date)}</time
>
{#if readingTime}•
  <span class="font-summary mr-2 text-base">{readingTime}</span>
{/if}
