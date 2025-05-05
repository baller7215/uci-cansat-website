// pages/api/linkedin-feed/index.ts

// export const dynamic = 'force-dynamic';
// export const runtime = 'nodejs';

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
// import { NextResponse } from 'next/server';

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

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{ posts: Post[] }>
// ) {
//   // console.log('BASE_URL', BASE_URL);
//   // console.log('ORGANIZATION_URN', ORGANIZATION_URN);
//   // console.log('LINKEDIN_API_VERSION', LINKEDIN_API_VERSION);
//   // console.log('BEARER_TOKEN', BEARER_TOKEN);

//   // step 1: fetch posts
//   const authorUrn = `urn:li:organization:${ORGANIZATION_URN}`;
//   const encodedUrn = encodeURIComponent(authorUrn);
//   const url = `${BASE_URL}/rest/posts?author=${encodedUrn}&q=author&count=10&sortBy=LAST_MODIFIED`;

//   try {

//     const { data: postsData } = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${BEARER_TOKEN}`,
//         'LinkedIn-Version': LINKEDIN_API_VERSION,
//         'X-Restli-Protocol-Version': '2.0.0',
//         'X-RestLi-Method': 'FINDER',
//       },
//     });

//     console.log('postsData', postsData);

//     // Step 2: Fetch media assets for each post
//     const enrichedPosts = await Promise.all(
//       postsData.elements.map(async (post: Post) => {
//         const mediaUrn = post?.content?.media?.id
//                 || post?.content?.multiImage?.images?.[0]?.id;
//         if (!mediaUrn) return { ...post, imageUrl: null };

//         // encode the URN so the colons etc. are escaped
//         const encodedImageUrn = encodeURIComponent(mediaUrn);
//         // GET the image metadata
//         const { data: imageInfo } = await axios.get(
//           `${BASE_URL}/rest/images/${encodedImageUrn}`,
//           {
//             headers: {
//               Authorization: `Bearer ${BEARER_TOKEN}`,
//               'LinkedIn-Version': LINKEDIN_API_VERSION,
//               'X-Restli-Protocol-Version': '2.0.0',
//             },
//           }
//         );
//         // get the download URL from the image metadata
//         return { ...post, imageUrl: imageInfo.downloadUrl };
//       })
//     );

//     console.log('enrichedPosts', enrichedPosts);

//     return res.status(200).json({ posts: enrichedPosts });
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       console.error('Error fetching LinkedIn posts:', err.message);
//     } else {
//       console.error('Error fetching LinkedIn posts:', err);
//     }
//     return res.status(200).json({ posts: [] });
//   }
// }

/** @TODO TEST BATCH REQUEST PLS */
// TEST BATCH REQUEST
// app/api/linkedin-feed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ posts: Post[] }>
) {
  // 1) Fetch the 10 most recent posts by your org
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
  // 2) Pull out every image URN from those posts, safely
  const urns = postsData.elements.flatMap((post) => {
    // optional‐chain into content
    const mediaId = post.content?.media?.id;
    // if (mediaId) return [mediaId];
    if (mediaId?.startsWith("urn:li:image:")) return [mediaId];

    // const multi = post.content?.multiImage?.images;
    // if (multi?.length) return [multi[0].id];

    const multi = post.content?.multiImage?.images?.[0]?.id;
    if (multi?.startsWith("urn:li:image:")) return [multi];

    return []; // no image on this post
  });

  // dedupe
  const uniqueUrns = Array.from(new Set(urns));

  console.log("uniqueUrns", uniqueUrns);

  if (uniqueUrns.length > 0) {
    // 3) Build the batch-request string: ids=List(urn%3Ali%3Aimage:ABC,urn%3Ali%3Aimage:XYZ)
    const encodedList = uniqueUrns.map(encodeURIComponent).join(",");

    const batchUrl = `${BASE_URL}/rest/images?ids=List(${encodedList})`;

    // 4) Fetch them all in one go
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

    // 5) Stitch the downloadUrl onto each post
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
      // public = anyone can cache
      // s-maxage = how long the CDN holds on to it
      // stale-while-revalidate = let stale responses serve while we refresh in background
      "public, s-maxage=216000, stale-while-revalidate=59"
    );

    return res.status(200).json({ posts: enriched });
  }

  // no images at all
  return res.status(200).json({ posts: postsData.elements });
}
