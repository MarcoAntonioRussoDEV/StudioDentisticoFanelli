import { withBasePath } from "../basePath";

export interface TeamMember {
    name: string;
    slug: string;
    image: string;
    url: string;
}

export const team: TeamMember[] = [
    {
        name: "Dott. Giuseppe Fanelli",
        slug: "giuseppe-fanelli",
        image: withBasePath("/images/team/Giuseppe.jpg"),
        url: "/staff/giuseppe-fanelli",
    },
    {
        name: "Dott. Francesco Fanelli",
        slug: "francesco-fanelli",
        image: withBasePath("/images/team/Francesco.jpg"),
        url: "/staff/francesco-fanelli",
    },
    {
        name: "Dott.ssa Carlotta Fanelli",
        slug: "carlotta-fanelli",
        image: withBasePath("/images/team/Carlotta.jpg"),
        url: "/staff/carlotta-fanelli",
    },
    {
        name: "Monica",
        slug: "monica",
        image: withBasePath("/images/team/Monica.jpg"),
        url: "/staff/monica",
    },
    {
        name: "Annachiara",
        slug: "annachiara",
        image: withBasePath("/images/team/Annachiara.jpg"),
        url: "/staff/annachiara",
    },
    {
        name: "Chiara",
        slug: "chiara",
        image: withBasePath("/images/team/Chiara.jpg"),
        url: "/staff/chiara",
    },
    {
        name: "Diomira",
        slug: "diomira",
        image: withBasePath("/images/team/Diomira.jpg"),
        url: "/staff/diomira",
    },
];
