"use client";

import React, { ComponentProps } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { openPhone } from "../lib/utils";
import { Phone, Mail } from "lucide-react";
import { contacts } from "../lib/data/contacts";

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

    const navigateToContactForm = () => {
        // Se siamo già sulla homepage, scrolla
        if (window.location.pathname === "/") {
            const element = document.getElementById("contact-form");
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else {
            // Altrimenti naviga alla homepage con l'anchor
            router.push("/#contacts");
        }
    };

    const handleClick = () => {
        if (action === "phone") {
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
