"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Button from "../Button";
import ContactButton from "../ContactButton";
import Link from "next/link";
import { withBasePath } from "@/app/lib/basePath";

const HeroSection = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center relative">
            <Image
                src={withBasePath("/images/hero.jpg")}
                alt="Studio Dentistico Fanelli immagine header"
                fill
                priority
                className="object-cover"
            />
            <article className="absolute bg-primary/80 w-full h-full flex flex-col gap-8 justify-center text-white">
                <section className="container mx-auto font-bold px-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src={withBasePath("/images/logo-bianco.svg")}
                            alt="Studio Dentistico Fanelli immagine header"
                            width={160}
                            height={160}
                            className="hidden lg:inline-block"
                            priority={true}
                        />
                        <h1 className="max-w-2/3 text-7xl lg:text-8xl">
                            Studio Dentistico Fanelli
                        </h1>
                    </div>
                    <p className="max-w-2/3 mt-4 text-2xl font-normal">
                        Accogliamo il tuo sorriso con professionalità e
                        passione, unendo esperienza clinica e attenzione al
                        paziente
                    </p>
                </section>
                <section className="container mx-auto font-bold flex flex-col items-center lg:flex-row gap-4 px-4">
                    <ContactButton
                        action="phone"
                        variant="outline"
                        className="bg-white hover:bg-gray-100 text-black"
                    >
                        Prenota una visita
                    </ContactButton>
                    <Link href="#services">
                        <Button
                            variant={"outline"}
                            className="border-white text-white hover:bg-white/10"
                        >
                            Scopri i nostri servizi
                        </Button>
                    </Link>
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
