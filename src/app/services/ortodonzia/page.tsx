import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";

const page = () => {
    const service = services.filter(s => s.slug === "ortodonzia")[0];

    const benefits = [
        "Miglioramento dell'estetica del sorriso e dell'armonia facciale",
        "Miglioramento della funzione masticatoria, fonetica e respiratoria",
        "Correzione dell'occlusione, prevenendo l'usura anomala dei denti",
        "Riduzione dei rischi di carie e parodontite, facilitando l'igiene orale",
        "Prevenzione e miglioramento dei disturbi dell'ATM (Articolazione Temporo-Mandibolare)",
    ];

    const steps = [
        {
            title: "Diagnosi e Pianificazione",
            description:
                "Raccolta di dati (impronte, radiografie, foto intraorali ed extraorali) e analisi cefalometrica e dei modelli per definire il piano di trattamento ideale e personalizzato.",
        },
        {
            title: "Fase Attiva",
            description:
                "Installazione e gestione dell'apparecchio scelto (fissi, mobili, allineatori trasparenti) con regolari appuntamenti per le attivazioni.",
        },
        {
            title: "Fase di Contenzione",
            description:
                "In seguito alla risoluzione della malocclusione, si passa all'applicazione di dispositivi fissi o mobili per stabilizzare il risultato ed evitare recidive.",
        },
        {
            title: "Follow-up",
            description:
                "Controlli post-trattamento per monitorare la stabilità del risultato nel tempo.",
        },
    ];

    const targetAudience = [
        {
            title: "Bambini e Adolescenti",
            description:
                "Per correggere in modo intercettivo problemi scheletrici e funzionali in fase di crescita, riducendo la complessità dei trattamenti futuri.",
        },
        {
            title: "Adulti",
            description:
                "Per correggere l'occlusione e la funzione o migliorare la distribuzione degli spazi in vista di trattamenti protesici/conservativi o implantari. In casi specifici dopo attenta diagnosi è possibile procedere con allineatori invisibili.",
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
                            L&apos;ortodonzia è la branca dell&apos;odontoiatria
                            che si occupa della correzione delle malocclusioni
                            dentali e scheletriche, degli affollamenti e delle
                            problematiche funzionali per ottenere un sorriso
                            allineato e un&apos;occlusione stabile, estetica e
                            funzionale.
                        </p>
                    </section>
                    <Carousel images={service.images as string[]} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Ortodonzia?
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

            {/* Piano di Trattamento */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Piano di Trattamento Personalizzato
                </h2>
                <div className="bg-white text-soft shadow-xl p-8 md:p-12 rounded-2xl flex flex-col gap-6 max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed">
                        Nel nostro studio definiamo un piano di trattamento
                        personalizzato ed individuale. La frequenza dei
                        controlli è variabile e strettamente connessa alla
                        diagnosi e al dispositivo utilizzato per la risoluzione
                        della malocclusione.
                    </p>
                    <div className="flex items-start gap-2 bg-primary-50 p-4 rounded-lg">
                        <Clock className="text-primary min-w-8 mt-1" />
                        <div>
                            <p className="font-semibold text-primary mb-1">
                                Frequenza controlli:
                            </p>
                            <p className="text-soft">
                                Generalmente i controlli sono ravvicinati (ogni
                                4-8 settimane) durante la terapia attiva.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            {/* Come Funziona il Trattamento Ortodontico */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona il Trattamento Ortodontico
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
                        Consulenza Ortodontica Personalizzata
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Ogni sorriso è unico e merita un approccio
                        personalizzato. Nel nostro studio analizziamo
                        attentamente la tua situazione clinica per proporti la
                        soluzione ortodontica più adatta alle tue esigenze,
                        garantendo risultati estetici e funzionali duraturi.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Visita Ortodontica
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Inizia il tuo percorso verso un sorriso allineato e
                    armonioso. Contattaci per una valutazione ortodontica
                    completa e personalizzata.
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
