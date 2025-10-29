"use client";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import Button from "../Button";

const HeroSection = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center relative">
            <Image
                src="./images/hero.jpg"
                alt="Studio Dentistico Fanelli immagine header"
                fill
                priority
                className="object-cover"
            />
            <article className="absolute bg-primary/80 w-full h-full flex flex-col gap-8 justify-center text-white">
                <section className="container mx-auto font-bold px-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src="./images/logo-bianco.svg"
                            alt="Studio Dentistico Fanelli immagine header"
                            width={160}
                            height={160}
                            className="hidden lg:inline-block"
                        />
                        <h1 className="max-w-1/2 text-7xl">
                            Studio Dentistico <strong>Fanelli</strong>
                        </h1>
                    </div>
                    <p className="max-w-2/3 mt-4 text-2xl font-normal">
                        Accogliamo il tuo sorriso con professionalità e
                        passione, unendo esperienza clinica e attenzione al
                        paziente
                    </p>
                </section>
                <section className="container mx-auto font-bold flex flex-col items-center lg:flex-row gap-4 px-4">
                    <Button
                        variant={"outline"}
                        className="bg-white hover:bg-gray-100 text-black"
                    >
                        <Phone size={20} />
                        Prenota una visita
                    </Button>
                    <Button
                        variant={"outline"}
                        className="border-white text-white hover:bg-white/10"
                    >
                        Scopri i nostri servizi
                    </Button>
                </section>
                <section className="container px-4 mx-auto flex items-center gap-2 text-lg">
                    <MapPin />
                    <p>Via Padre Antonio da Olivadi, 9 - 71121 Foggia (FG)</p>
                </section>
            </article>
        </div>
    );
};

export default HeroSection;
