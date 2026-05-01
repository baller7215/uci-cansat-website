// components/LinkedInCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type LinkedInPost = {
  id: string;
  commentary?: string;
  publishedAt?: string;
  mediaType?: "image" | "video" | null;
  mediaUrls: string[];
};

type Props = {
  post: LinkedInPost;
};

export default function LinkedInCard({ post }: Props) {
  const { id, commentary, publishedAt, mediaUrls, mediaType } = post;
  const hasText = commentary && commentary?.trim().length > 0;

  const postUrl = `https://www.linkedin.com/feed/update/${encodeURIComponent(
    id
  )}`;
  const displayDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-custom-rhino/15 bg-custom-white shadow-[0_10px_30px_rgba(43,49,83,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-custom-shakespeare/40 hover:shadow-[0_14px_36px_rgba(37,130,185,0.20)]">
      <div className="flex items-center justify-between border-b border-custom-rhino/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-custom-easternBlue text-center text-sm font-semibold leading-8 text-custom-white">
            in
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-custom-rhino">UCI CanSat</p>
            <p className="text-xs text-custom-rhino/70">LinkedIn</p>
          </div>
        </div>
        <span className="text-xs font-medium text-custom-rhino/65">
          {displayDate ?? "Latest"}
        </span>
      </div>
      {mediaType === "video" && mediaUrls[0] ? (
        <Link href={postUrl!} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-video w-full overflow-hidden bg-custom-rhino/10">
            <video
              src={mediaUrls[0]!}
              controls
              className="h-full w-full object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
        </Link>
      ) : (
        mediaType === "image" &&
        mediaUrls[0] && (
          <Link href={postUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-square w-full overflow-hidden bg-custom-rhino/10">
              <Image
                src={mediaUrls[0]!}
                alt="LinkedIn post image"
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-custom-rhino/35 to-transparent" />
            </div>
          </Link>
        )
      )}

      <div className="flex flex-1 flex-col p-4 md:p-5">
        {hasText ? (
          <p className="mb-4 text-sm leading-relaxed text-custom-rhino line-clamp-4">
            {commentary}
          </p>
        ) : (
          <p className="mb-4 text-sm italic text-custom-rhino/65 line-clamp-4">
            No caption available.
          </p>
        )}

        <div className="mt-auto border-t border-custom-rhino/10 pt-3.5">
          <Link
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-custom-easternBlue transition group-hover:gap-2 group-hover:text-custom-rhino"
          >
            View post
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
