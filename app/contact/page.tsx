import Header from "../components/header/page";
import ContactLabel from "../components/Contact/contact_label";
import ContactUs from "../components/Contact/contact_us";
import Map from "../components/Contact/map";
import Footer from "../components/footer/page";

export default function Contact() {
    return (
        <div>
            <Header />
            <ContactLabel />
            <ContactUs />
            <Map />
            <Footer />
        </div>
    );
}