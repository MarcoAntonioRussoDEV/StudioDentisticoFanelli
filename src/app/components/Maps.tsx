"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    minHeight: "500px",
};

const center = {
    lat: 41.441926, // Foggia
    lng: 15.563125,
};

const Maps = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                <Marker
                    position={center}
                    title="Studio Dentistico Fanelli"
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default Maps;
