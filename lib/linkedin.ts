import { LinkedInPost } from "@/components/shared/LinkedInCard";

export async function fetchLinkedInFeed(): Promise<{ posts: LinkedInPost[] }> {
    // const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`/api/linkedin-feed`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
}