import { useQuery } from '@tanstack/react-query';
import { fetchLinkedInFeed } from '@/lib/linkedin';


export function useLinkedInFeed() {
  return useQuery({
    queryKey: ['linkedin-feed'],
    queryFn: fetchLinkedInFeed,
    staleTime: 12 * 60 * 60 * 1000,
    // cacheTime: 12 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
