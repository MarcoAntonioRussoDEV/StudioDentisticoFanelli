"use client";

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
import ChairSideSection from "./components/sections/ChairSideSection";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

function useResponsivePerView() {
    const [perView, setPerView] = useState(1.5);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) setPerView(3.5); // desktop
            else if (window.innerWidth >= 640) setPerView(2.5); // tablet
            else setPerView(1.5); // mobile
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return perView;
}

export default function Home() {
    const perView = useResponsivePerView();
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: perView,
            spacing: 15,
        },
    });

    const team = [
        {
            name: "Dott. Giuseppe Fanelli",
            image: "./images/team/Giuseppe.jpg",
        },
        {
            name: "Dott. Francesco Fanelli",
            image: "./images/team/Francesco.jpg",
        },
        {
            name: "Dott.ssa Carlotta Fanelli",
            image: "./images/team/Carlotta.jpg",
        },
        {
            name: "Monica",
            image: "./images/team/Monica.jpg",
        },
        {
            name: "Annachiara",
            image: "./images/team/Annachiara.jpg",
        },
        {
            name: "Chiara",
            image: "./images/team/Chiara.jpg",
        },
        {
            name: "Diomira",
            image: "./images/team/Diomira.jpg",
        },
    ];
    return (
        <div className=" bg-primary-100">
            {/* Hero Section */}
            <HeroSection />

            {/* Sezione ChairSide*/}
            <ChairSideSection />

            {/* Sezione Servizi*/}
            <ServicesSection />

            {/* Sezione Chi siamo */}
            <article className="py-16 container mx-auto px-4 bg-primary-100 place-items-center">
                <section className="gap-16 flex flex-col items-center w-full">
                    <h2 className="text-center text-6xl font-bold">
                        Chi Siamo
                    </h2>

                    <div
                        ref={ref}
                        className="keen-slider"
                    >
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="keen-slider__slide rounded-2xl relative"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={600}
                                    height={400}
                                    className="xl:mt-24 rounded-2xl"
                                />
                                <h4 className="absolute text-white bg-primary/40 w-full text-center bottom-0 text-2xl px-2">
                                    {member.name}
                                </h4>
                            </div>
                        ))}
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
