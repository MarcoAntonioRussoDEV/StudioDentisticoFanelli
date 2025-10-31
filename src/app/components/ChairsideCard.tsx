import React from "react";
import Button from "./Button";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";

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
            data-aos="fade-left"
        >
            {/* Video Section */}
            <div className="relative flex-shrink-0 hidden lg:block w-full aspect-video">
                <video
                    src={videoSrc}
                    poster={videoPoster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover rounded-t-2xl"
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
