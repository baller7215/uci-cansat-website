import { createClient } from "next-sanity";

// NEXT_PUBLIC_* are inlined at build time. Set them in your production build
// (e.g. Vercel env vars) so Sanity image URLs are correct in prod.
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01",
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});