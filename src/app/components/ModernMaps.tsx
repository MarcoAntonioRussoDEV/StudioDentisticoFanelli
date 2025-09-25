"use client";
import { useEffect, useRef } from "react";

const ModernMaps = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<google.maps.Map | null>(null);

    useEffect(() => {
        const initMap = async () => {
            if (!mapRef.current) return;

            // Importare le librerie necessarie
            const { Map } = (await google.maps.importLibrary(
                "maps"
            )) as google.maps.MapsLibrary;
            const { AdvancedMarkerElement } = (await google.maps.importLibrary(
                "marker"
            )) as google.maps.MarkerLibrary;

            const center = {
                lat: 41.441926,
                lng: 15.563125,
            };

            // Creare la mappa
            mapInstance.current = new Map(mapRef.current, {
                zoom: 16,
                center: center,
                mapId: "DEMO_MAP_ID", // Richiesto per AdvancedMarkerElement
                disableDefaultUI: false,
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: true,
            });

            // Creare il marker avanzato
            new AdvancedMarkerElement({
                map: mapInstance.current,
                position: center,
                title: "Studio Dentistico Fanelli",
            });
        };

        // Caricare l'API se non già caricata
        if (typeof google !== "undefined") {
            initMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&loading=async`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div
            ref={mapRef}
            className="w-full h-full min-h-[500px] rounded-lg"
            style={{ minHeight: "500px" }}
        />
    );
};

export default ModernMaps;
