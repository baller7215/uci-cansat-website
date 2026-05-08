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
- `npm run deploy`: deploy Studio to Sanity hosting
- `npm run deploy-graphql`: deploy GraphQL API schema

## Schema source

Schemas are defined in `schemaTypes/` and exported through `schemaTypes/index.ts`.

When you modify schema fields, ensure corresponding frontend GROQ queries remain in sync in `../lib/queries.ts`.
