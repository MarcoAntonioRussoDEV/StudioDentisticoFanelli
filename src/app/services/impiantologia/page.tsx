import Button from "@/app/components/Button";
import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { CheckCircle, Clock } from "lucide-react";
import React from "react";

const implantologia = {
    title: "Implantologia",
    description:
        "La perdita di uno o più denti non influisce solo sull’estetica del sorriso, ma anche sulla masticazione, sulla fonazione e sulla salute generale della bocca. L’implantologia dentale rappresenta oggi la soluzione più moderna, sicura e duratura per sostituire i denti mancanti. Nel nostro studio, adottiamo le tecnologie digitali più avanzate per garantire risultati estetici e funzionali eccellenti.",
    solutions: [
        {
            title: "Implantologia mini-invasiva e digitale",
            description:
                "Grazie alla chirurgia implantare computer-guidata, pianifichiamo l’intervento in 3D, ottenendo un posizionamento preciso e sicuro degli impianti. La procedura è mini-invasiva, con tempi di guarigione più rapidi e minore discomfort post-operatorio.",
            frequency:
                "Trattamento chirurgico unico, seguito da controlli periodici programmati dal dentista.",
            steps: [
                {
                    title: "Valutazione iniziale",
                    description:
                        "Analisi radiografica e 3D per valutare quantità e qualità dell’osso.",
                },
                {
                    title: "Pianificazione digitale",
                    description:
                        "Simulazione virtuale dell’intervento per definire posizione e inclinazione ideali degli impianti.",
                },
                {
                    title: "Intervento mini-invasivo",
                    description:
                        "Inserimento preciso dell’impianto con tecniche computer guidate.",
                },
                {
                    title: "Follow-up",
                    description:
                        "Controllo della guarigione e verifica dell’integrazione ossea.",
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
                "La tecnica del carico immediato consente, nei casi idonei, di posizionare gli impianti e la protesi provvisoria fissa nella stessa giornata. È una soluzione innovativa e sicura che permette di tornare a masticare e sorridere già entro 24 ore.",
            frequency:
                "Trattamento unico con controlli periodici di mantenimento e igiene professionale.",
            steps: [
                {
                    title: "Valutazione clinica",
                    description:
                        "Analisi dell’osso e delle condizioni gengivali per stabilire l’idoneità al carico immediato.",
                },
                {
                    title: "Pianificazione digitale",
                    description:
                        "Progettazione della protesi e simulazione del posizionamento implantare computer guidato.",
                },
                {
                    title: "Inserimento dell’impianto",
                    description: "Intervento guidato mini-invasivo.",
                },
                {
                    title: "Applicazione della protesi provvisoria fissa",
                    description: "Il paziente torna a sorridere subito.",
                },
                {
                    title: "Sostituzione con la protesi definitiva",
                    description: "Dopo l’integrazione ossea completa.",
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
                "Perfetto per chi desidera un risultato immediato e dispone di un osso di buona qualità. Indicato anche per riabilitazioni complete con tecniche All-on-4 e All-on-6, che permettono di ricostruire un’intera arcata con soli 4 o 6 impianti.",
        },
    ],
    counseling:
        "Nel nostro studio accompagniamo ogni paziente in un percorso personalizzato, spiegando le differenze tra implantologia tradizionale, digitale e a carico immediato. L’obiettivo è scegliere insieme la soluzione più adatta alle esigenze cliniche, estetiche e funzionali, garantendo un sorriso sano e stabile nel tempo.",
};

const page = () => {
    return (
        <div className="bg-linear-to-b from-primary-100 to-primary-200">
            <article className="container mx-auto py-36 px-4">
                <header className="flex flex-col lg:flex-row justify-between w-full min-h-96 gap-8">
                    <section className="flex flex-col items-start justify-start gap-16 w-full">
                        <h1 className="text-6xl font-bold">
                            {implantologia.title}
                        </h1>
                        <p className="text-2xl">{implantologia.description}</p>
                    </section>
                    <Carousel />
                </header>
            </article>
            {/* Soluzioni */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-16">
                    Le nostre soluzioni implantologiche
                </h2>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {implantologia.solutions.map((solution, idx) => (
                        <div
                            className="bg-white shadow-xl p-8 rounded-2xl flex flex-col gap-8"
                            key={idx}
                        >
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                {solution.title}
                            </h3>
                            <p className="text-xl mb-2">
                                {solution.description}
                            </p>
                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="text-primary min-w-8" />
                                <span>{solution.frequency}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-2xl mb-2">
                                    Step del trattamento
                                </h4>
                                {/* Steps */}
                                <section className="grid grid-cols-1  gap-4">
                                    {solution.steps.map((step, index) => (
                                        <div
                                            className=" flex gap-4 items-center mt-2"
                                            key={index}
                                        >
                                            <div
                                                className="bg-primary-300/80 text-primary rounded-full aspect-square p-3 px-6 grid place-content-center text-4xl"
                                                key={index}
                                            >
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl">
                                                    {step.title}
                                                </h4>
                                                <p className="text-soft">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">
                                    Benefit
                                </h4>
                                <ul className="list-disc ml-6 flex flex-col gap-2">
                                    {solution.benefits.map((benefit, bidx) => (
                                        <li key={bidx}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">
                                    Consigliato per chi e perché
                                </h4>
                                <p>{solution.recommended}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
            {/* Consulenza personalizzata */}
            <article className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-center py-8">
                    Consulenza implantologica personalizzata
                </h2>
                <p className="text-xl text-center max-w-3xl mx-auto">
                    {implantologia.counseling}
                </p>
            </article>
            {/* Prenota Ora */}
            <article className="container mx-auto py-16 px-4 flex flex-col gap-16 items-center">
                <h2 className="text-4xl font-bold text-center">
                    Prenota la tua visita implantologica
                </h2>
                <p className="text-soft text-xl text-center max-w-2xl">
                    Scegli la soluzione più adatta alle tue esigenze e affidati
                    all’esperienza del nostro team.
                </p>
                <section className="flex flex-col md:flex-row gap-4 items-stretch">
                    <Button
                        variant={"default"}
                        className="w-full"
                    >
                        Prenota Ora
                    </Button>
                    <Button
                        variant={"outline"}
                        className="w-full"
                    >
                        Richiedi informazioni
                    </Button>
                </section>
            </article>
        </div>
    );
};

export default page;
