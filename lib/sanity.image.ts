import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./sanity.client";

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(sanityClient).image(source);