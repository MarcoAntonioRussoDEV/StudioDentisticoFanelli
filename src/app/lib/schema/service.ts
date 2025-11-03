import { Service } from "../data/services";

export const getServiceSchema = (service: Service) => ({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    procedureType: "Dental",
    usedToDiagnose: {
        "@type": "MedicalCondition",
        name: service.title,
    },
    availableService: {
        "@type": "MedicalTherapy",
        name: service.title,
    },
    provider: {
        "@type": "Dentist",
        name: "Studio Dentistico Fanelli",
        "@id": "https://studiodentisticofanelli.it",
    },
    url: `https://studiodentisticofanelli.it${service.url}`,
});
