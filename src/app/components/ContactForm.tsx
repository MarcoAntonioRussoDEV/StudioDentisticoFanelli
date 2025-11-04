"use client";

import React, { FormEvent, useRef, useState } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import Link from "next/link";

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

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSubmitting(true);

        // Track inizio invio form
        trackEvent("form_submit_start", {
            form_type: "contact_form",
            form_location: window.location.pathname,
        });

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
                }
            )
            .then(
                result => {
                    console.log(result.text);

                    // Track successo invio form (CONVERSIONE!)
                    trackEvent("form_submit_success", {
                        form_type: "contact_form",
                        form_location: window.location.pathname,
                        value: 1, // Valore della conversione
                    });

                    alert(
                        "Messaggio inviato con successo! Ti contatteremo presto."
                    );
                    form.current?.reset();
                },
                error => {
                    console.error(error);

                    // Track errore invio form
                    trackEvent("form_submit_error", {
                        form_type: "contact_form",
                        form_location: window.location.pathname,
                        error_message: error.text || "Unknown error",
                    });

                    alert("Si è verificato un errore. Riprova più tardi.");
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            id="contacts"
        >
            <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Inviaci un Messaggio
                </h3>
                <p className="text-gray-600 text-lg">
                    Compila il form e ti risponderemo il prima possibile
                </p>
            </div>

            <form
                ref={form}
                onSubmit={sendEmail}
                role="form"
                aria-labelledby="form-heading"
                noValidate
                id="contact-form"
                className="space-y-6"
            >
                <h4
                    id="form-heading"
                    className="sr-only"
                >
                    Contact Form
                </h4>

                {/* Nome */}
                <div className="relative">
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="name"
                    >
                        Nome Completo
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User
                                className="text-primary"
                                size={20}
                            />
                        </div>
                        <input
                            id="name"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                            type="text"
                            name="name"
                            placeholder="Mario Rossi"
                            autoComplete="given-name"
                            required
                            aria-required="true"
                            aria-describedby="name-help"
                        />
                    </div>
                    <span
                        id="name-help"
                        className="sr-only"
                    >
                        Inserisci il tuo nome completo
                    </span>
                </div>

                {/* Telefono */}
                <div className="relative">
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="telephone"
                    >
                        Numero di Telefono
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Phone
                                className="text-primary"
                                size={20}
                            />
                        </div>
                        <input
                            id="telephone"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                            type="tel"
                            name="telephone"
                            placeholder="+39 333 123 4567"
                            autoComplete="tel"
                            required
                            aria-required="true"
                            aria-describedby="telephone-help"
                        />
                    </div>
                    <span
                        id="telephone-help"
                        className="sr-only"
                    >
                        Il tuo numero di telefono
                    </span>
                </div>

                {/* Email */}
                <div className="relative">
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail
                                className="text-primary"
                                size={20}
                            />
                        </div>
                        <input
                            id="email"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                            type="email"
                            name="email"
                            placeholder="mario.rossi@example.com"
                            autoComplete="email"
                            required
                            aria-required="true"
                            aria-describedby="email-help"
                        />
                    </div>
                    <span
                        id="email-help"
                        className="sr-only"
                    >
                        Inserisci il tuo indirizzo email
                    </span>
                </div>

                {/* Messaggio */}
                <div className="relative">
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="message"
                    >
                        Messaggio
                    </label>
                    <div className="relative">
                        <div className="absolute top-4 left-4 pointer-events-none">
                            <MessageSquare
                                className="text-primary"
                                size={20}
                            />
                        </div>
                        <textarea
                            id="message"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                            name="message"
                            placeholder="Scrivi qui il tuo messaggio..."
                            rows={6}
                            required
                            aria-required="true"
                            aria-describedby="message-help"
                        ></textarea>
                    </div>
                    <span
                        id="message-help"
                        className="sr-only"
                    >
                        Inserisci il tuo messaggio o richiesta
                    </span>
                </div>

                <input
                    id="_subject"
                    type="hidden"
                    name="_subject"
                    value="Nuovo messaggio dal sito Studio Fanelli"
                    aria-hidden="true"
                />

                <div className="pt-4 w-full">
                    <Button
                        variant="default"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                        fill
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Invio in corso...
                            </>
                        ) : (
                            <>
                                <Mail size={20} />
                                Invia Messaggio
                            </>
                        )}
                    </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                    Inviando questo form accetti la nostra{" "}
                    <Link
                        href="/privacy-policy"
                        className="text-primary hover:underline font-semibold"
                    >
                        Informativa Privacy
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
