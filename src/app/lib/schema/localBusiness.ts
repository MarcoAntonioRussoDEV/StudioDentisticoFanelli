import type { WithContext, Dentist } from "schema-dts";

export const localBusinessSchema: WithContext<Dentist> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Studio Dentistico Fanelli",
    image: "https://studiodentisticofanelli.it/images/open-graph.png",
    "@id": "https://studiodentisticofanelli.it",
    url: "https://studiodentisticofanelli.it",
    telephone: "+390881635896",
    priceRange: "€€",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Via Padre Antonio da Olivadi, 9",
        addressLocality: "Foggia",
        addressRegion: "FG",
        postalCode: "71121",
        addressCountry: "IT",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 41.4629,
        longitude: 15.5444,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
    ],
    sameAs: [
        "https://www.facebook.com/studiodentisticofanelli",
        "https://www.instagram.com/studio_dentistico_fanelli",
        "https://www.youtube.com/channel/UCwo7o3SjeXaBmgdoQjAK0YA",
    ],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
    },
    medicalSpecialty: [
        {
            "@type": "MedicalSpecialty",
            name: "Dentistry",
        },
        {
            "@type": "MedicalSpecialty",
            name: "Orthodontics",
        },
        {
            "@type": "MedicalSpecialty",
            name: "Oral Surgery",
        },
        {
            "@type": "MedicalSpecialty",
            name: "Periodontics",
        },
        {
            "@type": "MedicalSpecialty",
            name: "Pediatric Dentistry",
        },
        {
            "@type": "MedicalSpecialty",
            name: "Prosthodontics",
        },
        {
            "@type": "MedicalSpecialty",
            name: "Endodontics",
        },
    ],
};
