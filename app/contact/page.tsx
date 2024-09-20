import CoverPage from "@/components/shared/CoverPage";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/shared/ContactForm";

const Contact = async () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="contact" title="Contact Us" background="./assets/images/home-alt.jpg" />

                {/* contact form */}
                <section className="section-container !bg-custom-lightBlack">
                    <div className="text-container !flex-col text-center !justify-center !p-60">
                        <h2 className="header !m-0">We are excited to hear from you!</h2>
                        <p className="description text-custom-white">Please don’t hesitate to leave a message with any questions, concerns, or feedback you have!
                            <br></br>*If this message concerns sponsorship for UCI CanSat, please input your company&apos;s website and name, if applicable.</p>
                        <ContactForm />
                    </div>
                </section>


                <Footer />
            </main>
        </>
    );
};

export default Contact;