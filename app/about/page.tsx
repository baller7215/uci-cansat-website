'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import { competitionHistory, competitionTimeline, management, subteams } from "@/constants";
import CustomAccordion from "@/components/shared/Accordion";

const About = async () => {
  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage page="about" title="About Us" background="./assets/images/starfield.png" />

        {/* introduction */}
        <section className="relative" id="overview">
          {/* background image */}
          <div className='h-screen w-full flex home-sectionBackground' ></div>
          {/* gradient */}

          <div className="flex flex-row h-full w-full inset-x-0 top-0 absolute bg-gradient-to-b from-white/0 to-black/100 p-40 justify-between gap-5">
            {/* left */}
            <div className="leftText w-1/2">
              <h2 className="header">Introduction</h2>
              <p className="text-[var(--color-whiteIce)] description">We are UCI CanSat, a vibrant and enthusiastic student engineering team from the University of California, Irvine (UCI). Our team is composed of a diverse blend of passionate students unified under one mission: to excel in the International CanSat competition. This annual student design-build-launch event, spearheaded by the American Astronautical Society (AAS), provides an opportunity for us to experience the entire development cycle of a complex engineering project – from conceptual design through integration and testing, to real-world operation and post-mission summary. Last year, we placed 
                <span className="emphasis"> 14th in the World </span> 
                , and 
                <span className="emphasis"> 5th in the United States </span> 
                out of over 100 participating teams.
              </p>
            </div>

            {/* right */}
            <div className="justify-end my-auto w-1/2 flex flex-row h-full">
              {/* management profiles */}
              <div className="mainContent-container rounded-s-md">
                  {management.map((profile) => {
                    return (
                      <li key={profile.name} className="flex flex-row gap-5">
                        <div className="image-container"></div>
                        <div className="my-auto flex flex-col gap-2">
                          <h3 className="tableTitle">{profile.name}</h3>
                          <h4 className="tableSubtitle uppercase">{profile.role}</h4>
                        </div>
                      </li>
                    )
                  })}
              </div>
              {/* title */}
              <div className="title-container rounded-e-md">
                <h2 className="header rotate-90 origin-center">Management</h2>
              </div>
            </div>
          </div>
        </section>

        {/* overview */}
        <section className="section-container">
          <div className="text-container">
            {/* left */}
            <div className="leftText w-3/5">
              <h2 className="header">Overview</h2>
              <p className="description text-custom-rhino">The UCI CanSat team is a prominent representation of the University of California, Irvine&apos;s commitment to pushing the boundaries of student-led engineering projects. Comprised of a dedicated and dynamic group of students, the team participates in the CanSat competition to hone their engineering skills. The competition not only offers an avenue to apply theoretical knowledge but also propels UCI&apos;s engineering students into real-world scenarios that mimic the challenges faced by professionals in the industry.</p>
            
              <Button variant='link' className='mx-0 px-0 my-3 flex-none inline-block w-fit'>
                <Link href='https://www.cansatcompetition.com/' className="font-bold text-[32px] leading-9 text-[var(--color-rhino)] flex flex-row items-center gap-2">
                  Learn More About the Competition
                  <Button variant="ghost" size="icon" className="bg-[var(--color-orange)] rounded-full">
                      <ArrowUpRightIcon className="h-6 w-6" />
                  </Button>
                </Link>  
              </Button>

              <CustomAccordion accordionItems={subteams} />
              
            </div>

            {/* right */}
            <div className="rightImage">
              <Image 
                src='/assets/images/verticalRocketBlack.jpg'
                alt="rocket in space"
                width={620}
                height={940}
                className="m-auto"
              />
            </div>
          </div>
        </section>

        {/* history */}
        <section className="relative bg-custom-white border border-custom-black">
          <div className="text-container">

            {/* left */}
            <div className="justify-start w-1/3 graphic-container">
              {/* title */}
              <div className="title-container rounded-s-md m-0">
                <h2 className="header rotate-[270deg] origin-center">Competition History</h2>
              </div>

              {/* competition standing history */}
              <div className="mainContent-container rounded-e-md">
                  {competitionHistory.map((year) => {
                    return (
                      <li key={year.year} className="flex flex-row">
                        <div className="my-auto flex flex-col gap-2 items-center text-center">
                          <h3 className="tableTitle">{year.placing} in the World</h3>
                          <h4 className="tableSubtitle uppercase">{year.year}</h4>
                        </div>
                      </li>
                    )
                  })}
              </div>
              
            </div>

            {/* right */}
            <div className="leftText w-2/3">
              <h2 className="header">History</h2>
              <p className="description text-custom-rhino">UCI AntSat was founded in 2017 by a group of undergraduate students at UC Irvine with the mission to compete in the American Astronautical Society International CanSat Competition. <br /> <br />
              Founded in the 2017 - 2018 academic year, UCI CanSat is a specialized undergraduate project within the Mechanical and Aerospace Engineering (MAE) department at the University of California, Irvine. We participate in the annual CanSat competition, a global engineering challenge to design, build, and launch a space-type system. Each year brings a new mission; for 2022 - 2023, our focus is to create a probe that will be deployed at an altitude of approximately 700m, transmit real-time telemetry and execute a controlled landing using a parachute and aerobraking heat shield. Beyond competition goals, we aim to furnish our members with practical engineering skills. Over the course of three academic quarters, our team transitioned from brainstorming to actual launch, offering hands-on experience in engineering design. Last year, under the guidance of our faculty adviser, Professor Roger Rangel, our team of 10 students placed 14th in the world.</p>
            
            </div>
          </div>
        </section>

        {/* competition timeline */}
        <section className="section-container">
          <div className="text-container">
            {/* left text */}
            <div className="leftText w-1/2">
              <h2 className="header">Competition Timeline</h2>
              <p className="description text-custom-rhino">In a span of one year, our team will advance through several key phases to ensure the success of our CanSat project. Our journey begins with meticulous &apos;Planning&apos; where we establish objectives, allocate resources, and set deadlines. This is followed by the &apos;Prototype&apos; phase, in which initial designs are created and evaluated. &apos;Preliminary Design Review (PDR)&apos; and &apos;Critical Design Review (CDR)&apos; are the next crucial steps, providing in-depth analyses and adjustments to our design. Subsequent to these reviews, we move to &apos;Testing&apos; rigorously examining the CanSat under simulated conditions. Finally, all systems are &apos;Go&apos; for the &apos;Launch&apos; the crowning event that validates our year-long efforts. We will travel to Virginia to compete against teams around the world, trying to determine which CanSat design performs the best.</p>
            </div>
            
            {/* right timeline */}
            <div className='timeline-container w-1/2 '>
              {competitionTimeline.map((event, index) => (
                <div className='timeline-event' key={index}>
                  <span className='timeline-date tableSubtitle'>{event.date}</span>
                  {/* <div className='timeline-marker image-container'></div> */}

                  {/* Wrapper for marker and line */}
                  <div className="marker-line-wrapper relative">
                    <div className="timeline-marker image-container"></div>
                    {/* Add the line that will pass through */}
                    {index === competitionTimeline.length - 1 ? (
                      // arrow for last timeline marker
                      <>
                        <div className="timeline-line"></div>
                        <div className="timeline-arrow"></div>
                      </>
                      
                    ) : (
                      <div className="timeline-line"></div> 
                    )}
                  </div>

                  <div className='timeline-content'>
                    <h3 className="tableTitle uppercase">{event.title}</h3>
                    <p className="tableSubtitle">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>  
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;