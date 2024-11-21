'use client'

import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/shared/ContactForm";
import MobileFooter from "@/components/shared/MobileFooter";
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
  
const staggerContainer = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.3,
    },
},
};

const Contact = () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="contact" title="Contact Us" background="../assets/images/competiton-photos/launch3.jpg" />

                {/* contact form */}
                <motion.section
                    id="overview"
                    className="section-container !h-auto !bg-custom-lightBlack"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="text-container !h-auto !flex-col text-center !justify-center p-10 md:!p-60 py-5 md:!py-20" id="overview"
                        variants={fadeIn}
                    >
                        <h2 className="header !m-0">We are excited to hear from you!</h2>
                        <p className="description text-custom-white">Please don’t hesitate to leave a message with any questions, concerns, or feedback you have!
                            <br></br>*If this message concerns sponsorship for UCI CanSat, please input your company&apos;s website and name, if applicable.</p>
                        <ContactForm />
                    </motion.div>
                </motion.section>


                <Footer />
                <MobileFooter />
            </main>
        </>
    );
};

export default Contact;