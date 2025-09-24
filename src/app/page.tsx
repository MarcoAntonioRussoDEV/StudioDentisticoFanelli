import Image from "next/image";
import Button from "./components/Button";
import {
    Circle,
    Crown,
    FileQuestion,
    HeartHandshake,
    MapPin,
    Phone,
    RefreshCw,
    Shield,
    Smile,
    Sparkles,
} from "lucide-react";
import ServicesCard from "./components/ServicesCard";
import { Service } from "./model/Service";

export default function Home() {
    const services: Service[] = [
        {
            title: "Igiene e Prevenzione",
            description:
                "Pulizia professionale, sbiancamento e trattamenti preventivi per mantenere il sorriso sano.",
            Icon: Smile,
            solutions: [
                "Detartrasi",
                "Fluoroprofilassi",
                "Sbiancamento dentale",
                "Sigillature",
            ],
        },
        {
            title: "Protesi Dentarie",
            description:
                "Soluzioni personalizzate per la sostituzione dei denti mancanti, migliorando funzionalità ed estetica.",
            Icon: Crown,
            solutions: ["Corone", "Ponti", "Protesi mobili"],
        },
        {
            title: "Estetica Dentale",
            description:
                "Trattamenti per migliorare l'aspetto del sorriso, inclusi faccette e rimodellamento gengivale.",
            Icon: Sparkles,
            solutions: ["Faccette", "Sbiancamento", "Bonding"],
        },
        {
            title: "Ortodonzia",
            description:
                "Allineamento dei denti e correzione della mascella per un sorriso armonioso e funzionale.",
            Icon: RefreshCw,
            solutions: ["Apparecchi fissi", "Invisalign", "Bite"],
        },
        {
            title: "Implantologia",
            description:
                "Impianti dentali di ultima generazione per sostituire i denti mancanti.",
            Icon: HeartHandshake,
            solutions: ["Impianti singoli", "All-on-4", "Rigenerazione ossea"],
        },
        {
            title: "Conservativa",
            description:
                "Trattamenti per la cura delle carie e il ripristino della funzionalità dei denti.",
            Icon: Shield,
            solutions: ["Otturazioni", "Devitalizzazioni", "Ricostruzioni"],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="flex h-screen flex-col items-center justify-center relative  bg-primary-100">
                <Image
                    src={"/images/hero.jpg"}
                    alt="Studio Dentistico Fanelli immagine header"
                    fill
                    priority
                    className="object-cover"
                />
                <article className="absolute bg-primary/80 w-full h-full flex flex-col gap-8 justify-center text-white">
                    <section className="container mx-auto font-bold">
                        <h1 className="max-w-1/2 text-7xl opacity-100">
                            Studio Dentistico{" "}
                            <strong className="text-accent">Fanelli</strong>
                        </h1>
                        <p className="max-w-2/3 mt-4 text-2xl font-normal">
                            Studio dentistico moderno a Foggia. Offriamo cure
                            dentali di alta qualità con tecnologie
                            all&apos;avanguardia e un team esperto.
                        </p>
                    </section>
                    <section className="container mx-auto font-bold flex gap-4">
                        <Button variant={"accent"}>
                            <Phone size={20} />
                            Prenota una visita
                        </Button>
                        <Button
                            variant={"outline"}
                            className="bg-white hover:bg-gray-100 text-black"
                        >
                            Scopri i nostri servizi
                        </Button>
                    </section>
                    <section className="container mx-auto flex items-center gap-2 text-lg">
                        <MapPin />
                        <p>
                            Via Padre Antonio da Olivadi, 9 - 71121 Foggia (FG)
                        </p>
                    </section>
                </article>
            </div>

            {/* Sezione Servizi*/}
            <article
                className="py-16"
                id="services"
            >
                <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
                    <h2 className="text-4xl font-bold text-center">
                        I Nostri Servizi
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServicesCard
                                key={index}
                                service={service}
                            />
                        ))}
                    </div>
                    <Button>
                        <Phone size={20} />
                        Prenota la tua visita
                    </Button>
                </div>
            </article>

            {/* Sezione Chi siamo */}
            <article className="py-16 grid grid-cols-2 container mx-auto ">
                <section className="flex flex-col gap-16 ">
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
                                className="text-primary"
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
                                className="text-primary"
                            />
                            <div>
                                <h4 className="text-xl font-bold">
                                    Tecnologie Avanzate
                                </h4>
                                <p>
                                    Utilizziamo attrezzature all'avanguardia per
                                    garantire diagnosi e trattamenti precisi.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-8 items-center">
                            <Circle
                                strokeWidth={4}
                                className="text-primary"
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
                </section>
                <section>
                    <Image
                        src={"/images/francesco.jpg"}
                        alt="Chi siamo Studio Dentistico Fanelli"
                        width={600}
                        height={400}
                        className="rounded-3xl"
                    />
                </section>
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
        </>
    );
}
