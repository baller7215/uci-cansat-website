import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import MobileFooter from "@/components/shared/MobileFooter";

export default function Home() {
  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage page="home" title="Design. Build. Launch. Compete." subtitle="Elevate Your Engineering Skills" background="./assets/images/home-cover.jpg" />

        {/* who we are */}
        <section className="relative" id="overview">
          {/* background image */}
          <div className='h-screen w-full flex home-sectionBackground' ></div>
          {/* gradient */}
          <div className="flex flex-col md:flex-row h-full w-full inset-x-0 top-0 absolute bg-gradient-to-b from-white/0 to-black/100 p-10 md:p-40 justify-between gap-5">
            
            {/* left */}
            <div className="home-left text-[var(--color-white)] w-full md:w-1/2 tracking-normal">
              <h2 className="capitalize text-[40px] md:text-[64px] font-bold leading-[48px] md:leading-[62px]">Who We Are</h2>
              <h5 className="font-medium text-xl md:text-2xl lg:text-3xl leading-[30px] md:leading-[44px] my-5 md:my-10 mb-7 md:mb-14 text-pretty">We are UCI CanSat, an undergraduate project in the MAE department. Our team competes in the CanSat competition, an annual, international engineering challenge to design and build a space-type system.</h5>
              <div className="flex flex-row gap-5">
                <Button asChild variant="link" className="text-[var(--color-white)] font-bold text-[20px] md:text-[40px] tracking-normal capitalize p-0">
                  <Link href='/about'>
                    Learn More
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-[var(--color-orange)] rounded-full">
                  <Link href='/about'>
                    <ArrowUpRightIcon className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* right */}
            <div className="home-right w-full md:w-1/2">
              <Image src='/assets/icons/cansat.png' alt="cansat logo" width={700} height={700} className="m-auto" />
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="relative bg-[var(--color-black)] w-full h-auto">
          <div className="flex flex-col lg:flex-row p-10 md:p-20 lg:p-40 w-full h-auto justify-between items-center gap-10 lg:gap-0">

            {/* left */}
            <div className="home-left w-full md:w-3/4">
              <div className="flex flex-col gap-2 h-auto">
                <h2 className="capitalize text-[40px] md:text-[64px] font-bold leading-[48px] md:leading-[62px]">Join Our Team</h2>
                <p className="text-[var(--color-whiteIce)] font-normal text-[16px] md:text-[18px] h-auto lg:h-[100px] my-5">Unfortunately, we are no longer looking for applicants for the 2024 - 2025 school year. Recruitment typically occurs during the spring quarter so check back soon! Don&apos;t hesitate to explore our website and learn more about what we do and what positions we offer.</p>
              </div>


              <div className="flex flex-col md:flex-row gap-5">
                <Button asChild variant='default' className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-10 md:px-20 py-3 md:py-5">
                  <Link href='/join'>Join Us Now</Link>
                </Button>

                <Button asChild variant='ghost' className="capitalize rounded-full text-[var(--color-orange)] font-medium text-[16px] md:text-[18px] px-10 py-3 md:py-5">
                  <Link href='/contact'>Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* right */}
            <div className="home-right mt-10 md:mt-0 w-full md:w-1/4 !h-auto">
              {/* <div className="h-[300px] md:h-[350px] w-full md:w-[600px] bg-[var(--color-orange)] rounded-xl"></div> */}
              <Image
                  src='/assets/images/components/sicko_mode.jpg'
                  alt="uci breadboard"
                  width={400}
                  height={400}
                  className="my-auto rounded-xl"
              />
            </div>
            
          </div>
        </section>

        {/* internship apps are open section */}
        <section className="relative bg-custom-rhino w-full h-auto text-center">
          <div className="absolute inset-0 bg-internAd bg-cover bg-center opacity-30 z-0"></div>
          <div className="relative z-10 flex flex-col p-10 md:p-40 w-full h-auto justify-between gap-5">
            <h4 className="uppercase text-custom-orange text-xs md:text-sm tracking-wider font-bold">Mentorship Opportunity</h4>
            <h2 className="capitalize text-custom-white text-4xl md:text-6xl font-bold">UCI CanSat Student Interns Wanted</h2>
            <p className="text-custom-white text-md md:text-lg font-medium">Are you a freshman or transfer student eager to dive into engineering? The UCI CanSat team is looking for motivated interns to observe, learn, and contribute to an exciting and competitive aerospace project. Gain hands-on experience with 3D printing and soldering, understand the inner workings of our Mechanical and Electrical subteams, and be part of a team that designs, builds, and competes in a global competition.</p>

            <div className="flex flex-col md:flex-row gap-5 mx-auto">
              <Button asChild variant='default' className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[16px] md:text-[18px] px-10 md:px-20 py-3 md:py-5">
                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdEn-LXCAi8nY6t-NdRtl_JRpVdoEVT95m5nBaLwtzB1yZYyg/viewform' target="_blank">Apply Now</Link>
              </Button>

              <Button asChild variant='ghost' className="capitalize rounded-full text-[var(--color-orange)] font-medium text-[16px] md:text-[18px] px-10 py-3 md:py-5">
                <Link href='/join#internship'>Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileFooter />
    </>
  );
}
