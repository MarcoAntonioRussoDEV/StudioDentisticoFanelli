import Maps from "./components/Maps";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ChairSideSection from "./components/sections/ChairSideSection";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import AboutUs from "./components/sections/AboutUs";

export default function Home() {
    return (
        <div className=" bg-primary-100">
            {/* Hero Section */}
            <HeroSection />

            {/* Sezione ChairSide*/}
            <ChairSideSection />

            {/* Sezione Chi siamo */}
            <AboutUs />
            {/* Sezione Servizi*/}
            <ServicesSection />

            {/* Sezione Contatti */}
            <article className="py-16">
                <div className="container px-4 mx-auto flex flex-col gap-8 items-center">
                    <h2 className="text-6xl font-bold text-center">
                        Contattaci
                    </h2>
                    <p>
                        Siamo qui per prenderci cura del tuo sorriso. Prenota la
                        tua visita o contattaci per qualsiasi informazione.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
                        <section className="flex flex-col justify-between gap-8">
                            <Maps />
                            <Contacts />
                        </section>
                        <ContactForm />
                    </div>
                </div>
            </article>
        </div>
    );
}
