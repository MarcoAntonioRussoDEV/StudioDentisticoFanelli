import { Facebook, Instagram, LucideIcon, Youtube } from "lucide-react";

export interface Social {
    name: string;
    url: string;
    icon: LucideIcon;
}

export const socials: Social[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/studiodentisticofanelli",
        icon: Facebook,
    },
    {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCwo7o3SjeXaBmgdoQjAK0YA",
        icon: Youtube,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/studio_dentistico_fanelli/?igsh=MTl2YnI2MTF2bnVqdg%3D%3D#",
        icon: Instagram,
    },
];
