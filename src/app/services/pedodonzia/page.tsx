import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pedodonzia Foggia | Dentista per Bambini - Studio Dentistico Fanelli",
    description:
        "Pedodonzia a Foggia: cura dei denti dei bambini con approccio delicato. Prevenzione carie, fluoroprofilassi, sigillanti e ortodonzia intercettiva. Ambiente accogliente per i più piccoli.",
    keywords:
        "pedodonzia foggia, dentista bambini foggia, odontoiatria pediatrica foggia, carie bambini foggia, sigillanti dentali foggia, dentista foggia, fluoroprofilassi foggia",
    openGraph: {
        title: "Pedodonzia Foggia | Dentista per Bambini - Studio Dentistico Fanelli",
        description:
            "Cura dei denti dei bambini a Foggia con approccio delicato. Prevenzione, trattamenti e ortodonzia intercettiva in un ambiente accogliente.",
        url: "https://studiodentisticofanelli.it/services/pedodonzia",
        siteName: "Studio Dentistico Fanelli",
        images: [
            {
                url: "https://studiodentisticofanelli.it/images/open-graph.png",
                width: 1200,
                height: 630,
                alt: "Studio Dentistico Fanelli - Foggia",
            },
        ],
        locale: "it_IT",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pedodonzia Foggia | Dentista per Bambini - Studio Fanelli",
        description:
            "Cura dei denti dei bambini a Foggia. Prenota la prima visita in un ambiente accogliente.",
        images: ["https://studiodentisticofanelli.it/images/open-graph.png"],
    },
    alternates: {
        canonical: "https://studiodentisticofanelli.it/services/pedodonzia",
    },
    authors: [
        {
            name: "Marco Antonio Russo",
            url: "https://www.linkedin.com/in/marco-antonio-russo/",
        },
    ],
};

const page = () => {
    const service = services.filter(s => s.slug === "pedodonzia")[0];

    const treatments = [
        {
            title: "Prevenzione e Controlli Periodici",
            description:
                "I controlli ogni 6 mesi sono fondamentali in questa fase di crescita per monitorare la permuta dei denti e valutare la qualità dell'igiene quotidiana. Le radiografie ci aiutano a verificare che tutto stia procedendo per il meglio e a prevenire problemi complessi in futuro.",
            frequency:
                "Controllo ogni 6 mesi per monitoraggio e prevenzione ottimale.",
            recommended:
                "Tutti i bambini (dal primo anno di vita) per stabilire una corretta abitudine di prevenzione e monitorare il naturale sviluppo dell'occlusione.",
        },
        {
            title: "Igiene Professionale e Fluoroprofilassi",
            description:
                "Pulizia delicata dei denti con istruzioni personalizzate di igiene orale e applicazione di fluoro o sigillanti per rinforzare lo smalto e prevenire la carie. Un approccio gentile per rendere l'esperienza positiva.",
            frequency: "Ogni 6 mesi o secondo necessità individuali.",
            recommended:
                "Bambini con carie multiple o rischio elevato che necessitano di un programma di igiene e prevenzione più intensivo, come l'applicazione di sigillanti sui solchi dei molari permanenti appena erotti (circa 6-7 anni).",
        },
        {
            title: "Trattamento delle Carie Pediatriche",
            description:
                "Terapia conservativa (otturazioni) e, se necessario, polpotomia sui denti decidui (da latte) per mantenerli in arcata fino alla permuta naturale. Utilizziamo tecniche delicate per garantire comfort e serenità al bambino.",
            frequency: "In base alle necessità cliniche individuali.",
            recommended:
                "Bambini con carie sui denti da latte che necessitano di intervento per evitare dolore, infezioni e perdita prematura degli elementi dentari.",
        },
    ];

    const benefits = [
        "Prevenzione efficace della Carie e della 'sindrome da biberon'",
        "Guida dello sviluppo scheletrico e dentale (Ortodonzia Intercettiva)",
        "Miglioramento della collaborazione e riduzione della paura del dentista",
        "Corretto mantenimento dello spazio per l'eruzione dei denti permanenti",
        "Salute orale ottimale che incide positivamente sulla masticazione, alimentazione e fonazione del bambino",
    ];

    const steps = [
        {
            title: "Valutazione e Intercettazione",
            description:
                "Esame della bocca e delle strutture scheletriche. Diagnosi precoce di carie, malocclusioni e abitudini viziate (es. succhiamento del pollice).",
        },
        {
            title: "Igiene e Fluoroprofilassi",
            description:
                "Pulizia delicata, istruzioni personalizzate di igiene e applicazione di fluoro/sigillanti per rinforzare lo smalto e prevenire la carie.",
        },
        {
            title: "Trattamento",
            description:
                "Terapia conservativa (otturazioni) e, se necessario, polpotomia sui denti decidui (da latte) per mantenerli in arcata fino alla permuta.",
        },
        {
            title: "Controllo dello Sviluppo",
            description:
                "Monitoraggio dell'eruzione dei denti permanenti e indicazioni per l'ortodonzia intercettiva (se necessaria).",
        },
    ];

    const targetAudience = [
        {
            title: "Tutti i bambini (dal primo anno di vita)",
            description:
                "Per stabilire una corretta abitudine di prevenzione e monitorare il naturale sviluppo dell'occlusione.",
        },
        {
            title: "Bambini con carie multiple o rischio elevato",
            description:
                "Necessitano di un programma di igiene e prevenzione più intensivo, come l'applicazione di sigillanti sui solchi dei molari permanenti appena erotti (circa 6-7 anni).",
        },
    ];

    return (
        <div className="bg-linear-to-b from-primary-100 to-primary-200">
            <article className="container mx-auto py-36 px-4">
                <header className="flex flex-col lg:flex-row justify-between w-full min-h-96 gap-8">
                    <section className="flex flex-col items-start justify-start gap-16 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <IconBox iconSrc={service.icon} />
                            <h1 className="text-5xl lg:text-6xl font-bold break-words w-full">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-2xl">
                            La pedodonzia è la branca dell&apos;odontoiatria
                            dedicata alla salute orale dei bambini, dalla prima
                            infanzia fino all&apos;adolescenza. Programma
                            completo di prevenzione, diagnosi e trattamento
                            delle patologie orali tipiche dell&apos;età
                            pediatrica, con un approccio mirato e non traumatico
                            per creare un&apos;esperienza positiva e costruire
                            le basi per una salute orale duratura.
                        </p>
                    </section>
                    <Carousel images={service.images as string[]} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Pedodonzia?
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((benefit, index) => (
                        <div
                            className="flex gap-4 border border-gray-300 p-4 py-8 rounded-lg items-center bg-white"
                            key={index}
                        >
                            <CheckCircle className="text-success" />
                            <p>{benefit}</p>
                        </div>
                    ))}
                </section>
            </article>

            {/* I Nostri Trattamenti */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    I Nostri Trattamenti
                </h2>
                <section className="grid grid-cols-1 gap-8">
                    {treatments.map((treatment, index) => (
                        <div
                            className="bg-white text-soft shadow-xl p-8 md:p-12 rounded-2xl flex flex-col gap-6"
                            key={index}
                        >
                            <h3 className="text-2xl font-bold text-primary">
                                {treatment.title}
                            </h3>
                            <p className="text-lg leading-relaxed">
                                {treatment.description}
                            </p>

                            <div className="flex items-start gap-2 bg-primary-50 p-4 rounded-lg">
                                <Clock className="text-primary min-w-8 mt-1" />
                                <div>
                                    <p className="font-semibold text-primary mb-1">
                                        Frequenza:
                                    </p>
                                    <p className="text-soft">
                                        {treatment.frequency}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-accent-50 p-4 rounded-lg border-l-4 border-accent">
                                <p className="font-semibold text-primary mb-2">
                                    Consigliato per chi:
                                </p>
                                <p className="text-soft">
                                    {treatment.recommended}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </article>

            {/* Come Funziona la Visita Pedodontica */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona la Visita Pedodontica
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                        <div
                            className="flex flex-col gap-4 justify-between items-center"
                            key={index}
                        >
                            <div className="bg-primary-300/80 text-primary rounded-full aspect-square w-20 h-20 grid place-content-center text-4xl font-bold">
                                {index + 1}
                            </div>
                            <h4 className="text-center font-bold text-2xl">
                                {step.title}
                            </h4>
                            <p className="text-center text-soft">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </section>
            </article>

            {/* Consigliato per chi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Consigliato per Chi?
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {targetAudience.map((audience, index) => (
                        <div
                            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
                            key={index}
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                {audience.title}
                            </h3>
                            <p className="text-soft leading-relaxed">
                                {audience.description}
                            </p>
                        </div>
                    ))}
                </section>
            </article>

            {/* Consulenza Personalizzata */}
            <article className="container mx-auto py-16 px-4">
                <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Un Approccio Delicato per i Più Piccoli
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Nel nostro studio creiamo un ambiente accogliente e
                        rassicurante per far vivere ai bambini
                        un&apos;esperienza positiva dal dentista. Il nostro
                        obiettivo è educare alla prevenzione fin dalla prima
                        infanzia, costruendo le basi per una salute orale
                        duratura.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la Prima Visita del tuo Bambino
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Inizia il percorso di prevenzione e cura dentale del tuo
                    bambino. Contattaci per una visita pedodontica completa e
                    personalizzata in un ambiente sereno e accogliente.
                </p>
                <section className="flex flex-col md:flex-row gap-4 items-stretch">
                    <ContactButton
                        action="phone"
                        variant="default"
                        className="w-full"
                    >
                        Prenota Ora
                    </ContactButton>
                    <ContactButton
                        action="form"
                        variant="outline"
                        className="w-full"
                        showIcon={false}
                    >
                        Richiedi informazioni
                    </ContactButton>
                </section>
            </article>
        </div>
    );
};

export default page;
