import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AOSProvider from "./components/AOSProvider";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Cta from "./components/cta";

const font = Open_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-family",
});

export const metadata: Metadata = {
    title: "Studio Dentistico Fanelli - Cure Dentali Professionali",
    description:
        "Studio dentistico specializzato in cure dentali professionali. Servizi di odontoiatria, igiene dentale e chirurgia orale.",
    keywords:
        "dentista, studio dentistico, cure dentali, odontoiatria, igiene dentale, foggia",
    authors: [{ name: "Studio Dentistico Fanelli" }],
    robots: "index, follow",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="it"
            className={`${font.variable}`}
        >
            <body className={`${font.variable}`}>
                <AOSProvider />
                <Navbar />
                <main>{children}</main>
                <GoogleAnalytics gaId="G-LWTHSV6X6E" />
                <Footer />
                <Cta />
            </body>
        </html>
    );
}
