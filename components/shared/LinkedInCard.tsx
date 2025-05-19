// components/LinkedInCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type LinkedInPost = {
  id: string;
  commentary?: string;
  mediaType?: "image" | "video" | null;
  mediaUrls: string[];
};

type Props = {
  post: LinkedInPost;
};

export default function LinkedInCard({ post }: Props) {
  const { id, commentary, mediaUrls, mediaType } = post;
  const hasText = commentary && commentary?.trim().length > 0;

  const postUrl = `https://www.linkedin.com/feed/update/${encodeURIComponent(
    id
  )}`;

  console.log("LinkedInCard post:", post);

  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col max-w-[500px] !h-fit my-auto">
      {mediaType === "video" && mediaUrls[0] ? (
        <Link href={postUrl!} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-video w-full rounded-t-2xl overflow-hidden">
            <video
              src={mediaUrls[0]!}
              controls
              className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </Link>
      ) : (
        mediaType === "image" &&
        mediaUrls[0] && (
          <Link href={postUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-square w-full">
              <Image
                src={mediaUrls[0]!}
                alt="LinkedIn post image"
                fill
                className="object-cover rounded-t-2xl hover:opacity-80 transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </Link>
        )
      )}

      <div className="p-4 flex-1 flex flex-col">
        {hasText ? (
          <p className="text-custom-rhino mb-4 line-clamp-5">{commentary}</p>
        ) : (
          <p className="text-custom-rhino mb-4 line-clamp-5">
            No caption available.
          </p>
        )}

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
