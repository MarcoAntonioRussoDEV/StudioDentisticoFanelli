import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";
import React from "react";

const page = () => {
    const service = services.filter(s => s.slug === "conservativa")[0];

    const benefits = [
        "Arresto dell'evoluzione della carie e prevenzione di infezioni più gravi (pulpite)",
        "Risultato estetico elevato grazie a restauri tooth-colored (del colore del dente)",
        "Mantenimento della vitalità del dente, evitando la necessità di devitalizzazione (endodonzia)",
        "Ripristino della corretta funzione masticatoria",
        "Durata e resistenza del dente nel tempo",
    ];

    const treatments = [
        {
            title: "Trattamento delle Carie con Restauri Diretti",
            description:
                "Il trattamento della carie consiste nella rimozione del tessuto dentale cariato o compromesso e ricostruzione del dente mediante l'uso di materiali compositi che replicano fedelmente colore e forma del dente naturale. Utilizziamo tecniche adesive moderne per garantire risultati estetici e funzionali eccellenti.",
            frequency:
                "Su necessità, in seguito a diagnosi di carie, fratture o usura dentale.",
            recommended:
                "Pazienti con carie accertate per fermare il processo distruttivo e salvare il dente. Ideale anche per pazienti con vecchie otturazioni in amalgama da sostituire con materiali più estetici e biocompatibili.",
        },
        {
            title: "Intarsi Estetici in Ceramica o Composito",
            description:
                "Per ricostruzioni più estese, realizziamo intarsi in ceramica o composito che vengono progettati e fabbricati con precisione digitale. Questi restauri indiretti offrono una resistenza superiore e un'estetica eccezionale, preservando al massimo la struttura dentale sana.",
            frequency:
                "In caso di cavità estese o necessità di sostituire vecchie otturazioni voluminose.",
            recommended:
                "Pazienti con carie estese o vecchie otturazioni ampie che necessitano di un restauro più resistente e duraturo. Perfetto per chi cerca il massimo dell'estetica e della funzionalità.",
        },
        {
            title: "Restauri Estetici per Scheggiature e Usura",
            description:
                "Ripristiniamo la forma originaria dei denti danneggiati da traumi, usura o bruxismo utilizzando materiali compositi di ultima generazione. Il risultato è un sorriso naturale e armonioso che protegge i denti da ulteriori danni.",
            frequency:
                "In base alle necessità individuali e al grado di usura o danneggiamento.",
            recommended:
                "Pazienti con scheggiature o usura per ripristinare la forma originaria del dente e proteggerlo da ulteriori danni. Indicato anche per chi desidera migliorare l'estetica del sorriso.",
        },
    ];

    const steps = [
        {
            title: "Diagnosi",
            description:
                "Identificazione della carie (anche in fase iniziale) tramite esame clinico, radiografie (Rx) o sistemi di rilevazione avanzati.",
        },
        {
            title: "Anestesia (se necessaria)",
            description:
                "Assicurazione del comfort del paziente durante la procedura.",
        },
        {
            title: "Rimozione",
            description:
                "Eliminazione selettiva del tessuto carioso e preparazione della cavità.",
        },
        {
            title: "Restauro",
            description:
                "Ricostruzione del dente utilizzando tecniche adesive e stratificazione di materiali compositi e/o cementazione di intarsi.",
        },
        {
            title: "Rifinitura ed Occlusione",
            description:
                "Lucidatura del restauro e verifica del corretto contatto con il dente antagonista.",
        },
    ];

    const targetAudience = [
        {
            title: "Pazienti con Carie Accertate",
            description:
                "Per fermare il processo distruttivo e salvare il dente evitando complicazioni più gravi come pulpiti o ascessi.",
        },
        {
            title: "Sostituzione Amalgama",
            description:
                "Pazienti con vecchie otturazioni in amalgama che desiderano sostituirle con materiali più estetici, biocompatibili e sicuri.",
        },
        {
            title: "Scheggiature o Usura",
            description:
                "Per ripristinare la forma originaria del dente e proteggerlo da ulteriori danni, migliorando anche l'aspetto estetico del sorriso.",
        },
    ];

    return (
        <div className="bg-linear-to-b from-primary-100 to-primary-200">
            <article className="container mx-auto py-36 px-4">
                <header className="flex flex-col lg:flex-row justify-between w-full min-h-96 gap-8">
                    <section className="flex flex-col items-start justify-start gap-16 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <IconBox iconSrc={service.icon} />
                            <h1 className="text-6xl font-bold">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-2xl">
                            Il trattamento della carie consiste nella rimozione
                            del tessuto dentale cariato o compromesso e
                            ricostruzione del dente mediante l&apos;uso di
                            materiali compositi o intarsi in ceramica/composito
                            che replicano fedelmente colore e forma del dente
                            naturale.
                        </p>
                    </section>
                    <Carousel images={service.images as string[]} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Restauri Estetici?
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

            {/* Come Funziona il Trattamento */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona il Trattamento delle Carie
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

            {/* Consulenza Personalizzata */}
            <article className="container mx-auto py-16 px-4">
                <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Restauri Conservativi di Qualità
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Nel nostro studio utilizziamo materiali compositi di
                        ultima generazione e tecniche adesive avanzate per
                        garantire restauri estetici, resistenti e
                        biocompatibili. Il nostro obiettivo è preservare al
                        massimo la struttura dentale naturale, assicurando
                        risultati duraturi e un sorriso sano.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Visita
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Non aspettare che la carie progredisca. Intervieni subito
                    per salvare i tuoi denti e ripristinare un sorriso sano e
                    naturale.
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
