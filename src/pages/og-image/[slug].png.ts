import siteConfig from "@/site-config";
import { draftsStop, getFormattedDate, slugRewrite } from "@/utils";
import { Resvg } from "@resvg/resvg-js";
import type { APIContext, GetStaticPathsResult } from "astro";
import { getCollection } from "astro:content";
import satori, { SatoriOptions } from "satori";
import { html } from "satori-html";

const monoFontReg = await fetch(
  "https://api.fontsource.org/v1/fonts/roboto-mono/latin-400-normal.ttf",
);

const monoFontBold = await fetch(
  "https://api.fontsource.org/v1/fonts/roboto-mono/latin-700-normal.ttf",
);

const ogOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  // debug: true,
  embedFont: true,
  fonts: [
    {
      name: "Roboto Mono",
      data: await monoFontReg.arrayBuffer(),
      weight: 400,
      style: "normal",
    },
    {
      name: "Roboto Mono",
      data: await monoFontBold.arrayBuffer(),
      weight: 700,
      style: "normal",
    },
  ],
};

const markup = (title: string, pubDate: string) => html`<div
  tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]"
>
  <div tw="flex flex-col flex-1 w-full p-10 justify-center">
    <p tw="text-2xl mb-6">${pubDate}</p>
    <h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
  </div>
  <div
    tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl"
  >
    <div tw="flex items-center">
      <svg
        viewBox="0 0 512 512"
        width="64"
        height="64"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            id="path-goto"
            d="M 123.8 88 L 52 88 L 52 194.7 L 87 194.7 L 87 159.6 L 70 159.6 L 70 123.6 L 124 123 L 124 230 L 17 230 C 17 230 17 17 17 52 C 17 52 124 52 124 52 L 124 88 L 123.8 88 Z M 176.25 194.684 C 176.25 194.684 210.52 194.684 210.52 194.684 C 210.52 194.684 211 89 211 89 C 211 89 176 89 176 89 C 176 89 176 195 176 195 L 176.25 194.684 Z M 246 230 L 140 230 C 140 230 140 52 140 52 C 140 52 247 52 247 52 C 247 52 246 230 246 230 Z M 334 230 L 297 230 L 298.27 88.527 L 263.02 88.527 C 263.02 88.527 263 52 263 52 C 263 52 369 52 369 52 C 369 52 369.75 88.527 369.75 88.527 L 334.5 88.527 L 334 230 Z M 422.25 194.684 C 422.25 194.684 456.52 194.684 456.52 194.684 C 456.52 194.684 456 88.79 456 88.79 C 456 88.79 422 88.79 422 88.79 C 422 88.79 422.25 194.684 422.25 194.684 Z M 492 230 L 386 230 C 386 230 386 52 386 52 C 386 52 492 52 492 52 L 492 230 Z"
            style="fill: rgb(255, 255, 255); stroke: none"
          ></path>
        </g>
        <g>
          <path
            id="path-fritz"
            stroke-width="1"
            d="M 51 461 L 17 461 L 17 294 L 100 294 L 100 327.337 L 51 327.375 L 51 361.722 L 100 361.685 L 100 395.022 L 51 395.06 L 51 461 Z M 150 327.375 C 150 327.375 150 361.722 150 361.722 C 150 361.722 182 361.685 182 361.685 C 182 361.685 182 327.337 182 327.337 C 182 327.337 150 327.375 150 327.375 Z M 150 461 L 116 461 L 116 294 L 199.5 294.037 L 200 311.174 L 216 311.211 L 216 378.859 L 200 378.859 L 200 395.022 L 216 395.022 L 216 461 L 182 461 L 182 395.022 L 150 395.06 L 150 461 Z M 265 461.697 L 231.1 461 L 231 294 L 265 294.037 L 265 461 L 265 461.697 Z M 347 461.697 L 313 461 L 313 327.337 L 280 327.337 L 280 294 L 380 294.037 L 380 327.375 L 347 327.375 L 347 461 L 347 461.697 Z M 495 461.697 L 395 461 L 395 394.517 L 411.58 394.524 L 411.58 377.856 L 428.08 377.856 L 428.08 361.722 L 444.58 361.722 L 444.58 344.549 L 462 344.511 L 461.08 327.375 L 395 327.337 L 395 294 L 495 294.037 L 495 345.559 L 478.5 345.559 L 478.5 361.722 L 462 361.722 L 462 377.886 L 445 377.848 L 445 395.022 L 429 395.06 L 429 429.407 L 495 429.407 L 495 461 L 495 461.697 Z M 462 361.722 L 478 361.685 L 462 361.722 Z M 478.5 345.559 L 495 345.559 L 478 345.521 L 478.5 345.559 Z"
            style="fill: rgb(255, 255, 255); stroke: none"
          ></path>
        </g>
      </svg>
      <p tw="ml-3 font-semibold">${siteConfig.title}</p>
    </div>
    <p>by ${siteConfig.author}</p>
  </div>
</div>`;

export async function get({ params: { slug } }: APIContext) {
  const allPosts = await getCollection("post", draftsStop);
  const mappedPosts = allPosts.map(slugRewrite);
  const post = mappedPosts.find((p) => p.slug === slug!);
  const title = post?.data.title ?? siteConfig.title;
  const postDate = getFormattedDate(post?.data.publishDate ?? Date.now(), {
    weekday: "long",
  });
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();
  return {
    body: png,
    encoding: "binary",
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getCollection("post", draftsStop);
  const allPosts = posts.map(slugRewrite).map((p) => {
    return {
      ...p,
      slug: p.slug.replace(/^.*\/([^/]+)$/, "$1"),
    };
  });
  return allPosts
    .filter(({ data }) => !data.ogImage)
    .map(({ slug }) => ({ params: { slug } }));
}
