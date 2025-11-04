export const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Studio Dentistico Fanelli",
    description:
        "Studio dentistico a Foggia specializzato in implantologia, ortodonzia, protesi dentale, parodontologia e cure odontoiatriche per tutta la famiglia.",
    url: "https://studiodentisticofanelli.it",
    logo: "https://studiodentisticofanelli.it/images/logo-fanelli.svg",
    image: "https://studiodentisticofanelli.it/images/open-graph.png",
    telephone: "+390881635896",
    email: "Studioodontoiatricofanelli@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Via Padre Antonio da Olivadi, 9",
        addressLocality: "Foggia",
        addressRegion: "FG",
        postalCode: "71121",
        addressCountry: "IT",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi Odontoiatrici",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Implantologia Dentale",
                    description:
                        "Impianti dentali con tecnologia digitale e carico immediato",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Ortodonzia",
                    description:
                        "Apparecchi dentali e allineatori invisibili per bambini e adulti",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Protesi Dentale",
                    description:
                        "Protesi fisse e mobili con tecnologia CAD-CAM",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Parodontologia",
                    description: "Cura delle gengive e terapia parodontale",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Pedodonzia",
                    description:
                        "Cure dentali per bambini in ambiente accogliente",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Igiene e Prevenzione",
                    description: "Pulizia professionale e prevenzione dentale",
                },
            },
        ],
    },
};
