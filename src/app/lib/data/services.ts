import { DifferencesProps } from "@/app/components/Differences";
import { withBasePath } from "../basePath";
import {
    Smile,
    Wrench,
    Shield,
    Stethoscope,
    Baby,
    LucideIcon,
} from "lucide-react";

export interface Service {
    title: string;
    description: string;
    Icon: LucideIcon;
    url: string;
    slug: string;
    images: string[] | DifferencesProps[];
}

const getServiceImages = (slug: string, count: number): string[] => {
    return Array.from({ length: count }, (_, i) => {
        return withBasePath(`/images/services/${slug}/${i + 1}.png`);
    });
};

const getDiffImages = (slug: string, count: number): DifferencesProps[] => {
    return Array.from({ length: count }, (_, i) => {
        return {
            before: withBasePath(`/images/services/${slug}/${i + 1}.png`),
            after: withBasePath(`/images/services/${slug}/${i + 1}-post.png`),
        };
    }) as DifferencesProps[];
};

export const services: Service[] = [
    {
        title: "Igiene e Prevenzione",
        description:
            "Mantenimento della salute orale attraverso pulizia professionale, fluoroprofilassi e controlli regolari",
        Icon: Smile,
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
        url: "/services/protesi-dentale",
        slug: "protesi-dentale",
        images: getDiffImages("protesi-dentale", 3),
    },
    {
        title: "Impiantologia",
        description:
            "Ripristino dei denti mancanti con impianti dentali sicuri e duraturi",
        Icon: Wrench,
        url: "/services/impiantologia",
        slug: "impiantologia",
        images: getServiceImages("impiantologia", 6),
    },
    {
        title: "Parodontologia",
        description:
            "Prevenzione e cura delle gengive e del tessuto di supporto dei denti",
        Icon: Wrench,
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
        description: "Cura e prevenzione dei denti dei più piccoli",
        Icon: Baby,
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
            "Trattamento della carie e restauri estetici preservando forma, funzione ed estetica",
        Icon: Shield,
        url: "/services/conservativa",
        slug: "conservativa",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Endodonzia",
        description: "Trattamento e ritrattamento endodontico",
        Icon: Stethoscope,
        url: "/services/endodonzia",
        slug: "endodonzia",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
];
