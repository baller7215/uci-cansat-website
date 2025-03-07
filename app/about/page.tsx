"use client";

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import {
  competitionHistory,
  competitionTimeline,
  management,
  subteams,
} from "@/constants";
import CustomAccordion from "@/components/shared/Accordion";
import MobileFooter from "@/components/shared/MobileFooter";
import { motion } from "framer-motion";

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

const About = () => {
  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage
          page="about"
          title="About Us"
          background="./assets/images/competiton-photos/midLaunch.jpg"
        />

        {/* introduction */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative h-auto"
          // className="section-container !h-auto"
          id="overview"
        >
          {/* desktop */}
          <motion.div
            variants={fadeIn}
            className="hidden md:flex flex-col md:flex-row h-full md:!h-auto w-full md:!min-h-screen bg-gradient-to-b from-black/20 to-black/100 py-5 p-10 md:p-10 md:py-5 lg:p-20 lg:py-10 xl:p-20 xl:py-10 2xl:p-40 2xl:py-20 justify-center md:justify-between gap-5"
          >
            <motion.div
              className="leftText !h-auto w-full md:w-1/2"
              variants={fadeIn}
            >
              <h2 className="header">Introduction</h2>
              <p className="text-custom-whiteIce description">
                We are UCI CanSat, a vibrant and enthusiastic student
                engineering team from the University of California, Irvine
                (UCI). Our team is composed of a diverse blend of passionate
                students unified under one mission: to excel in the
                International CanSat competition. This annual student
                design-build-launch event, spearheaded by the American
                Astronautical Society (AAS), provides an opportunity for us to
                experience the entire development cycle of a complex engineering
                project – from conceptual design through integration and
                testing, to real-world operation and post-mission summary. Last
                year, we placed
                <span className="emphasis"> 14th in the World </span>, and
                <span className="emphasis"> 5th in the United States </span> out
                of over 100 participating teams.
              </p>
            </motion.div>

            <motion.div
              className="justify-center md:justify-end my-auto w-full md:w-1/2 flex flex-row h-fit"
              variants={fadeIn}
            >
              <div className="mainContent-container rounded-s-md !h-fit">
                {management.map((profile) => (
                  <motion.li
                    key={profile.name}
                    className="flex flex-row gap-3 md:gap-5"
                    variants={fadeIn}
                  >
                    {profile.profileImg ? (
                      <Image
                        src={profile.profileImg}
                        alt={`${profile.name} profile image`}
                        width={130}
                        height={130}
                        className="profile-image border-4 border-custom-shakespeare max-h-24 max-w-24"
                      />
                    ) : (
                      <div className="profile-image"></div>
                    )}
                    <div className="my-auto w-3/5 flex flex-col gap-0 md:gap-2">
                      <h3 className="tableTitle">{profile.name}</h3>
                      <h4 className="tableSubtitle uppercase">
                        {profile.role}
                      </h4>
                    </div>
                  </motion.li>
                ))}
              </div>
              <div className="title-container rounded-e-md">
                <h2 className="header rotate-90 origin-center whitespace-nowrap">
                  Management
                </h2>
              </div>
            </motion.div>
          </motion.div>

          {/* mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="md:hidden relative h-auto md:min-h-screen w-full flex home-sectionBackground"
          ></motion.div>
        </motion.section>

        {/* overview */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="section-container !h-auto"
        >
          <motion.div
            className="text-container md:!h-auto md:!min-h-screen"
            variants={fadeIn}
          >
            <motion.div className="leftText w-full lg:w-3/5" variants={fadeIn}>
              <h2 className="header">Overview</h2>
              <p className="description text-custom-rhino">
                The UCI CanSat team is a prominent representation of the
                University of California, Irvine&apos;s commitment to pushing
                the boundaries of student-led engineering projects. Comprised of
                a dedicated and dynamic group of students, the team participates
                in the CanSat competition to hone their engineering skills. The
                competition not only offers an avenue to apply theoretical
                knowledge but also propels UCI&apos;s engineering students into
                real-world scenarios that mimic the challenges faced by
                professionals in the industry.
              </p>

              <Button
                variant="link"
                className="mx-0 px-0 my-3 flex-none inline-block w-fit"
              >
                <Link
                  href="https://www.cansatcompetition.com/"
                  target="_blank"
                  className="subHeader flex flex-row items-center gap-2"
                >
                  Learn More About the Competition
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex bg-[var(--color-orange)] rounded-full"
                  >
                    <ArrowUpRightIcon className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden bg-[var(--color-orange)] rounded-full h-6 w-6"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Button>
                </Link>
              </Button>

              <CustomAccordion accordionItems={subteams} />
            </motion.div>

            <motion.div
              className="rightImage flex md:hidden lg:flex"
              variants={fadeIn}
            >
              <Image
                src="/assets/images/competiton-photos/verticalLaunch.jpg"
                alt="rocket in space"
                width={620}
                height={940}
                className="m-auto"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* competition history */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="section-container !h-auto"
        >
          <motion.div
            className="text-container md:!h-auto md:!min-h-screen"
            variants={fadeIn}
          >
            {/* left */}
            <div className="justify-center lg:justify-start w-full lg:w-1/3 flex graphic-container !h-fit">
              <div className="title-container rounded-s-md m-0">
                <h2 className="header rotate-[270deg] origin-center whitespace-nowrap">
                  Competition History
                </h2>
              </div>
              <div className="mainContent-container xl:gap-10 xl:p-10 items-center w-full md:w-auto rounded-e-md">
                {competitionHistory.map((year) => (
                  <motion.li
                    key={year.year}
                    className="flex flex-row"
                    variants={fadeIn}
                  >
                    <div className="graphic-cell">
                      <h3 className="tableTitle">
                        {year.placing} in the World
                      </h3>
                      <h4 className="tableSubtitle uppercase">{year.year}</h4>
                    </div>
                  </motion.li>
                ))}
              </div>
            </div>

            {/* right */}
            <div className="leftText w-full lg:w-2/3 flex">
              <h2 className="header">History</h2>
              <p className="description text-custom-rhino">
                UCI AntSat was founded in 2017 by a group of undergraduate
                students at UC Irvine with the mission to compete in the
                American Astronautical Society International CanSat Competition.{" "}
                <br /> <br />
                Founded in the 2017 - 2018 academic year, UCI CanSat is a
                specialized undergraduate project within the Mechanical and
                Aerospace Engineering (MAE) department at the University of
                California, Irvine. We participate in the annual CanSat
                competition, a global engineering challenge to design, build,
                and launch a space-type system. Each year brings a new mission;
                for 2022 - 2023, our focus is to create a probe that will be
                deployed at an altitude of approximately 700m, transmit
                real-time telemetry and execute a controlled landing using a
                parachute and aerobraking heat shield. Beyond competition goals,
                we aim to furnish our members with practical engineering skills.
                Over the course of three academic quarters, our team
                transitioned from brainstorming to actual launch, offering
                hands-on experience in engineering design. Last year, under the
                guidance of our faculty adviser, Professor Roger Rangel, our
                team of 10 students placed 14th in the world.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* competition timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="section-container"
        >
          <motion.div
            className="text-container md:!h-auto md:!min-h-screen"
            variants={fadeIn}
          >
            {/* left text */}
            <motion.div className="leftText w-full md:w-1/2" variants={fadeIn}>
              <h2 className="header">Competition Timeline</h2>
              <p className="description text-custom-rhino">
                In a span of one year, our team will advance through several key
                phases to ensure the success of our CanSat project. Our journey
                begins with meticulous &apos;Planning&apos; where we establish
                objectives, allocate resources, and set deadlines. This is
                followed by the &apos;Prototype&apos; phase, in which initial
                designs are created and evaluated. &apos;Preliminary Design
                Review (PDR)&apos; and &apos;Critical Design Review (CDR)&apos;
                are the next crucial steps, providing in-depth analyses and
                adjustments to our design. Subsequent to these reviews, we move
                to &apos;Testing&apos; rigorously examining the CanSat under
                simulated conditions. Finally, all systems are &apos;Go&apos;
                for the &apos;Launch&apos; the crowning event that validates our
                year-long efforts. We will travel to Virginia to compete against
                teams around the world, trying to determine which CanSat design
                performs the best.
              </p>
            </motion.div>

            {/* right timeline */}
            <div className="timeline-container w-fit md:w-1/2 ">
              {competitionTimeline.map((event, index) => (
                <motion.div
                  className="timeline-event"
                  key={index}
                  variants={fadeIn}
                >
                  <span className="timeline-date tableSubtitle">
                    {event.date}
                  </span>

                  {/* Wrapper for marker and line */}
                  <div className="marker-line-wrapper relative">
                    <div className="timeline-marker image-container"></div>
                    {/* Add the line that will pass through */}
                    {index === competitionTimeline.length - 1 ? (
                      // arrow for last timeline marker
                      <></>
                    ) : (
                      <div className="timeline-line"></div>
                    )}
                  </div>

                  <motion.div className="timeline-content" variants={fadeIn}>
                    <h3 className="tableTitle uppercase">{event.title}</h3>
                    <p className="tableSubtitle">{event.description}</p>
                  </motion.div>
                </motion.div>
                // </>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* footer */}
        <Footer />

        {/* mobile footer */}
        <MobileFooter />
      </main>
    </>
  );
};

export default About;
