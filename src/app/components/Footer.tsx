"use client";

import React from "react";
import { socials } from "../lib/data/socials";
import { services } from "../lib/data/services";
import Link from "next/link";
import { contacts } from "../lib/data/contacts";
import Button from "./Button";
import { openPhone } from "../lib/utils";

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-muted py-16 px-4">
            <article className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-16">
                {/* Social */}
                <section className="flex flex-col gap-4">
                    <h5 className="text-xl font-bold border-b">
                        Studio Dentistico Fanelli
                    </h5>
                    <p>
                        Seguici sui nostri canali social per rimanere aggiornato
                        sulle ultime novità e offerte.
                    </p>
                    <div className="flex gap-4 text-2xl">
                        {socials.map(social => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon
                                    className="text-primary"
                                    size={48}
                                />
                            </a>
                        ))}
                    </div>
                </section>
                {/* Services */}
                <section className="flex flex-col gap-4">
                    <h5 className="text-xl font-bold border-b">
                        I nostri servizi
                    </h5>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {services.map(service => (
                            <Link
                                key={service.title}
                                href={service.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </section>
                {/* Contacts */}
                <section className="flex flex-col gap-4">
                    <h5 className="text-xl font-bold border-b">Contatti</h5>
                    <div className="flex flex-col gap-4">
                        {contacts
                            .filter(
                                contact => contact.label !== "Orari di Apertura"
                            )
                            .map(contact => (
                                <a
                                    key={contact.label}
                                    className="flex items-center gap-2 hover:underline cursor-pointer"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            contact.value
                                        );
                                        alert("Copiato negli appunti");
                                    }}
                                >
                                    <contact.icon className="text-primary" />
                                    {contact.value}
                                </a>
                            ))}
                    </div>
                </section>
                {/* Open Hours */}
                <section className="flex flex-col gap-4 md:items-start">
                    <h5 className="text-xl font-bold border-b w-full">
                        Orari di Apertura
                    </h5>
                    <div className="flex flex-col gap-4 ">
                        {contacts
                            .filter(
                                contact => contact.label === "Orari di Apertura"
                            )
                            .map(contact => (
                                <p
                                    key={contact.label}
                                    className="flex items-center gap-2"
                                >
                                    <contact.icon className="text-primary " />
                                    {contact.value}
                                </p>
                            ))}
                    </div>
                    <Button
                        variant={"default"}
                        onClick={() => openPhone()}
                    >
                        Prenota Ora
                    </Button>
                </section>
            </article>
            <div className="container mx-auto border-b  border-white my-8"></div>
            <p className="text-center text-sm text-gray-400 mt-8">
                &copy; {new Date().getFullYear()} Marco Antonio Russo. Tutti i
                diritti riservati.
            </p>
        </footer>
    );
};

export default Footer;
