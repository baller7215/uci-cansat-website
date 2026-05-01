import { LinkedInPost } from "@/components/shared/LinkedInCard";
import { mockLinkedInPosts } from "@/lib/mocks/linkedin-posts";

export async function fetchLinkedInFeed(): Promise<{ posts: LinkedInPost[] }> {
    // Toggle with NEXT_PUBLIC_LINKEDIN_MOCK=true in .env.local
    if (process.env.NEXT_PUBLIC_LINKEDIN_MOCK === "true") {
        return { posts: mockLinkedInPosts };
    }

    const res = await fetch(`/api/linkedin-feed`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
}