<script>
  export let description = "";
  const links = [
    {
      label: "github",
      permalink: "https://github.com/gotofritz",
    },
    {
      label: "twitter",
      permalink: "https://twitter.com/gotofritz",
    },
    {
      label: "linkedin",
      permalink: "https://www.linkedin.com/in/gotofritz",
    },
    {
      label: "rss",
      permalink: "/feed.xml",
    },
  ];
</script>

<footer>
  <div class="content">
    <nav class="flat-nav">
      <div
        itemscope
        itemtype="http://schema.org/Person"
        class="vcard group-of-links"
      >
        {#each links as link}
          <a href={link.permalink}>{link.label}</a>
        {/each}
      </div>
    </nav>
  </div>
  {#if description}
    <div class="content">{{ description }}</div>
  {/if}
  <div class="content">
    All content under <a
      href="http://creativecommons.org/licenses/by-nc-sa/2.0/de/"
      >creative commons</a
    >
    and code under <a href="http://mit-license.org/">MIT license</a>.
  </div>
</footer>

<style>
  footer {
    flex-direction: column;
    align-items: center;
    background-color: rgba(36, 16, 35, 1);
    border-radius: 0 0 4px 4px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  footer nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  footer .content {
    max-width: 700px;
    margin: 24px;
    padding: 0;
    color: rgba(227, 197, 103, 1);
    width: 100%;
    flex: 1;
  }
  footer .content div {
    color: rgba(227, 197, 103, 1);
  }
  footer a,
  footer a:active,
  footer a:hover,
  footer a:visited {
    color: rgba(227, 197, 103, 1) !important;
  }
  footer .flat-nav {
    flex-wrap: wrap;
  }
  footer a:hover {
    border-bottom-color: rgba(227, 197, 103, 1);
  }
  footer .group-of-links a:last-of-type {
    margin-right: 0;
  }
</style>
