// components/LinkedInCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type LinkedInPost = {
  id: string;
  commentary?: string;
  imageUrl?: string | null;
};

type Props = {
  post: LinkedInPost;
};

export default function LinkedInCard({ post }: Props) {
  const { id, commentary, imageUrl } = post;
  const hasText = commentary && commentary.trim().length > 0;
  const hasMedia = Boolean(imageUrl);

  // Turn the URN into a LinkedIn web URL
  const postUrl = `https://www.linkedin.com/feed/update/${encodeURIComponent(
    id
  )}`;

  console.log("LinkedInCard post:", post);

  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col max-w-[500px] !h-fit my-auto">
      {hasMedia && (
        <Link href={postUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-square w-full">
            <Image
              src={imageUrl!}
              alt="LinkedIn post image"
              fill
              className="object-cover rounded-t-2xl hover:opacity-80 transition-opacity duration-300"
              //   style={{ objectFit: 'cover' }}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="p-4 flex-1 flex flex-col">
        {hasText ? (
            <p className="text-custom-rhino mb-4 line-clamp-5">
                {commentary}
            </p>
            ) : (
            <p className="text-custom-rhino mb-4 line-clamp-5">
                No caption available.
            </p>
        )}
        {/* <p className="text-custom-rhino mb-4 line-clamp-5">
          {commentary || "—"}
        </p> */}
        <div className="mt-auto">
          <Link
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-easternBlue hover:underline text-sm font-medium"
          >
            View on LinkedIn →
          </Link>
        </div>
      </div>
    </div>
  );
}
