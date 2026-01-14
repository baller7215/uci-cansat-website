"use client";

import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { yearTeamProject } from "@/constants";
import { fetchTeamByYear } from "@/lib/queries";
import ProfilesGrid from "@/components/shared/ProfilesGrid";
import MobileFooter from "@/components/shared/MobileFooter";
import { useQuery } from "@tanstack/react-query";
import { urlFor } from "@/lib/sanity.image";

// Sanity member data type
type SanityMember = {
  _id: string;
  name: string;
  role: string;
  subteam?: string;
  isActive?: boolean;
  isAlumni?: boolean;
  primaryRole?: boolean;
  github?: string;
  linkedin?: string;
  major?: string;
  gradYear?: string;
  description?: string;
  order?: number;
  personId?: string;
  profileImg?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

const TeamYearPage = () => {
  const params = useParams();
  const year = params && typeof params.year === "string" ? params.year : "";

  const { data: members, isLoading, error } = useQuery({
    queryKey: ['team', year],
    queryFn: () => fetchTeamByYear(year),
    enabled: !!year, // only fetch if year is valid
  });

  // helper function to get role priority for sorting (lead -> engineer -> intern)
  const getRolePriority = (role: string): number => {
    const roleLower = role.toLowerCase();
    if (roleLower.includes('lead')) {
      return 1; // leads first
    } else if (roleLower.includes('engineer') && !roleLower.includes('intern')) {
      return 2; // engineers second
    } else if (roleLower.includes('intern')) {
      return 3; // interns third
    }
    return 4; // everything else last
  };

  // Transform Sanity data into the expected format and group by subteam
  const team = useMemo(() => {
    if (!members || !Array.isArray(members)) {
      return null;
    }

    const grouped: {
      advisors?: Member[];
      management?: Member[];
      executives?: Member[];
      mechanical?: Member[];
      electrical?: Member[];
      controls?: Member[];
      operations?: Member[];
      webDev?: Member[];
    } = {};

    members.forEach((member: SanityMember) => {
      const transformedMember: Member = {
        name: member.name,
        role: member.role,
        github: member.github,
        linkedin: member.linkedin,
        major: member.major,
        gradYear: member.gradYear,
        description: member.description,
        profileImg: member.profileImg
          ? urlFor(member.profileImg).url()
          : undefined,
      };

      const subteam = member.subteam;
      if (subteam) {
        if (!grouped[subteam as keyof typeof grouped]) {
          grouped[subteam as keyof typeof grouped] = [];
        }
        grouped[subteam as keyof typeof grouped]!.push(transformedMember);
      }
    });

    // sort each subteam array by role priority (lead -> engineer -> intern)
    Object.keys(grouped).forEach((key) => {
      const subteamKey = key as keyof typeof grouped;
      if (grouped[subteamKey]) {
        grouped[subteamKey]!.sort((a, b) => {
          const priorityA = getRolePriority(a.role);
          const priorityB = getRolePriority(b.role);
          return priorityA - priorityB;
        });
      }
    });

    return grouped;
  }, [members]);

  const yearObject = Object.values(yearTeamProject).find(
    (obj) => obj.id === year
  );

  // Handle invalid year parameter after hooks
  if (!params || typeof params.year !== "string") {
    return <p>Invalid year</p>;
  }

  if (isLoading) {
    return (
      <main>
        <CoverPage
          page="teamYear"
          title="The Team"
          subtitle={yearObject?.label}
          background="../assets/images/competiton-photos/preLaunchRocket2.jpg"
        />
        <section className="section-container team-background !overflow-hidden">
          <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
            <p>Loading team data...</p>
          </div>
        </section>
        <Footer />
        <MobileFooter />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <CoverPage
          page="teamYear"
          title="The Team"
          subtitle={yearObject?.label}
          background="../assets/images/competiton-photos/preLaunchRocket2.jpg"
        />
        <section className="section-container team-background !overflow-hidden">
          <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
            <p>Error loading team data. Please try again later.</p>
          </div>
        </section>
        <Footer />
        <MobileFooter />
      </main>
    );
  }


  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage
          page="teamYear"
          title="The Team"
          subtitle={yearObject?.label}
          background="../assets/images/competiton-photos/preLaunchRocket2.jpg"
        />

        {/* profiles */}
        <section
          className="section-container team-background !overflow-hidden"
          id="overview"
        >
          {team?.advisors && team?.advisors.length > 0 && (
            // {/* Advisors Section */}
            <div className="text-container my-20 md:my-0 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Advisors</h1>
              <ProfilesGrid members={team?.advisors || []} />
            </div>
          )}

          {team?.management && team?.management.length > 0 && (
            // {/* Management Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Management</h1>
              <ProfilesGrid members={team?.management || []} />
            </div>
          )}

          {team?.executives && team?.executives.length > 0 && (
            // {/* Executives Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Executives</h1>
              <ProfilesGrid members={team?.executives || []} />
            </div>
          )}

          {team?.mechanical && team?.mechanical.length > 0 && (
            // {/* Mechanical Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Mechanical</h1>
              <ProfilesGrid members={team?.mechanical || []} />
            </div>
          )}

          {team?.electrical && team?.electrical.length > 0 && (
            // {/* Electrical Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Electrical</h1>
              <ProfilesGrid members={team?.electrical || []} />
            </div>
          )}

          {team?.controls && team?.controls.length > 0 && (
            // {/* Controls Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Controls</h1>
              <ProfilesGrid members={team?.controls || []} />
            </div>
          )}

          {team?.operations && team?.operations.length > 0 && (
            // {/* Operations Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Operations</h1>
              <ProfilesGrid members={team?.operations || []} />
            </div>
          )}

          {team?.webDev && team?.webDev.length > 0 && (
            // {/* Web Developer Section */}
            <div className="text-container my-20 md:min-h-screen !h-auto !flex-col !justify-center !items-center">
              <h1 className="team-title">Web Development</h1>
              <ProfilesGrid members={team?.webDev || []} />
            </div>
          )}
        </section>

        <Footer />
        <MobileFooter />
      </main>
    </>
  );
};

export default TeamYearPage;
