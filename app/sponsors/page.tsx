'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import Collection from "@/components/shared/Collection";
import { sponsors, whySponsorUs } from "@/constants";
import React, { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import ImageTextLayout from "@/components/shared/ImageTextLayout";

const Sponsors = () => {
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
                <CoverPage page="sponsors" title="Sponsors" background="./assets/images/home-alt.jpg" />

                {/* see our sponsors */}
                <section className="section-container !h-auto min-h-screen !bg-custom-black" id="overview">
                    <div className="text-container !flex-col !h-auto min-h-screen text-custom-white">
                        <div className="flex flex-row justify-between w-full">
                            <h2 className="header">See Our Teams</h2>
                            <Button
                                variant="outline"
                                onClick={handleToggleTeams} // Toggle the teams on button click
                                className="text-custom-white bg-transparent rounded-full p-5 my-auto"
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
                            <Collection cards={showAll ? sponsors.slice(0) : sponsors.slice(0, 5)} dark={true} />
                        )}
                    </div>
                </section>

                {/* why sponsor us */}
                <section className="section-container">
                    <div className="text-container !flex-col !justify-center">
                        {/* top */}
                        <div className="flex flex-row justify-between">
                            {/* text */}
                            <div className="leftText w-3/4 gap-3">
                                <h2 className="header">Why Sponsor Us?</h2>
                                <p className="description text-custom-rhino">{whySponsorUs.description}</p>
                            </div>
                            <div className="rightImage">
                                <Image
                                    src='/assets/icons/logo.png'
                                    alt="uci cansat logo"
                                    width={250}
                                    height={250}
                                    className="m-auto"
                                />
                            </div>
                        </div>

                        <hr className="my-5"/>

                        {/* bottom */}
                        <div className="flex flex-row justify-between gap-20">
                            {whySponsorUs.reasons.map((reason) => {
                                return (
                                    <div key={reason.title} className="w-full h-ful flex flex-col gap-3">
                                        <h3 className="font-bold text-base leading-6 tracking-wide text-custom-rhino uppercase">{reason.title}</h3>
                                        <p className="!text-base !font-thin !leading-7 !tracking-normal !text-custom-lightBlack">{reason.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default Sponsors;