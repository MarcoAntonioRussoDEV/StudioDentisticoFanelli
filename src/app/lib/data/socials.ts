import { Facebook, Instagram, LucideIcon, Twitter } from "lucide-react";
import { JSX } from "react";

export interface Social {
    name: string;
    url: string;
    icon: LucideIcon;
}

export const socials: Social[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com",
        icon: Facebook,
    },
    {
        name: "Twitter",
        url: "https://www.twitter.com",
        icon: Twitter,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com",
        icon: Instagram,
    },
];
