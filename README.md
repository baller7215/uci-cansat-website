# UCI CanSat Website

Public website for **UCI CanSat**—student teams designing, building, and launching CanSat payloads. This repository contains the Next.js frontend, API routes for email and social content, and a bundled [Sanity](https://www.sanity.io/) Studio for editors.

## Tech stack

| Area | Choices |
|------|---------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router for pages, `pages/api` for a few API routes) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), CSS variables in `app/globals.css` |
| **UI** | [shadcn/ui](https://ui.shadcn.com/)–style components (`components/ui`), [Radix UI](https://www.radix-ui.com/) primitives, [Lucide](https://lucide.dev/) icons, [react-icons](https://react-icons.github.io/react-icons/) |
| **CMS** | [Sanity](https://www.sanity.io/) via [`next-sanity`](https://github.com/sanity-io/next-sanity), GROQ queries in `lib/queries.ts`, images via `@sanity/image-url` |
| **Data fetching (client)** | [TanStack Query](https://tanstack.com/query) (`app/providers.tsx`) for feeds and other client-side data |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + `@hookform/resolvers` |
| **Motion / 3D** | [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org/) (`VisualizeModel` and related assets) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights) |
| **Email** | [Nodemailer](https://nodemailer.com/) in `pages/api/send-email.ts` |
| **LinkedIn** | Server-side proxy in `pages/api/linkedin-feed` (axios + optional caching); scraped/parsed HTML utilities where used (`cheerio`, `busboy` as needed) |

**Sanity Studio** (content editing) lives in `studio-uci-cansat-website/` as a separate npm package (Sanity v4, React 19 in the studio). It is excluded from the Next.js TypeScript project and webpack watch paths—run it as its own dev server.

## Repository layout

```
uci-cansat-website/
├── app/                      # Next.js App Router: routes, layouts, global styles
│   ├── layout.tsx            # Root layout, fonts, providers, analytics
│   ├── page.tsx              # Home
│   ├── about/, contact/, join/, sponsors/, updates/ …
│   ├── team/                 # Team listing + dynamic [year] routes
│   └── projects/             # Project pages + dynamic [year] routes
├── components/
│   ├── shared/               # Site sections: Navbar, Footer, forms, carousels, etc.
│   └── ui/                   # Reusable primitives (button, form, accordion, …)
├── constants/                # Navigation, year links, and large static content bundles
├── hooks/                    # Client hooks (e.g. LinkedIn feed)
├── lib/                      # Sanity client, GROQ helpers, LinkedIn helpers, `cn()` utils
├── pages/api/                # API routes: contact email, LinkedIn feed proxy
├── public/                   # Static assets (images, models, etc.)
├── types/                    # Shared TypeScript declarations
├── studio-uci-cansat-website/# Sanity Studio (schemas, deploy)
│   └── schemaTypes/          # member, teamYear, project, sponsor
└── next.config.mjs           # Image remote patterns (Sanity CDN, LinkedIn media), studio ignored in webpack
```

**Path alias:** `@/*` maps to the project root (see `tsconfig.json`).

### Content model (Sanity)

Schemas are defined under `studio-uci-cansat-website/schemaTypes/`:

- **member** — team members (by academic year)
- **teamYear** — team-year metadata
- **project** — project documents in the CMS
- **sponsor** — sponsors (by academic year)

The site loads **team** and **sponsor** data from Sanity through `lib/sanity.client.ts` and `lib/queries.ts`. Some **project** UI is driven by structured data in `constants/` (e.g. `yearTeamProject`); align CMS usage with how each route is implemented when adding years or migrating content.

## Prerequisites

- **Node.js** (LTS recommended) and npm
- A **Sanity** project (project ID, dataset, API version) for team/sponsor (and other) CMS-driven pages
- For **contact email**: Gmail (or compatible) credentials via env vars
- For **LinkedIn feed** on Updates: LinkedIn API–related env vars (see below)

## Environment variables

Create `.env.local` in `uci-cansat-website/` for local development (never commit secrets). Typical variables:

**Sanity (frontend)**

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional; defaults in code if unset)

**Contact form (`pages/api/send-email`)**

- `EMAIL_USER`
- `EMAIL_PASS`

**LinkedIn feed API (`pages/api/linkedin-feed`)**

- `LINKEDIN_BASE_URL`
- `LINKEDIN_ORG_URN`
- `LINKEDIN_API_VERSION`
- `LINKEDIN_ACCESS_TOKEN`

Production (e.g. Vercel) should set the same variables so Sanity image URLs and API behavior match the deployment environment.

## Scripts

From **`uci-cansat-website/`** (main site):

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Next.js dev server ([http://localhost:3000](http://localhost:3000)) |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |
| `npm run build:check` | Lint + build (CI-friendly) |

From **`uci-cansat-website/studio-uci-cansat-website/`** (Sanity Studio):

| Command | Purpose |
|---------|---------|
| `npm run dev` | Sanity Studio dev (separate port; see CLI output) |
| `npm run build` / `npm run deploy` | Studio build / deploy to Sanity hosting |

Install dependencies in each directory separately (`npm install`).

## Local development

1. Clone the repo and `cd uci-cansat-website`.
2. `npm install`
3. Copy or create `.env.local` with at least the Sanity `NEXT_PUBLIC_*` variables if you need CMS-driven pages.
4. `npm run dev`
5. Optionally, in another terminal: `cd studio-uci-cansat-website && npm install && npm run dev` to edit CMS content.

If you hit odd caching or build issues, clearing `.next` and rebuilding often helps (`rm -rf .next && npm run build`).

## Deployment

The app is a standard Next.js deployment (commonly [Vercel](https://vercel.com)): configure environment variables, run `npm run build`, and ensure remote image domains in `next.config.mjs` stay in sync with any new asset hosts.

Sanity Studio can be deployed with `sanity deploy` from the studio folder when you want editors on hosted Studio.

## License

Private team project; see team policies for redistribution and content use.
