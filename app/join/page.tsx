import CoverPage from "@/components/shared/CoverPage";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import {
  electricalPathway,
  faq,
  generalPathway,
  mechanicalPathway,
  operationsPathway,
  softwarePathway,
  webDevPathway,
} from "@/constants";
import SubteamInfo from "@/components/shared/SubteamInfo";
import CustomAccordion from "@/components/shared/Accordion";
import MobileFooter from "@/components/shared/MobileFooter";
import Image from "next/image";

const Join = () => {
  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage
          page="join"
          title="Join Us"
          background="../assets/images/competiton-photos/launch3.jpg"
        />

        {/* recruitment status */}
        <section
          className="section-container section-dark !border-custom-white"
          id="internship"
        >
          <div className="text-container !flex-col !justify-center">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="leftText w-full md:w-3/4 gap-3">
                <h2 className="header">Recruitment Is Currently Closed</h2>
                <p className="description !text-custom-whiteIce">
                  Thank you for your interest in joining the{" "}
                  <Link
                    href="https://www.cansatuci.com/"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    UCI CanSat team
                  </Link>
                  . Applications for the 2025–2026 team are not open at this
                  time. We will update this page when recruitment opens again.
                  <br />
                  <br />
                  The UCI CanSat team is a senior design project team that
                  competes in the{" "}
                  <Link
                    href="https://cansatcompetition.com/"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    international CanSat Competition
                  </Link>
                  , an engineering competition hosted by the American
                  Astronautical Society. Each year, we design, manufacture, and
                  launch a satellite payload model called a CanSat.
                  <br />
                  <br />
                  If you would like to learn more about the competition, visit{" "}
                  <Link
                    href="https://www.cansatcompetition.com/"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    www.cansatcompetition.com
                  </Link>
                  . For questions, email us at{" "}
                  <Link
                    href="mailto:cansatuci@gmail.com"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    cansatuci@gmail.com
                  </Link>
                  .
                </p>
              </div>
              <div className="rightImage">
                <Image
                  src="/assets/icons/logo.png"
                  alt="uci cansat logo"
                  width={250}
                  height={250}
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* pathway and requirements */}
        <section className="section-container">
          <div className="text-container !flex-col !justify-center gap-10">
            <h2 className="header">Pathway and Requirements</h2>
            <div className="flex flex-col md:flex-row gap-5">
              {/* left (general info) */}
              <div className="leftText !justify-start w-full md:w-1/2 text-left !gap-5">
                <h2 className="tableTitle uppercase">
                  General Info For All Applicants
                </h2>
                <ul className="list-disc pl-8">
                  {generalPathway.info.map((point) => {
                    return (
                      <li
                        key={point.title}
                        className="description font-thin text-custom-rhino mb-2"
                      >
                        {point.title && (
                          <span className="font-bold">{point.title}: </span>
                        )}
                        {point.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* right (general requirements) */}
              <div className="leftText !justify-start w-full md:w-1/2 text-left !gap-5">
                <h2 className="tableTitle uppercase">General Requirements</h2>
                <ul className="list-disc pl-8">
                  {generalPathway.requirements.map((point) => {
                    return (
                      <li
                        key={point.title}
                        className="description font-thin text-custom-rhino mb-2"
                      >
                        {point.title && (
                          <span className="font-bold">{point.title}: </span>
                        )}
                        {point.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* mechanical pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28">
            <SubteamInfo
              subteam="Mechanical"
              responsibilities={mechanicalPathway.responsibilities}
              requirements={mechanicalPathway.requirements}
            />
          </div>
        </section>

        {/* electrical pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28">
            <SubteamInfo
              subteam="Electrical"
              responsibilities={electricalPathway.responsibilities}
              requirements={electricalPathway.requirements}
            />
          </div>
        </section>

        {/* software pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28">
            <SubteamInfo
              subteam="Embedded Software"
              responsibilities={softwarePathway.responsibilities}
              requirements={softwarePathway.requirements}
            />
          </div>
        </section>

        {/* operations pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28">
            <SubteamInfo
              subteam="Operations"
              responsibilities={operationsPathway.responsibilities}
              requirements={operationsPathway.requirements}
            />
          </div>
        </section>

        {/* web development pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28">
            <SubteamInfo
              subteam="Web Development"
              responsibilities={webDevPathway.responsibilities}
              requirements={webDevPathway.requirements}
            />
          </div>
        </section>

        {/* frequently asked questions */}
        <section className="section-container !h-auto">
          <div className="text-container !flex-col !justify-center !gap-0">
            <h2 className="header capitalize !m-0">
              Frequently Asked Questions
            </h2>
            <CustomAccordion accordionItems={faq} />
          </div>
        </section>

        <Footer />
        <MobileFooter />
      </main>
    </>
  );
};

export default Join;
