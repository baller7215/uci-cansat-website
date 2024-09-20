import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import SubscribeForm from "@/components/shared/SubscribeForm";

const Join = () => {

    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="sponsors" title="Join Us" background="./assets/images/home-alt.jpg" />

                {/* applications are closed */}
                <section className="section-container !bg-custom-black" id="overview">
                    <div className="text-container !flex-col !justify-center !gap-10">
                        <h2 className="header leading-[60px] text-center">2024 - 2025 Applications Are Now Closed</h2>

                        <div className="flex flex-row gap-10">
                            {/* left */}
                            <div className="leftText w-1/2 h-full gap-3">
                                <p className="description text-custom-white whitespace-pre-wrap">
                                    Unfortunately applications for the 2024 - 2025 year have closed. If you would like to learn more about the application process and the competition itself, we encourage you to visit the competition website at 

                                    <Button variant="link" className="!description !text-custom-orange !p-0 !m-0 !text-2xl underline underline-offset-8">
                                        <Link href='https://www.cansatcompetition.com/' target="_blank">www.cansat.competition.com</Link>
                                    </Button>

                                    . In addition, feel free to email us at 
                                    <Button variant="link" className="!description !text-custom-orange !p-0 !m-0 !text-2xl underline underline-offset-">
                                        <Link href="mailto:cansatuci@gmail.com" target="_blank">cansatuci@gmail.com</Link>
                                    </Button>

                                    . We are excited to welcome new brilliant minds onto our team and hope you apply.
                                </p>
                                <p className="description text-custom-white whitespace-pre-wrap mt-2">
                                    Feel free to sign up to our newsletter to get first hand information on what we have been working on and when new application spots open!
                                </p>
                            </div>

                            {/* right - email newsletter form */}
                            <div className="rightForm w-1/2 h-full flex flex-col items-center justify-center bg-custom-white p-20 rounded-lg shadow-lg">
                                <h3 className="text-custom-orange text-5xl font-bold mb-4">Join Our Newsletter</h3>

                                <SubscribeForm />

                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default Join;