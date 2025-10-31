"use client";

import React from "react";
import Image from "next/image";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";
import { contacts } from "../lib/data/contacts";
import { Phone } from "lucide-react";

const Cta = () => {
    const phoneNumber = contacts.find(contact => contact.icon === Phone)?.value;
    return (
        <FloatingWhatsApp
            phoneNumber={`+39${phoneNumber}`}
            accountName="Studio Dentistico Fanelli"
            avatar="/images/logo-bianco.svg"
            statusMessage="Rispondiamo in pochi minuti"
            chatMessage="Ciao! 👋 Come possiamo aiutarti oggi?"
            placeholder="Scrivi un messaggio"
            darkMode={false}
            allowClickAway={false}
            allowEsc={true}
            notification={false}
            notificationSound={false}
        />
    );
};

export default Cta;
