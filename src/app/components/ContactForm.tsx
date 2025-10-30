"use client";

import React, { FormEvent, useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

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
                    alert("Message sent successfully!");
                    form.current?.reset();
                },
                error => {
                    console.error(error);
                    alert("An error occurred, please try again.");
                }
            );
    };

    return (
        <div>
            <form
                ref={form}
                onSubmit={sendEmail}
                role="form"
                aria-labelledby="form-heading"
                noValidate
                id="contact-form"
            >
                <h3
                    id="form-heading"
                    className="sr-only"
                >
                    Contact Form
                </h3>
                <div>
                    <label
                        className="p-1"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        className="border border-background p-4 rounded-lg bg-background-secondary block w-full"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        autoComplete="given-name"
                        required
                        aria-required="true"
                        aria-describedby="name-help"
                    />
                    <span
                        id="name-help"
                        className="sr-only"
                    >
                        Enter your full name
                    </span>
                </div>
                <div>
                    <label
                        className="p-1"
                        htmlFor="telephone"
                    >
                        Telefono
                    </label>
                    <input
                        id="telephone"
                        className="border border-background p-4 rounded-lg bg-background-secondary block w-full"
                        type="text"
                        name="telephone"
                        placeholder="Numero di Telefono"
                        autoComplete="tel"
                        required
                        aria-required="true"
                        aria-describedby="telephone-help"
                    />
                    <span
                        id="telephone-help"
                        className="sr-only"
                    >
                        Il tuo numero di telefono
                    </span>
                </div>
                <div>
                    <label
                        className="p-1"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="border border-background p-4 rounded-lg bg-background-secondary block w-full"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-describedby="email-help"
                    />
                    <span
                        id="email-help"
                        className="sr-only"
                    >
                        Enter your email address
                    </span>
                </div>
                <div className="col-span-2">
                    <label
                        className="p-1"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="border border-background p-4 rounded-lg bg-background-secondary block w-full"
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        required
                        aria-required="true"
                        aria-describedby="message-help"
                    ></textarea>
                    <span
                        id="message-help"
                        className="sr-only"
                    >
                        Enter your message or inquiry
                    </span>
                </div>

                <input
                    id="_subject"
                    type="hidden"
                    name="_subject"
                    value="New submission!"
                    aria-hidden="true"
                ></input>

                <div className="col-span-2 mt-16">
                    <Button variant="default">Invia Messaggio</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
