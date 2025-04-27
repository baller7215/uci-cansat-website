// components/LinkedInFeed.tsx
import React from 'react';
import LinkedInCard, { LinkedInPost } from './LinkedInCard';

type Props = {
  posts: LinkedInPost[];
};

export default function LinkedInFeed({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500">No posts to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <LinkedInCard key={post.id} post={post} />
      ))}
    </div>
  );
}
