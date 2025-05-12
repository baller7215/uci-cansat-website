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

  // 2) pull out every image and video URN from those posts
  const imageUrns = new Set<string>();
  const videoUrns = new Set<string>();

  for (const post of postsData.elements) {
    const mediaId = post.content?.media?.id;
    if (mediaId?.startsWith("urn:li:image:")) imageUrns.add(mediaId);
    else if (mediaId?.startsWith("urn:li:video:")) videoUrns.add(mediaId);

    const multi = post.content?.multiImage?.images ?? [];
    for (const image of multi) {
      if (image?.id.startsWith("urn:li:image:")) imageUrns.add(image.id);
      else if (image?.id.startsWith("urn:li:video:")) videoUrns.add(image.id);
    }
  }

  console.log("imageUrns", imageUrns);
  console.log("videoUrns", videoUrns);

  // 3) batch‐fetch images exactly as before
  let imageMap: Record<string, string> = {};
  if (imageUrns.size) {
    const list = Array.from(imageUrns).map(encodeURIComponent).join(",");
    const {
      data: { results },
    } = await axios.get<{
      results: Record<string, { downloadUrl: string }>;
    }>(`${BASE_URL}/rest/images?ids=List(${list})`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "LinkedIn-Version": LINKEDIN_API_VERSION,
        "X-Restli-Protocol-Version": "2.0.0",
      },
    });
    // flatten to a simple map urn → url
    imageMap = Object.fromEntries(
      Object.entries(results).map(([urn, info]) => [urn, info.downloadUrl])
    );
  }

  // 4) individually fetch each video
  const videoMap: Record<string, string> = {};
  await Promise.all(
    Array.from(videoUrns).map(async (urn) => {
      const enc = encodeURIComponent(urn);
      try {
        const { data } = await axios.get<{ downloadUrl: string }>(
          `${BASE_URL}/rest/videos/${enc}`,
          {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              "LinkedIn-Version": LINKEDIN_API_VERSION,
              "X-Restli-Protocol-Version": "2.0.0",
            },
          }
        );
        videoMap[urn] = data.downloadUrl;
      } catch {
        videoMap[urn] = ""; // or `null` if you prefer
      }
    })
  );

  // 5) stitch each post together with whichever media URL it has
  const enriched = postsData.elements.map((post) => {
    const urn =
      post.content?.media?.id ?? post.content?.multiImage?.images?.[0]?.id;
    let mediaUrl: string | null = null;
    if (urn?.startsWith("urn:li:image:")) {
      mediaUrl = imageMap[urn] ?? null;
    } else if (urn?.startsWith("urn:li:video:")) {
      mediaUrl = videoMap[urn] ?? null;
    }
    return { ...post, mediaUrl };
  });

  return res.status(200).json({ posts: enriched });

  // const urns = postsData.elements.flatMap((post) => {
  //   const mediaId = post.content?.media?.id;
  //   if (mediaId?.startsWith("urn:li:image:")) return [mediaId];

  //   const multi = post.content?.multiImage?.images?.[0]?.id;
  //   if (multi?.startsWith("urn:li:image:")) return [multi];

  //   return []; // no image on this post
  // });

  // // dedupe
  // const uniqueUrns = Array.from(new Set(urns));

  // console.log("uniqueUrns", uniqueUrns);

  // if (uniqueUrns.length > 0) {
  //   // 3) build the batch-request string: ids=List(urn%3Ali%3Aimage:ABC,urn%3Ali%3Aimage:XYZ)
  //   const encodedList = uniqueUrns.map(encodeURIComponent).join(",");

  //   const batchUrl = `${BASE_URL}/rest/images?ids=List(${encodedList})`;

  //   // 4) fetch them all in one go
  //   const { data: batchData } = await axios.get<{
  //     results: Record<string, { downloadUrl: string }>;
  //   }>(batchUrl, {
  //     headers: {
  //       Authorization: `Bearer ${BEARER_TOKEN}`,
  //       "LinkedIn-Version": LINKEDIN_API_VERSION,
  //       "X-RestLi-Protocol-Version": "2.0.0",
  //     },
  //   });

  //   console.log("batchData", batchData);

  //   // 5) stitch the downloadUrl onto each post
  //   const enriched = postsData.elements.map((post) => {
  //     const urn =
  //       post.content?.media?.id || post.content?.multiImage?.images?.[0]?.id;

  //     if (!urn) return { ...post, imageUrl: null };

  //     // lookup the signed URL
  //     const info = batchData.results[urn];
  //     return { ...post, imageUrl: info?.downloadUrl ?? null };
  //   });

  //   console.log("enriched", enriched);

  //   // tell Vercel’s CDN (and any browser) to cache this endpoint for 1 hour
  //   res.setHeader(
  //     "Cache-Control",
  //     // public = anyone (browsers, intermediate proxies, edge CDN) may cache
  //     // s-maxage=86400 = serve the cached response for up to 86 400 seconds (60 hours)
  //     // stale-while-revalidate=59 = after it goes stale, still serve the old response
  //     //     for up to 59 seconds while fetching a fresh copy in the background
  //     "public, s-maxage=86400, stale-while-revalidate=59"
  //   );

  //   return res.status(200).json({ posts: enriched });
  // }

  // no images at all
  // return res.status(200).json({ posts: postsData.elements });
}
