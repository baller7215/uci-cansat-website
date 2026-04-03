import { yearTeamProject } from "@/constants";
import { fetchProjectByYear } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import ProjectYearContent from "./ProjectYearContent";

export const dynamic = "force-dynamic";

type ProjectYearPageProps = {
  params: {
    year: string;
  };
};

const toUrl = (image: any | null | undefined): string | undefined => {
  if (!image) return undefined;
  try {
    return urlFor(image).url();
  } catch {
    return undefined;
  }
};

const ProjectYearPage = async ({ params }: ProjectYearPageProps) => {
  const { year } = params;

  if (!year || typeof year !== "string") {
    return <p>Invalid year</p>;
  }

  const yearObject = Object.values(yearTeamProject).find(
    (obj) => obj.id === year
  );

  const sanityProject = await fetchProjectByYear(year);

  const projectFromSanity = sanityProject
    ? {
        overview: {
          team: toUrl(sanityProject.overview?.team),
          description: sanityProject.overview?.description ?? "",
        },
        projectDefinition: {
          show: !!sanityProject.projectDefinition?.show,
          planning: sanityProject.projectDefinition?.planning ?? "",
          problemStatement:
            sanityProject.projectDefinition?.problemStatement ?? "",
          image: toUrl(sanityProject.projectDefinition?.image),
        },
        design: {
          show: !!sanityProject.design?.show,
          majorComponents: {
            description:
              sanityProject.design?.majorComponents?.description ?? "",
            bulletPoints:
              sanityProject.design?.majorComponents?.bulletPoints || [],
          },
          keyComponents: sanityProject.design?.keyComponents || [],
          ourWorks: {
            show: !!sanityProject.design?.ourWorks?.show,
            mechanical: {
              name: sanityProject.design?.ourWorks?.mechanical?.name ?? "",
              description:
                sanityProject.design?.ourWorks?.mechanical?.description ?? "",
              image: toUrl(sanityProject.design?.ourWorks?.mechanical?.image),
              model: sanityProject.design?.ourWorks?.mechanical?.model ?? "",
              caption:
                sanityProject.design?.ourWorks?.mechanical?.caption ?? "",
            },
            electrical: {
              name: sanityProject.design?.ourWorks?.electrical?.name ?? "",
              description:
                sanityProject.design?.ourWorks?.electrical?.description ?? "",
              image: toUrl(sanityProject.design?.ourWorks?.electrical?.image),
              model: sanityProject.design?.ourWorks?.electrical?.model ?? "",
              caption:
                sanityProject.design?.ourWorks?.electrical?.caption ?? "",
            },
            controls: {
              show: !!sanityProject.design?.ourWorks?.controls?.show,
              name: sanityProject.design?.ourWorks?.controls?.name ?? "",
              description:
                sanityProject.design?.ourWorks?.controls?.description ?? "",
              image: toUrl(sanityProject.design?.ourWorks?.controls?.image),
            },
          },
          seniorSubsystem: {
            show: !!sanityProject.design?.seniorSubsystem?.show,
            description:
              sanityProject.design?.seniorSubsystem?.description ?? "",
            image: toUrl(sanityProject.design?.seniorSubsystem?.image),
            caption: sanityProject.design?.seniorSubsystem?.caption ?? "",
          },
          descentControl: {
            show: !!sanityProject.design?.descentControl?.show,
            items: sanityProject.design?.descentControl?.items || [],
          },
          mechanicalSubsystem: {
            show: !!sanityProject.design?.mechanicalSubsystem?.show,
            image: toUrl(sanityProject.design?.mechanicalSubsystem?.image),
            description:
              sanityProject.design?.mechanicalSubsystem?.description ?? "",
            items: sanityProject.design?.mechanicalSubsystem?.items || [],
          },
          electricalPowerSubsystem: {
            show: !!sanityProject.design?.electricalPowerSubsystem?.show,
            image: toUrl(
              sanityProject.design?.electricalPowerSubsystem?.image
            ),
            caption:
              sanityProject.design?.electricalPowerSubsystem?.caption ?? "",
            bullets:
              sanityProject.design?.electricalPowerSubsystem?.bullets || [],
          },
          flightSoftware: {
            show: !!sanityProject.design?.flightSoftware?.show,
            image: toUrl(sanityProject.design?.flightSoftware?.image),
            items: sanityProject.design?.flightSoftware?.items || [],
          },
          groundControlSystem: {
            show: !!sanityProject.design?.groundControlSystem?.show,
            leftImage: toUrl(
              sanityProject.design?.groundControlSystem?.leftImage
            ),
            rightImage: toUrl(
              sanityProject.design?.groundControlSystem?.rightImage
            ),
          },
        },
        competitionRequirements: {
          show: !!sanityProject.competitionRequirements?.show,
          description: sanityProject.competitionRequirements?.description ?? "",
          bullets: sanityProject.competitionRequirements?.bullets || [],
        },
        teamGoals: sanityProject.teamGoals || [],
        posters: {
          fall: toUrl(sanityProject.posters?.fall),
          winter: toUrl(sanityProject.posters?.winter),
          spring: toUrl(sanityProject.posters?.spring),
        },
      }
    : null;

  const project = projectFromSanity || yearObject?.project || null;

  return (
    <ProjectYearContent yearLabel={yearObject?.label} project={project} />
  );
};

export default ProjectYearPage;
