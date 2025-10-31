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

            {/* Sezione Servizi*/}
            <ServicesSection />

            {/* Sezione Chi siamo */}
            <AboutUs />

            {/* Sezione Contatti */}
            <article
                className="py-16"
                id="contacts"
            >
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
            {/* Schema Markup per Local Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "DentalClinic",
                        name: "Studio Dentistico Fanelli",
                        image: "https://www.studiodentisticofanelli.it/logo.jpg",
                        description:
                            "Studio dentistico a Foggia specializzato in implantologia, ortodonzia e cure dentali professionali. Esperienza dal 1985.",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Via Roma 123",
                            addressLocality: "Foggia",
                            addressRegion: "Puglia",
                            postalCode: "71100",
                            addressCountry: "IT",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 41.4621,
                            longitude: 15.5444,
                        },
                        telephone: "+390881234567",
                        url: "https://www.studiodentisticofanelli.it",
                        email: "info@studiodentisticofanelli.it",
                        priceRange: "€€",
                        openingHoursSpecification: [
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                ],
                                opens: "09:00",
                                closes: "18:00",
                            },
                        ],
                        sameAs: [
                            "https://www.facebook.com/studiodentisticofanelli",
                            "https://www.instagram.com/studiodentisticofanelli",
                        ],
                        medicalSpecialty: [
                            "Dentistry",
                            "Oral Surgery",
                            "Orthodontics",
                            "Dental Implants",
                        ],
                        areaServed: {
                            "@type": "City",
                            name: "Foggia",
                        },
                    }),
                }}
            />
        </div>
    );
}
