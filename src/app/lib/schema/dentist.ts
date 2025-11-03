import { TeamMember } from "../data/team";

export const getDentistSchema = (member: TeamMember) => ({
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: member.name,
    image: `https://studiodentisticofanelli.it${member.image}`,
    jobTitle: "Odontoiatra",
    url: `https://studiodentisticofanelli.it${member.url}`,
    worksFor: {
        "@type": "Dentist",
        name: "Studio Dentistico Fanelli",
        "@id": "https://studiodentisticofanelli.it",
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Università degli Studi di Foggia",
    },
    knowsAbout: ["Dentistry", "Oral Surgery", "Implantology"],
    address: {
        "@type": "PostalAddress",
        streetAddress: "Via Padre Antonio da Olivadi, 9",
        addressLocality: "Foggia",
        addressRegion: "FG",
        postalCode: "71121",
        addressCountry: "IT",
    },
});
