import Button from "@/app/components/Button";
import ContactButton from "@/app/components/ContactButton";
import { team } from "@/app/lib/data/team";
import { ArrowLeft, Award, Calendar, ClipboardList, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chiara - Assistente Odontoiatrica ASO | Studio Dentistico Fanelli Foggia",
    description:
        "Chiara, assistente di studio odontoiatrico qualificata (ASO) presso Studio Dentistico Fanelli a Foggia. Esperta in protocolli clinici e pianificazione delle procedure.",
    keywords:
        "assistente odontoiatrica foggia, ASO foggia, studio dentistico fanelli foggia, dentista foggia, assistente dentale foggia",
    openGraph: {
        title: "Chiara - Assistente Odontoiatrica | Studio Fanelli Foggia",
        description:
            "Assistente odontoiatrica qualificata (ASO) presso Studio Dentistico Fanelli. Esperta in protocolli clinici e pianificazione.",
        url: "https://studiodentisticofanelli.it/staff/chiara",
        siteName: "Studio Dentistico Fanelli",
        images: [
            {
                url: "https://studiodentisticofanelli.it/images/open-graph.png",
                width: 1200,
                height: 630,
                alt: "Chiara - Studio Dentistico Fanelli Foggia",
            },
        ],
        locale: "it_IT",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chiara - Assistente Odontoiatrica | Studio Fanelli",
        description:
            "Assistente odontoiatrica qualificata (ASO) presso Studio Dentistico Fanelli a Foggia.",
        images: ["https://studiodentisticofanelli.it/images/open-graph.png"],
    },
    alternates: {
        canonical: "https://studiodentisticofanelli.it/staff/chiara",
    },
    authors: [
        {
            name: "Marco Antonio Russo",
            url: "https://www.linkedin.com/in/marco-antonio-russo/",
        },
    ],
};

const page = () => {
    const member = team.find(m => m.slug === "chiara");
    if (!member) {
        return null;
    }

    return (
        <div className="bg-primary-100 min-h-screen">
            <article className="container mx-auto px-4 py-36 flex flex-col gap-12">
                <Link
                    href="/#about_us"
                    className="inline-block"
                >
                    <Button variant="outline">
                        <ArrowLeft size={20} />
                        Torna allo staff
                    </Button>
                </Link>

                {/* Hero Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={member.image}
                            alt={`${member.name} - Assistente Odontoiatrica ASO presso Studio Dentistico Fanelli Foggia`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                                {member.name}
                            </h1>
                            <p className="text-2xl text-primary font-semibold mb-4">
                                Assistente di Studio Odontoiatrico
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Award size={16} />
                                    ASO Qualificata
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                    <ClipboardList size={16} />
                                    Protocolli Clinici
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Calendar size={16} />
                                    Pianificazione Procedure
                                </span>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                Svolge il ruolo di Assistente di Studio
                                Odontoiatrico con attenzione ai protocolli e
                                capacità di pianificazione delle procedure.
                            </p>
                            <p>
                                Contribuisce all&apos;organizzazione del lavoro
                                clinico, garantendo ordine e rispetto dei tempi
                                operativi.
                            </p>
                        </div>
                        <ContactButton
                            action="phone"
                            variant="default"
                            className="w-fit"
                        >
                            Prenota una visita
                        </ContactButton>
                    </div>
                </section>

                {/* Competenze */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Award
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Competenze Professionali
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Gestione Protocolli
                            </h3>
                            <p className="text-gray-700">
                                Applicazione scrupolosa dei protocolli clinici e
                                igienici, garantendo sicurezza e qualità.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Pianificazione Operativa
                            </h3>
                            <p className="text-gray-700">
                                Organizzazione efficiente delle procedure
                                cliniche, ottimizzando tempi e risorse.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Assistenza Clinica
                            </h3>
                            <p className="text-gray-700">
                                Supporto professionale durante i trattamenti,
                                garantendo comfort e sicurezza del paziente.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Organizzazione Studio
                            </h3>
                            <p className="text-gray-700">
                                Contributo attivo all&apos;ordine e
                                all&apos;efficienza operativa dello studio.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Approccio al Lavoro */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Users
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Approccio Professionale
                        </h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-lg leading-relaxed">
                            Chiara si distingue per la sua attenzione ai
                            dettagli e la capacità di pianificare accuratamente
                            le procedure cliniche. Il suo approccio metodico
                            garantisce il rispetto dei protocolli e
                            l&apos;ottimizzazione dei tempi operativi.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Contribuisce attivamente all&apos;organizzazione del
                            lavoro clinico, assicurando un ambiente ordinato ed
                            efficiente che permette al team di operare nelle
                            migliori condizioni.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Prenota la tua visita
                    </h2>
                    <p className="text-xl mb-8 text-primary-100">
                        Il nostro team è a tua disposizione per offrirti le
                        migliori cure dentali
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ContactButton
                            action="phone"
                            variant="light"
                        >
                            Prenota una visita
                        </ContactButton>
                        <ContactButton
                            action="form"
                            variant="outline"
                            className="border-white text-white hover:bg-white/10"
                            showIcon={false}
                        >
                            Contattaci
                        </ContactButton>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default page;
