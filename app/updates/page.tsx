"use client";

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import { featuredNews, updates } from "@/constants";
import CardNews from "@/components/shared/CardNews";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CollectionNews from "@/components/shared/CollectionNews";
import MobileFooter from "@/components/shared/MobileFooter";

const Updates = () => {
  const [showAll, setShowAll] = useState(false); // tracks state to show all teams or not
  const [loading, setLoading] = useState(false); // tracks loading state

  // Function to toggle between showing all teams and the first four
  const handleToggleUpdates = () => {
    setLoading(true);

    setTimeout(() => {
      setShowAll(!showAll);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage
          page="updates"
          title="Updates / News"
          background="./assets/images/competiton-photos/launch3.jpg"
        />

        {/* featured news */}
        <section className="section-container !h-auto min-h-[100vh] md:min-h-screen !bg-custom-black" id="overview">
          <div className="text-container !my-auto !h-auto !min-h-[100vh] md:!min-h-screen !justify-start !flex-col text-center">
            <h2 className="header">Featured News</h2>
            <div className="relative flex flex-col gap-8 lg:flex-row justify-center w-fit mx-auto">
              {featuredNews.map((card, index) => (
                <div
                  key={index}
                  className={`hidden md:flex scale-110 transform transition-all ${
                    index !== 0 ? "translate-y-20" : ""
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
              {featuredNews.map((card, index) => (
                <div
                  key={index}
                  className={`flex md:hidden`}
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
                  <div
                    key={index}
                    className="w-full items-center justify-center"
                  >
                    <Skeleton className="w-[300px] md:w-[500px] md:h-[300px] bg-custom-gray flex flex-col mx-auto rounded-md shadow-2xl" />
                  </div>
                  // <Skeleton key={index} className="w-[300px] h-[200px] md:w-[450px] md:h-[350px] bg-custom-gray flex justify-center rounded-md shadow-2xl" />
                ))}
              </div>
            ) : (
              // Render only the first 4 or all teams based on state
              <CollectionNews
                cards={showAll ? updates.slice(0) : updates.slice(0, 4)}
              />
            )}
          </div>
        </section>

        <Footer />
        <MobileFooter />
      </main>
    </>
  );
};

export default Updates;
