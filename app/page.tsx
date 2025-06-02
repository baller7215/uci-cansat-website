"use client";

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import MobileFooter from "@/components/shared/MobileFooter";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animations
    },
  },
};

export default function Home() {
  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage
          page="home"
          title="Design. Build. Launch. Compete."
          subtitle="Elevate Your Engineering Skills"
          background="./assets/images/competiton-photos/wideLaunch.jpg"
        />

        {/* who we are */}
        <motion.section
          className="relative"
          id="overview"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }} // Only animate when in view
        >
          {/* background image */}
          <div className="h-screen w-full flex home-sectionBackground"></div>
          {/* gradient */}
          <div className="flex flex-col md:flex-row h-full w-full inset-x-0 top-0 absolute bg-gradient-to-b from-black/100 to-black/100 p-10 md:p-10 lg:p-20 xl:p-20 2xl:p-40 justify-between gap-5">
            {/* left */}
            <motion.div
              className="home-left text-[var(--color-white)] w-full md:w-1/2 tracking-normal"
              variants={fadeInUp}
            >
              <motion.h2
                className="capitalize text-[40px] md:text-[64px] font-bold leading-[48px] md:leading-[62px]"
                variants={fadeInUp}
              >
                Who We Are
              </motion.h2>
              <motion.h5
                className="font-medium text-xl md:text-2xl lg:text-3xl leading-[30px] md:leading-[44px] my-5 md:my-10 mb-7 md:mb-14 text-pretty"
                variants={fadeInUp}
              >
                We are UCI CanSat, an undergraduate project in the MAE
                department. Our team competes in the CanSat competition, an
                annual, international engineering challenge to design and build
                a space-type system.
              </motion.h5>
              <div className="flex flex-row gap-5">
                <Button
                  asChild
                  variant="link"
                  className="text-[var(--color-white)] font-bold text-[20px] md:text-[40px] tracking-normal capitalize p-0"
                >
                  <motion.div variants={fadeInUp}>
                    <Link href="/about">Learn More</Link>
                  </motion.div>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-[var(--color-orange)] rounded-full"
                >
                  <motion.div variants={fadeInUp}>
                    <Link href="/about">
                      <ArrowUpRightIcon className="h-6 w-6" />
                    </Link>
                  </motion.div>
                </Button>
              </div>
            </motion.div>

            {/* right */}
            <motion.div
              className="home-right w-full md:w-1/2"
              variants={fadeIn}
            >
              <Image
                src="/assets/icons/cansat.png"
                alt="cansat logo"
                width={700}
                height={700}
                className="m-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Join Our Team Section */}
        {/* see our team */}
        {/* <motion.section className="relative bg-[var(--color-black)] w-full h-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row  p-10 md:p-10 lg:p-20 xl:p-20 2xl:p-40 w-full h-auto justify-between items-center gap-10 lg:gap-0">
            <motion.div className="home-left w-full md:w-3/4"
              variants={fadeInUp}
            >
              <div className="flex flex-col gap-2 h-auto">
                <h2 className="capitalize text-custom-white text-[40px] md:text-[64px] font-bold leading-[48px] md:leading-[62px]">
                  See Our Team
                </h2>
                <p className="text-custom-white font-normal text-[16px] md:text-[18px] h-auto lg:h-[100px] my-5">
                  Unfortunately, we are no longer looking for applicants for the 2024 - 2025 school year. Recruitment typically occurs during the spring quarter so check back soon! Don&apos;t hesitate to explore our website and learn more about what we do and what positions we offer.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <Button asChild variant='default' className="cursor-pointer capitalize rounded-full bg-[var(--color-orange)] hover:bg-custom-black hover:text-custom-orange transition-colors text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-5 md:px-10 py-3 md:py-5">
                  <motion.div variants={fadeInUp}>
                    <Link href='/team/2024-2025'>See the 2024-2025 Team</Link>
                  </motion.div>
                </Button>

                <Button asChild variant='ghost' className="cursor-pointer capitalize rounded-full text-[var(--color-orange)] hover:bg-custom-orange hover:text-custom-white transition-colors font-medium text-[16px] md:text-[18px] px-10 py-3 md:py-5">
                  <motion.div variants={fadeInUp}>
                    <Link href='/contact'>Contact Us</Link>
                  </motion.div>
                </Button>
              </div>
            </motion.div>

            <motion.div className="home-right mt-10 md:mt-0 w-full md:w-1/4 !h-auto"
              variants={fadeIn}
            >
              <Image src='/assets/images/components/sicko_mode.jpg' alt="uci breadboard" width={400} height={400} className="my-auto rounded-xl" />
            </motion.div>
          </div>
        </motion.section> */}

        {/* internship apps are open section */}
        {/* <motion.section className="relative bg-custom-rhino w-full h-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-internAd bg-cover bg-center opacity-30 z-0"></div>
          <div className="relative z-10 flex flex-col  p-10 md:p-10 lg:p-20 xl:p-20 2xl:p-40 w-full h-auto justify-between gap-5">
            <motion.h4 className="uppercase text-custom-orange text-xs md:text-sm tracking-wider font-bold"
              variants={fadeInUp}
            >
              Mentorship Opportunity
            </motion.h4>
            <motion.h2 className="capitalize text-custom-white text-4xl md:text-6xl font-bold"
              variants={fadeInUp}
            >
              UCI CanSat Student Interns Wanted
            </motion.h2>
            <motion.p className="text-custom-white text-md md:text-lg font-medium"
              variants={fadeInUp}
            >
              Are you a freshman or transfer student eager to dive into engineering? The UCI CanSat team is looking for motivated interns to observe, learn, and contribute to an exciting and competitive aerospace project. Gain hands-on experience with 3D printing and soldering, understand the inner workings of our Mechanical and Electrical subteams, and be part of a team that designs, builds, and competes in a global competition.
            </motion.p>

            <div className="flex flex-col md:flex-row gap-5 mx-auto">
              <Button asChild variant='default' className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-10 md:px-20 py-3 md:py-5">
                <motion.div variants={fadeInUp}>
                  <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdEn-LXCAi8nY6t-NdRtl_JRpVdoEVT95m5nL4gkc8XbT8yKw/viewform'>Apply Now</Link>
                </motion.div>
              </Button>

              <Button asChild variant='ghost' className="capitalize rounded-full text-[var(--color-orange)] font-medium text-[16px] md:text-[18px] px-10 py-3 md:py-5">
                <motion.div variants={fadeInUp}>
                  <Link href='/about'>Learn More</Link>
                </motion.div>
              </Button>
            </div>
          </div>
        </motion.section> */}

        {/* applications for 2025-2026 are open section */}
        <motion.section
          className="relative bg-custom-rhino w-full h-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-internAd bg-cover bg-center opacity-30 z-0"></div>
          <div className="relative z-10 flex flex-col  p-10 md:p-10 lg:p-20 xl:p-20 2xl:p-40 w-full h-auto justify-between gap-5">
            <motion.h4
              className="uppercase text-custom-orange text-xs md:text-sm tracking-wider font-bold"
              variants={fadeInUp}
            >
              2025-2026 Recruitment
            </motion.h4>
            <motion.h2
              className="capitalize text-custom-white text-4xl md:text-6xl font-bold"
              variants={fadeInUp}
            >
              Apply Now
            </motion.h2>
            <motion.p
              className="text-custom-white text-md md:text-lg font-medium"
              variants={fadeInUp}
            >
              UCI CanSat is recruiting for the 2025-2026 school year! We are
              looking to fill Mechanical Engineer, Electrical Engineer, and
              Embedded Software Engineer positions. The application will
              officially close on Friday, May 9 at 11:59PM, but will be reviewed
              on a rolling basis (this means that all open positions may be
              filled before the deadline—apply early!).
            </motion.p>

            <div className="flex flex-col md:flex-row gap-5 mx-auto">
              <Button
                asChild
                variant="default"
                className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-10 md:px-20 py-3 md:py-5"
              >
                <motion.div variants={fadeInUp}>
                  <Link href="https://forms.gle/fAQQRGMpHUvPafxH8">
                    Apply Now
                  </Link>
                </motion.div>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="capitalize rounded-full text-[var(--color-orange)] font-medium text-[16px] md:text-[18px] px-10 py-3 md:py-5"
              >
                <motion.div variants={fadeInUp}>
                  <Link href="https://cansatuci.notion.site/">Learn More</Link>
                </motion.div>
              </Button>
            </div>
          </div>
        </motion.section>

        <Footer />
        <MobileFooter />
      </main>
    </>
  );
}
