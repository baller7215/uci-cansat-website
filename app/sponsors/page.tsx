'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import Collection from "@/components/shared/Collection";
import { sponsors, whySponsorUs, sponsorshipTiers } from "@/constants";
import React, { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaXmark, FaCode, FaHeart } from "react-icons/fa6";
import { VscRocket } from "react-icons/vsc";
import MobileFooter from "@/components/shared/MobileFooter";


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
                <section className="section-container" id="whySponsorUs">
                    <div className="text-container !flex-col !justify-center">
                        {/* top */}
                        <div className="flex flex-col md:flex-row justify-between">
                            {/* text */}
                            <div className="leftText w-full md:w-3/4 gap-3">
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
                        <div className="flex flex-col md:flex-row justify-between gap-20">
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

                {/* sponsorship tiers */}
                <section className="section-container" id="sponsorshipTiers">
                    <div className="text-container !flex-col !gap-0 !py-20">
                        <h2 className="header text-center !mb-0">Sponsorship Tiers</h2>
                        <p className="description text-custom-rhino text-center">
                            We would greatly appreciate your financial support, and our sponsorship tiers are shown below. If you are interested in sponsoring our team through a monetary or component donation, please email 
                                <Link href="mailto:cansatuci@gmail.com" target="_blank" className="emphasis !not-italic underline underline-offset-8">cansatuci@gmail.com</Link>
                             for the next steps. Tier benefits are negotiable.
                        </p>

                        <div className="flex flex-col md:flex-row justify-between gap-10 mt-5">
                            {sponsorshipTiers.map((tier, index) => (
                                <div key={index} className="tier-card w-full md:w-1/3">

                                    {/* top */}
                                    <div className="tier-top">
                                        <h3 className="tier-amount">{tier.amount}</h3>
                                        <p className="tier-title">{tier.title}</p>
                                    </div>

                                    {/* bottom */}
                                    <ul className="tier-bottom">
                                        {tier.benefits.map((benefit, i) => (
                                            <li key={i} className="tier-benefit">
                                                {/* <span className={`inline-block w-4 h-4 ${benefit.checked ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></span> */}
                                                {benefit.checked ? 
                                                    <FaCheck className="tier-checked text-green-600" />
                                                :
                                                    <FaXmark className="tier-checked text-red-600" />
                                                }
                                                <span className="tier-benefitText">{benefit.text}</span>
                                            </li>
                                        ))}

                                        <div className="text-center mt-8">
                                            <Button asChild variant="outline" className="text-custom-easternBlue border-custom-easternBlue rounded-full">
                                                <Link href="/contact">
                                                    Contact Us Now
                                                </Link>
                                            </Button>
                                        </div>
                                    </ul>

                                    {/* <div className="text-center">
                                        <Button asChild variant="outline" className="text-custom-easternBlue border-custom-easternBlue rounded-full">
                                            <Link href="/contact">
                                                Contact Us Now
                                            </Link>
                                        </Button>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* thanks to sponsors */}
                <section className="section-container !h-auto">
                    <div className="text-container !flex-col gap-10 !h-auto px-10 !md:px-80 text-center">
                        {/* icons */}
                        <div className="flex flex-row gap-20 justify-center text-3xl">
                            <FaCode className="text-custom-rhino " />
                            <FaHeart className="text-[#E93A7D]" />
                            <VscRocket className="text-custom-rhino" />
                        </div>
                        {/* title */}
                        <h2 className="header !text-[42px] uppercase">big thanks to our sponsors &lt;3</h2>
                        <p className="description text-custom-rhino">On behalf of UCI CanSat, our team would like to thank you for your interest in sponsoring our team! If you have any questions about our team, feel free to contact us at cansatuci@gmail.com!</p>
                    </div>
                </section>

                <Footer />
                <MobileFooter />
            </main>
        </>
    );
};

export default Sponsors;