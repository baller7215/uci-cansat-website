"use client";

import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation"; // New hook for App Router
import { yearTeamProject } from "@/constants";
import ImageTextLayout from "@/components/shared/ImageTextLayout";
import MobileFooter from "@/components/shared/MobileFooter";
import { motion } from "framer-motion";
import VisualizeModel from "@/components/shared/VisualizeModel";

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

const ProjectYearPage = () => {
  const params = useParams();
  if (!params || typeof params.year !== 'string') {
    return <p>Invalid year</p>;
  }
  const year = params.year;  // now TS knows this is a string

  const yearObject = Object.values(yearTeamProject).find(
    (obj) => obj.id === year
  );
  const project = yearObject?.project;

  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage
          page="teamYear"
          title="Projects"
          subtitle={yearObject?.label}
          background="../assets/images/components/double2.jpg"
        />

        {/* overview */}
        {project?.overview &&
          project?.overview?.team &&
          project?.overview?.description && (
            <ImageTextLayout
              title="Overview"
              description={project?.overview.description || ""}
              image={project?.overview.team || ""}
            />
          )}

        {/* project definition */}
        {project?.projectDefinition.show && (
          <motion.section
            className="section-container !h-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container md:!h-auto md:!min-h-screen"
            >
              {/* left */}
              <motion.div
                variants={fadeIn}
                className="leftText w-full md:w-full lg:w-3/5"
              >
                <h2 className="header">Project Definition</h2>
                {/* planning */}
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col gap-3 my-5"
                >
                  <h3 className="subHeader uppercase">Planning</h3>
                  <p className="description xl:!text-xl text-custom-rhino">
                    {project?.projectDefinition.planning}
                  </p>
                </motion.div>
                {/* problem statement */}
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col gap-3 my-5"
                >
                  <h3 className="subHeader uppercase">Problem Statement</h3>
                  <p className="description xl:!text-xl text-custom-rhino">
                    {project?.projectDefinition.problemStatement}
                  </p>
                </motion.div>
              </motion.div>

              {/* right */}
              <motion.div
                variants={fadeIn}
                className="rightImage w-full md:w-2/5 flex md:hidden lg:flex"
              >
                <Image
                  src={project?.projectDefinition.image}
                  alt="rocket in space with black background"
                  width={620}
                  height={940}
                  className="m-auto"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* conceptual / preliminary design */}
        {project?.design.show && (
          <motion.section
            className="section-container h-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container md:!h-auto md:!min-h-screen !flex-col xl:!flex-row !justify-center"
            >
              {/* left */}
              <motion.div
                variants={fadeIn}
                className="justify-start w-full xl:w-1/3 graphic-container !h-fit"
              >
                {/* title */}
                <motion.div
                  variants={fadeIn}
                  className="title-container rounded-s-md m-0"
                >
                  <h2 className="header md:!text-4xl lg:!text-4xl rotate-[270deg] origin-center whitespace-nowrap">
                    Components
                  </h2>
                </motion.div>

                {/* 3 key components */}
                <motion.div
                  variants={fadeIn}
                  className="mainContent-container xl:!gap-10 xl:!p-10 rounded-e-md"
                >
                  {project?.design.keyComponents.map((component) => {
                    return (
                      <motion.div
                        variants={fadeIn}
                        key={component.name}
                        className="flex flex-row"
                      >
                        <motion.div variants={fadeIn} className="graphic-cell">
                          <h3 className="tableTitle">{component.name}</h3>
                          <h4 className="tableSubtitle uppercase !text-custom-rhino/40">
                            {component.description}
                          </h4>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* right */}
              <motion.div
                variants={fadeIn}
                className="leftText w-full xl:w-2/3 !h-fit xl!h-full"
              >
                <h2 className="header lg:!text-4xl">
                  Conceptual / Preliminary Design
                </h2>
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col gap-3 my-5"
                >
                  <h3 className="subHeader lg:!text-2xl uppercase">
                    Major Components
                  </h3>
                  <p className="description lg:!text-xl text-custom-rhino">
                    {project?.design.majorComponents.description}
                  </p>
                  <ul className="list-disc pl-10">
                    {project?.design.majorComponents.bulletPoints.map(
                      (point) => {
                        return (
                          <motion.li
                            variants={fadeIn}
                            key={point.id}
                            className="description lg:!text-xl text-custom-rhino"
                          >
                            {point.text}
                            {/* <p className="description text-custom-rhino">{point.text}</p> */}
                          </motion.li>
                        );
                      }
                    )}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* competition requirements */}
        {project?.competitionRequirements?.show && (
          <motion.section
            className="section-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !flex-col xl:!flex-row !justify-center"
            >
              {/* left */}
              <motion.div
                variants={fadeIn}
                className="justify-start w-full xl:w-1/3 graphic-container !h-fit"
              >
                {/* title */}
                <motion.div
                  variants={fadeIn}
                  className="title-container rounded-s-md m-0"
                >
                  <h2 className="header md:!text-4xl lg:!text-4xl rotate-[270deg] origin-center whitespace-nowrap">
                    Team Goals
                  </h2>
                </motion.div>

                {/* team goals */}
                <motion.div
                  variants={fadeIn}
                  className="mainContent-container rounded-e-md"
                >
                  {project?.teamGoals.map((goal) => {
                    return (
                      <motion.div
                        variants={fadeIn}
                        key={goal.id}
                        className="flex flex-row"
                      >
                        <motion.div variants={fadeIn} className="graphic-cell">
                          {/* <h3 className="tableTitle">{component.name}</h3> */}
                          <h4 className="tableSubtitle !text-custom-rhino/40">
                            {goal.point}
                          </h4>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* right */}
              <motion.div
                variants={fadeIn}
                className="leftText w-full xl:w-2/3 !h-fit xl!h-full"
              >
                <h2 className="header lg:!text-4xl">
                  CanSat Competition Requirements
                </h2>
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col gap-3 my-5"
                >
                  <h3 className="subHeader lg:!text-2xl uppercase">
                    Major Components
                  </h3>
                  <p className="description lg:!text-xl text-custom-rhino">
                    {project?.competitionRequirements.description}
                  </p>
                  <ul className="list-disc pl-10">
                    {project?.competitionRequirements.bullets.map((point) => {
                      return (
                        <motion.li
                          variants={fadeIn}
                          key={point.id}
                          className="description lg:!text-xl text-custom-rhino"
                        >
                          {point.point}
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* our works */}
        {project?.design.ourWorks.show && (
          <motion.section
            className="section-container bg-fixed min-h-screen !h-auto my-auto !bg-custom-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* mechanical */}
            <motion.div
              variants={fadeIn}
              className="text-container !min-h-screen !h-auto"
            >
              {/* left */}
              <motion.div
                variants={fadeIn}
                className="leftText w-full md:w-3/5"
              >
                <h2 className="header">Our Works</h2>
                <h3 className="subHeader uppercase">Mechanical</h3>
                <p className="description text-custom-rhino">
                  {project?.design.ourWorks.mechanical.description}
                </p>
              </motion.div>
              {/* right */}
              <motion.div variants={fadeIn} className="rightImage">
                {project?.design.ourWorks.mechanical.model ? (
                  <VisualizeModel
                    modelPath={project?.design.ourWorks.mechanical.model || ""}
                  />
                ) : (
                  <Image
                    src={project?.design.ourWorks.mechanical.image || ""}
                    alt="mechanical subteam image"
                    width={690}
                    height={630}
                    className=""
                  />
                )}

                <p className="description text-custom-rhino italic text-center mt-3">
                  {project?.design.ourWorks.mechanical.caption}
                </p>
              </motion.div>
            </motion.div>

            {/* electrical */}
            <motion.div
              variants={fadeIn}
              className="text-container !min-h-screen !h-auto"
            >
              {/* left */}
              <motion.div variants={fadeIn} className="rightImage">
                {project?.design.ourWorks.electrical.model ? (
                  <VisualizeModel
                    modelPath={project?.design.ourWorks.electrical.model || ""}
                  />
                ) : (
                  <Image
                    src={project?.design.ourWorks.electrical.image || ""}
                    alt="electrical subteam image"
                    width={690}
                    height={630}
                    className=""
                  />
                )}

                <p className="description text-custom-rhino italic text-center mt-3">
                  {project?.design.ourWorks.electrical.caption}
                </p>
              </motion.div>

              {/* right */}
              <motion.div
                variants={fadeIn}
                className="leftText w-full md:w-3/5"
              >
                <h3 className="subHeader uppercase">Electrical</h3>
                <p className="description text-custom-rhino">
                  {project?.design.ourWorks.electrical.description}
                </p>
              </motion.div>
            </motion.div>

            {/* controls */}
            {project?.design.ourWorks.controls.show && (
              <motion.div
                variants={fadeIn}
                className="text-container !min-h-screen !h-auto"
              >
                {/* left */}
                <motion.div
                  variants={fadeIn}
                  className="leftText w-full md:w-3/5"
                >
                  <h3 className="subHeader uppercase">Controls</h3>
                  <p className="description text-custom-rhino">
                    {project?.design.ourWorks.controls.description}
                  </p>
                </motion.div>
                {/* right */}
                <motion.div variants={fadeIn} className="rightImage">
                  <Image
                    src={project?.design.ourWorks.controls.image || ""}
                    alt="controls subteam image"
                    width={690}
                    height={630}
                    className="m-auto"
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* senior subsystem design */}
        {project?.design?.seniorSubsystem.show && (
          <motion.section
            className="section-container !h-auto !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !flex-col gap-3 !justify-center"
            >
              <h2 className="header">Senior Subsystem Design</h2>
              <motion.div
                variants={fadeIn}
                className="flex flex-col md:flex-row justify-between gap-5"
              >
                <motion.div variants={fadeIn} className="flex flex-col gap-2">
                  <Image
                    src={project?.design?.seniorSubsystem.image}
                    width={800}
                    height={400}
                    alt="senior subsytem image"
                    className="w-full"
                  />
                  <p className="description text-custom-rhino italic text-center mt-3">
                    {project?.design?.seniorSubsystem?.caption}
                  </p>
                </motion.div>
                <p className="description w-full md:w-2/3 text-custom-rhino my-auto">
                  {project?.design?.seniorSubsystem?.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* descent control design */}
        {project?.design?.descentControl.show && (
          <motion.section
            className="section-container !h-auto !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !h-auto !flex-col gap-3 !justify-center"
            >
              <h2 className="header">Descent Control Design</h2>
              {project?.design?.descentControl?.items?.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex flex-col md:flex-row justify-between gap-5"
                  >
                    <motion.div
                      variants={fadeIn}
                      className="flex flex-col gap-2 justify-center w-full md:w-3/5"
                    >
                      <h3 className="subHeader lg:!text-2xl uppercase">
                        {item.name}
                      </h3>
                      <ol>
                        {item.bullets.map((bullet, index) => (
                          <motion.li
                            key={index}
                            className="flex flex-row gap-2"
                          >
                            <p className="description justify-start text-custom-rhino mb-auto">
                              {`${index + 1}. `}
                            </p>
                            <p className="description w-full text-custom-rhino my-auto">
                              {bullet}
                            </p>
                          </motion.li>
                        ))}
                      </ol>
                    </motion.div>
                    <motion.div
                      variants={fadeIn}
                      className="flex flex-col gap-2 w-full md:w-2/5"
                    >
                      <Image
                        src={item.image}
                        width={800}
                        height={400}
                        alt={`${item.name} image`}
                        className="w-full"
                      />
                      <p className="description text-custom-rhino italic text-center mt-3">
                        {project?.design?.seniorSubsystem?.caption}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>
        )}

        {/* mechanical subsystem design */}
        {project?.design?.mechanicalSubsystem.show && (
          <motion.section
            className="section-container !h-auto !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !h-auto !flex-col gap-3 !justify-center"
            >
              <h2 className="header">Mechanical Subsystem Design</h2>
              <Image
                src={project?.design?.mechanicalSubsystem?.image}
                width={800}
                height={400}
                alt="mechanical subsystem design overview image"
                className="w-full max-w-[800px] mx-auto"
              />
              <p className="description w-full text-custom-rhino my-auto">
                {project?.design?.mechanicalSubsystem?.description}
              </p>
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                {project?.design?.mechanicalSubsystem?.items.map(
                  (item, index) => {
                    return (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="flex flex-col gap-2 justify-start w-1/3"
                      >
                        <h3 className="subHeader lg:!text-2xl uppercase">
                          {item.name}
                        </h3>
                        <ul>
                          {item.bullets.map((bullet, index) => (
                            <motion.li
                              key={index}
                              className="flex flex-row gap-2"
                            >
                              <p className="description justify-start text-custom-rhino mb-auto">
                                {`${index + 1}. `}
                              </p>
                              <p className="description w-full text-custom-rhino my-auto">
                                {bullet}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* electrical power subsystem design */}
        {project?.design?.electricalPowerSubsystem.show && (
          <motion.section
            className="section-container !h-auto !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !flex-col gap-3 !justify-center"
            >
              <h2 className="header">Electrical Power Subsystem Design</h2>
              <motion.div
                variants={fadeIn}
                className="flex flex-col md:flex-row justify-between gap-5"
              >
                <ul className="my-auto">
                  {project?.design?.electricalPowerSubsystem.bullets.map(
                    (bullet, index) => (
                      <motion.li key={index} className="flex flex-row gap-2">
                        <p className="description justify-start text-custom-rhino mb-auto">
                          {`${index + 1}. `}
                        </p>
                        <p className="description w-full text-custom-rhino my-auto">
                          {bullet}
                        </p>
                      </motion.li>
                    )
                  )}
                </ul>
                <motion.div variants={fadeIn} className="flex flex-col gap-2">
                  <Image
                    src={project?.design?.electricalPowerSubsystem.image}
                    width={800}
                    height={400}
                    alt="electrical power subsystem image"
                    className="w-full"
                  />
                  <p className="description text-custom-rhino italic text-center mt-3">
                    {project?.design?.electricalPowerSubsystem?.caption}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* flight software design */}
        {project?.design?.flightSoftware.show && (
          <motion.section
            className="section-container !h-auto !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !flex-col gap-3 !justify-center"
            >
              <h2 className="header">Flight Software Design</h2>
              <motion.div
                variants={fadeIn}
                className="flex flex-col md:flex-row justify-between gap-5"
              >
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col gap-2 w-full md:w-1/3"
                >
                  <Image
                    src={project?.design?.flightSoftware.image}
                    width={800}
                    height={400}
                    alt="flight image"
                    className="w-full"
                  />
                  <p className="description text-custom-rhino italic text-center mt-3">
                    {project?.design?.electricalPowerSubsystem?.caption}
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="flex flex-col gap-8 w-full md:w-2/3"
                >
                  {project?.design?.flightSoftware?.items.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="flex flex-col"
                      >
                        <h3 className="subHeader lg:!text-2xl uppercase">
                          {item.name}
                        </h3>
                        <ul className="">
                          {project?.design?.electricalPowerSubsystem.bullets.map(
                            (bullet, index) => (
                              <motion.li key={index} className="flex flex-row">
                                <p className="description justify-start text-custom-rhino mb-auto">
                                  {`${index + 1}. `}
                                </p>
                                <p className="description w-full text-custom-rhino my-auto">
                                  {bullet}
                                </p>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* ground control system design */}
        {project?.design?.groundControlSystem.show && (
          <motion.section
            className="section-container !h-auto !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !flex-col gap-3 !justify-center"
            >
              <h2 className="header">Ground Control System Design</h2>
              <motion.div
                variants={fadeIn}
                className="flex flex-col md:flex-row gap-5 justify-between"
              >
                <Image
                  src={project?.design?.groundControlSystem.leftImage}
                  width={800}
                  height={400}
                  alt="ground control system image"
                  className="w-full"
                />
                <Image
                  src={project?.design?.groundControlSystem.rightImage}
                  width={800}
                  height={400}
                  alt="ground control system design image"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* posters */}
        {project?.posters.fall || project?.posters.winter && (
          <motion.section
            className="section-container min-h-screen !bg-custom-white my-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="text-container !min-h-screen !flex-col !justify-center"
            >
              <h2 className="header">Posters</h2>
              <motion.div
                variants={fadeIn}
                className="flex flex-col md:flex-row justify-between gap-5"
              >
                {project?.posters?.fall && (
                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col gap-2 w-full md:w-1/2"
                  >
                    <h3 className="subHeader uppercase">Fall Design Review</h3>
                    <Image
                      src={project?.posters?.fall}
                      width={500}
                      height={600}
                      alt="fall review poster"
                      className="w-full"
                    />
                  </motion.div>
                )}
                {project?.posters?.winter && (
                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col gap-2 w-full md:w-1/2"
                  >
                    <h3 className="subHeader uppercase">Winter Design Review</h3>
                    <Image
                      src={project?.posters?.winter}
                      width={500}
                      height={600}
                      alt="winter review poster"
                      className="w-full"
                    />
                  </motion.div>
                )}
                {project?.posters?.spring && (
                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col gap-2 w-full md:w-1/2"
                  >
                    <h3 className="subHeader uppercase">
                      Spring Design Review
                    </h3>
                    <Image
                      src={project?.posters?.spring}
                      width={500}
                      height={600}
                      alt="spring review poster"
                      className="w-full"
                    />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        <Footer />
        <MobileFooter />
      </main>
    </>
  );
};

export default ProjectYearPage;
