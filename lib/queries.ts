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

// FETCH PROJECT BY YEAR (single document)
export async function fetchProjectByYear(year: string) {
  const query = `*[_type == "project" && academicYear == $year][0]{
    _id,
    academicYear,
    overview{ team, description },
    projectDefinition{
      show,
      planning,
      problemStatement,
      image
    },
    design{
      show,
      majorComponents{
        description,
        bulletPoints[]{ id, text }
      },
      keyComponents[]{ name, description },
      ourWorks{
        show,
        mechanical{ name, description, image, model, caption },
        electrical{ name, description, image, model, caption },
        controls{ show, name, description, image }
      },
      seniorSubsystem{ show, description, image, caption },
      descentControl{
        show,
        items[]{ name, bullets[], image }
      },
      mechanicalSubsystem{
        show,
        image,
        description,
        items[]{ name, bullets[] }
      },
      electricalPowerSubsystem{
        show,
        image,
        caption,
        bullets[]
      },
      flightSoftware{
        show,
        image,
        items[]{ name, bullets[] }
      },
      groundControlSystem{
        show,
        leftImage,
        rightImage
      }
    },
    competitionRequirements{
      show,
      description,
      bullets[]{ id, point }
    },
    teamGoals[]{ id, point },
    posters{ fall, winter, spring }
  }`;
  return sanityClient.fetch(query, { year }, { cache: "no-store" });
}