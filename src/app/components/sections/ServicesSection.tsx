import { services } from "@/app/lib/data/services";
import { Phone } from "lucide-react";
import React from "react";
import Button from "../Button";
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
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={index}
                            service={service}
                        />
                    ))}
                </div>
                <Button className="px-16 py-4">
                    <Phone size={20} />
                    Prenota la tua visita
                </Button>
            </div>
        </article>
    );
};

export default ServicesSection;
