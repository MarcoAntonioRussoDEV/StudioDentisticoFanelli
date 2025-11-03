import Button from "@/app/components/Button";
import ContactButton from "@/app/components/ContactButton";
import { team } from "@/app/lib/data/team";
import {
    ArrowLeft,
    Award,
    Briefcase,
    GraduationCap,
    Users,
    Smile,
    Baby,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    const member = team.find(m => m.slug === "carlotta-fanelli");
    if (!member) {
        return null;
    }

    const education = [
        {
            title: "Laurea in Odontoiatria e Protesi Dentaria",
            institution: "Università degli Studi di Foggia",
            grade: "110/110 con lode e menzione accademica",
            type: "Laurea",
        },
        {
            title: "Specializzazione in Ortognatodonzia",
            institution: "Università degli Studi di Foggia",
            grade: "50/50 con lode",
            type: "Specializzazione",
        },
        {
            title: "Corso di Perfezionamento Annuale in Pedodonzia",
            institution: "Università degli Studi di Foggia",
            grade: "Completato",
            type: "Perfezionamento",
        },
    ];

    const specializations = [
        {
            name: "Ortognatodonzia",
            description:
                "Diagnosi e trattamento delle malocclusioni dentali e scheletriche",
            icon: Smile,
        },
        {
            name: "Pedodonzia",
            description: "Cura e prevenzione della salute orale dei bambini",
            icon: Baby,
        },
    ];

    const professionalActivity = {
        title: "Attività Professionale",
        description:
            "Esercita la libera professione dedicandosi esclusivamente all'Ortognatodonzia e alla Pedodonzia",
        association: {
            name: "SIDO",
            fullName: "Società Italiana di Ortognatodonzia",
            role: "Segue le attività della società",
        },
    };

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
                                Odontoiatra • Ortodontista
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                                    <Smile size={16} />
                                    Specialista in Ortognatodonzia
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-gray-700 rounded-full text-sm font-medium">
                                    <Baby size={16} />
                                    Pedodonzia
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-200 text-primary-800 rounded-full text-sm font-medium">
                                    <Users size={16} />
                                    SIDO
                                </span>
                            </div>
                        </div>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                Laureata in Odontoiatria e Protesi Dentaria con
                                il massimo dei voti e menzione accademica presso
                                l&apos;Università degli Studi di Foggia.
                            </p>
                            <p>
                                Specialista in Ortognatodonzia, si dedica
                                esclusivamente alla cura ortodontica e
                                pediatrica.
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
                                        {edu.grade ===
                                            "110/110 con lode e menzione accademica" && (
                                            <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-bold">
                                                {edu.grade}
                                            </span>
                                        )}
                                        {edu.grade === "110/110 con lode" && (
                                            <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-bold">
                                                {edu.grade}
                                            </span>
                                        )}
                                        {edu.grade === "Completato" && (
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

                {/* Aree di Specializzazione */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Briefcase
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Aree di Specializzazione
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {specializations.map((spec, index) => {
                            const IconComponent = spec.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl hover:shadow-lg transition-all border-2 border-primary-200 hover:border-primary-400"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-3 bg-white rounded-lg shadow-md">
                                            <IconComponent
                                                className="text-primary"
                                                size={28}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {spec.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {spec.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Attività Professionale e Associativa */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Briefcase
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Attività Professionale
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Libera Professione */}
                        <div className="p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border-l-4 border-primary">
                            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                <Briefcase size={24} />
                                Libera Professione
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {professionalActivity.description}
                            </p>
                        </div>

                        {/* SIDO */}
                        <div className="p-8 bg-white border-2 border-primary-200 rounded-xl hover:border-primary-400 transition-colors shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-100 rounded-lg">
                                    <Users
                                        className="text-primary"
                                        size={28}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold">
                                            {
                                                professionalActivity.association
                                                    .name
                                            }
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {
                                            professionalActivity.association
                                                .fullName
                                        }
                                    </h3>
                                    <p className="text-gray-700">
                                        {professionalActivity.association.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Focus Clinico */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl">
                            <Award
                                className="text-primary"
                                size={32}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Focus Clinico
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Ortognatodonzia */}
                        <div className="p-6 bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-xl border-2 border-primary-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary rounded-lg">
                                    <Smile
                                        className="text-white"
                                        size={24}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-primary">
                                    Ortognatodonzia
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-primary flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Correzione delle malocclusioni dentali
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-primary flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Trattamento delle malocclusioni
                                        scheletriche
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-primary flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Ortodonzia per bambini, adolescenti e
                                        adulti
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-primary flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Apparecchi ortodontici fissi e mobili
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Pedodonzia */}
                        <div className="p-6 bg-gradient-to-br from-accent/10 via-white to-accent/20 rounded-xl border-2 border-accent/30 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-accent rounded-lg">
                                    <Baby
                                        className="text-white"
                                        size={24}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    Pedodonzia
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-accent flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Prevenzione e cura delle patologie orali
                                        infantili
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-accent flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Approccio psicologico dedicato ai
                                        bambini
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-accent flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>
                                        Educazione all&apos;igiene orale
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <Award
                                        className="text-accent flex-shrink-0 mt-1"
                                        size={16}
                                    />
                                    <span>Fluoroprofilassi e sigillature</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action finale */}
                <section className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Prenota una consulenza con la Dott.ssa Carlotta Fanelli
                    </h2>
                    <p className="text-xl mb-8 text-primary-50">
                        Specialista in Ortodonzia e Odontoiatria Pediatrica
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
