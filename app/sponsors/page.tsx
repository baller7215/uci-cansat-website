import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

const Sponsors = async () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="sponsors" title="Sponsors" background="./assets/images/home-alt.jpg" />


                <Footer />
            </main>
        </>
    );
};

export default Sponsors;