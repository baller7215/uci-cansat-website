'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import Collection from "@/components/shared/Collection";
import { projectsLinks } from "@/constants";
import React, { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import MobileFooter from "@/components/shared/MobileFooter";

const Projects = () => {
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
                <CoverPage page="team" title="Projects" subtitle="2024 - 2025" background="./assets/images/components/double2.jpg" />

                {/* see our projects */}
                <section className="section-container !h-auto" id="overview">
                    <div className="text-container !flex-col !h-auto">
                        <div className="flex flex-row justify-between w-full">
                            <h2 className="header">See Our Projects</h2>
                            <Button
                                onClick={handleToggleTeams} // Toggle the teams on button click
                                className="text-custom-white bg-custom-lightBlack rounded-full p-5 my-auto transform transition-transform duration-300 hover:scale-105"
                            >
                                {showAll ? "Collapse Projects" : "View all Projects"}
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
                                // <Skeleton key={index} className="w-[300px] h-[200px] bg-custom-gray flex justify-center rounded-md shadow-2xl" />
                            ))}
                        </div>
                        ) : (
                        // Render only the first 4 or all teams based on state
                            <Collection cards={showAll ? projectsLinks.slice(1) : projectsLinks.slice(1, 5)} dark={false} />
                        )}
                    </div>
                </section>
                <Footer />
                <MobileFooter />
            </main>
        </>
    );
};

export default Projects;