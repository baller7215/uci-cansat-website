
import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import SubscribeForm from "@/components/shared/SubscribeForm";
import { electricalPathway, faq, generalPathway, mechanicalPathway, operationsPathway, softwarePathway, webDevPathway } from "@/constants";
import Testimonial from "@/components/shared/Testimonial";
import SubteamInfo from "@/components/shared/SubteamInfo";
import CustomAccordion from "@/components/shared/Accordion";
import MobileFooter from "@/components/shared/MobileFooter";
// import Image from "next/image";

const Join = () => {

    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="join" title="Join Us" background="../assets/images/competiton-photos/launch3.jpg" />

                {/* internship opportunity */}
                {/* <section className="section-container !bg-custom-black !border-custom-white" id="internship">
                    <div className="text-container !flex-col !justify-center">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="leftText w-full md:w-3/4 gap-3">
                                <h2 className="header">Fall 2024 Internship Recruitment!</h2>
                                <p className="description text-custom-gray">
                                    We&apos;re looking for highly motivated and engaged interns to join the UCI CanSat team. If you&apos;re a <span className="text-custom-orange transition ease-in-out hover:underline">freshman</span> or <span className="text-custom-orange transition ease-in-out hover:underline">transfer student</span> interested in learning more about engineering at UCI, this is the place for you!
                                    <br></br><br></br>
                                    This application will officially close Friday, October 11th, but will be reviewed on a rolling basis.
                                    <br></br><br></br>
                                    Thank you for your interest in UCI CanSat!
                                </p>
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

                        <div className="flex flex-col gap-10">
                            <p className="description text-custom-gray">Interns will shadow our Mechanical or Electrical subteam, with the responsibilities displayed below:</p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-20">
                                {internshipInfo.responsibilities.map((responsibility) => {
                                    return (
                                        <div key={responsibility.title} className="w-full h-ful flex flex-col gap-3 transition ease-in-out hover:scale-110">
                                            <h3 className="font-bold text-base leading-6 tracking-wide text-custom-gray uppercase">{responsibility.title}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                        <div>
                            <Button asChild variant='default' className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-10 md:px-20 py-3 md:py-5">
                                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdEn-LXCAi8nY6t-NdRtl_JRpVdoEVT95m5nBaLwtzB1yZYyg/viewform' target="_blank">Apply Now</Link>
                            </Button>
                        </div>
                    </div>
                </section> */}

                {/* applications are closed */}
                <section className="section-container !bg-custom-black" id="overview">
                    <div className="text-container !flex-col !justify-center !gap-10">
                        <h2 className="header leading-[60px] text-center">2024 - 2025 Applications Are Now Closed</h2>

                        <div className="flex flex-col md:flex-row gap-10">
                            {/* left */}
                            <div className="leftText w-full md:w-1/2 h-full gap-3">
                                <p className="description text-custom-white whitespace-pre-wrap">
                                    Unfortunately applications for the 2024 - 2025 year have closed. If you would like to learn more about the application process and the competition itself, we encourage you to visit the competition website at 

                                    <Button variant="link" className="!description !text-custom-orange !p-0 !m-0 underline underline-offset-8">
                                        <Link className="description" href='https://www.cansatcompetition.com/' target="_blank">www.cansat.competition.com</Link>
                                    </Button>

                                    . In addition, feel free to email us at 
                                    <Button variant="link" className="!description !text-custom-orange !p-0 !m-0 underline underline-offset-">
                                        <Link className="description" href="mailto:cansatuci@gmail.com" target="_blank">cansatuci@gmail.com</Link>
                                    </Button>

                                    . We are excited to welcome new brilliant minds onto our team and hope you apply.
                                </p>
                                <p className="description text-custom-white whitespace-pre-wrap mt-2">
                                    Feel free to sign up to our newsletter to get first hand information on what we have been working on and when new application spots open!
                                </p>
                            </div>

                            {/* right - email newsletter form */}
                            <div className="rightForm w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-custom-white p-5 md:p-20 rounded-lg shadow-lg">
                                <h3 className="header !text-3xl !md:text-5xl text-center w-full">Join Our Newsletter</h3>

                                <SubscribeForm />

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
                                <h2 className="tableTitle uppercase">General Info For All Applicants</h2>
                                <ul className="list-disc pl-8">
                                    {generalPathway.info.map((point) => {
                                        return (
                                            <li key={point.title} className="description font-thin text-custom-rhino mb-2">
                                                {point.title &&
                                                    <span className="font-bold">{point.title}: </span>
                                                }
                                                {point.description}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            {/* right (general requirements) */}
                            <div className="leftText !justify-start w-full md:w-1/2 text-left !gap-5">
                                <h2 className="tableTitle uppercase">General Requirements</h2>
                                <ul className="list-disc pl-8">
                                    {generalPathway.requirements.map((point) => {
                                        return (
                                            <li key={point.title} className="description font-thin text-custom-rhino mb-2">
                                                {point.title &&
                                                    <span className="font-bold">{point.title}: </span>
                                                }
                                                {point.description}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* mechanical pathway */}
                <section className="section-container">
                    <div className="text-container p-5 md:!p-28 !gap-16">
                        <Testimonial name={mechanicalPathway.testimonial.name} year={mechanicalPathway.testimonial.year} role={mechanicalPathway.testimonial.role} quote={mechanicalPathway.testimonial.quote} />
                        <SubteamInfo subteam="Mechanical" responsibilities={mechanicalPathway.responsibilities} requirements={mechanicalPathway.requirements} />
                    </div>
                </section>

                {/* electrical pathway */}
                <section className="section-container">
                    <div className="text-container p-5 md:!p-28 !gap-16">
                        <SubteamInfo subteam="Electrical" responsibilities={electricalPathway.responsibilities} requirements={electricalPathway.requirements} />
                        <Testimonial name={electricalPathway.testimonial.name} year={electricalPathway.testimonial.year} role={electricalPathway.testimonial.role} quote={electricalPathway.testimonial.quote} />
                    </div>
                </section>

                {/* software pathway */}
                <section className="section-container">
                    <div className="text-container p-5 md:!p-28 !gap-16">
                        <Testimonial name={softwarePathway.testimonial.name} year={softwarePathway.testimonial.year} role={softwarePathway.testimonial.role} quote={softwarePathway.testimonial.quote} />
                        <SubteamInfo subteam="Embedded Software" responsibilities={softwarePathway.responsibilities} requirements={softwarePathway.requirements} />
                    </div>
                </section>

                {/* operations pathway */}
                <section className="section-container">
                    <div className="text-container p-5 md:!p-28 !gap-16">
                        <SubteamInfo subteam="Operations" responsibilities={operationsPathway.responsibilities} requirements={operationsPathway.requirements} />
                        <Testimonial name={operationsPathway.testimonial.name} year={operationsPathway.testimonial.year} role={operationsPathway.testimonial.role} quote={operationsPathway.testimonial.quote} />
                    </div>
                </section>

                {/* web development pathway */}
                <section className="section-container">
                    <div className="text-container p-5 md:!p-28 !gap-16">
                        <Testimonial name={webDevPathway.testimonial.name} year={webDevPathway.testimonial.year} role={webDevPathway.testimonial.role} quote={webDevPathway.testimonial.quote} />
                        <SubteamInfo subteam="Web Development" responsibilities={webDevPathway.responsibilities} requirements={webDevPathway.requirements} />
                    </div>
                </section>

                {/* frequently asked questions */}
                <section className="section-container !h-auto">
                    <div className="text-container !flex-col !justify-center !gap-0">
                        <h2 className="header capitalize !m-0">Frequently Asked Questions</h2>
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