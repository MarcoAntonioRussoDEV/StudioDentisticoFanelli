import {
    Smile,
    Crown,
    Sparkles,
    RefreshCw,
    HeartHandshake,
    Shield,
    LucideIcon,
} from "lucide-react";

export interface Service {
    title: string;
    description: string;
    Icon: LucideIcon;
    solutions: string[];
    url: string;
}

export const services: Service[] = [
    {
        title: "Igiene e Prevenzione",
        description:
            "Pulizia professionale, sbiancamento e trattamenti preventivi per mantenere il sorriso sano.",
        Icon: Smile,
        solutions: [
            "Detartrasi",
            "Fluoroprofilassi",
            "Sbiancamento dentale",
            "Sigillature",
        ],
        url: "/services/hygiene-and-prevention",
    },
    {
        title: "Protesi Dentarie",
        description:
            "Soluzioni personalizzate per la sostituzione dei denti mancanti, migliorando funzionalità ed estetica.",
        Icon: Crown,
        solutions: ["Corone", "Ponti", "Protesi mobili"],
        url: "/services/dental-prosthetics",
    },
    {
        title: "Estetica Dentale",
        description:
            "Trattamenti per migliorare l'aspetto del sorriso, inclusi faccette e rimodellamento gengivale.",
        Icon: Sparkles,
        solutions: ["Faccette", "Sbiancamento", "Bonding"],
        url: "/services/dental-aesthetics",
    },
    {
        title: "Ortodonzia",
        description:
            "Allineamento dei denti e correzione della mascella per un sorriso armonioso e funzionale.",
        Icon: RefreshCw,
        solutions: ["Apparecchi fissi", "Invisalign", "Bite"],
        url: "/services/orthodontics",
    },
    {
        title: "Implantologia",
        description:
            "Impianti dentali di ultima generazione per sostituire i denti mancanti.",
        Icon: HeartHandshake,
        solutions: ["Impianti singoli", "All-on-4", "Rigenerazione ossea"],
        url: "/services/implantology",
    },
    {
        title: "Conservativa",
        description:
            "Trattamenti per la cura delle carie e il ripristino della funzionalità dei denti.",
        Icon: Shield,
        solutions: ["Otturazioni", "Devitalizzazioni", "Ricostruzioni"],
        url: "/services/conservative-dentistry",
    },
];
