// app/api/linkedin-feed/route.ts
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import axios from 'axios';
import { NextResponse } from 'next/server';

type Post = {
  content:
    {
      media?: { id: string },
      multiImage?: { images: { id: string }[] }
    }
};

const BASE_URL = process.env.LINKEDIN_BASE_URL;
const ORGANIZATION_URN = process.env.LINKEDIN_ORG_URN;
const LINKEDIN_API_VERSION = process.env.LINKEDIN_API_VERSION;
const BEARER_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;

export async function GET() {
  // console.log('BASE_URL', BASE_URL);
  // console.log('ORGANIZATION_URN', ORGANIZATION_URN);
  // console.log('LINKEDIN_API_VERSION', LINKEDIN_API_VERSION);
  // console.log('BEARER_TOKEN', BEARER_TOKEN);


  // step 1: fetch posts
  const authorUrn = `urn:li:organization:${ORGANIZATION_URN}`;
  const encodedUrn = encodeURIComponent(authorUrn);
  const url = `${BASE_URL}/rest/posts?author=${encodedUrn}&q=author&count=10&sortBy=LAST_MODIFIED`;

  try {

    const { data: postsData } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        'LinkedIn-Version': LINKEDIN_API_VERSION,
        'X-Restli-Protocol-Version': '2.0.0',
        'X-RestLi-Method': 'FINDER',
      },
    });

    // Step 2: Fetch media assets for each post
    const enrichedPosts = await Promise.all(
      postsData.elements.map(async (post: Post) => {
        const mediaUrn = post?.content?.media?.id
                || post?.content?.multiImage?.images?.[0]?.id;
        if (!mediaUrn) return { ...post, imageUrl: null };

        // encode the URN so the colons etc. are escaped
        const encodedImageUrn = encodeURIComponent(mediaUrn);
        // GET the image metadata
        const { data: imageInfo } = await axios.get(
          `${BASE_URL}/rest/images/${encodedImageUrn}`,
          {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              'LinkedIn-Version': LINKEDIN_API_VERSION,
              'X-Restli-Protocol-Version': '2.0.0',
            },
          }
        );
        // get the download URL from the image metadata
        return { ...post, imageUrl: imageInfo.downloadUrl };
      })
    );

    return NextResponse.json({ posts: enrichedPosts });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Error fetching LinkedIn posts:', err.message);
    } else {
      console.error('Error fetching LinkedIn posts:', err);
    }
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}



// /** @TODO TEST BATCH REQUEST PLS */
// // TEST BATCH REQUEST
// // app/api/linkedin-feed/route.ts

// import axios from 'axios';
// import { NextResponse } from 'next/server';

// type Post = {
//   content: {
//     media?: { id: string };
//     multiImage?: { images: { id: string }[] };
//   };
//   // we'll add imageUrl dynamically
//   imageUrl?: string | null;
// };

// const BASE_URL = process.env.LINKEDIN_BASE_URL!;
// const ORGANIZATION_URN = process.env.LINKEDIN_ORG_URN!;
// const LINKEDIN_API_VERSION = process.env.LINKEDIN_API_VERSION!;
// const BEARER_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;

// export async function GET() {
//   // 1) Fetch the 10 most recent posts by your org
//   const authorUrn = `urn:li:organization:${ORGANIZATION_URN}`;
//   const postsUrl = `${BASE_URL}/rest/posts` +
//                    `?author=${encodeURIComponent(authorUrn)}` +
//                    `&q=author&count=10&sortBy=LAST_MODIFIED`;

//   const { data: postsData } = await axios.get<{ elements: Post[] }>(postsUrl, {
//     headers: {
//       Authorization: `Bearer ${BEARER_TOKEN}`,
//       'LinkedIn-Version': LINKEDIN_API_VERSION,
//       'X-RestLi-Protocol-Version': '2.0.0',
//       'X-RestLi-Method': 'FINDER',
//     },
//   });

//   // 2) Pull out every image URN from those posts, safely
//   const urns = postsData.elements.flatMap(post => {
//     // optional‐chain into content
//     const mediaId = post.content?.media?.id;
//     if (mediaId) return [mediaId];

//     const multi = post.content?.multiImage?.images;
//     if (multi?.length) return [multi[0].id];

//     return [];  // no image on this post
//   });

//   // dedupe
//   const uniqueUrns = Array.from(new Set(urns));


//   if (uniqueUrns.length > 0) {
//     // 3) Build the batch-request string: ids=List(urn%3Ali%3Aimage:ABC,urn%3Ali%3Aimage:XYZ)
//     const encodedList = uniqueUrns
//       .map(encodeURIComponent)
//       .join(',');

//     const batchUrl = `${BASE_URL}/rest/images?ids=List(${encodedList})`;

//     // 4) Fetch them all in one go
//     const { data: batchData } = await axios.get<{
//       results: Record<string, { downloadUrl: string }>;
//     }>(batchUrl, {
//       headers: {
//         Authorization: `Bearer ${BEARER_TOKEN}`,
//         'LinkedIn-Version': LINKEDIN_API_VERSION,
//         'X-RestLi-Protocol-Version': '2.0.0',
//       },
//     });

//     // 5) Stitch the downloadUrl onto each post
//     const enriched = postsData.elements.map(post => {
//       const urn = post.content.media?.id
//                || post.content.multiImage?.images?.[0]?.id;

//       if (!urn) return { ...post, imageUrl: null };

//       // lookup the signed URL
//       const info = batchData.results[urn];
//       return { ...post, imageUrl: info?.downloadUrl ?? null };
//     });

//     return NextResponse.json({ posts: enriched });
//   }

//   // no images at all
//   return NextResponse.json({ posts: postsData.elements });
// }
