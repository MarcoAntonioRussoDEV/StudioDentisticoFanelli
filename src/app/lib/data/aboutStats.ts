import { Users2, Medal, Clock, HeartHandshake, LucideIcon } from "lucide-react";

export interface AboutStat {
    title: string;
    value: string;
    icon: LucideIcon;
}

export const aboutStats: AboutStat[] = [
    {
        title: "Pazienti Soddisfatti",
        value: "2000+",
        icon: Users2,
    },
    {
        title: "Anni di Esperienza",
        value: new Date().getFullYear() - 1985 + "+",
        icon: Medal,
    },
    {
        title: "Assistenza Urgenze",
        value: "24/7",
        icon: Clock,
    },
    {
        title: "Cura e Passione",
        value: "100%",
        icon: HeartHandshake,
    },
];
