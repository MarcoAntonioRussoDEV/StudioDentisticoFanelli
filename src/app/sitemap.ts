import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.studiodentisticofanelli.it";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/servizi`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contatti`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/implantologia`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ortodonzia`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/igiene-dentale`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
