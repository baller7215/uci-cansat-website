// pages/api/linkedin-feed/index.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type LinkedInApiPost = {
  id: string;
  commentary?: string;
  content: {
    media?: { id: string };
    multiImage?: { images: { id: string }[] };
  };
}

type LinkedInPost = {
  id: string;
  commentary?: string;
  content: {
    media?: { id: string };
    multiImage?: { images: { id: string }[] };
  };
  mediaType?: "image" | "video" | null;
  mediaUrls: string[];
}

type ApiResponse =
  | { posts: LinkedInPost[] }
  | { error: string, retryAfter?: number };

const BASE_URL = process.env.LINKEDIN_BASE_URL;
const ORGANIZATION_URN = process.env.LINKEDIN_ORG_URN;
const LINKEDIN_API_VERSION = process.env.LINKEDIN_API_VERSION;
const BEARER_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;

const CACHE_TTL = 86400; // 24 hours in seconds

// batch request

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Set cache headers for Vercel Edge Cache
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=59`
  );

  // Add cache status header for debugging
  res.setHeader("x-cache-status", "MISS"); // Default to MISS, will be overridden by Vercel if it's a HIT

  console.log("Request received at:", new Date().toISOString());
  console.log("Attempting to fetch LinkedIn data...");

  if (!BASE_URL || !ORGANIZATION_URN || !LINKEDIN_API_VERSION || !BEARER_TOKEN) {
    console.error("Missing required environment variables");
    return res.status(500).json({
      error: "Missing required environment variables",
    });
  }

  try {
    // 1) fetch the 10 most recent posts by your org
    const authorUrn = `urn:li:organization:${ORGANIZATION_URN}`;
    const postsUrl =
      `${BASE_URL}/rest/posts` +
      `?author=${encodeURIComponent(authorUrn)}` +
      `&q=author&count=10&sortBy=LAST_MODIFIED`;

    console.log("Making LinkedIn API request...");
    const { data: postsData } = await axios.get<{ elements: LinkedInApiPost[] }>(postsUrl, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "LinkedIn-Version": LINKEDIN_API_VERSION,
        "X-RestLi-Protocol-Version": "2.0.0",
        "X-RestLi-Method": "FINDER",
      },
    });
    console.log("LinkedIn API request successful");

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

    // console.log("imageUrns", imageUrns);
    // console.log("videoUrns", videoUrns);

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
          videoMap[urn] = "";
        }
      })
    );

    // 5) stitch each post together with whichever media URL it has
    const enriched = postsData.elements.map((post) => {
      const mediaIds: string[] = [];

      // handle single media
      const singleMedia = post.content?.media?.id;
      if (singleMedia) mediaIds.push(singleMedia);

      // handle multi-image
      const multi = post.content?.multiImage?.images ?? [];
      for (const image of multi) {
        if (image?.id) mediaIds.push(image.id);
      }

      // get URLs
      const mediaUrls = mediaIds
        .map((urn) => {
          if (urn.startsWith("urn:li:image:")) {
            return imageMap[urn] ?? null;
          } else if (urn.startsWith("urn:li:video:")) {
            return videoMap[urn] ?? null;
          } else {
            return null;
          }
        })
        .filter(Boolean) as string[];

      const mediaType = mediaIds[0]?.startsWith("urn:li:video:")
        ? "video" as const
        : mediaIds[0]?.startsWith("urn:li:image:")
        ? "image" as const
        : null;

      return {
        ...post,
        mediaType,
        mediaUrls,
      };
    });

    const enrichedData = { posts: enriched };
    console.log("Response cached for 24 hours");
    return res.status(200).json(enrichedData);
  } catch (error) {
    console.error("Error fetching LinkedIn data:", error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        console.error("Rate limit exceeded!");
        return res.status(429).json({
          error: "Rate limit exceeded!",
          retryAfter: 3600
        });
      } else if (error.response?.status === 401) {
        console.error("Authentication failed");
        return res.status(401).json({
          error: "Authentication failed",
        });
      }
    }
    return res.status(500).json({
      error: "Failed to fetch LinkedIn data",
    });
  }
}
