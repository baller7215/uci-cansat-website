'use client'

import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import React from 'react';
import { useParams } from 'next/navigation'; // New hook for App Router
import { yearTeamProject } from "@/constants";
import ProfilesGrid from "@/components/shared/ProfilesGrid";
import MobileFooter from "@/components/shared/MobileFooter";

const TeamYearPage = () => {
    const params = useParams(); // Get dynamic parameters in the App Router
    const { year } = params;

    const yearObject = Object.values(yearTeamProject).find(obj => obj.id === year);
    const team = yearObject?.team;

    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="teamYear" title="The Team" subtitle={yearObject?.label} background="../assets/images/starfield.png" />

                {/* profiles */}
                <section className="section-container team-background" id="overview">
                    {/* Advisors Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Advisors</h1>
                        <ProfilesGrid members={team?.advisors || []} />
                    </div>

                    {/* Management Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Management</h1>
                        <ProfilesGrid members={team?.management || []} />
                    </div>

                    {/* Mechanical Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Mechanical</h1>
                        <ProfilesGrid members={team?.mechanical || []} />
                    </div>

                    {/* Electrical Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Electrical</h1>
                        <ProfilesGrid members={team?.electrical || []} />
                    </div>

                    {/* Controls Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Controls</h1>
                        <ProfilesGrid members={team?.controls || []} />
                    </div>

                    {/* Operations Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Operations</h1>
                        <ProfilesGrid members={team?.operations || []} />
                    </div>

                    {/* Web Developer Section */}
                    <div className="text-container !min-h-screen !flex-col !justify-center !items-center">
                        <h1 className="team-title">Web Development</h1>
                        <ProfilesGrid members={team?.webDev || []} />
                    </div>
                </section>

                <Footer />
                <MobileFooter />
            </main>
        </>
    );
};

export default TeamYearPage;