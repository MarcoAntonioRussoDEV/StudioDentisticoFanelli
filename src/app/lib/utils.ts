import { type ClassValue, clsx } from "clsx";
import { Phone } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { contacts } from "./data/contacts";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function openPhone() {
    const phoneNumber =
        contacts.find(contact => contact.icon === Phone)?.value || "0881635896";
    window.open(`tel:+39${phoneNumber}`, "_self");
}
