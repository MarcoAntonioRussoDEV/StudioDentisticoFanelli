import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Parodontologia Foggia | Cura Gengive e Parodontite - Studio Fanelli",
    description:
        "Parodontologia a Foggia: cura e prevenzione della parodontite. Terapia laser, chirurgia rigenerativa e mantenimento parodontale. Proteggi gengive e tessuti di supporto dei denti.",
    keywords:
        "parodontologia foggia, parodontite foggia, cura gengive foggia, piorrea foggia, laser parodontale foggia, dentista foggia, malattia parodontale foggia",
    openGraph: {
        title: "Parodontologia Foggia | Cura Gengive e Parodontite - Studio Fanelli",
        description:
            "Cura della parodontite a Foggia con terapia laser e chirurgia rigenerativa. Proteggi la salute delle tue gengive con trattamenti personalizzati.",
        url: "https://studiodentisticofanelli.it/services/parodontologia",
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
        title: "Parodontologia Foggia | Cura Gengive - Studio Fanelli",
        description:
            "Cura della parodontite a Foggia. Prenota la tua visita parodontale personalizzata.",
        images: ["https://studiodentisticofanelli.it/images/open-graph.png"],
    },
    alternates: {
        canonical: "https://studiodentisticofanelli.it/services/parodontologia",
    },
    authors: [
        {
            name: "Marco Antonio Russo",
            url: "https://www.linkedin.com/in/marco-antonio-russo/",
        },
    ],
};

const page = () => {
    const service = services.filter(s => s.slug === "parodontologia")[0];

    const benefits = [
        "Arresto della progressione della malattia parodontale",
        "Riduzione di sanguinamento, infiammazione e sensibilità",
        "Mantenimento dei denti naturali più a lungo",
        "Recupero del tessuto osseo e gengivale perduto",
        "Prevenzione delle recidive della parodontite",
        "Stabilità gengivale e ossea nel lungo periodo",
    ];

    const treatments = [
        {
            title: "Terapia non chirurgica e trattamento delle tasche gengivali",
            description:
                "Nelle fasi iniziali della malattia parodontale, la terapia non chirurgica è estremamente efficace. Attraverso una pulizia profonda delle radici (scaling e root planing), il trattamento delle tasche gengivali e l'utilizzo del laser parodontale, eliminiamo placca, tartaro e batteri in profondità, favorendo la guarigione dei tessuti e la riduzione dell'infiammazione.",
            frequency:
                "In genere vengono eseguite 1–2 sedute di terapia iniziale, con richiami periodici ogni 3–6 mesi per il mantenimento.",
            recommended:
                "Ideale per pazienti con gengive che sanguinano, alitosi persistente o sensazione di 'denti che si muovono'. Fondamentale nelle fasi iniziali della parodontite per evitare l'evoluzione verso forme più gravi.",
        },
        {
            title: "Chirurgia parodontale e rigenerazione",
            description:
                "Nei casi più avanzati, quando la malattia ha compromesso il tessuto osseo e gengivale, è necessario ricorrere alla chirurgia parodontale rigenerativa. Questa terapia mira a ricostruire i tessuti di supporto danneggiati, restituendo stabilità e salute ai denti.",
            frequency:
                "Trattamento eseguito una tantum per ogni area interessata, seguito da controlli e mantenimento periodico.",
            recommended:
                "Indicato per pazienti con perdita di supporto osseo o tasche parodontali profonde non risolvibili con terapia non chirurgica. Ideale per chi desidera preservare i propri denti naturali e migliorare l'estetica gengivale.",
        },
        {
            title: "Mantenimento parodontale",
            description:
                "La fase di mantenimento è essenziale per la stabilità dei risultati nel tempo. Prevede controlli periodici e sedute di igiene professionale mirate a mantenere sotto controllo la flora batterica orale e prevenire recidive della malattia.",
            frequency:
                "Ogni 3–6 mesi, in base al livello di rischio individuale e alla risposta alla terapia.",
            recommended:
                "Fondamentale per tutti i pazienti trattati per malattia parodontale. Aiuta a mantenere il sorriso sano nel tempo e a prevenire nuove infezioni.",
        },
    ];

    const stepsTerapiaNonChirurgica = [
        {
            title: "Valutazione clinica",
            description:
                "Analisi dettagliata dello stato gengivale e misurazione delle tasche parodontali.",
        },
        {
            title: "Terapia meccanica",
            description:
                "Rimozione di placca e tartaro sopra e sotto gengiva mediante strumenti manuali e a ultrasuoni.",
        },
        {
            title: "Terapia laser",
            description:
                "Disinfezione delle tasche gengivali per ridurre la carica batterica e stimolare la guarigione.",
        },
        {
            title: "Educazione all'igiene orale",
            description:
                "Istruzioni personalizzate per il mantenimento domiciliare.",
        },
    ];

    const stepsChirurgia = [
        {
            title: "Diagnosi approfondita",
            description:
                "Radiografie e sondaggio parodontale per valutare l'entità della perdita ossea.",
        },
        {
            title: "Intervento chirurgico",
            description:
                "Accesso controllato alle aree affette per rimuovere i batteri e ripulire le radici.",
        },
        {
            title: "Rigenerazione dei tessuti",
            description:
                "Applicazione di biomateriali, membrane o innesti ossei per favorire la rigenerazione di osso e gengiva.",
        },
        {
            title: "Controlli post-operatori",
            description:
                "Monitoraggio della guarigione e igiene di mantenimento personalizzata.",
        },
    ];

    const stepsMantenimento = [
        {
            title: "Monitoraggio",
            description:
                "Valutazione periodica delle tasche gengivali e dell'infiammazione.",
        },
        {
            title: "Pulizia di mantenimento",
            description:
                "Rimozione di placca e tartaro residui in zone critiche.",
        },
        {
            title: "Rinforzo dell'igiene domiciliare",
            description:
                "Aggiornamento delle tecniche di spazzolamento e dei presidi da utilizzare.",
        },
    ];

    return (
        <div className="bg-linear-to-b from-primary-100 to-primary-200">
            <article className="container mx-auto py-36 px-4">
                <header className="flex flex-col lg:flex-row justify-between w-full min-h-96 gap-8">
                    <section className="flex flex-col items-start justify-start gap-16 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <IconBox iconSrc={service.icon} />
                            <h1 className="text-4xl lg:text-6xl font-bold break-words w-full">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-2xl">
                            La parodontologia è la branca dell&apos;odontoiatria
                            che si occupa della diagnosi e del trattamento delle
                            malattie che colpiscono il parodonto, ossia i
                            tessuti di supporto del dente: gengiva, legamento
                            parodontale e osso alveolare. La patologia più
                            comune è la malattia parodontale (nota anche come
                            piorrea), un&apos;infiammazione cronica che, se
                            trascurata, può causare retrazione gengivale,
                            mobilità dentale e, nei casi più gravi, perdita dei
                            denti. Nel nostro studio di Foggia, la cura e la
                            prevenzione della parodontite rappresentano un
                            pilastro fondamentale: ogni trattamento viene
                            personalizzato in base alle condizioni cliniche e
                            alle esigenze del paziente.
                        </p>
                    </section>
                    <Carousel images={service.images as string[]} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Parodontologia?
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

            {/* Come Funziona - Terapia Non Chirurgica */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Terapia Non Chirurgica
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stepsTerapiaNonChirurgica.map((step, index) => (
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

            {/* Come Funziona - Chirurgia Parodontale */}
            <article className="container mx-auto py-16 px-4 bg-white/30 rounded-3xl">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Chirurgia Parodontale e Rigenerazione
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stepsChirurgia.map((step, index) => (
                        <div
                            className="flex flex-col gap-4 justify-between items-center"
                            key={index}
                        >
                            <div className="bg-accent text-white rounded-full aspect-square w-20 h-20 grid place-content-center text-4xl font-bold">
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

            {/* Come Funziona - Mantenimento */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Mantenimento Parodontale
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stepsMantenimento.map((step, index) => (
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

            {/* Consulenza Personalizzata */}
            <article className="container mx-auto py-16 px-4">
                <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Consulenza Parodontale Personalizzata
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Ogni caso parodontale è unico. Nel nostro studio
                        offriamo una valutazione completa e personalizzata,
                        integrando diagnosi clinica, radiografie e test di
                        rischio. L&apos;obiettivo è pianificare un percorso
                        terapeutico mirato, che unisca efficacia clinica,
                        comfort e prevenzione a lungo termine.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Visita Parodontale
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Proteggi la salute delle tue gengive e dei tuoi denti.
                    Contattaci per una valutazione parodontale completa e
                    personalizzata.
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
