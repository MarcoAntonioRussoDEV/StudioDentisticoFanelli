import Button from "@/app/components/Button";
import ContactButton from "@/app/components/ContactButton";
import { team } from "@/app/lib/data/team";
import { ArrowLeft, Briefcase, Users, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    const member = team.find(m => m.slug === "monica");
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
                            alt={member.name}
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
                                Responsabile Amministrativa
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Briefcase size={16} />
                                    Gestione Amministrativa
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                    <Users size={16} />
                                    Coordinamento Segreteria
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Calendar size={16} />
                                    Membro Fondatore
                                </span>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                Fa parte della STP sin dalla sua fondazione e si
                                occupa della gestione amministrativa e
                                organizzativa dello studio.
                            </p>
                            <p>
                                Coordina le attività quotidiane e supervisiona
                                la segreteria, assicurando continuità ed
                                efficienza operativa.
                            </p>
                        </div>
                        <ContactButton
                            action="phone"
                            variant="default"
                            className="w-fit"
                        >
                            Contattaci
                        </ContactButton>
                    </div>
                </section>

                {/* Ruolo e Responsabilità */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Briefcase
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Ruolo e Responsabilità
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Gestione Amministrativa
                            </h3>
                            <p className="text-gray-700">
                                Supervisiona tutti gli aspetti amministrativi
                                dello studio, garantendo precisione e conformità
                                normativa.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Coordinamento Operativo
                            </h3>
                            <p className="text-gray-700">
                                Coordina le attività quotidiane dello studio,
                                assicurando efficienza e continuità nei servizi.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Supervisione Segreteria
                            </h3>
                            <p className="text-gray-700">
                                Guida il team di segreteria, garantendo
                                un&apos;accoglienza professionale e un servizio
                                di qualità ai pazienti.
                            </p>
                        </div>
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Organizzazione Studio
                            </h3>
                            <p className="text-gray-700">
                                Gestisce l&apos;organizzazione complessiva dello
                                studio, ottimizzando processi e risorse.
                            </p>
                        </div>
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
