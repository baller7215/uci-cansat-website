import { sanityClient } from '@/lib/sanity.client' // adjust path if needed

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