# Kitaku Research

This repository is the source for a research-style blog planned for `kitaku.org`.

The site is designed for:

- long-form essays
- research notes
- language learning analysis
- teaching materials
- creator operations documentation
- public-facing project updates

The structure is inspired by research pages such as Anthropic's research index:

- a calm homepage
- a `/research` publication index
- featured writing
- topics and categories
- individual article pages
- future Notion-powered publishing

## Recommended stack

- Astro for the website
- Markdown or MDX for local content
- Notion as a future CMS
- GitHub as the source repository
- Cloudflare Pages as hosting

Your computer does not need to stay online. Once connected to Cloudflare Pages,
new commits to GitHub can trigger deployments automatically.

## Folder map

```text
.
|-- .github/
|   `-- workflows/
|       `-- README.md
|-- public/
|   `-- robots.txt
|-- scripts/
|   `-- notion-sync/
|       |-- README.md
|       `-- sync-notion.mjs
|-- src/
|   |-- content/
|   |   |-- config.ts
|   |   |-- notes/
|   |   `-- research/
|   |-- data/
|   |   `-- site.ts
|   |-- layouts/
|   |   |-- ArticleLayout.astro
|   |   `-- BaseLayout.astro
|   |-- pages/
|   |   |-- about.astro
|   |   |-- index.astro
|   |   |-- notes/
|   |   |-- research/
|   |   `-- topics/
|   `-- styles/
|       `-- global.css
|-- .env.example
|-- .gitignore
|-- astro.config.mjs
|-- package.json
|-- tsconfig.json
`-- wrangler.toml
```

## How each folder is used

### `.github/workflows`

Reserved for GitHub Actions.

For the first version, Cloudflare Pages Git integration is simpler than using a
GitHub Actions deployment workflow. Keep this folder for future automation such
as scheduled Notion sync, link checks, or preview builds.

### `public`

Static files copied directly to the built site.

Use it for:

- `robots.txt`
- favicon files
- static images that do not need processing
- verification files from search engines or platforms

### `scripts/notion-sync`

Future Notion CMS bridge.

The goal is:

```text
Notion database -> script -> Markdown files -> Astro build -> Cloudflare Pages
```

The first version only contains a safe placeholder script. It checks that the
required environment variables exist, then exits without touching content.

### `src/content`

Structured writing content.

Use:

- `src/content/research` for polished public essays and articles
- `src/content/notes` for shorter notes, logs, and fragments
- `src/content/config.ts` to define required metadata fields

Each article uses frontmatter:

```yaml
---
title: "Article title"
slug: "article-slug"
description: "Short summary for listings and SEO."
date: 2026-05-25
category: "Infrastructure"
tags: ["Cloudflare", "Blog"]
featured: true
draft: false
---
```

### `src/data`

Site-level settings and navigation data.

Edit `src/data/site.ts` when you want to change:

- site name
- domain
- navigation links
- topic list
- social or external links

### `src/layouts`

Reusable page frames.

Use:

- `BaseLayout.astro` for normal pages
- `ArticleLayout.astro` for research posts and notes

### `src/pages`

Public routes.

Current routes:

- `/` homepage
- `/research` research index
- `/research/[slug]` individual research articles
- `/notes` notes index
- `/topics` topic overview
- `/about` about page

### `src/styles`

Global visual system.

The first version uses a calm editorial style with restrained colors and clear
typography. This is the right place to adjust the visual identity later.

## Local development

Install dependencies:

```bash
npm install
```

Start local preview:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Cloudflare Pages settings

When creating the Cloudflare Pages project:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 22 or newer
```

Recommended domain setup:

```text
kitaku.org        primary site
www.kitaku.org    redirect or alias to kitaku.org
archivedaoi.uk    later archive site or redirect
```

## Future Notion CMS variables

When the Notion CMS bridge is enabled, add these environment variables in
Cloudflare Pages and GitHub Actions:

```text
NOTION_API_KEY=
NOTION_DATABASE_ID=
```

Do not commit real tokens to this repository.

