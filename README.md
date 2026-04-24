# Environment variables

This site uses the following environment variables:

```
PUBLIC_HEROTOFU_ENDPOINT=your-herotofu-endpoint
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX  # Your Google Analytics tag (optional)
```

If `PUBLIC_GOOGLE_ANALYTICS_ID` is set, Google Analytics will be enabled on all pages. Leave it blank to disable analytics.
# G2Labs website

This repository contains the G2Labs marketing site and blog, built with Astro for static deployment on Netlify.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm test
npm run build
```

## Project shape

- `src/pages` contains the landing page, work page, and blog routes.
- `src/content/blog` contains Markdown or MDX blog posts.
- `src/layouts/BaseLayout.astro` holds the shared shell and metadata.
- `src/styles/global.css` contains the visual system.

## Netlify deployment

1. Push this repository to GitHub.
2. In Netlify, create a new site from that GitHub repository.
3. Use the default build settings from `netlify.toml`.
4. In Netlify domain settings, add `g2labs.dev` as the custom domain.
5. Update your domain DNS so the apex and `www` records point to Netlify.
6. Enable HTTPS in Netlify after DNS is verified.

## CI and CD

- `.github/workflows/ci.yml` runs install, `astro check`, `vitest`, and `astro build` on pushes and pull requests.
- `.github/workflows/deploy-netlify.yml` deploys the built site to Netlify on pushes to `main`.
- Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub repository secrets before enabling the deploy workflow.

## Content editing

Add a new post by creating a file in `src/content/blog` with frontmatter shaped like this:

```md
---
title: Your title
excerpt: One short summary sentence.
publishDate: 2026-04-24
tags:
  - strategy
  - web
draft: false
---
```

## Recommended next changes

- Replace the placeholder copy with your real company description, services, and case studies.
- Add an OG image and favicon for the domain.
- Connect Netlify Forms or an email workflow if you want a contact form later.