import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
// import SubscribeForm from "@/components/shared/SubscribeForm";
import {
  electricalPathway,
  faq,
  generalPathway,
  // internshipInfo,
  mechanicalPathway,
  operationsPathway,
  recruitmentJoinUs,
  softwarePathway,
  webDevPathway,
} from "@/constants";
import Testimonial from "@/components/shared/Testimonial";
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

        {/* internship opportunity */}
        <section
          className="section-container !bg-custom-black !border-custom-white"
          id="internship"
        >
          <div className="text-container !flex-col !justify-center">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="leftText w-full md:w-3/4 gap-3">
                <h2 className="header">2025-2026 Team Recruitment!</h2>
                <p className="description text-custom-gray">
                  We&apos;re looking to fill{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    Mechanical Engineer
                  </span>
                  ,{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    Electrical Engineer
                  </span>
                  , and{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    Embedded Software Engineer
                  </span>{" "}
                  positions.

                  <br></br>
                  <br></br>

                  The{" "}
                  <Link
                    href="https://www.cansatuci.com/"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    UCI CanSat team
                  </Link>{" "}
                  is a senior design project team that competes in the{" "}
                  <Link
                    href="https://cansatcompetition.com/"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    international CanSat Competition
                  </Link>,{" "}
                  an engineering competition hosted by the American Astronautical Society. Each year, we{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    design
                  </span>,{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    manufacture
                  </span>, and{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    launch
                  </span>{" "}
                  a satellite payload model called a CanSat, which must meet a set of mission objectives and requirements set by the competition.

                  <br></br>
                  <br></br>

                  We are a high-performance team, placing 4th internationally and 2nd domestically in last
                  year&apos;s competition and receiving Dean&apos;s Choice Award in 2022 and 2025. We have also secured
                  sponsorships and mentorships from large companies such as Blue Origin.

                  <br></br>
                  <br></br>

                  Please follow this{" "}
                  <Link
                    href="https://forms.gle/fAQQRGMpHUvPafxH8"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    link
                  </Link>{" "}
                  for more information about our team, open roles, and application requirements.

                  <br></br>
                  <br></br>

                  The application can be found{" "}
                  <Link
                    href="https://forms.gle/fAQQRGMpHUvPafxH8"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    here
                  </Link>.{" "}
                  It will officially close on{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                    Friday, May 9 at 11:59PM
                  </span>,{" "}
                  but will be
                  reviewed on a rolling basis (this means that{" "}
                  <span className="text-custom-orange text-opacity-75 transition ease-in-out hover:underline">
                  all open positions may be filled before the
                  deadline
                  </span>{" "}
                  —apply early!).

                  <br></br>
                  <br></br>

                  Feel free to email{" "}
                  <Link
                    href="mailto:cansatuci@gmail.com"
                    target="_blank"
                    className="text-custom-orange transition ease-in-out hover:underline"
                  >
                    cansatuci@gmail.com
                  </Link>{" "}
                  with any questions, and we look forward to receiving your applications!
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

            <hr className="my-5" />

            <div className="flex flex-col gap-10">
              <p className="description text-custom-gray">
                Why Join Us?
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-20">
              {recruitmentJoinUs.map((reason, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-ful flex flex-col gap-3 transition ease-in-out hover:scale-110"
                  >
                    <h3 className="font-bold text-base leading-6 tracking-wide text-custom-gray uppercase">
                      {reason}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                asChild
                variant="default"
                className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-10 md:px-20 py-3 md:py-5"
              >
                <Link
                  href="https://forms.gle/fAQQRGMpHUvPafxH8"
                  target="_blank"
                >
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* applications are closed */}
        {/* <section className="section-container !bg-custom-black" id="overview">
          <div className="text-container md:!min-h-screen md:!h-auto !flex-col !justify-center !gap-10">
            <h2 className="header leading-[60px] text-center">
              2025 - 2026 Applications Are Now Open
            </h2>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="leftText w-full md:w-1/2 h-full gap-3">
                <p className="description text-custom-white whitespace-pre-wrap">
                  Unfortunately applications for the 2024 - 2025 year have
                  closed. If you would like to learn more about the application
                  process and the competition itself, we encourage you to visit
                  the competition website at 
                  <Button
                    variant="link"
                    className="!description !text-custom-orange !p-0 !m-0 underline underline-offset-8"
                  >
                    <Link
                      className="description"
                      href="https://www.cansatcompetition.com/"
                      target="_blank"
                    >
                      www.cansatcompetition.com
                    </Link>
                  </Button>
                  . In addition, feel free to email us at 
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
                  . We are excited to welcome new brilliant minds onto our team
                  and hope you apply.
                </p>
                <p className="description text-custom-white whitespace-pre-wrap mt-2">
                  Feel free to sign up to our newsletter to get first hand
                  information on what we have been working on and when new
                  application spots open!
                </p>
              </div>

              <div className="rightForm w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-custom-white p-5 md:p-20 rounded-lg shadow-lg">
                <h3 className="header !text-3xl !md:text-5xl text-center w-full">
                  Join Our Newsletter
                </h3>

                <SubscribeForm />
              </div>
            </div>
          </div>
        </section> */}

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
          <div className="text-container p-5 md:!p-28 !gap-16">
            <Testimonial
              name={mechanicalPathway.testimonial.name}
              role={mechanicalPathway.testimonial.role}
              quote={mechanicalPathway.testimonial.quote}
              image={mechanicalPathway.testimonial.image}
            />
            <SubteamInfo
              subteam="Mechanical"
              responsibilities={mechanicalPathway.responsibilities}
              requirements={mechanicalPathway.requirements}
            />
          </div>
        </section>

        {/* electrical pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28 !gap-16">
            <SubteamInfo
              subteam="Electrical"
              responsibilities={electricalPathway.responsibilities}
              requirements={electricalPathway.requirements}
            />
            <Testimonial
              name={electricalPathway.testimonial.name}
              role={electricalPathway.testimonial.role}
              quote={electricalPathway.testimonial.quote}
              image={electricalPathway.testimonial.image}
            />
          </div>
        </section>

        {/* software pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28 !gap-16">
            <Testimonial
              name={softwarePathway.testimonial.name}
              role={softwarePathway.testimonial.role}
              quote={softwarePathway.testimonial.quote}
              image={softwarePathway.testimonial.image}
            />
            <SubteamInfo
              subteam="Embedded Software"
              responsibilities={softwarePathway.responsibilities}
              requirements={softwarePathway.requirements}
            />
          </div>
        </section>

        {/* operations pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28 !gap-16">
            <SubteamInfo
              subteam="Operations"
              responsibilities={operationsPathway.responsibilities}
              requirements={operationsPathway.requirements}
            />
            <Testimonial
              name={operationsPathway.testimonial.name}
              role={operationsPathway.testimonial.role}
              quote={operationsPathway.testimonial.quote}
              image={operationsPathway.testimonial.image}
            />
          </div>
        </section>

        {/* web development pathway */}
        <section className="section-container">
          <div className="text-container p-5 md:!p-28 !gap-16">
            <Testimonial
              name={webDevPathway.testimonial.name}
              role={webDevPathway.testimonial.role}
              quote={webDevPathway.testimonial.quote}
              image={operationsPathway.testimonial.image}
            />
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
