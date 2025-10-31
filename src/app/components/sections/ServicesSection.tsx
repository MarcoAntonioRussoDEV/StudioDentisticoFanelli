"use client";

import { services } from "@/app/lib/data/services";
import React from "react";
import ContactButton from "../ContactButton";
import ServicesCard from "../ServicesCard";

const ServicesSection = () => {
    return (
        <article
            className="py-16"
            id="services"
        >
            <div className="container px-4 mx-auto flex flex-col gap-8 items-center">
                <h2 className="text-4xl font-bold text-center">
                    I Nostri Servizi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={index}
                            service={service}
                        />
                    ))}
                </div>
                <ContactButton
                    action="phone"
                    className="px-16 py-6 rounded-3xl"
                    showIcon
                />
            </div>
        </article>
    );
};

export default ServicesSection;
