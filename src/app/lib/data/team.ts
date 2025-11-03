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
        image: withBasePath("/images/team/no-bg/Giuseppe.png"),
        url: "/staff/giuseppe-fanelli",
    },
    {
        name: "Dott. Francesco Fanelli",
        slug: "francesco-fanelli",
        image: withBasePath("/images/team/no-bg/Francesco.png"),
        url: "/staff/francesco-fanelli",
    },
    {
        name: "Dott.ssa Carlotta Fanelli",
        slug: "carlotta-fanelli",
        image: withBasePath("/images/team/no-bg/Carlotta.png"),
        url: "/staff/carlotta-fanelli",
    },
    {
        name: "Monica",
        slug: "monica",
        image: withBasePath("/images/team/no-bg/Monica.png"),
        url: "/staff/monica",
    },
    {
        name: "Annachiara",
        slug: "annachiara",
        image: withBasePath("/images/team/no-bg/Annachiara.png"),
        url: "/staff/annachiara",
    },
    {
        name: "Chiara",
        slug: "chiara",
        image: withBasePath("/images/team/no-bg/Chiara.png"),
        url: "/staff/chiara",
    },
    {
        name: "Diomira",
        slug: "diomira",
        image: withBasePath("/images/team/no-bg/Diomira.png"),
        url: "/staff/diomira",
    },
];
