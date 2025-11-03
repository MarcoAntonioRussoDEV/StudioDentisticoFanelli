"use client";

import React, { ComponentProps } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { openPhone } from "../lib/utils";
import { Phone, Mail } from "lucide-react";
import { contacts } from "../lib/data/contacts";

// Dichiarazione TypeScript per gtag
declare global {
    interface Window {
        gtag?: (
            command: string,
            eventName: string,
            params?: Record<string, string | number | boolean>
        ) => void;
    }
}

interface ContactButtonProps
    extends Omit<ComponentProps<typeof Button>, "onClick"> {
    action: "phone" | "form";
    children?: React.ReactNode;
    showIcon?: boolean;
    showPhoneNumber?: boolean;
}

const ContactButton = ({
    action,
    children,
    showIcon = true,
    showPhoneNumber = false,
    ...buttonProps
}: ContactButtonProps) => {
    const router = useRouter();
    const phoneNumber =
        contacts.find(contact => contact.icon === Phone)?.value || "0881635896";

    // Funzione helper per tracciare eventi GA4
    const trackEvent = (
        eventName: string,
        params?: Record<string, string | number | boolean>
    ) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, {
                ...params,
                page_location: window.location.href,
                page_title: document.title,
            });
        }
    };

    const navigateToContactForm = () => {
        // Track evento "visualizza form contatti"
        trackEvent("view_contact_form", {
            button_location: window.location.pathname,
        });

        // Se siamo già sulla homepage, scrolla con offset per la navbar
        if (window.location.pathname === "/") {
            const element = document.getElementById("contact-form");
            if (element) {
                const navbarHeight = 80; // Altezza approssimativa della navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        } else {
            // Altrimenti naviga alla homepage con l'anchor
            router.push("/#contacts");
        }
    };

    const handleClick = () => {
        if (action === "phone") {
            // Track chiamata telefonica
            trackEvent("click_to_call", {
                phone_number: phoneNumber,
                button_location: window.location.pathname,
                button_text:
                    typeof children === "string" ? children : "Chiama Ora",
            });
            openPhone();
        } else {
            navigateToContactForm();
        }
    };

    const getDefaultContent = () => {
        if (children) return children;

        if (action === "phone") {
            return (
                <>
                    {showIcon && <Phone size={20} />}
                    {showPhoneNumber ? phoneNumber : "Chiama Ora"}
                </>
            );
        } else {
            return (
                <>
                    {showIcon && <Mail size={20} />}
                    Prenota una Visita
                </>
            );
        }
    };

    return (
        <Button
            onClick={handleClick}
            {...buttonProps}
        >
            {getDefaultContent()}
        </Button>
    );
};

export default ContactButton;
