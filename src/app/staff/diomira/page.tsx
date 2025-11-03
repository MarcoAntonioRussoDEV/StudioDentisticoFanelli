import Button from "@/app/components/Button";
import ContactButton from "@/app/components/ContactButton";
import { team } from "@/app/lib/data/team";
import { ArrowLeft, Award, Briefcase, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Diomira - Assistente Odontoiatrica Senior ASO | Studio Dentistico Fanelli Foggia",
    description:
        "Diomira, assistente di studio odontoiatrico senior qualificata (ASO) presso Studio Dentistico Fanelli a Foggia. Massima esperienza e riferimento clinico dello studio.",
    keywords:
        "assistente odontoiatrica foggia, ASO foggia, studio dentistico fanelli foggia, dentista foggia, assistente dentale foggia",
    openGraph: {
        title: "Diomira - Assistente Odontoiatrica Senior | Studio Fanelli Foggia",
        description:
            "Assistente odontoiatrica senior qualificata (ASO) presso Studio Dentistico Fanelli. Massima esperienza e riferimento clinico.",
        url: "https://studiodentisticofanelli.it/staff/diomira",
        siteName: "Studio Dentistico Fanelli",
        images: [
            {
                url: "https://studiodentisticofanelli.it/images/open-graph.png",
                width: 1200,
                height: 630,
                alt: "Diomira - Studio Dentistico Fanelli Foggia",
            },
        ],
        locale: "it_IT",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Diomira - Assistente Odontoiatrica Senior | Studio Fanelli",
        description:
            "Assistente odontoiatrica senior qualificata (ASO) presso Studio Dentistico Fanelli a Foggia.",
        images: ["https://studiodentisticofanelli.it/images/open-graph.png"],
    },
    alternates: {
        canonical: "https://studiodentisticofanelli.it/staff/diomira",
    },
    authors: [
        {
            name: "Marco Antonio Russo",
            url: "https://www.linkedin.com/in/marco-antonio-russo/",
        },
    ],
};

const page = () => {
    const member = team.find(m => m.slug === "diomira");
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
                            alt={`${member.name} - Assistente Odontoiatrica Senior ASO presso Studio Dentistico Fanelli Foggia`}
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
                                    <Star size={16} />
                                    Massima Esperienza
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                    <Award size={16} />
                                    ASO Qualificata
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Briefcase size={16} />
                                    Riferimento Clinico
                                </span>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                È la collaboratrice con maggiore esperienza
                                nello studio e rappresenta un riferimento per
                                l&apos;area clinica.
                            </p>
                            <p>
                                Assistente di Studio Odontoiatrico qualificata,
                                svolge con competenza le attività operative e
                                partecipa regolarmente a programmi di
                                aggiornamento.
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
                            Competenze e Qualifiche
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Assistenza Clinica
                            </h3>
                            <p className="text-gray-700">
                                Supporto qualificato durante tutte le procedure
                                odontoiatriche, garantendo efficienza e
                                sicurezza.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Gestione Strumentazione
                            </h3>
                            <p className="text-gray-700">
                                Preparazione e sterilizzazione degli strumenti
                                secondo i più alti standard di igiene.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Formazione Continua
                            </h3>
                            <p className="text-gray-700">
                                Partecipazione costante a corsi di aggiornamento
                                per mantenersi al passo con le nuove tecniche.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Esperienza Senior
                            </h3>
                            <p className="text-gray-700">
                                Figura di riferimento per l&apos;équipe clinica
                                grazie alla lunga esperienza nel settore.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ruolo nello Studio */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Briefcase
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Ruolo nello Studio
                        </h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-lg leading-relaxed">
                            Come assistente con la maggiore esperienza dello
                            studio, Diomira rappresenta un punto di riferimento
                            fondamentale per l&apos;area clinica. La sua
                            professionalità e competenza garantiscono il
                            corretto svolgimento delle procedure operative,
                            contribuendo all&apos;eccellenza del servizio
                            offerto ai pazienti.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            L&apos;impegno costante nell&apos;aggiornamento
                            professionale le permette di rimanere sempre al
                            passo con le più moderne tecniche e protocolli
                            odontoiatrici.
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
