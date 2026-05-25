# Notion sync

This folder is reserved for the future Notion CMS bridge.

Planned flow:

```text
Notion Posts database
  -> sync-notion.mjs
  -> src/content/research/*.md
  -> Astro build
  -> Cloudflare Pages
```

Required variables when enabled:

```text
NOTION_API_KEY
NOTION_DATABASE_ID
```

Keep the first version simple. Do not store private Notion tokens in the repo.

