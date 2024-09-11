'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import Collection from "@/components/shared/Collection";
import { teamLinks } from "@/constants";
import React, { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";


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
                <CoverPage page="team" title="The Team" background="./assets/images/starfield.png" />

                {/* overview */}
                <section className="section-container !bg-custom-black" id='overview'>
                    <div className="text-container">
                        {/* left */}
                        <div className="w-3/5 h-full">
                            <Image
                                src='/assets/images/team/team.png'
                                alt='2024 2025 UCI Cansat Team'
                                width={1000}
                                height={800}
                                className="rounded-2xl"
                            />
                        </div>
                        {/* right */}
                        <div className="leftText w-2/5">
                            <h2 className="header leading-[60px]">Meet the UCI CanSat Team</h2>
                            <p className="description text-custom-white">We are UCI CanSat, an undergraduate project in the MAE department. Our team competes in the CanSat competition, an annual, international engineering challenge to design and build a space-type system. Every year the mission changes so this year&apos;s objective is to build a probe that can be deployed at an altitude of around 700m, transmit telemetry in real-time, and use a parachute and aerobraking heat shield to land safely at an upright orientation which is signaled by a victory flag. Interested students are advised to read the official mission guide for 2024 - 2025&nbsp;
                                <Button variant="link" className="!description !text-custom-orange !p-0 !text-2xl">
                                    <Link href='https://www.cansatcompetition.com/' target="_blank">here</Link>
                                </Button>
                            .</p>
                        </div>
                    </div>
                </section>

                {/* see our teams */}
                <section className="section-container !h-auto">
                    <div className="text-container !flex-col !h-auto">
                        <div className="flex flex-row justify-between w-full">
                            <h2 className="header">See Our Teams</h2>
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
                                <Skeleton key={index} className="w-[450px] h-[350px] bg-custom-gray flex justify-center rounded-md shadow-2xl" />
                            ))}
                        </div>
                        ) : (
                        // Render only the first 4 or all teams based on state
                            <Collection cards={showAll ? teamLinks.slice(0) : teamLinks.slice(1, 5)} />
                        )}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default Team;