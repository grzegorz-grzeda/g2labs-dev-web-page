# CLAUDE.md

Guidance for Claude when working in this repository.

## What this is

The G2Labs company website: the marketing site, product pages, and blog of
Grzegorz Grzęda's independent engineering practice (JDG in Poland). It is an
Astro 5 static site deployed on Netlify.

- **Primary domain: https://g2labs.pl.** `g2labs.dev` and `www.g2labs.dev` are
  aliases that 301-redirect to it (see `netlify.toml`). Use `.pl` in all new
  copy, canonical URLs, and form subjects.
- Site language is **English**. The owner usually talks to Claude in Polish;
  reply in Polish, write site content in English.

## Layout

- `src/data/company.ts`: almost all site content lives here: bio, links,
  services (offers), projects, products, clients, experience timeline, case
  studies, tech stack, education, business details, contact email
  (`company.email`) and the short `stackAreas` list used by contact forms.
  Prefer editing data here
  over hardcoding copy in pages.
- `src/pages/`: routes. `index.astro` (home), `work.astro`, `tech-stack.astro`,
  `contact.astro`, `products/*`, `blog/*`, legal pages.
- `src/layouts/BaseLayout.astro`: shared shell, header, footer, theme switch,
  analytics consent banner.
- `src/styles/global.css`: the whole visual system (light and dark themes).
- `src/content/blog/`: posts in `.md` / `.mdx`. Front matter schema is in
  `src/content.config.ts` (`title`, `excerpt`, `publishDate`, `tags`, `draft`).
  Quote `title` and `excerpt` when they contain a colon.
- `public/`: images. When referencing an image, set `width` / `height` to the
  file's real pixel dimensions (check with `file public/<name>`).
- `tests/company.test.ts`: vitest checks on the data shape (LinkedIn link,
  knowledgebase product with 4 stats, etc.). Keep them passing.

## Commands

```bash
npm ci
npm run check   # astro check (types)
npm test        # vitest
npm run build   # static build into dist/
```

CI (`.github/workflows/ci.yml`) runs all three on every push and PR, and
Netlify posts a deploy preview on each PR
(`https://deploy-preview-<n>--g2labsdev.netlify.app`).

In Claude cloud sessions the npm registry may be unreachable, so a local build
can fail for network reasons. In that case validate the data module with
`node --experimental-strip-types` and rely on CI for check/test/build. Never
report a change as verified until CI is green.

## Content rules

- **Client work under NDA.** The current Sigma Software Group engagement is
  described only in general terms (low-power wireless, mesh networking, device
  security, end-to-end architecture). Do not attach specific chips, protocols,
  or product details to Sigma or any other client. The owner's general stack
  (nRF54 / nRF52, Zephyr, Thread, BLE, CoAP, DTLS, MCUboot) may appear in the
  bio, hero, and tech stack as skills, not tied to a client.
- Do not invent clients, numbers, results, or dates. Use only facts the owner
  stated or that are already in `company.ts`. Ask when unsure.
- Do not publish the hourly rate anywhere on the site.
- Keep the homepage short (hero, clients, services, 3 case studies, MicrOS +
  DevToolsForMe, about, latest posts, contact); details belong on /work and
  /products. Prefer short headings over long abstract sentences.
- Never show deployment or developer notes (e.g. form backend names) to
  visitors.
- Keep the tone direct and engineering-focused; avoid marketing filler and
  generic lines ("profile-backed", "parallel role context", and the like).
- Blog posts are written in the owner's first-person voice; keep claims general
  and accurate, and never reference client specifics.

## Git workflow

- Work on a branch and open a PR to `main`; do not push to `main` directly.
- Wait for CI and share the Netlify deploy preview link.
- `gh` GraphQL is unavailable in Claude sessions; use the REST API
  (`gh api repos/grzegorz-grzeda/g2labs-dev-web-page/...`) to open or edit PRs.
