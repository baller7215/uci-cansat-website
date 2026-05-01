import { LinkedInPost } from "@/components/shared/LinkedInCard";

export const mockLinkedInPosts: LinkedInPost[] = [
  {
    id: "mock-post-1",
    publishedAt: "2026-04-28T12:00:00.000Z",
    commentary:
      "CanSat testing day complete. Avionics and telemetry validated successfully, and the team is preparing final launch rehearsals this week.",
    mediaType: "image",
    mediaUrls: ["/assets/mock/linkedin-post-1.svg"],
  },
  {
    id: "mock-post-2",
    publishedAt: "2026-04-24T12:00:00.000Z",
    commentary:
      "Our structures subteam finalized the payload integration mount and completed vibration checks. Big milestone before system-level validation.",
    mediaType: "image",
    mediaUrls: ["/assets/mock/linkedin-post-2.svg"],
  },
  {
    id: "mock-post-3",
    publishedAt: "2026-04-20T12:00:00.000Z",
    commentary:
      "Recruitment spotlight: new members joined software, propulsion, and outreach. Excited to build toward this season's mission goals together.",
    mediaType: "image",
    mediaUrls: ["/assets/mock/linkedin-post-3.svg"],
  },
];
