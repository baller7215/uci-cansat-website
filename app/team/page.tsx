'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import Collection from "@/components/shared/Collection";
import { teamLinks } from "@/constants";
import React, { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import ImageTextLayout from "@/components/shared/ImageTextLayout";
import MobileFooter from "@/components/shared/MobileFooter";

const overview = {
    title: "Meet the UCI CanSat Team",
    description: "We are UCI CanSat, an undergraduate project in the MAE department. Our team competes in the CanSat competition, an annual, international engineering challenge to design and build a space-type system. Every year the mission changes so this year's objective is to build a probe that can be deployed at an altitude of around 700m, transmit telemetry in real-time, and use a parachute and aerobraking heat shield to land safely at an upright orientation which is signaled by a victory flag. Interested students are advised to read the official mission guide for 2024 - 2025 ",
    image: "/assets/images/team/team.jpg",
    link: "https://www.cansatcompetition.com/"
}


const Team = () => {
    const [showAll, setShowAll] = useState(false); // tracks state to show all teams or not
    const [loading, setLoading] = useState(false); // tracks loading state

    // Function to toggle between showing all teams and the first four
    const handleToggleTeams = () => {
        setLoading(true); // Set loading to true when button is clicked

        // Simulate loading delay, e.g., fetching data from an API
        setTimeout(() => {
            setShowAll(!showAll);
            setLoading(false); // Turn off loading state after cards are "loaded"
        }, 1000); // Simulate 1 second delay
    };

    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="team" title="The Team" background="./assets/images/competiton-photos/preLaunchRocket2.jpg" />

                {/* overview */}
                <ImageTextLayout title={overview.title} description={overview.description} image={overview.image} link={overview.link} />

                {/* see our teams */}
                <section className="section-container !h-auto">
                    <div className="text-container !flex-col !h-auto">
                        <div className="flex flex-row justify-between w-full gap-3">
                            <h2 className="header !m-0 h-full my-auto">See Our Teams</h2>
                            <Button
                                onClick={handleToggleTeams} // Toggle the teams on button click
                                className="text-custom-white bg-custom-lightBlack rounded-full p-5 my-auto"
                            >
                                {showAll ? "Collapse Teams" : "View all Teams"}
                            </Button>
                        </div>
                    
                        {/* Render loader or actual cards */}
                        {loading ? (
                        // Show skeleton loaders while loading
                        <div className="collection-container">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="w-full items-center justify-center">
                                    <Skeleton className="w-[300px] h-[200px] md:w-[450px] md:h-[350px] bg-custom-gray flex flex-col mx-auto rounded-md shadow-2xl" />
                                </div>
                            ))}
                        </div>
                        ) : (
                        // Render only the first 4 or all teams based on state
                            <Collection cards={showAll ? teamLinks.slice(1) : teamLinks.slice(1, 5)} dark={false} />
                        )}
                    </div>
                </section>

                <Footer />
                <MobileFooter />
            </main>
        </>
    );
};

export default Team;