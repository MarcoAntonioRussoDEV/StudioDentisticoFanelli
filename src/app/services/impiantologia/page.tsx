import ContactButton from "@/app/components/ContactButton";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock } from "lucide-react";

const page = () => {
    const service = services.filter(s => s.slug === "impiantologia")[0];

    const treatments = [
        {
            title: "Implantologia mini-invasiva e digitale",
            description:
                "Grazie alla chirurgia implantare computer-guidata, pianifichiamo l'intervento in 3D, ottenendo un posizionamento preciso e sicuro degli impianti. La procedura è mini-invasiva, con tempi di guarigione più rapidi e minore discomfort post-operatorio.",
            frequency:
                "Trattamento chirurgico unico, seguito da controlli periodici programmati dal dentista.",
            steps: [
                {
                    title: "Valutazione iniziale",
                    description:
                        "Analisi radiografica e 3D per valutare quantità e qualità dell'osso.",
                },
                {
                    title: "Pianificazione digitale",
                    description:
                        "Simulazione virtuale dell'intervento per definire posizione e inclinazione ideali degli impianti.",
                },
                {
                    title: "Intervento mini-invasivo",
                    description:
                        "Inserimento preciso dell'impianto con tecniche computer guidate.",
                },
                {
                    title: "Follow-up",
                    description:
                        "Controllo della guarigione e verifica dell'integrazione ossea.",
                },
            ],
            benefits: [
                "Intervento rapido, preciso e indolore",
                "Riduzione del gonfiore e dei tempi di recupero",
                "Nessuna sutura (nei casi idonei)",
                "Massima conservazione dei tessuti naturali",
                "Risultati prevedibili e duraturi",
            ],
            recommended:
                "Ideale per pazienti che desiderano un intervento meno invasivo, con tempi di guarigione ridotti e alta precisione estetica.",
        },
        {
            title: "Impianti dentali a carico immediato — denti fissi in 24 ore",
            description:
                "La tecnica del carico immediato consente, nei casi idonei, di posizionare gli impianti e la protesi provvisoria fissa nella stessa giornata. È una soluzione innovativa e sicura che permette di tornare a masticare e sorridere già entro 24 ore. Presso il nostro studio questa procedura è gestita tramite tecnologie all'avanguardia di chirurgia computer guidata.",
            frequency:
                "Trattamento unico con controlli periodici di mantenimento e igiene professionale.",
            steps: [
                {
                    title: "Valutazione clinica",
                    description:
                        "Analisi dell'osso e delle condizioni gengivali per stabilire l'idoneità al carico immediato.",
                },
                {
                    title: "Pianificazione digitale",
                    description:
                        "Progettazione della protesi e simulazione del posizionamento implantare computer guidato.",
                },
                {
                    title: "Inserimento dell'impianto",
                    description: "Intervento guidato mini-invasivo.",
                },
                {
                    title: "Applicazione della protesi provvisoria fissa",
                    description: "Il paziente torna a sorridere subito.",
                },
                {
                    title: "Sostituzione con la protesi definitiva",
                    description: "Dopo l'integrazione ossea completa.",
                },
            ],
            benefits: [
                "Dente fisso in un solo giorno",
                "Nessun periodo senza denti",
                "Ripristino immediato di estetica e funzione",
                "Migliore comfort psicologico e qualità di vita",
                "Tecniche sicure e personalizzate",
            ],
            recommended:
                "Perfetto per chi desidera un risultato immediato e dispone di un osso di buona qualità. Indicato anche per riabilitazioni complete con tecniche All-on-4 e All-on-6, che permettono di ricostruire un'intera arcata con soli 4 o 6 impianti.",
        },
    ];

    const allBenefits = [
        "Intervento rapido, preciso e indolore",
        "Riduzione del gonfiore e dei tempi di recupero",
        "Massima conservazione dei tessuti naturali",
        "Dente fisso in un solo giorno",
        "Ripristino immediato di estetica e funzione",
        "Risultati prevedibili e duraturi",
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
                            La perdita di uno o più denti non influisce solo
                            sull&apos;estetica del sorriso, ma anche sulla
                            masticazione, sulla fonazione e sulla salute
                            generale della bocca. L&apos;implantologia dentale
                            rappresenta oggi la soluzione più moderna, sicura e
                            duratura per sostituire i denti mancanti. Un
                            impianto è una piccola vite in titanio
                            biocompatibile inserita nell&apos;osso mascellare,
                            che funge da radice artificiale su cui viene fissata
                            una corona o una protesi. Nel nostro studio,
                            adottiamo le tecnologie digitali più avanzate per
                            garantire risultati estetici e funzionali
                            eccellenti.
                        </p>
                    </section>
                    <Carousel images={service.images as string[]} />
                </header>
            </article>

            {/* Perché Scegliere i Nostri Servizi */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Perché Scegliere i Nostri Servizi di Implantologia?
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allBenefits.map((benefit, index) => (
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
                    Le Nostre Soluzioni Implantologiche
                </h2>
                <section className="grid grid-cols-1 gap-8">
                    {treatments.map((treatment, idx) => (
                        <div
                            className="bg-white text-soft shadow-xl p-8 md:p-12 rounded-2xl flex flex-col gap-6"
                            key={idx}
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

            {/* Come Funziona - Implantologia Mini-invasiva */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Implantologia Mini-invasiva
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {treatments[0].steps.map((step, index) => (
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

            {/* Come Funziona - Carico Immediato */}
            <article className="container mx-auto py-16 px-4 bg-white/30 rounded-3xl">
                <h2 className="text-4xl font-bold text-center py-16">
                    Come Funziona: Carico Immediato
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {treatments[1].steps.map((step, index) => (
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

            {/* Benefits */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    I Vantaggi delle Nostre Tecniche Implantologiche
                </h2>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {treatments.map((treatment, idx) => (
                        <div
                            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
                            key={idx}
                        >
                            <h3 className="text-xl font-bold text-primary mb-4">
                                {treatment.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {treatment.benefits.map((benefit, bidx) => (
                                    <li
                                        key={bidx}
                                        className="flex gap-3 items-start"
                                    >
                                        <CheckCircle className="text-success min-w-5 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </article>

            {/* Consulenza Personalizzata */}
            <article className="container mx-auto py-16 px-4">
                <div className="bg-gradient-to-br from-primary to-primary-600 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Consulenza Implantologica Personalizzata
                    </h2>
                    <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                        Nel nostro studio accompagniamo ogni paziente in un
                        percorso personalizzato, spiegando le differenze tra
                        implantologia tradizionale, digitale e a carico
                        immediato. L&apos;obiettivo è scegliere insieme la
                        soluzione più adatta alle esigenze cliniche, estetiche e
                        funzionali, garantendo un sorriso sano e stabile nel
                        tempo.
                    </p>
                </div>
            </article>

            {/* Prenota Ora */}
            <article className="container mx-auto px-4">
                <div className="border-t border-soft px-4"></div>
            </article>
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua Visita Implantologica
                </h2>
                <p className="text-soft text-xl text-center max-w-3xl">
                    Scegli la soluzione più adatta alle tue esigenze e affidati
                    all&apos;esperienza del nostro team per ritrovare il tuo
                    sorriso.
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
