import { getPosts } from "$lib/get-posts";

const siteUrl = "https://gotofritz.net";
const postsUrl = `${siteUrl}/blog`;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
  // helper for vscode syntax highlighting
  const xml = String.raw;

  const posts = getPosts();

  return {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml",
    },
    body: xml`
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
        <title>gotofritz</title>
        <link>https://gotofritz.net</link>
        <description>fritz stelluto's personal website</description>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>${posts
      .map(
        (post) =>
          xml`
          <item>
            <guid>${postsUrl}/${post.slug}</guid>
            <title>${post.title}</title>
            <description>${post.excerpt}</description>
            <link>${postsUrl}/${post.slug}</link>
            <pubDate>${new Date(post.when).toUTCString()}</pubDate>
        </item>
      `,
      )
      .join("")}
  </channel>
</rss>`,
  };
}
