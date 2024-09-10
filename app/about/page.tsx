import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

const About = async () => {
  return (
    <>
      <main>
        {/* cover page */}
        <CoverPage page="about" title="About Us" background="./assets/images/starfield.png" />

      </main>

      <Footer />
    </>
  );
};

export default About;