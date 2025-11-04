import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trattamenti Laser Odontoiatria Foggia | Studio Dentistico Fanelli",
    description:
        "Tecnologia laser avanzata per trattamenti dentali precisi e indolori a Foggia. Parodontologia, endodonzia, implantologia e chirurgia laser presso Studio Fanelli.",
    keywords:
        "laser odontoiatrico foggia, laser dentale foggia, trattamenti laser denti foggia, dentista laser foggia, wiserlaser foggia, parodontologia laser foggia",
    openGraph: {
        title: "Trattamenti Laser Odontoiatria Foggia | Studio Dentistico Fanelli",
        description:
            "Tecnologia laser avanzata per trattamenti dentali precisi, indolori e con risultati duraturi.",
        url: "https://studiodentisticofanelli.it/services/laser",
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
        title: "Trattamenti Laser Odontoiatria Foggia | Studio Fanelli",
        description:
            "Tecnologia laser avanzata per trattamenti dentali precisi e indolori.",
        images: ["https://studiodentisticofanelli.it/images/open-graph.png"],
    },
    alternates: {
        canonical: "https://studiodentisticofanelli.it/services/laser",
    },
    authors: [
        {
            name: "Marco Antonio Russo",
            url: "https://www.linkedin.com/in/marco-antonio-russo/",
        },
    ],
};

const page = () => {
    const service = services.filter(s => s.slug === "laser")[0];

    const benefits = [
        "Maggiore precisione durante le procedure",
        "Riduzione significativa del dolore",
        "Trattamenti quasi indolori senza anestesia in molti casi",
        "Risultati duraturi e prevedibili",
        "Tempi di guarigione più rapidi",
        "Riduzione del sanguinamento e gonfiore post-operatorio",
    ];

    const treatments = [
        {
            title: "Parodontologia Laser",
            description:
                "Decontaminazione delle tasche parodontali e biostimolazione per la rigenerazione tessutale. Il laser riduce l'infiammazione gengivale e favorisce la guarigione naturale dei tessuti di supporto del dente.",
            frequency:
                "Su indicazione del parodontologo, in presenza di infiammazioni gengivali o tasche parodontali.",
            recommended:
                "Pazienti con gengiviti, parodontiti o necessità di decontaminazione profonda. Particolarmente efficace nel trattamento dei tessuti molli del cavo orale con risultati quasi indolori.",
        },
        {
            title: "Endodonzia Laser",
            description:
                "Decontaminazione del canale radicolare e pulpectomie di precisione. Il laser elimina i batteri in profondità, garantendo un trattamento endodontico più efficace e riducendo il rischio di reinfezioni.",
            frequency:
                "Durante i trattamenti endodontici o devitalizzazioni, per garantire la massima sterilizzazione.",
            recommended:
                "Pazienti che necessitano di devitalizzazione o ritrattamento canalare. Il laser migliora significativamente il tasso di successo del trattamento.",
        },
        {
            title: "Implantologia e Chirurgia Laser",
            description:
                "Scoperta impianti, decontaminazione, frenulectomia, gengivoplastica, emostasi e papillectomia. Interventi chirurgici minimamente invasivi con precisione millimetrica e recupero rapido.",
            frequency:
                "Durante procedure implantologiche o interventi di chirurgia orale su necessità.",
            recommended:
                "Pazienti che necessitano di interventi chirurgici con tempi di guarigione ridotti. Il laser garantisce meno sanguinamento e gonfiore post-operatorio.",
        },
        {
            title: "Terapie Laser Complementari",
            description:
                "Sbiancamento dentale, trattamento di herpes labialis, cheilite angolare, lesioni aftose, ATM e biostimolazione. Il laser accelera la guarigione e riduce il dolore in diverse condizioni cliniche.",
            frequency:
                "Su richiesta del paziente per sbiancamento o su indicazione clinica per terapie specifiche.",
            recommended:
                "Pazienti che desiderano un sorriso più luminoso o necessitano di trattamenti per lesioni orali, herpes o problematiche articolari temporo-mandibolari.",
        },
    ];

    const steps = [
        {
            title: "Valutazione Iniziale",
            description:
                "Analizziamo la tua situazione clinica e valutiamo se il trattamento laser è la soluzione ideale per te.",
        },
        {
            title: "Piano di Trattamento",
            description:
                "Creiamo un piano personalizzato spiegando nel dettaglio come il laser migliorerà i risultati.",
        },
        {
            title: "Trattamento Laser",
            description:
                "Eseguiamo la procedura con tecnologia Wiserlaser di ultima generazione, garantendo precisione e comfort.",
        },
        {
            title: "Guarigione Rapida",
            description:
                "Il laser riduce i tempi di recupero e accelera la guarigione naturale dei tessuti.",
        },
        {
            title: "Follow-up",
            description:
                "Monitoriamo i risultati nel tempo per garantire la massima efficacia del trattamento.",
        },
    ];

    const targetAudience = [
        {
            title: "Chi Ha Paura del Dolore",
            description:
                "Il laser riduce drasticamente la necessità di anestesia e rende le procedure quasi indolori, ideale per chi ha ansia dentale.",
        },
        {
            title: "Chi Cerca Precisione",
            description:
                "La tecnologia laser permette interventi millimetrici con risultati estetici superiori e preservazione dei tessuti sani.",
        },
        {
            title: "Chi Vuole Guarire Velocemente",
            description:
                "I tempi di recupero sono significativamente ridotti rispetto alle tecniche tradizionali, con meno gonfiore e disagio.",
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
                                Tecnologia Laser Odontoiatrica
                            </h1>
                        </div>
                        <p className="text-2xl">
                            Il laser odontoiatrico è uno strumento innovativo
                            che trova applicazioni in diverse circostanze
                            cliniche. La tecnologia laser migliora la precisione
                            e riduce il dolore durante le procedure.
                        </p>
                    </section>
                    <Carousel
                        images={service.images as string[]}
                        serviceName="Trattamenti Laser Odontoiatrici"
                    />
                </header>
            </article>

            {/* Perché Scegliere il Laser */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere la Tecnologia Laser?
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((benefit, index) => (
                        <div
                            className="flex gap-4 border border-gray-300 p-4 py-8 rounded-lg items-center bg-white"
                            key={index}
                        >
                            <CheckCircle className="text-success min-w-6" />
                            <p>{benefit}</p>
                        </div>
                    ))}
                </section>
            </article>

            {/* I Nostri Trattamenti Laser */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    I Nostri Trattamenti Laser
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
                                <CheckCircle className="text-primary min-w-8 mt-1" />
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
                <div className="mt-12 bg-primary-50 p-8 rounded-2xl">
                    <p className="text-lg text-center text-gray-700">
                        <strong className="text-primary">
                            In particolare nel trattamento dei tessuti molli del
                            cavo orale
                        </strong>{" "}
                        l&apos;applicazione risulta quasi indolore e garantisce
                        risultati duraturi
                    </p>
                </div>
            </article>

            {/* Come Funziona */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona il Trattamento Laser
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            className="flex flex-col gap-4 justify-between items-center"
                            key={index}
                        >
                            <div className="bg-gradient-to-br from-accent to-accent/70 text-white rounded-full aspect-square w-20 h-20 grid place-content-center text-4xl font-bold shadow-lg">
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
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            {/* Tecnologia Avanzata */}
            <article className="container mx-auto py-16 px-4">
                <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Tecnologia Wiserlaser di Ultima Generazione
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                        Siamo entusiasti di offrire questa tecnologia avanzata
                        ai nostri pazienti per garantire loro un&apos;esperienza
                        più confortevole e risultati migliori. Il laser ci
                        permette di essere più precisi, meno invasivi e di
                        ridurre significativamente i tempi di recupero.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Scopri i Vantaggi del Laser
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Prenota una consulenza per scoprire come la tecnologia laser
                    può migliorare il tuo trattamento dentale con meno dolore e
                    risultati superiori.
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
