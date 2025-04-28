'use client';
import React from 'react';
import LinkedInFeed from '@/components/shared/LinkedInFeed';
import { useLinkedInFeed } from '@/hooks/useLinkedInFeed';

export default function UpdatesLinkedIn() {
  const { data, isLoading, isError } = useLinkedInFeed();

  if (isLoading) return <p>Loading feed…</p>;
  if (isError)   return <p className="text-red-500">Failed to load posts.</p>;

  return <LinkedInFeed posts={data!.posts} />;
}
