import { MetadataRoute } from "next";
import { services } from "./lib/data/services";
import { team } from "./lib/data/team";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        "https://marcoantoniorussodev.github.io/StudioDentisticoFanelli";

    // Homepage
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];

    // Pagine servizi
    services.forEach(service => {
        routes.push({
            url: `${baseUrl}${service.url}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        });
    });

    // Pagine staff
    team.forEach(member => {
        routes.push({
            url: `${baseUrl}${member.url}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        });
    });

    return routes;
}
