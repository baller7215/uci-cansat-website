// app/api/linkedin-feed/route.ts

import axios from 'axios';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.LINKEDIN_BASE_URL;
const ORGANIZATION_URN = process.env.LINKEDIN_ORG_URN;
const LINKEDIN_API_VERSION = process.env.LINKEDIN_API_VERSION;
const BEARER_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;

export async function GET() {
//   console.log('BASE_URL', BASE_URL);
//   console.log('ORGANIZATION_URN', ORGANIZATION_URN);
//   console.log('LINKEDIN_API_VERSION', LINKEDIN_API_VERSION);
//   console.log('BEARER_TOKEN', BEARER_TOKEN);

  try {
    // Step 1: Fetch posts
    // const { data: postsData } = await axios.get(
    //   `${BASE_URL}/rest/posts`,
    //   {
    //     params: {
    //       q: 'author',
    //       author: `urn:li:organization:${ORGANIZATION_URN}`,
    //       count: 10,
    //       sortBy: 'LAST_MODIFIED',
    //     },
    //     headers: {
    //       Authorization: `Bearer ${BEARER_TOKEN}`,
    //       'LinkedIn-Version': LINKEDIN_API_VERSION,
    //       'X-RestLi-Method': 'FINDER',
    //       'X-Restli-Protocol-Version': '2.0.0',
    //     },
    //   }
    // );

    // console.log('posts data:', postsData);
    const { data: postsData } = await axios.get(
        `https://api.linkedin.com/v2/shares`, {
          params: {
            q: 'owners',
            owners: `urn:li:organization:${ORGANIZATION_URN}`,
            sharesPerOwner: 10,
          },
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );

    console.log('postsData', postsData);
      

    return NextResponse.json({ posts: postsData });

    // Step 2: Fetch media assets for each post
    // const enrichedPosts = await Promise.all(
    //   postsData.elements.map(async (post: any) => {
    //     const mediaId = post?.content?.media?.id || post?.content?.multiImage?.images?.[0]?.id;

    //     if (!mediaId) return { ...post, imageUrl: null };

    //     try {
    //       await axios.get(`https://api.linkedin.com/v2/assets/${mediaId.split(':').pop()}`, {
    //         headers: {
    //           Authorization: `Bearer ${BEARER_TOKEN}`,
    //         },
    //       });

    //       const imageUrl = `https://media.licdn.com/dms/image/${mediaId.split(':')[2]}/${mediaId.split(':')[3]}/feedshare-image`;
    //       return { ...post, imageUrl };
    //     } catch (assetError) {
    //       console.error('Error fetching asset:', assetError);
    //       return { ...post, imageUrl: null };
    //     }
    //   })
    // );

    // console.log('enrichedPosts:', enrichedPosts);

    // return NextResponse.json({ posts: enrichedPosts });
  } catch (err) {
    console.error('LinkedIn feed error:', err);
    return NextResponse.json({ error: 'Failed to fetch LinkedIn posts' }, { status: 500 });
  }
}
