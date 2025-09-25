import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AOSProvider from "./components/AOSProvider";
import Footer from "./components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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

// Sposta viewport qui
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
            data-scroll-behavior="smooth"
        >
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AOSProvider />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
