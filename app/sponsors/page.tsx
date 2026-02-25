import { fetchSponsorsByYear } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import SponsorsContent, { type SponsorCard } from "./SponsorsContent";

export const dynamic = "force-dynamic";

const YEAR = "2025-2026";

type SanitySponsor = Awaited<ReturnType<typeof fetchSponsorsByYear>>[number];

const SponsorsPage = async () => {
  let sponsors: SponsorCard[] = [];

  try {
    const rawSponsors = await fetchSponsorsByYear(YEAR);
    sponsors = rawSponsors.map((sponsor: SanitySponsor) => ({
      label: sponsor.name,
      route: sponsor.website || "#",
      image: sponsor.logo ? urlFor(sponsor.logo).url() : undefined,
    }));
    console.log('sponsors', sponsors);
    console.log('rawSponsors', rawSponsors);
  } catch (error) {
    console.error("Error fetching sponsors:", error);
  }

  return <SponsorsContent sponsors={sponsors} />;
};

export default SponsorsPage;
