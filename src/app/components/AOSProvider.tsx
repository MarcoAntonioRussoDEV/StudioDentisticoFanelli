"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false, // Permette animazioni ripetute
            mirror: true, // Inverte l'animazione quando si scrolla verso l'alto
            offset: 100, // Distanza dal viewport per triggerare l'animazione
            easing: "ease-in-out",
            anchorPlacement: "top-bottom", // Quando considerare l'elemento visibile
            debounceDelay: 50, // Riduce il numero di calcoli durante lo scroll
            throttleDelay: 99, // Migliora le performance
        });
    }, []);

    return null;
}
