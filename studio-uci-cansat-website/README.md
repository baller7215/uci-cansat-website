# Sanity Studio (`studio-uci-cansat-website`)

Content editing studio for the UCI CanSat website.

This Studio manages CMS documents used by the frontend, including:

- `member`
- `teamYear`
- `project`
- `sponsor`

## Prerequisites

- Node.js LTS and npm
- Access to the configured Sanity project

## Local development

From this directory:

```bash
npm install
npm run dev
```

The Studio runs separately from the Next.js app. Keep both dev servers running if you are developing frontend pages and editing content at the same time.

## Scripts

- `npm run dev`: start Studio in development mode
- `npm run start`: start Studio in production mode
- `npm run build`: build static Studio output
- `npm run deploy`: deploy Studio to Sanity hosting (same as `npx sanity deploy`)
- `npm run deploy-graphql`: deploy GraphQL API schema

## Deploy hosted Studio

The hosted Studio at `*.sanity.studio` is **not** deployed by Vercel. After you change schemas, plugins, or `sanity.config.ts`, redeploy from this directory so editors see the same Studio as local dev.

1. Install dependencies (if you have not already):

   ```bash
   cd studio-uci-cansat-website
   npm install
   ```

2. Log in to Sanity (skip if you are already authenticated):

   ```bash
   npx sanity login
   ```

   You need deploy access to project `nys0hkz1`. Ask a project admin if login succeeds but deploy is denied.

3. Optional: build locally to catch errors before uploading:

   ```bash
   npm run build
   ```

4. Deploy to Sanity hosting:

   ```bash
   npx sanity deploy
   ```

   The CLI prints the Studio URL when deploy finishes. Open that URL (or find it under [sanity.io/manage](https://www.sanity.io/manage) → **uci cansat website** → **Studios**).

5. If the hosted Studio still looks old, hard-refresh or use a private window (Sanity caches the Studio shell aggressively).

**When to deploy:** after any change under `schemaTypes/`, `sanity.config.ts`, or Studio dependencies. Content edits in the Studio do not require redeploy—only Studio code/config changes do.

If you also changed frontend GROQ queries in `../lib/queries.ts`, deploy the Next.js app separately (e.g. Vercel) so the public site matches the new schema.

## Schema source

Schemas are defined in `schemaTypes/` and exported through `schemaTypes/index.ts`.

When you modify schema fields, ensure corresponding frontend GROQ queries remain in sync in `../lib/queries.ts`.
