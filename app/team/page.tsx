import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

const Team = async () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="team" title="The Team" background="./assets/images/starfield.png" />


                <Footer />
            </main>
        </>
    );
};

export default Team;