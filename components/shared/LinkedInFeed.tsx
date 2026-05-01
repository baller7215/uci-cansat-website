// components/LinkedInFeed.tsx
import React from 'react';
import LinkedInCard, { LinkedInPost } from './LinkedInCard';

type Props = {
  posts: LinkedInPost[];
};

export default function LinkedInFeed({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <div className="w-full rounded-2xl border border-custom-rhino/15 bg-custom-white px-6 py-10 text-center shadow-[0_8px_24px_rgba(43,49,83,0.08)]">
        <p className="text-sm font-semibold text-custom-rhino">No posts to display right now.</p>
        <p className="mt-2 text-sm text-custom-rhino/70">Check back soon for the latest updates.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map(post => (
        <LinkedInCard key={post.id} post={post} />
      ))}
    </div>
  );
}
