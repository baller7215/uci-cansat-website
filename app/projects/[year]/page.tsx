'use client'

import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import React from 'react';
import { useParams } from 'next/navigation'; // New hook for App Router
import { yearTeamProject } from "@/constants";
import ImageTextLayout from "@/components/shared/ImageTextLayout";
import MobileFooter from "@/components/shared/MobileFooter";

const ProjectYearPage = () => {
    const params = useParams(); // Get dynamic parameters in the App Router
    const { year } = params;

    const yearObject = Object.values(yearTeamProject).find(obj => obj.id === year);
    const project = yearObject?.project;

    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="teamYear" title="Projects" subtitle={yearObject?.label} background="../assets/images/starfield.png" />

                {/* overview */}
                <ImageTextLayout title="Overview" description={project?.overview.description || ""} image={project?.overview.team || ""} />

                {/* project definition */}
                <section className="section-container">
                    <div className="text-container">

                        {/* left */}
                        <div className="leftText w-full md:w-3/5">
                            <h2 className="header">Project Definition</h2>
                            {/* planning */}
                            <div className="flex flex-col gap-3 my-5">
                                <h3 className="subHeader uppercase">Planning</h3>
                                <p className="description text-custom-rhino">{project?.projectDefinition.planning}</p>
                            </div>
                            {/* problem statement */}
                            <div className="flex flex-col gap-3 my-5">
                            <h3 className="subHeader uppercase">Problem Statement</h3>
                                <p className="description text-custom-rhino">{project?.projectDefinition.problemStatement}</p>
                            </div>
                        </div>

                        {/* right */}
                        <div className="rightImage">
                            <Image
                                src='/assets/images/verticalRocketBlack.jpg'
                                alt="rocket in space with black background"
                                width={620}
                                height={940}
                                className="m-auto"
                            />
                        </div>

                    </div>
                </section>

                {/* conceptual / preliminary design */}
                <section className="section-container">
                    <div className="text-container">

                        {/* left */}
                        <div className="justify-start w-full md:w-1/3 graphic-container">
                            {/* title */}
                            <div className="title-container rounded-s-md m-0">
                                <h2 className="header rotate-[270deg] origin-center whitespace-nowrap">3 Key Components</h2>
                            </div>

                            {/* 3 key components */}
                            <div className="mainContent-container rounded-e-md">
                                {project?.design.keyComponents.map((component) => {
                                    return (
                                        <div key={component.name} className="flex flex-row">
                                            <div className="graphic-cell">
                                                <h3 className="tableTitle">{component.name}</h3>
                                                <h4 className="tableSubtitle uppercase !text-custom-rhino/40">{component.description} uppercase</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                        {/* right */}
                        <div className="leftText w-full md:w-2/3">
                            <h2 className="header">Conceptual / Preliminary Design</h2>
                            <div className="flex flex-col gap-3 my-5">
                                <h3 className="subHeader uppercase">Major Components</h3>
                                <p className="description text-custom-rhino">{project?.design.majorComponents.description}</p>
                                <ul className="list-disc pl-10">
                                    {project?.design.majorComponents.bulletPoints.map((point) => {
                                        return (
                                            <li key={point.id} className="description text-custom-rhino">
                                                {point.text}
                                                {/* <p className="description text-custom-rhino">{point.text}</p> */}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* our works */}
                <section className="section-container bg-fixed min-h-screen my-auto !bg-custom-white">
                    {/* mechanical */}
                    <div className="text-container !min-h-screen">
                        {/* left */}
                        <div className="leftText w-full md:w-3/5">
                            <h2 className="header">Our Works</h2>
                            <h3 className="subHeader uppercase">Mechanical</h3>
                            <p className="description text-custom-rhino">{project?.design.ourWorks.mechanical.description}</p>
                        </div>
                        {/* right */}
                        <div className="rightImage">
                            <Image
                                src={project?.design.ourWorks.mechanical.image || ""}
                                alt="mechanical subteam image"
                                width={690}
                                height={630}
                                className="m-auto"
                            />
                        </div>
                    </div>

                    {/* electrical */}
                    <div className="text-container !min-h-screen">
                        {/* left */}
                        <div className="rightImage">
                            <Image
                                src={project?.design.ourWorks.electrical.image || ""}
                                alt="electrical subteam image"
                                width={690}
                                height={630}
                                className="m-auto"
                            />
                        </div>
                        
                        {/* right */}
                        <div className="leftText w-full md:w-3/5">
                            <h3 className="subHeader uppercase">Electrical</h3>
                            <p className="description text-custom-rhino">{project?.design.ourWorks.electrical.description}</p>
                        </div>
                    </div>

                    {/* controls */}
                    <div className="text-container !min-h-screen">
                        {/* left */}
                        <div className="leftText w-full md:w-3/5">
                            <h3 className="subHeader uppercase">Controls</h3>
                            <p className="description text-custom-rhino">{project?.design.ourWorks.controls.description}</p>
                        </div>
                        {/* right */}
                        <div className="rightImage">
                            <Image
                                src={project?.design.ourWorks.controls.image || ""}
                                alt="controls subteam image"
                                width={690}
                                height={630}
                                className="m-auto"
                            />
                        </div>
                    </div>
                </section>

                <Footer />
                <MobileFooter />
            </main>
        </>
    )
};

export default ProjectYearPage;