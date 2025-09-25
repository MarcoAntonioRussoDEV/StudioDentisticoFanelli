import Image from "next/image";
import Button from "./components/Button";
import { Circle, MapPin, Phone } from "lucide-react";
import ServicesCard from "./components/ServicesCard";
import IconBox from "./components/IconBox";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import { aboutStats } from "./lib/data/aboutStats";
import { contacts } from "./lib/data/contacts";
import { services } from "./lib/data/services";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
    return (
        <div className=" bg-primary-100">
            {/* Hero Section */}
            <HeroSection />

            {/* Sezione Servizi*/}
            <ServicesSection />

            {/* Sezione Chi siamo */}
            <article className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 container px-4 mx-auto bg-primary-100">
                <section className="flex flex-col gap-16 items-start">
                    <h2 className="text-6xl font-bold">Chi Siamo</h2>
                    <p className="text-2xl">
                        Il nostro studio dentistico è composto da un team di
                        professionisti altamente qualificati, pronti a prendersi
                        cura della tua salute orale con competenza e dedizione.
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-8 items-center">
                            <Circle
                                strokeWidth={4}
                                className="text-primary flex-shrink-0"
                            />
                            <div>
                                <h4 className="text-xl font-bold">
                                    Team Qualificato
                                </h4>
                                <p>
                                    Professionisti specializzati in costante
                                    aggiornamento.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-8 items-center">
                            <Circle
                                strokeWidth={4}
                                className="text-primary flex-shrink-0"
                            />
                            <div>
                                <h4 className="text-xl font-bold">
                                    Tecnologie Avanzate
                                </h4>
                                <p>
                                    Utilizziamo attrezzature
                                    all&apos;avanguardia per garantire diagnosi
                                    e trattamenti precisi.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-8 items-center">
                            <Circle
                                strokeWidth={4}
                                className="text-primary flex-shrink-0"
                            />
                            <div>
                                <h4 className="text-xl font-bold">
                                    Approccio Personalizzato
                                </h4>
                                <p>
                                    Ogni paziente è unico, e offriamo piani di
                                    trattamento su misura.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <Button variant={"accent"}>
                        <Phone size={20} /> Contattaci ora
                    </Button>
                </section>
                <section className="relative px-4 row-start-1 lg:col-start-2">
                    <Image
                        src="./images/francesco.jpg"
                        alt="Chi siamo Studio Dentistico Fanelli"
                        width={600}
                        height={400}
                        className="rounded-3xl"
                    />
                    <div className="absolute p-8 bg-white rounded-3xl shadow-xl -bottom-10 -left-10 flex-col items-center gap-4 hidden lg:flex">
                        <p className="text-primary text-4xl font-bold">
                            {new Date().getFullYear() - 1985 + "+"}
                        </p>
                        <p>Anni di Esperienza</p>
                    </div>
                </section>
            </article>
            <article className="container px-4 mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aboutStats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg flex flex-col gap-4 items-center justify-center aspect-square"
                        >
                            <IconBox Icon={stat.icon} />
                            <p className="text-4xl font-bold text-primary">
                                {stat.value}
                            </p>
                            <h3 className="text-xl font-semibold">
                                {stat.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </article>
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
                        <section className="rounded-xl overflow-hidden">
                            <Maps />
                        </section>
                        <section className="flex flex-col gap-8 justify-center">
                            {contacts.map((contact, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <contact.icon
                                        className="text-primary"
                                        size={24}
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            {contact.label}
                                        </p>
                                        <p>{contact.value}</p>
                                        <p className="text-sm text-gray-500">
                                            {contact.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </article>
            <Footer />
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
