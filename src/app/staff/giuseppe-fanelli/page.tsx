import Button from "@/app/components/Button";
import { team } from "@/app/lib/data/team";
import {
    ArrowLeft,
    Award,
    BookOpen,
    Briefcase,
    GraduationCap,
    Users,
    Globe,
    FileText,
    TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    const member = team.find(m => m.slug === "giuseppe-fanelli");
    if (!member) {
        return null;
    }

    const experiences = [
        {
            year: "1990",
            title: "Surgical And Prosthetic Management Of The Implant Patient",
            location: "San Diego, California",
            type: "Corso Internazionale",
        },
        {
            year: "1999",
            title: "Corso Avanzato Craniomandibular Disorders Anatomy and Occlusion",
            location: "University of California San Diego",
            professor: "Prof. T. Tanaka",
            type: "Corso Avanzato",
        },
    ];

    const specializations = [
        "Implantologia",
        "Ortodonzia",
        "Odontoiatria Forense",
        "Laser e nuove tecnologie in odontoiatria e nel periorale (Master II Livello)",
    ];

    const publications = [
        "Studio Clinico Multicentrico SCM01/01 - Clinico esperto in Implantologia",
        "Triennio di studi in Organometria Funzionale",
        "Diversi lavori scientifici in campo implantoprotesico",
    ];

    const conferences = [
        "ANDI Foggia, Taranto, Agrigento, Pescara, Chieti",
        "Ospedali Riuniti di Foggia",
        "Collegio Docenti Odontoiatria Roma",
        "Convegno Internazionale di Verona",
    ];

    const associations = [
        {
            role: "Tesoriere Regionale ANDI",
            period: "Attuale",
            description: "Socio ANDI dal 1987",
        },
        {
            role: "Presidente ANDI Provinciale",
            period: "Passato",
            description:
                "Ha ricoperto diversi ruoli: Presidente dei Revisori dei conti, Consigliere, Segretario culturale provinciale (due mandati), Segretario Sindacale provinciale, Segretario Culturale regionale Puglia (due mandati)",
        },
        {
            role: "Socio Fondatore AIFO",
            period: "Dal 1987",
            description:
                "Associazione Informazione Formazione Odontoiatrica - Contributo alla nascita delle GOD (Giornate Odontoiatriche Daune)",
        },
        {
            role: "Fondatore e Presidente AIRO",
            period: "Dal 2002",
            description:
                "Associazione Implantologia e Riabilitazione Orale - Organizzatore del primo 'Corso Introduttivo per Assistenti alla Poltrona' in collaborazione con l'Università degli Studi di Chieti. Relatore presso l'Università di Foggia nel corso di formazione per Assistenti alla poltrona",
        },
    ];

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

                {/* Hero Section con foto e introduzione */}
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
                                Odontoiatra • Impiantologo
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Briefcase size={16} />
                                    Libero Professionista dal 1987
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                    <Award size={16} />
                                    CTU Tribunale di Foggia
                                </span>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                Il Dott. Giuseppe Fanelli è un Libero
                                Professionista e titolare di studio dal 1987.
                            </p>
                            <p>
                                Consulente impiantologo in diversi studi e
                                Consulente Tecnico d&apos;Ufficio presso il
                                Tribunale di Foggia.
                            </p>
                        </div>
                        <Button
                            variant="default"
                            className="w-fit"
                        >
                            Prenota una visita
                        </Button>
                    </div>
                </section>

                {/* Specializzazioni */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <GraduationCap
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Specializzazioni
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {specializations.map((spec, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl hover:shadow-md transition-shadow"
                            >
                                <Award
                                    className="text-primary flex-shrink-0 mt-1"
                                    size={20}
                                />
                                <span className="text-gray-800 font-medium">
                                    {spec}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Esperienze Culturali */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Globe
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Esperienze Culturali Internazionali
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="border-l-4 border-primary pl-6 py-2"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-bold">
                                        {exp.year}
                                    </span>
                                    <span className="px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                        {exp.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {exp.title}
                                </h3>
                                <p className="text-gray-600 flex items-center gap-2">
                                    <Globe size={16} />
                                    {exp.location}
                                </p>
                                {exp.professor && (
                                    <p className="text-gray-600 mt-1">
                                        Relatore: {exp.professor}
                                    </p>
                                )}
                            </div>
                        ))}
                        <div className="p-6 bg-primary-50 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">
                                Formazione Southern California University
                            </h3>
                            <p className="text-gray-700">
                                Ha seguito corsi annuali di protesi fissa e
                                mobile secondo i dettami della Southern
                                University California.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Attività Scientifica e Didattica */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Pubblicazioni e Ricerca */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary-100 rounded-xl">
                                <FileText
                                    className="text-primary"
                                    size={28}
                                />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Pubblicazioni e Ricerca
                            </h2>
                        </div>
                        <ul className="space-y-4">
                            {publications.map((pub, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                >
                                    <BookOpen
                                        className="text-primary flex-shrink-0 mt-1"
                                        size={18}
                                    />
                                    <span className="text-gray-700">{pub}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Conferenze e Relazioni */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary-100 rounded-xl">
                                <Users
                                    className="text-primary"
                                    size={28}
                                />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Conferenze e Relazioni
                            </h2>
                        </div>
                        <p className="text-gray-700 mb-4 font-medium">
                            Relatore in diverse sedi nazionali:
                        </p>
                        <ul className="space-y-3">
                            {conferences.map((conf, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                >
                                    <TrendingUp
                                        className="text-primary flex-shrink-0 mt-1"
                                        size={18}
                                    />
                                    <span className="text-gray-700">
                                        {conf}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Esperienze Associative */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Users
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Esperienze Associative
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {associations.map((assoc, index) => (
                            <div
                                key={index}
                                className="p-6 border-2 border-primary-200 rounded-xl hover:border-primary-400 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <h3 className="text-xl font-bold text-primary">
                                        {assoc.role}
                                    </h3>
                                    <span className="text-sm font-semibold text-gray-600 bg-accent/20 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                        {assoc.period}
                                    </span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {assoc.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action finale */}
                <section className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Prenota una consulenza con il Dott. Fanelli
                    </h2>
                    <p className="text-xl mb-8 text-primary-50">
                        Oltre {new Date().getFullYear() - 1985} anni di
                        esperienza al tuo servizio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="default"
                            className="bg-white text-primary hover:bg-gray-100"
                        >
                            Prenota una visita
                        </Button>
                        <Link href="/#contacts">
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white/10"
                            >
                                Contattaci
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default page;
