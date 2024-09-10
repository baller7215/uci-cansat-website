import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

const Projects = async () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="team" title="Projects" subtitle="2024 - 2025" background="./assets/images/starfield.png" />


                <Footer />
            </main>
        </>
    );
};

export default Projects;