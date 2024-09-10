'use client'

import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import { management, subteams } from "@/constants";
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
            <div className="justify-center my-auto w-1/2 flex flex-row h-full">
              {/* management profiles */}
              <div className="mainContent-container rounded-s-md">
                {/* <ul> */}
                  {management.map((profile) => {
                    return (
                      <li key={profile.name} className="flex flex-row gap-5">
                        {/* TODO: REPLACE EMPTY DIV WITH PROFILE IMAGE */}
                        <div className="image-container"></div>
                        <div className="my-auto flex flex-col gap-2">
                          <h3 className="tableTitle">{profile.name}</h3>
                          <h4 className="tableSubtitle uppercase">{profile.role}</h4>
                        </div>
                      </li>
                    )
                  })}
                {/* </ul> */}
              </div>
              {/* title */}
              <div className="title-container rounded-e-md">
                <h2 className="header rotate-90 origin-center">Management</h2>
              </div>
            </div>
          </div>
        </section>

        {/* overview */}
        <section className="relative bg-custom-white">
          {/* background image */}
          {/* <div className='h-screen w-full flex home-sectionBackground' ></div> */}
          {/* gradient */}

          <div className="flex flex-row h-screen w-full p-40 justify-between gap-10">
            {/* left */}
            <div className="leftText w-3/5">
              <h2 className="header">Overview</h2>
              <p className="description text-custom-rhino">The UCI CanSat team is a prominent representation of the University of California, Irvine's commitment to pushing the boundaries of student-led engineering projects. Comprised of a dedicated and dynamic group of students, the team participates in the CanSat competition to hone their engineering skills. The competition not only offers an avenue to apply theoretical knowledge but also propels UCI's engineering students into real-world scenarios that mimic the challenges faced by professionals in the industry.</p>
            
              <Button variant='link' className='mx-0 px-0 my-3 flex-none inline-block w-fit'>
                <Link href='https://www.cansatcompetition.com/' className="font-bold text-[32px] leading-9 text-[var(--color-rhino)] flex flex-roww gap-5">
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

      </main>

      <Footer />
    </>
  );
};

export default About;