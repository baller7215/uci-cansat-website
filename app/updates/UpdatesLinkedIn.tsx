'use client';
import React from 'react';
import LinkedInFeed from '@/components/shared/LinkedInFeed';
import { useLinkedInFeed } from '@/hooks/useLinkedInFeed';

export default function UpdatesLinkedIn() {
  const { data, isLoading, isError } = useLinkedInFeed();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="card-elevated h-[430px] animate-pulse bg-custom-white/80 shadow-[0_8px_24px_rgba(43,49,83,0.08)] hover:translate-y-0 hover:shadow-[0_8px_24px_rgba(43,49,83,0.08)]"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full rounded-2xl border border-custom-orange/40 bg-custom-orange/10 px-6 py-8 text-center">
        <p className="text-sm font-semibold text-custom-lightBlack">Failed to load LinkedIn posts.</p>
        <p className="mt-1 text-sm text-custom-lightBlack/80">Please refresh the page and try again.</p>
      </div>
    );
  }

  return <LinkedInFeed posts={data!.posts} />;
}
