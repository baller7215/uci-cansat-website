import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

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
          <div className="flex flex-row h-full w-full inset-x-0 top-0 absolute bg-gradient-to-b from-white/0 to-black/100 p-40 justify-between gap-5">
            
            {/* left */}
            <div className="home-left text-[var(--color-white)] w-1/2 tracking-normal">
              <h2 className="capitalize text-[64px] font-bold leading-[62px]">Who We Are</h2>
              <h5 className="font-medium text-[40px] leading-[44px] my-10 mb-14 text-pretty">We are UCI CanSat, an undergraduate project in the MAE department. Our team competes in the CanSat competition, an annual, international engineering challenge to design and build a space-type system.</h5>
              <div className="flex flex-row gap-5">
                <Button asChild variant="link" className="text-[var(--color-white)] font-bold text-[40px] tracking-normal capitalize p-0">
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
            <div className="home-right">
              <Image src='/assets/icons/cansat.png' alt="cansat logo" width={700} height={700} className="m-auto"/>
            </div>
          </div>
        </section>

        <section className="relative bg-[var(--color-black)] w-full h-auto">
          <div className="flex flex-row p-40 w-full h-auto justify-between">

            {/* left */}
            <div className="home-left">
              <h2 className="capitalize text-[64px] font-bold leading-[62px]">Join Our Team</h2>
              {/* TODO: UPDATE DESCRIPTION */}
              <p className="text-[var(--color-whiteIce)] font-normal text-[18px] h-[100px] my-5">description of why you should join us and who we are looking for</p>  

              <div className="flex flex-row gap-5">
                <Button asChild variant='default' className="capitalize rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-medium text-[18px] px-20 py-5">
                  <Link href='/join'>Join Us Now</Link>
                </Button>

                <Button asChild variant='ghost' className="capitalize rounded-full text-[var(--color-orange)] font-medium text-[18px] px-10 py-5">
                  <Link href='/contact'>Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* right */}
            <div className="home-right">
              <div className="h-[350px] w-[600px] bg-[var(--color-orange)] rounded-xl">
                <div></div>
              </div>
            </div>
            
          </div>
        </section>

      </main>

      <Footer></Footer>
    </>
  );
}
