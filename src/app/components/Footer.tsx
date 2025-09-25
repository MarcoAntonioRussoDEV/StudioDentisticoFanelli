import React from "react";
import { socials } from "../lib/data/socials";
import { services } from "../lib/data/services";
import Link from "next/link";
import { contacts } from "../lib/data/contacts";
import Button from "./Button";

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-muted py-16 px-4">
            <article className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-16">
                {/* Social */}
                <section className="flex flex-col gap-4">
                    <h5 className="text-xl font-bold">
                        Studio Dentistico Fanelli
                    </h5>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod asperiores est sapiente suscipit, dignissimos
                        magni
                    </p>
                    <div className="flex gap-4 text-2xl">
                        {socials.map(social => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </section>
                {/* Services */}
                <section className="flex flex-col gap-4">
                    <h5 className="text-xl font-bold">I nostri servizi</h5>
                    <div className="flex flex-col gap-4">
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
                    <h5 className="text-xl font-bold">Contatti</h5>
                    <div className="flex flex-col gap-4">
                        {contacts
                            .filter(
                                contact => contact.label !== "Orari di Apertura"
                            )
                            .map(contact => (
                                <Link
                                    key={contact.label}
                                    href={"contact.url"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:underline"
                                >
                                    <contact.icon className="text-accent" />
                                    {contact.value}
                                </Link>
                            ))}
                    </div>
                </section>
                {/* Open Hours */}
                <section className="flex flex-col gap-4 lg:items-start">
                    <h5 className="text-xl font-bold">Orari di Apertura</h5>
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
                                    <contact.icon className="text-accent " />
                                    {contact.value}
                                </p>
                            ))}
                    </div>
                    <Button variant={"accent"}>Prenota Ora</Button>
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
