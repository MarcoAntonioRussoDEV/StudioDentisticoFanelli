import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";
import { DifferencesProps } from "@/app/components/Differences";

const page = () => {
    const service = services.filter(s => s.slug === "protesi-dentale")[0];
    console.log("service: ", service.images);

    const benefits = [
        "Ripristino immediato della funzionalità masticatoria",
        "Miglioramento dell'estetica e dell'armonia del sorriso",
        "Lunga durata nel tempo",
        "Comfort e biocompatibilità dei materiali",
        "Precisione millimetrica grazie alla tecnologia digitale",
        "Stabilità e comfort senza rischio di mobilità",
        "Maggiore fiducia e sicurezza nel sorriso",
    ];

    const treatments = [
        {
            title: "Protesi fissa: corone e ponti dentali",
            description:
                "Le protesi fisse rappresentano la soluzione ideale per sostituire uno o più denti in modo stabile e duraturo. Nel nostro studio utilizziamo tecnologie digitali CAD-CAM per realizzare protesi di altissima precisione, perfettamente integrate con il sorriso del paziente.",
            types: [
                {
                    title: "Corone dentali digitali",
                    description:
                        "ricoprono e proteggono denti danneggiati o devitalizzati. Realizzate in zirconia o disilicato, garantiscono un risultato estetico naturale e un'eccellente resistenza meccanica.",
                },
                {
                    title: "Ponte dentale digitale",
                    description:
                        "consente di sostituire uno o più denti mancanti, appoggiandosi ai denti adiacenti. È una riabilitazione fissa, stabile e duratura.",
                },
                {
                    title: "Faccette estetiche in ceramica",
                    description:
                        "sottili lamine che migliorano estetica e forma del sorriso, correggendo discromie, spazi o piccole fratture.",
                },
            ],
            frequency:
                "Non è un trattamento periodico, ma una riabilitazione definitiva che può durare molti anni, se mantenuta con controlli regolari e buona igiene orale.",
            recommended:
                "Ideale per chi ha perso uno o più denti, oppure presenta denti danneggiati, devitalizzati o discromici. Indicato anche in caso di fratture dentali o per migliorare l'estetica del sorriso.",
        },
        {
            title: "Protesi fissa su impianti",
            description:
                "La protesi fissa su impianti rappresenta la soluzione più stabile e confortevole per sostituire i denti mancanti in modo permanente. A differenza delle protesi mobili, questa opzione offre un risultato naturale, duraturo e completamente integrato con il sorriso.",
            frequency:
                "Riabilitazione definitiva con controlli di mantenimento ogni 6–12 mesi.",
            recommended:
                "Ideale per chi desidera una soluzione definitiva e naturale, senza ricorrere a protesi mobili. Perfetta per riabilitazioni parziali o totali, anche in pazienti con edentulia completa.",
        },
        {
            title: "Protesi mobile: quando e perché",
            description:
                "Quando non è possibile utilizzare una protesi fissa, la protesi mobile rappresenta una valida alternativa per recuperare funzionalità ed estetica. Le moderne protesi mobili sono leggere, biocompatibili e progettate per un comfort ottimale.",
            frequency:
                "Può essere realizzata e adattata nel tempo; si consiglia una revisione periodica ogni 12 mesi o in caso di variazioni anatomiche.",
            recommended:
                "Indicata per pazienti che hanno perso più elementi dentari o l'intera arcata, e non possono ricorrere a una soluzione fissa. Ideale anche come protesi provvisoria in attesa di riabilitazione definitiva.",
        },
    ];

    const stepsProtesiFissa = [
        {
            title: "Valutazione",
            description:
                "Analizziamo la situazione clinica e le esigenze estetiche e funzionali del paziente.",
        },
        {
            title: "Progettazione digitale",
            description:
                "Realizziamo un modello 3D della protesi per simulare il risultato finale.",
        },
        {
            title: "Preparazione e impronta digitale",
            description:
                "Preleviamo impronte precise con scanner intraorale, senza paste fastidiose.",
        },
        {
            title: "Applicazione e rifinitura",
            description:
                "Cementiamo la protesi e verifichiamo comfort, occlusione e resa estetica.",
        },
    ];

    const stepsProtesiImpianti = [
        {
            title: "Pianificazione",
            description:
                "Studio personalizzato della forma del sorriso e della disposizione dei denti.",
        },
        {
            title: "Inserimento implantare",
            description:
                "Posizionamento preciso degli impianti con guida digitale.",
        },
        {
            title: "Fase protesica",
            description: "Applicazione della struttura fissa su misura.",
        },
        {
            title: "Follow-up e igiene",
            description:
                "Monitoraggio periodico per garantire durata e salute peri-implantare.",
        },
    ];

    const stepsProtesiMobile = [
        {
            title: "Valutazione e impronta",
            description:
                "Esame del cavo orale e presa delle impronte per garantire una perfetta aderenza.",
        },
        {
            title: "Realizzazione personalizzata",
            description:
                "Creazione della protesi su misura con materiali di ultima generazione.",
        },
        {
            title: "Prova e adattamento",
            description:
                "Regoliamo comfort e stabilità per una masticazione naturale.",
        },
        {
            title: "Istruzioni e manutenzione",
            description:
                "Forniamo indicazioni su igiene, conservazione e gestione quotidiana della protesi.",
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
                        <p className="text-2xl">{service.description}</p>
                    </section>
                    <Carousel
                        differencesMap={service.images as DifferencesProps[]}
                        isDiff
                    />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Protesi Dentale?
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

                            {treatment.types && (
                                <div className="pl-4 border-l-4 border-primary-300">
                                    <h4 className="font-bold text-lg mb-4 text-primary">
                                        Tipologie di trattamenti:
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        {treatment.types.map((type, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3"
                                            >
                                                <span className="text-primary font-bold mt-1">
                                                    •
                                                </span>
                                                <div>
                                                    <strong className="text-primary">
                                                        {type.title}:
                                                    </strong>{" "}
                                                    {type.description}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

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

            {/* Come Funziona - Protesi Fissa */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Protesi Fissa
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stepsProtesiFissa.map((step, index) => (
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

            {/* Come Funziona - Protesi su Impianti */}
            <article className="container mx-auto py-16 px-4 bg-white/30 rounded-3xl">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Protesi su Impianti
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stepsProtesiImpianti.map((step, index) => (
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

            {/* Come Funziona - Protesi Mobile */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Protesi Mobile
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stepsProtesiMobile.map((step, index) => (
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
                        Consulenza Personalizzata
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Nel nostro studio accompagniamo ogni paziente nella
                        scelta della protesi più adatta alle proprie necessità,
                        illustrando materiali, vantaggi e durata di ciascuna
                        soluzione. L&apos;obiettivo è garantire sempre un
                        equilibrio tra funzionalità, estetica e benessere a
                        lungo termine.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Consulenza
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Ripristina il tuo sorriso con una protesi dentale su misura.
                    Contattaci per una valutazione personalizzata e scopri la
                    soluzione più adatta alle tue esigenze.
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
