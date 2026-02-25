"use client";

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";
import Collection from "@/components/shared/Collection";
import { whySponsorUs, sponsorshipTiers, alumni } from "@/constants";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaXmark, FaCode, FaHeart } from "react-icons/fa6";
import { VscRocket } from "react-icons/vsc";
import MobileFooter from "@/components/shared/MobileFooter";
import { motion } from "framer-motion";
import AlumniCarousel from "@/components/shared/AlumniCarousel";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export type SponsorCard = {
  label: string;
  route: string;
  image?: string;
};

type SponsorsContentProps = {
  sponsors: SponsorCard[];
};

const SponsorsContent = ({ sponsors }: SponsorsContentProps) => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleTeams = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll(!showAll);
      setLoading(false);
    }, 1000);
  };

  const displaySponsors = showAll ? sponsors : sponsors.slice(0, 5);

  return (
    <>
      <main>
        <CoverPage
          page="sponsors"
          title="Sponsors"
          background="../assets/images/competiton-photos/midLaunch.jpg"
        />

        <motion.section
          className="section-container !h-auto min-h-screen !bg-custom-black"
          id="overview"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="text-container !flex-col !h-auto min-h-screen text-custom-white">
            <motion.div
              className="flex flex-row justify-between w-full"
              variants={fadeIn}
            >
              <h2 className="header">See Our Sponsors</h2>
              <Button
                variant="outline"
                onClick={handleToggleTeams}
                className="text-custom-white bg-transparent rounded-full p-5 my-auto"
              >
                {showAll ? "Collapse Sponsors" : "View all Sponsors"}
              </Button>
            </motion.div>

            {loading ? (
              <div className="collection-container">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full items-center justify-center"
                  >
                    <Skeleton className="w-[300px] h-[200px] md:w-[450px] md:h-[350px] bg-custom-gray flex flex-col mx-auto rounded-md shadow-2xl" />
                  </div>
                ))}
              </div>
            ) : (
              <Collection cards={displaySponsors} dark={true} />
            )}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="section-container !h-auto"
          id="whySponsorUs"
        >
          <motion.div
            className="text-container md:!h-auto md:!min-h-screen !flex-col !justify-center"
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row justify-between">
              <motion.div
                className="leftText w-full md:w-3/4 gap-3"
                variants={fadeIn}
              >
                <h2 className="header">Why Sponsor Us?</h2>
                <p className="description text-custom-rhino">
                  {whySponsorUs.description}
                </p>
              </motion.div>
              <motion.div className="rightImage" variants={fadeIn}>
                <Image
                  src="/assets/icons/logo.png"
                  alt="uci cansat logo"
                  width={250}
                  height={250}
                  className="m-auto"
                />
              </motion.div>
            </div>

            <hr className="my-5" />

            <div className="flex flex-col md:flex-row justify-between gap-20">
              {whySponsorUs.reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  className="w-full h-full flex flex-col gap-3"
                  variants={fadeIn}
                >
                  <h3 className="font-bold text-base leading-6 tracking-wide text-custom-rhino uppercase">
                    {reason.title}
                  </h3>
                  <p className="!text-base !font-thin !leading-7 !tracking-normal !text-custom-lightBlack">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="section-container !h-auto"
          id="sponsorshipTiers"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="text-container md:!h-auto md:!min-h-screen !h-fit !flex-col !gap-0 !py-20"
            variants={fadeIn}
          >
            <h2 className="header text-center !mb-0">Sponsorship Tiers</h2>
            <p className="description text-custom-rhino text-center">
              We would greatly appreciate your financial support, and our
              sponsorship tiers are shown below. If you are interested in
              sponsoring our team through a monetary or component donation,
              please email{" "}
              <Link
                href="mailto:cansatuci@gmail.com"
                target="_blank"
                className="emphasis !not-italic underline underline-offset-8"
              >
                cansatuci@gmail.com
              </Link>{" "}
              for the next steps. Tier benefits are negotiable.
            </p>

            <div className="flex flex-col lg:flex-row justify-between gap-10 mt-5">
              {sponsorshipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className="tier-card w-fit lg:w-1/3 mx-auto"
                  variants={fadeIn}
                >
                  <div className="tier-top">
                    <h3 className="tier-amount">{tier.amount}</h3>
                    <p className="tier-title">{tier.title}</p>
                  </div>
                  <ul className="tier-bottom">
                    {tier.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="tier-benefit flex items-start gap-2"
                      >
                        {benefit.checked ? (
                          <FaCheck
                            className="w-5 text-green-600 flex-shrink-0 mt-1"
                            size={16}
                          />
                        ) : (
                          <FaXmark
                            className="w-5 text-red-600 flex-shrink-0 mt-1"
                            size={16}
                          />
                        )}
                        <span className="tier-benefitText">{benefit.text}</span>
                      </li>
                    ))}
                    <div className="text-center mt-8">
                      <Button
                        asChild
                        variant="outline"
                        className="text-custom-easternBlue border-custom-easternBlue rounded-full"
                      >
                        <Link href="/contact">Contact Us Now</Link>
                      </Button>
                    </div>
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="section-container !min-h-fit !h-fit !bg-custom-black"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <AlumniCarousel alumni={alumni} />
          </motion.div>
        </motion.section>

        <motion.section
          className="section-container !min-h-fit !h-fit"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="text-container !flex-col gap-10 !h-auto !min-h-fit px-10 !md:px-80 text-center"
            variants={fadeIn}
          >
            <div className="flex flex-row gap-20 justify-center text-3xl">
              <FaCode className="text-custom-rhino" />
              <FaHeart className="text-[#E93A7D]" />
              <VscRocket className="text-custom-rhino" />
            </div>
            <h2 className="header !text-[42px] uppercase">
              big thanks to our sponsors &lt;3
            </h2>
            <p className="description text-custom-rhino">
              On behalf of UCI CanSat, our team would like to thank you for your
              interest in sponsoring our team! If you have any questions about
              our team, feel free to contact us at{" "}
              <Button
                variant="link"
                className="!description !text-custom-orange !p-0 !m-0 underline underline-offset-"
              >
                <Link
                  className="description"
                  href="mailto:cansatuci@gmail.com"
                  target="_blank"
                >
                  cansatuci@gmail.com
                </Link>
              </Button>
              !
            </p>
          </motion.div>
        </motion.section>

        <Footer />
        <MobileFooter />
      </main>
    </>
  );
};

export default SponsorsContent;
