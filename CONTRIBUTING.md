# Contributing

Thanks for helping improve the UCI CanSat website. This guide covers local setup, contribution workflow, and review expectations.

## Project structure

- `app/`: Next.js App Router pages/layouts
- `components/`: shared and UI components
- `constants/`: static content used by routes
- `lib/`: utility code and API clients
- `pages/api/`: backend API routes used by the site
- `studio-uci-cansat-website/`: standalone Sanity Studio package

## Prerequisites

- Node.js LTS and npm
- Access to required environment variables
- Sanity project access (if editing CMS-backed content)

## Local development

1. Install website dependencies:

   ```bash
   npm install
   ```

2. Create local environment file:

   ```bash
   cp .env.example .env.local
   ```

3. Start the site:

   ```bash
   npm run dev
   ```

4. (Optional) Start Sanity Studio in a second terminal:

   ```bash
   cd studio-uci-cansat-website
   npm install
   npm run dev
   ```
   - NOTE: ask Leo (lsiu2@uci.edu) to give you access to the our Sanity Studio Platform

## Branching and pull requests

- Create a focused branch per change.
- Keep PRs small and reviewable.
- Include a clear description of:
  - what changed
  - why it changed
  - how to validate it locally

## Quality checks

Run these before opening a PR:

```bash
npm run lint
npm run build
```

For CI parity, you can also run:

```bash
npm run build:check
```

## Content and CMS changes

- Team and sponsor content is modeled in Sanity schemas under `studio-uci-cansat-website/schemaTypes/`.
- If you add or change schema fields, confirm frontend queries in `lib/queries.ts` still match.
- After schema or Studio config changes, redeploy hosted Studio from `studio-uci-cansat-website/` with `npx sanity deploy` (see `studio-uci-cansat-website/README.md`).
- When introducing new remote media domains, update `next.config.mjs` image configuration.

## API route changes

When editing `pages/api/*`:

- validate required env vars are documented in `.env.example`
- return clear HTTP error codes/messages for bad input or upstream failures
- avoid logging secrets

## Commit style

- Use concise, descriptive commit messages in present tense
- Prefer one logical change per commit
- Recommend following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as reference for commit messages
    - ```
      feat: implement Sanity integration for projects pages
      ```

