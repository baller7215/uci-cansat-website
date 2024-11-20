import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/shared/ContactForm";
import MobileFooter from "@/components/shared/MobileFooter";

const Contact = async () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="contact" title="Contact Us" background="../assets/images/competiton-photos/launch3.jpg" />

                {/* contact form */}
                <section className="section-container !h-auto !bg-custom-lightBlack">
                    <div className="text-container !h-auto !flex-col text-center !justify-center p-10 md:!p-60 py-5 md:!py-20" id="overview">
                        <h2 className="header !m-0">We are excited to hear from you!</h2>
                        <p className="description text-custom-white">Please don’t hesitate to leave a message with any questions, concerns, or feedback you have!
                            <br></br>*If this message concerns sponsorship for UCI CanSat, please input your company&apos;s website and name, if applicable.</p>
                        <ContactForm />
                    </div>
                </section>


                <Footer />
                <MobileFooter />
            </main>
        </>
    );
};

export default Contact;