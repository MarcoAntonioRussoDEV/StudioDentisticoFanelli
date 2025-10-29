import {
    Smile,
    Wrench,
    Shield,
    Stethoscope,
    Scissors,
    Baby,
    LucideIcon,
} from "lucide-react";

interface Solution {
    title: string;
    description: string;
    frequency: string;
}

export interface Service {
    title: string;
    description: string;
    Icon: LucideIcon;
    solutions: Solution[];
    url: string;
    slug: string;
    images: string[];
}

export const services: Service[] = [
    {
        title: "Igiene e Prevenzione",
        description:
            "Mantenimento della salute orale attraverso pulizia professionale, fluoroprofilassi e controlli regolari",
        Icon: Smile,
        solutions: [
            {
                title: "Pulizia professionale",
                description:
                    "Rimozione professionale del tartaro e della placca batterica per prevenire gengiviti e malattie parodontali.",
                frequency: "Ogni 6 mesi o su indicazione del dentista",
            },
        ],
        url: "/services/igiene-e-prevenzione",
        slug: "igiene-e-prevenzione",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Protesi Dentale",
        description:
            "Protesi dentali fisse e mobili per ripristinare funzionalità ed estetica",
        Icon: Wrench,
        solutions: [
            {
                title: "Corone e ponti dentali",
                description:
                    "Le protesi fisse rappresentano la soluzione ideale per sostituire uno o più denti in modo stabile e duraturo. Nel nostro studio utilizziamo tecnologie digitali CAD-CAM per realizzare protesi di altissima precisione, perfettamente integrate con il sorriso del paziente.",
                frequency:
                    "Non è un trattamento periodico, ma una riabilitazione definitiva che può durare molti anni, se mantenuta con controlli regolari e buona igiene orale.",
            },
            {
                title: "Protesi fissa su impianti",
                description:
                    "rappresenta la soluzione più stabile e confortevole per sostituire i denti mancanti in modo permanente. A differenza delle protesi mobili, questa opzione offre un risultato naturale, duraturo e completamente integrato con il sorriso.",
                frequency:
                    "Riabilitazione definitiva con controlli di mantenimento ogni 6–12 mesi.",
            },
            {
                title: "Protesi mobile",
                description:
                    "Rappresenta una valida alternativa per recuperare funzionalità ed estetica. Le moderne protesi mobili sono leggere, biocompatibili e progettate per un comfort ottimale.",
                frequency:
                    "revisione periodica ogni 12 mesi o in caso di variazioni anatomiche.",
            },
        ],
        url: "/services/protesi-dentale",
        slug: "protesi-dentale",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Impiantologia",
        description:
            "Ripristino dei denti mancanti con impianti dentali sicuri e duraturi",
        Icon: Wrench,
        solutions: [
            {
                title: "Implantologia computer-guidata/mini-invasiva",
                description:
                    "Grazie alla chirurgia implantare computer-guidata, pianifichiamo l’intervento in 3D, ottenendo un posizionamento preciso e sicuro degli impianti. La procedura è mini-invasiva, con tempi di guarigione più rapidi e minore discomfort post-operatorio.",
                frequency:
                    "Trattamento chirurgico unico, seguito da controlli periodici programmati dal dentista.",
            },
            {
                title: "Impianti dentali a carico immediato",
                description:
                    "La tecnica del carico immediato consente, nei casi idonei, di posizionare gli impianti e la protesi provvisoria fissa nella stessa giornata. È una soluzione innovativa e sicura che permette di tornare a masticare e sorridere già entro 24 ore. Presso il nostro studio questa procedura è gestista tramite tecnologie all’avanguardia di chirurgia computer guidata",
                frequency:
                    "Trattamento unico con controlli periodici di mantenimento e igiene professionale.",
            },
            {
                title: "Protesi mobile",
                description:
                    "Rappresenta una valida alternativa per recuperare funzionalità ed estetica. Le moderne protesi mobili sono leggere, biocompatibili e progettate per un comfort ottimale.",
                frequency:
                    "revisione periodica ogni 12 mesi o in caso di variazioni anatomiche.",
            },
        ],
        url: "/services/impiantologia",
        slug: "impiantologia",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Parodontologia",
        description:
            "Prevenzione e cura delle gengive e del tessuto di supporto dei denti",
        Icon: Wrench,
        solutions: [
            {
                title: "Terapia non chirurgica e trattamento delle tasche gengivali",
                description:
                    "Nelle fasi iniziali della malattia parodontale, la terapia non chirurgica è estremamente efficace. Attraverso una pulizia profonda delle radici (scaling e root planing), il trattamento delle tasche gengivali e l’utilizzo del laser parodontale, eliminiamo placca, tartaro e batteri in profondità, favorendo la guarigione dei tessuti e la riduzione dell’infiammazione.",
                frequency:
                    "1–2 sedute di terapia iniziale, con richiami periodici ogni 3–6 mesi per il mantenimento.",
            },
            {
                title: "Chirurgia parodontale e rigenerazione",
                description:
                    "Nei casi più avanzati, quando la malattia ha compromesso il tessuto osseo e gengivale, è necessario ricorrere alla chirurgia parodontale rigenerativa. Questa terapia mira a ricostruire i tessuti di supporto danneggiati, restituendo stabilità e salute ai denti.",
                frequency:
                    "Trattamento eseguito una tantum per ogni area interessata, seguito da controlli e mantenimento periodico.",
            },
            {
                title: "Mantenimento parodontale",
                description:
                    "La fase di mantenimento è essenziale per la stabilità dei risultati nel tempo. Prevede controlli periodici e sedute di igiene professionale mirate a mantenere sotto controllo la flora batterica orale e prevenire recidive della malattia.",
                frequency:
                    "Ogni 3–6 mesi, in base al livello di rischio individuale e alla risposta alla terapia.",
            },
        ],
        url: "/services/parodontologia",
        slug: "parodontologia",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Ortodonzia",
        description: "Allineamento e salute del sorriso",
        Icon: Wrench,
        solutions: [
            {
                title: "Piano di trattamento personalizzato ed individuale",
                description:
                    "Un piano di trattamento ortodontico personalizzato viene sviluppato in base alle esigenze specifiche di ogni paziente, tenendo conto della sua età, della gravità della malocclusione e degli obiettivi estetici e funzionali desiderati.",
                frequency:
                    "Variabile in base al tipo di trattamento e alla complessità del caso, con visite di controllo regolari ogni 4-8 settimane durante la terapia.",
            },
        ],
        url: "/services/ortodonzia",
        slug: "ortodonzia",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Pedodonzia",
        description: "Cura e  prevenzione dei denti dei più piccoli",
        Icon: Wrench,
        solutions: [
            {
                title: "Piano di trattamento personalizzato ed individuale",
                description:
                    "Un piano di trattamento ortodontico personalizzato viene sviluppato in base alle esigenze specifiche di ogni paziente, tenendo conto della sua età, della gravità della malocclusione e degli obiettivi estetici e funzionali desiderati.",
                frequency: "Ogni 6 mesi",
            },
        ],
        url: "/services/pedodonzia",
        slug: "pedodonzia",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Conservativa",
        description:
            "Trattamento della carie o traumi preservando forma, funzione ed estetica",
        Icon: Wrench,
        solutions: [
            {
                title: "Piano di trattamento personalizzato ed individuale",
                description:
                    "Un piano di trattamento ortodontico personalizzato viene sviluppato in base alle esigenze specifiche di ogni paziente, tenendo conto della sua età, della gravità della malocclusione e degli obiettivi estetici e funzionali desiderati.",
                frequency:
                    "Su necessità, in seguito a diagnosi di carie, fratture o usura dentale.",
            },
        ],
        url: "/services/trattamento-delle-carie",
        slug: "trattamento-delle-carie",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Endodonzia",
        description: "Devitalizzazione e trattamento endodontici",
        Icon: Wrench,
        solutions: [
            {
                title: "Piano di trattamento personalizzato ed individuale",
                description:
                    "Un piano di trattamento ortodontico personalizzato viene sviluppato in base alle esigenze specifiche di ogni paziente, tenendo conto della sua età, della gravità della malocclusione e degli obiettivi estetici e funzionali desiderati.",
                frequency: "Su necessità",
            },
        ],
        url: "/services/devitalizzazioni",
        slug: "devitalizzazioni",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
];
