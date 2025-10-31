"use client";
import {
    AdvancedMarker,
    APIProvider,
    InfoWindow,
    Map,
} from "@vis.gl/react-google-maps";

const containerStyle = {
    width: "100%",
    minHeight: "700px",
};

const center = {
    lat: 41.44193820538419, // Foggia
    lng: 15.563390128217439, // Foggia
};

const Maps = () => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                mapId={"1"}
                defaultCenter={center}
                defaultZoom={20}
                gestureHandling="cooperative"
                style={containerStyle}
            >
                <AdvancedMarker position={center} />
                <InfoWindow
                    position={center}
                    maxWidth={300}
                    pixelOffset={[0, -40]}
                    headerDisabled={true}
                >
                    <div className="p-4 pe-8 pb-8 bg-white rounded-lg">
                        <h3 className="font-bold text-lg text-primary mb-2">
                            Studio Dentistico Fanelli
                        </h3>
                        <p className="text-sm text-soft">
                            Via Padre Antonio da Olivadi, 9
                            <br />
                            71121 Foggia (FG)
                        </p>
                    </div>
                </InfoWindow>
            </Map>
        </APIProvider>
    );
};

export default Maps;
