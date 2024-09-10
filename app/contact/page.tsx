import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

const Contact = async () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="contact" title="Contact Us" background="./assets/images/home-alt.jpg" />


                <Footer />
            </main>
        </>
    );
};

export default Contact;