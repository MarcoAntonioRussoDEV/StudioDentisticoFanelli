"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = ({ images = [1, 2, 3, 4] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000 * 5); // ms * s 1 sec

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-96 overflow-hidden shadow-xl rounded-2xl">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        fill
                        src={`https://picsum.photos/80${index}/800`}
                        className="object-cover"
                        alt={`Slide ${index + 1}`}
                        priority={index === 0} // Priorità alla prima immagine
                    />
                </div>
            ))}

            {/* Indicatori */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
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
