// components/LinkedInCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type LinkedInPost = {
  id: string;
  commentary: string;
  imageUrl?: string | null;
};

type Props = {
  post: LinkedInPost;
};

export default function LinkedInCard({ post }: Props) {
  const { id, commentary, imageUrl } = post;
  // Turn the URN into a LinkedIn web URL
  const postUrl = `https://www.linkedin.com/feed/update/${encodeURIComponent(id)}`;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      {imageUrl && (
        <Link href={postUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative h-48 w-full">
            <Image
              src={imageUrl}
              alt="LinkedIn post image"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-gray-800 mb-4 line-clamp-3">
          {commentary || '—'}
        </p>
        <div className="mt-auto">
          <Link
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View on LinkedIn →
          </Link>
        </div>
      </div>
    </div>
  );
}
