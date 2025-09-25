import {
    Smile,
    Crown,
    Sparkles,
    RefreshCw,
    HeartHandshake,
    Shield,
    LucideIcon,
} from "lucide-react";

interface Solution {
    title: string;
    description: string;
    duration?: string;
    frequency?: string;
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

export const services = [
    {
        title: "Igiene e Prevenzione",
        description:
            "Pulizia professionale, sbiancamento e trattamenti preventivi per mantenere il sorriso sano.",
        Icon: Smile,
        solutions: [
            {
                title: "Detartrasi",
                description:
                    "Rimozione professionale del tartaro e della placca batterica per prevenire gengiviti e malattie parodontali.",
                duration: "30-45 minuti",
                frequency: "Ogni 6 mesi",
            },
            {
                title: "Fluoroprofilassi topica",
                description:
                    "Applicazione di fluoro per rinforzare lo smalto dentale e prevenire la formazione di carie.",
                duration: "15-20 minuti",
                frequency: "Su indicazione",
            },
            {
                title: "Sbiancamento dentale",
                description:
                    "Trattamento estetico per migliorare il colore dei denti e ottenere un sorriso più luminoso.",
                duration: "60-90 minuti",
                frequency: "Una volta all'anno o su indicazione",
            },
            {
                title: "Sigillature",
                description:
                    "Protezione dei solchi dei denti posteriori per prevenire la formazione di carie, ideale per bambini e adolescenti.",
                duration: "20-30 minuti",
                frequency: "Una volta",
            },
            {
                title: "Pulizia professionale",
                description:
                    "Rimozione di placca e tartaro dalle superfici dentali per mantenere una buona salute orale.",
                duration: "45-60 minuti",
                frequency: "Ogni 6 mesi o secondo necessità",
            },
            {
                title: "Curettage e Levigatura radicolare",
                description:
                    "Trattamento per la rimozione di placca e tartaro dalle tasche gengivali profonde, migliorando la salute delle gengive.",
                duration: "60-90 minuti",
                frequency: "Su indicazione del dentista",
            },
            {
                title: "Terapia desensibilizzante",
                description:
                    "Trattamenti per ridurre la sensibilità dentale causata da smalto usurato o recessione gengivale.",
                duration: "30-45 minuti",
                frequency: "Su indicazione del dentista",
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
    // {
    //     title: "Protesi Dentarie",
    //     description:
    //         "Soluzioni personalizzate per la sostituzione dei denti mancanti, migliorando funzionalità ed estetica.",
    //     Icon: Crown,
    //     solutions: ["Corone", "Ponti", "Protesi mobili"],
    //     url: "/services/protesi-dentarie",
    //     slug: "protesi-dentarie",
    //     images: [
    //         "https://picsum.photos/200/300",
    //         "https://picsum.photos/201/300",
    //         "https://picsum.photos/202/300",
    //     ],
    // },
    // {
    //     title: "Estetica Dentale",
    //     description:
    //         "Trattamenti per migliorare l'aspetto del sorriso, inclusi faccette e rimodellamento gengivale.",
    //     Icon: Sparkles,
    //     solutions: ["Faccette", "Sbiancamento", "Bonding"],
    //     url: "/services/estetica-dentale",
    //     slug: "estetica-dentale",
    //     images: [
    //         "https://picsum.photos/200/300",
    //         "https://picsum.photos/201/300",
    //         "https://picsum.photos/202/300",
    //     ],
    // },
    // {
    //     title: "Ortodonzia",
    //     description:
    //         "Allineamento dei denti e correzione della mascella per un sorriso armonioso e funzionale.",
    //     Icon: RefreshCw,
    //     solutions: ["Apparecchi fissi", "Invisalign", "Bite"],
    //     url: "/services/ortodonzia",
    //     slug: "ortodonzia",
    //     images: [
    //         "https://picsum.photos/200/300",
    //         "https://picsum.photos/201/300",
    //         "https://picsum.photos/202/300",
    //     ],
    // },
    // {
    //     title: "Implantologia",
    //     description:
    //         "Impianti dentali di ultima generazione per sostituire i denti mancanti.",
    //     Icon: HeartHandshake,
    //     solutions: ["Impianti singoli", "All-on-4", "Rigenerazione ossea"],
    //     url: "/services/implantologia",
    //     slug: "implantologia",
    //     images: [
    //         "https://picsum.photos/200/300",
    //         "https://picsum.photos/201/300",
    //         "https://picsum.photos/202/300",
    //     ],
    // },
    // {
    //     title: "Conservativa",
    //     description:
    //         "Trattamenti per la cura delle carie e il ripristino della funzionalità dei denti.",
    //     Icon: Shield,
    //     solutions: ["Otturazioni", "Devitalizzazioni", "Ricostruzioni"],
    //     url: "/services/conservativa",
    //     slug: "conservativa",
    //     images: [
    //         "https://picsum.photos/200/300",
    //         "https://picsum.photos/201/300",
    //         "https://picsum.photos/202/300",
    //     ],
    // },
];
