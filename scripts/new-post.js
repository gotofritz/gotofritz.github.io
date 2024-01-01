const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const ROOT = path.resolve("./src/content/post/");

function generateDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function generateSlug(title) {
  return slugify(title, {
    lower: true,
    remove: /[^\w\s$*_+.()\-]+/,
  }).replaceAll(/-.(?=-)/g, "");
}

function generateFilePath(title) {
  const date = generateDate();
  const slug = generateSlug(title);
  return path.join(ROOT, `${date}-${slug}.md`);
}

function generateMarkdown(title) {
  const date = generateDate();
  const slug = generateSlug(title);
  const filePath = generateFilePath(title);

  const frontmatter = `---
publishDate: ${date}
draft: true
archived: false
title: "${title}"
tags:
  - new
description: This is <i>your</i> content.
---

# ${title}

This is your content.
`;

  return { filePath, content: frontmatter };
}

function saveMarkdown({ filePath, content }) {
  fs.writeFileSync(filePath, content);
  console.log(`Markdown file created and saved at: ${filePath}`);
}

function main() {
  const title = process.argv.slice(2).join(" ");

  if (!title) {
    console.error("Please provide a title as an argument.");
    process.exit(1);
  }

  const { filePath, content } = generateMarkdown(title);
  saveMarkdown({ filePath, content });
}

main();
