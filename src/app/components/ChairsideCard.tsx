import React from "react";
import Button from "./Button";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";
import Image from "next/image";

interface ChairsideCardProps {
    title?: string;
    description?: string;
    videoSrc?: string;
    videoPoster?: string;
    videoAlt?: string;
}

const ChairsideCard: React.FC<ChairsideCardProps> = ({
    title = "Progettazione Digitale",
    description = "Software CAD avanzato per una precisione millimetrica nella progettazione delle protesi.",
    videoSrc = withBasePath("/videos/Fanelli.mp4"),
    videoPoster = withBasePath("/images/frame-placeholder-video-chairside.png"),
    videoAlt = "Video della progettazione digitale dentale con software CAD - Studio Dentistico Fanelli",
}) => {
    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center max-w-2xl w-full gap-0"
            data-aos="fade-up"
        >
            {/* Image for Mobile, Video for Desktop */}
            <div className="relative flex-shrink-0 w-full aspect-video">
                {/* Mobile Image */}
                <div className="lg:hidden w-full h-full">
                    <Image
                        src={videoPoster}
                        alt={videoAlt}
                        fill
                        className="object-cover rounded-t-2xl"
                        sizes="(max-width: 1024px) 100vw, 672px"
                    />
                </div>

                {/* Desktop Video */}
                <video
                    src={videoSrc}
                    poster={videoPoster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="hidden lg:block h-full w-full object-cover rounded-t-2xl"
                    aria-label={videoAlt}
                    title={title}
                >
                    <source
                        src={videoSrc}
                        type="video/mp4"
                    />
                    <p>
                        Il tuo browser non supporta il video HTML5.
                        <a
                            href={videoSrc}
                            download
                        >
                            Scarica il video
                        </a>
                        .
                    </p>
                </video>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col gap-4 items-center lg:items-start h-full w-full">
                <h3 className="text-3xl font-bold mb-3">{title}</h3>
                <p className="text-soft text-xl">{description}</p>
                <p className="text-soft text-xl">
                    Dalla scansione alla protesi finale applicata, tutto in una
                    sola seduta.
                </p>
                <Link href={"/#contacts"}>
                    <Button className="mt-auto">Prenota la tua seduta</Button>
                </Link>
            </div>
        </div>
    );
};

export default ChairsideCard;
