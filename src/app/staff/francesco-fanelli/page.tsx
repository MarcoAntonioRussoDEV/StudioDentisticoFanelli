import Button from "@/app/components/Button";
import ContactButton from "@/app/components/ContactButton";
import { team } from "@/app/lib/data/team";
import {
    ArrowLeft,
    Award,
    BookOpen,
    Briefcase,
    GraduationCap,
    Globe,
    Microscope,
    Computer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    const member = team.find(m => m.slug === "francesco-fanelli");
    if (!member) {
        return null;
    }

    const education = [
        {
            title: "Laurea in Odontoiatria e Protesi Dentaria",
            institution: "Università degli Studi di Foggia",
            grade: "110/110 con lode",
            type: "Laurea",
        },
        {
            title: "Master in Chirurgia Orale",
            institution: "Università degli Studi di Foggia",
            grade: "110/110 con lode",
            type: "Master",
        },
        {
            title: "Specializzazione in Chirurgia Orale",
            institution: "Università degli Studi di Foggia",
            grade: "In corso",
            type: "Specializzazione",
        },
        {
            title: "Dottorato di Ricerca",
            institution: "Università degli Studi di Foggia",
            grade: "In corso",
            type: "Dottorato",
        },
    ];

    const internationalExperience = {
        title: "Esperienza formativa all'estero",
        institution: "Dipartimento di Protesi - Università di Rochester",
        location: "Rochester, USA",
        description: "Formazione avanzata in protesi dentaria",
    };

    const specializations = [
        "Odontoiatria Digitale",
        "Chirurgia Orale",
        "Protesi Dentaria",
        "Conservativa ed Endodonzia",
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
                                Odontoiatra • Chirurgo Orale
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <GraduationCap size={16} />
                                    Specializzando in Chirurgia Orale
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                    <Microscope size={16} />
                                    Dottorando di Ricerca
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-200 text-primary-800 rounded-full text-sm font-medium">
                                    <Computer size={16} />
                                    Odontoiatria Digitale
                                </span>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                Laureato in Odontoiatria e Protesi Dentaria con
                                il massimo dei voti presso l&apos;Università
                                degli Studi di Foggia.
                            </p>
                            <p>
                                Si occupa di odontoiatria digitale in ambito
                                protesico e chirurgico, conservativa ed
                                endodonzia.
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

                {/* Percorso Formativo */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <GraduationCap
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Percorso Formativo
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 bg-primary-50 rounded-xl hover:shadow-md transition-shadow border-l-4 border-primary"
                            >
                                <Award
                                    className="text-primary flex-shrink-0 mt-1"
                                    size={24}
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">
                                            {edu.type}
                                        </span>
                                        {edu.grade === "110/110 con lode" && (
                                            <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-bold">
                                                {edu.grade}
                                            </span>
                                        )}
                                        {edu.grade === "In corso" && (
                                            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                                                {edu.grade}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {edu.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Aree di Competenza */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Briefcase
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Aree di Competenza
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {specializations.map((spec, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl hover:shadow-md transition-shadow"
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

                {/* Esperienza Internazionale */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Globe
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Esperienza Internazionale
                        </h2>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-primary-50 via-white to-accent/10 rounded-2xl border-2 border-primary-200 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold">
                                USA
                            </span>
                            <span className="px-4 py-2 bg-accent/30 text-gray-700 rounded-full text-sm font-medium">
                                Esperienza Formativa
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {internationalExperience.title}
                        </h3>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-semibold text-lg flex items-center gap-2">
                                <Globe
                                    size={20}
                                    className="text-primary"
                                />
                                {internationalExperience.institution}
                            </p>
                            <p className="text-gray-600 ml-7">
                                {internationalExperience.location}
                            </p>
                            <p className="text-gray-700 ml-7 mt-3">
                                {internationalExperience.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Focus Professionale */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Computer
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Focus Professionale
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border-l-4 border-primary">
                            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                <Computer size={24} />
                                Odontoiatria Digitale
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Si occupa di tecnologie digitali avanzate
                                applicate all&apos;odontoiatria moderna, con
                                particolare focus su protesi e chirurgia
                                computerizzata.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 bg-white border-2 border-primary-200 rounded-xl hover:border-primary-400 transition-colors">
                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <Award
                                        className="text-primary"
                                        size={20}
                                    />
                                    Ambito Protesico e Chirurgico
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Utilizzo di tecnologie digitali per la
                                    pianificazione e l&apos;esecuzione di
                                    interventi protesici e chirurgici.
                                </p>
                            </div>

                            <div className="p-5 bg-white border-2 border-primary-200 rounded-xl hover:border-primary-400 transition-colors">
                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <BookOpen
                                        className="text-primary"
                                        size={20}
                                    />
                                    Conservativa ed Endodonzia
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Trattamenti conservativi e endodontici con
                                    approccio minimamente invasivo e tecnologie
                                    avanzate.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action finale */}
                <section className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Prenota una consulenza con il Dott. Francesco Fanelli
                    </h2>
                    <p className="text-xl mb-8 text-primary-50">
                        Tecnologie avanzate e competenza specialistica per la
                        tua salute orale
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ContactButton
                            action="phone"
                            variant="light"
                        >
                            Prenota una visita
                        </ContactButton>
                        <Link href="/#contacts">
                            <ContactButton
                                action="form"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10"
                                showIcon={false}
                            >
                                Contattaci
                            </ContactButton>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default page;
