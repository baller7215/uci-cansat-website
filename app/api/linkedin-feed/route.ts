// app/api/linkedin-feed/route.ts

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
  console.log('BASE_URL', BASE_URL);
  console.log('ORGANIZATION_URN', ORGANIZATION_URN);
  console.log('LINKEDIN_API_VERSION', LINKEDIN_API_VERSION);
  console.log('BEARER_TOKEN', BEARER_TOKEN);


  // step 1: fetch posts
  const authorUrn = `urn:li:organization:${ORGANIZATION_URN}`;
  const encodedUrn = encodeURIComponent(authorUrn);
  const url = `${BASE_URL}/rest/posts?author=${encodedUrn}&q=author&count=10&sortBy=LAST_MODIFIED`;

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

  // console.log('enrichedPosts:', enrichedPosts);

  return NextResponse.json({ posts: enrichedPosts });
}
