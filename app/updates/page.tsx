'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import { featuredNews, updates } from "@/constants";
import CardNews from "@/components/shared/CardNews";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CollectionNews from "@/components/shared/CollectionNews";

const Updates = () => {
    const [showAll, setShowAll] = useState(false); // tracks state to show all teams or not
    const [loading, setLoading] = useState(false); // tracks loading state

    // Function to toggle between showing all teams and the first four
    const handleToggleUpdates = () => {
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
                <CoverPage page="updates" title="Updates / News" background="./assets/images/home-alt.jpg" />

                {/* featured news */}
                <section className="section-container !bg-custom-black" id="overview">
                    <div className="text-container !justify-start !flex-col text-center">
                        <h2 className="header ">Featured News</h2>
                        {/* <div>
                            {featuredNews.map((card) => 
                                <CardNews key={card.title} title={card.title} subtitle={card.subtitle} route={card.route} date={card.date} image={card.image} />
                            )}
                        </div> */}
                        <div className="relative flex flex-row justify-center">
                            {featuredNews.map((card, index) => (
                                <div
                                    key={card.title}
                                    className={`scale-110 transform transition-all ${
                                        index !== 0 ? 'translate-y-20' : ''
                                    } z-[${10 - index}]`}
                                    
                                >
                                    <CardNews
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        route={card.route}
                                        date={card.date}
                                        image={card.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* see what we are up to */}
                <section className="section-container !h-auto" id="archive">
                    <div className="text-container !flex-col !h-auto">
                        <div className="flex flex-row justify-between w-full">
                            <h2 className="header capitalize">See What We are Up To</h2>
                            <Button
                                onClick={handleToggleUpdates} // Toggle the updates on button click
                                className="text-custom-white bg-custom-lightBlack rounded-full p-5 my-auto"
                            >
                                {showAll ? "Collapse Updates" : "View all Updates"}
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
                            <CollectionNews cards={showAll ? updates.slice(0) : updates.slice(0, 4)} />
                        )}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default Updates;