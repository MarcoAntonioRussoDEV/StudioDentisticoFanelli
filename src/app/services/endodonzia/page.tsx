import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";
import React from "react";

const page = () => {
    const service = services.filter(s => s.slug === "endodonzia")[0];

    const benefits = [
        "Eliminazione definitiva del dolore (pulpite) e dell'infezione",
        "Salvaguardia del dente in arcata, evitando l'estrazione e i costi futuri di un impianto o ponte",
        "Risoluzione di lesioni croniche (granulomi o cisti) all'apice della radice",
        "Mantenimento della funzione masticatoria naturale",
        "Esecuzione rapida e precisa grazie alle moderne tecnologie come i localizzatori apicali e sistemi ingrandenti",
    ];

    const treatments = [
        {
            title: "Trattamento Endodontico (Devitalizzazione)",
            description:
                "Il trattamento endodontico consiste nella rimozione completa della polpa infetta o infiammata all'interno dei canali radicolari, disinfezione dello spazio e sigillatura tridimensionale. Questo processo elimina il dolore e l'infezione, salvando il dente ed evitando l'estrazione.",
            frequency:
                "Su necessità, in presenza di pulpiti irreversibili, necrosi pulpare, ascessi o granulomi.",
            recommended:
                "Pazienti con carie molto profonde quando l'infezione ha raggiunto la polpa e provoca dolore pulsante o persistente (pulpite irreversibile). Essenziale anche per pazienti con ascessi o granulomi per curare l'infezione cronica all'apice della radice.",
        },
        {
            title: "Ritrattamento Endodontico",
            description:
                "Quando una vecchia devitalizzazione non ha avuto successo o si è reinfettata nel tempo, il ritrattamento endodontico permette di rimuovere i materiali di riempimento precedenti e ripetere la cura canalare. Utilizziamo strumenti avanzati e microscopi operatori per garantire il massimo successo.",
            frequency:
                "Su necessità, in caso di fallimento di precedenti trattamenti endodontici o persistenza di lesioni periapicali.",
            recommended:
                "Pazienti con vecchie devitalizzazioni infette che presentano dolore, gonfiore o lesioni radiografiche. Il ritrattamento rappresenta l'ultima possibilità per salvare il dente prima dell'estrazione.",
        },
    ];

    const steps = [
        {
            title: "Diagnosi (Esame ed Rx)",
            description:
                "Conferma della diagnosi (spesso in presenza di dolore acuto o di lesioni periapicali) e valutazione della complessità del sistema canalare.",
        },
        {
            title: "Anestesia e Isolamento",
            description:
                "Applicazione di anestesia locale e isolamento del dente con la diga di gomma per garantire un campo operatorio sterile.",
        },
        {
            title: "Accesso e Strumentazione",
            description:
                "Apertura della camera pulpare, rimozione del tessuto infetto e sagomatura meccanica dei canali radicolari.",
        },
        {
            title: "Irrigazione e Disinfezione",
            description:
                "Pulizia chimica approfondita dei canali per eliminare tutti i batteri residui.",
        },
        {
            title: "Otturazione (Riempimento)",
            description:
                "Sigillatura ermetica dei canali con materiale biocompatibile (solitamente guttaperca), seguita dal restauro provvisorio della corona.",
        },
        {
            title: "Restauro Definitivo",
            description:
                "Trattamento di ricostruzione finale del dente trattato, spesso con perno e corona, per proteggerlo da fratture.",
        },
    ];

    const targetAudience = [
        {
            title: "Carie Profonde e Pulpiti",
            description:
                "Quando l'infezione ha raggiunto la polpa e provoca dolore pulsante o persistente (pulpite irreversibile), la devitalizzazione è l'unica soluzione per eliminare il dolore e salvare il dente.",
        },
        {
            title: "Ascessi e Granulomi",
            description:
                "Per curare l'infezione cronica all'apice della radice, risolvendo gonfiori, fistole e lesioni ossee visibili alla radiografia.",
        },
        {
            title: "Ritrattamenti",
            description:
                "Pazienti con vecchie devitalizzazioni infette che necessitano di rimuovere i materiali di riempimento precedenti e ripetere la cura canalare per salvare il dente.",
        },
    ];

    return (
        <div className="bg-linear-to-b from-primary-100 to-primary-200">
            <article className="container mx-auto py-36 px-4">
                <header className="flex flex-col lg:flex-row justify-between w-full min-h-96 gap-8">
                    <section className="flex flex-col items-start justify-start gap-16 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <IconBox Icon={service.Icon} />
                            <h1 className="text-6xl font-bold">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-2xl">
                            Il trattamento endodontico consiste nella rimozione
                            completa della polpa infetta o infiammata
                            all&apos;interno dei canali radicolari, disinfezione
                            dello spazio e sigillatura tridimensionale. Questo
                            processo elimina il dolore e l&apos;infezione,
                            salvando il dente.
                        </p>
                    </section>
                    <Carousel images={service.images} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Endodonzia?
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

            {/* Come Funziona il Trattamento Endodontico */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona il Trattamento Endodontico
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        Endodonzia di Precisione
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Nel nostro studio utilizziamo tecnologie avanzate come
                        localizzatori apicali elettronici, strumentazione
                        meccanica rotatoria e sistemi ingrandenti per garantire
                        trattamenti endodontici precisi ed efficaci. Il nostro
                        obiettivo è eliminare l&apos;infezione, preservare il
                        dente naturale e restituirti un sorriso senza dolore.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Visita Endodontica
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Non sopportare il dolore dentale. La devitalizzazione può
                    salvare il tuo dente ed eliminare definitivamente
                    l&apos;infezione e il dolore.
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
