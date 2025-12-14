# My Hugo Bear Blog

This is a static website built with the [Hugo Bear Blog](https://github.com/janraasch/hugo-bearblog) theme.

## Theme Information

This theme is based on [Bear Blog](https://bearblog.dev), a free, no-nonsense, super-fast blogging platform created by Herman.

## Creating New Content

To create a new page, run:

```bash
hugo new my-new-page.md
```

To create a new blog post, run:

```bash
hugo new blog/$(date +%Y-%m-%d)-a-title/index.md
```

For a more convenient workflow, you can add the scripts directory to your PATH:

```bash
export PATH="$PATH:./scripts"
```

Then you can use the custom `hugo-new` script:

```bash
hugo-new "Your Blog Post Title"
```

This script will:

- Create a new blog post with a date-prefixed filename
- Automatically select a random image from `/Users/fritz/Documents/frames` and use it as the feature image

## Development

To run the development server:

```bash
hugo server --source ./exampleSite --themesDir ../..
```

## Deployment

To deploy to GitHub Pages:

1. Build the site: `hugo --source ./exampleSite --themesDir ../..`
2. Commit and push to your GitHub repository

## Special Thanks

Special thanks to Herman for creating the original Bear Blog platform, and to Jan Raasch for creating the Hugo theme.
