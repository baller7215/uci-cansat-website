// pages/api/linkedin-feed/index.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Post = {
  content: {
    media?: { id: string };
    multiImage?: { images: { id: string }[] };
  };
};

const BASE_URL = process.env.LINKEDIN_BASE_URL;
const ORGANIZATION_URN = process.env.LINKEDIN_ORG_URN;
const LINKEDIN_API_VERSION = process.env.LINKEDIN_API_VERSION;
const BEARER_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;


// batch request

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ posts: Post[] }>
) {
  // 1) fetch the 10 most recent posts by your org
  const authorUrn = `urn:li:organization:${ORGANIZATION_URN}`;
  const postsUrl =
    `${BASE_URL}/rest/posts` +
    `?author=${encodeURIComponent(authorUrn)}` +
    `&q=author&count=10&sortBy=LAST_MODIFIED`;

  const { data: postsData } = await axios.get<{ elements: Post[] }>(postsUrl, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      "LinkedIn-Version": LINKEDIN_API_VERSION,
      "X-RestLi-Protocol-Version": "2.0.0",
      "X-RestLi-Method": "FINDER",
    },
  });

  console.log("postsData", postsData);

  // only works for images rn
  /** @TODO MODIFY TO WORK FOR VIDEOS */

  // 2) pull out every image URN from those posts, safely
  const urns = postsData.elements.flatMap((post) => {
    const mediaId = post.content?.media?.id;
    if (mediaId?.startsWith("urn:li:image:")) return [mediaId];

    const multi = post.content?.multiImage?.images?.[0]?.id;
    if (multi?.startsWith("urn:li:image:")) return [multi];

    return []; // no image on this post
  });

  // dedupe
  const uniqueUrns = Array.from(new Set(urns));

  console.log("uniqueUrns", uniqueUrns);

  if (uniqueUrns.length > 0) {
    // 3) build the batch-request string: ids=List(urn%3Ali%3Aimage:ABC,urn%3Ali%3Aimage:XYZ)
    const encodedList = uniqueUrns.map(encodeURIComponent).join(",");

    const batchUrl = `${BASE_URL}/rest/images?ids=List(${encodedList})`;

    // 4) fetch them all in one go
    const { data: batchData } = await axios.get<{
      results: Record<string, { downloadUrl: string }>;
    }>(batchUrl, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "LinkedIn-Version": LINKEDIN_API_VERSION,
        "X-RestLi-Protocol-Version": "2.0.0",
      },
    });

    console.log("batchData", batchData);

    // 5) stitch the downloadUrl onto each post
    const enriched = postsData.elements.map((post) => {
      const urn =
        post.content?.media?.id || post.content?.multiImage?.images?.[0]?.id;

      if (!urn) return { ...post, imageUrl: null };

      // lookup the signed URL
      const info = batchData.results[urn];
      return { ...post, imageUrl: info?.downloadUrl ?? null };
    });

    console.log("enriched", enriched);

    // tell Vercel’s CDN (and any browser) to cache this endpoint for 1 hour
    res.setHeader(
      "Cache-Control",
      // public = anyone (browsers, intermediate proxies, edge CDN) may cache
      // s-maxage=86400 = serve the cached response for up to 86 400 seconds (60 hours)
      // stale-while-revalidate=59 = after it goes stale, still serve the old response
      //     for up to 59 seconds while fetching a fresh copy in the background
      "public, s-maxage=86400, stale-while-revalidate=59"
    );

    return res.status(200).json({ posts: enriched });
  }

  // no images at all
  return res.status(200).json({ posts: postsData.elements });
}
