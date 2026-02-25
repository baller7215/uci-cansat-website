import { sanityClient } from '@/lib/sanity.client' // adjust path if needed

// FETCH TEAM MEMBERS BY YEAR
export async function fetchTeamByYear(year: string) {
  const query = `*[_type == "member" && academicYear == $year]
    | order(order asc, name asc) {
      _id,
      name,
      role,
      subteam,
      isActive,
      isAlumni,
      primaryRole,
      github,
      linkedin,
      major,
      gradYear,
      description,
      order,
      personId,
      profileImg
    }`
  return sanityClient.fetch(query, { year }, { cache: "no-store" });
}

// FETCH SPONSORS BY YEAR
export async function fetchSponsorsByYear(year: string) {
  const query = `*[_type == "sponsor" && academicYear == $year]
    | order(order desc, order desc) {
      _id,
      name,
      website,
      logo,
      academicYear,
      tier,
      description,
      order,
      isActive,
    }`
  return sanityClient.fetch(query, { year }, { cache: "no-store" });
}