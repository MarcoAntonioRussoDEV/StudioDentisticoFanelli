"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Differences, { DifferencesProps } from "./Differences";

interface CarouselProps {
    images?: string[];
    differencesMap?: DifferencesProps[];
    isDiff?: boolean;
    serviceName?: string;
}

const Carousel = ({
    images,
    differencesMap,
    isDiff = false,
    serviceName = "servizio odontoiatrico",
}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalItems = isDiff
        ? differencesMap?.length || 1
        : images?.length || 1;

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
        }, 1000 * 5); // ms * s 1 sec

        return () => clearInterval(interval);
    }, [totalItems, isPaused]);

    return (
        <div
            className="relative w-full h-96 overflow-hidden shadow-xl rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {isDiff
                ? differencesMap?.map((diff: DifferencesProps, index) => (
                      <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                              index === currentIndex
                                  ? "opacity-100"
                                  : "opacity-0"
                          }`}
                      >
                          <Differences
                              before={diff.before}
                              after={diff.after}
                          />
                      </div>
                  ))
                : images?.map((image: string, index: number) => (
                      <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                              index === currentIndex
                                  ? "opacity-100"
                                  : "opacity-0"
                          }`}
                      >
                          <Image
                              fill
                              src={image}
                              className="object-cover"
                              alt={`${serviceName} - Caso clinico ${
                                  index + 1
                              } Studio Dentistico Fanelli Foggia`}
                              priority={index === 0} // Priorità alla prima immagine
                          />
                      </div>
                  ))}

            {/* Indicatori */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {(isDiff ? differencesMap : images)?.map((_, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                            index === currentIndex
                                ? "bg-white"
                                : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Vai al slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
