import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";

const page = () => {
    const service = services.filter(s => s.slug === "laser")[0];

    const benefits = [
        "Prevenzione di carie e malattie gengivali e parodontali",
        "Mantenimento dell'igiene orale ottimale",
        "Sorriso più luminoso e sano",
        "Risparmio a lungo termine su cure dentali complesse",
        "Maggiore fiducia in se stessi grazie a un sorriso curato",
        "Salute generale migliorata",
    ];

    const treatment = {
        title: "Pulizia professionale",
        description:
            "Rimozione professionale del tartaro e della placca batterica per prevenire gengiviti e malattie parodontali.",
        frequency: "Ogni 6 mesi o su indicazione del dentista",
    };

    const steps = [
        {
            title: "Valutazione",
            description:
                "Esaminiamo attentamente lo stato della tua bocca e identifichiamo le aree che necessitano di maggiore attenzione.",
        },
        {
            title: "Trattamento",
            description:
                "Procediamo con la pulizia professionale utilizzando strumenti specifici e tecniche all'avanguardia.",
        },
        {
            title: "Consulenza Personalizzata",
            description:
                "Ti forniamo consigli su come mantenere una buona igiene orale a casa e prevenire problemi futuri",
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
                        <p className="text-2xl">{service.description}</p>
                    </section>
                    <Carousel images={service.images as string[]} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Igiene e Prevenzione?
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
                    <div className="bg-white text-soft shadow-xl p-8 md:p-12 rounded-2xl flex flex-col gap-6">
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
                    </div>
                </section>
            </article>

            {/* Come Funziona la Visita */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona la Visita
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Seduta di Igiene
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Non aspettare che i problemi si manifestino. La prevenzione
                    è sempre la scelta migliore per la salute dei tuoi denti.
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
