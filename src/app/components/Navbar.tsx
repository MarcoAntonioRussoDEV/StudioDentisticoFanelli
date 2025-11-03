"use client";

import Link from "next/link";
import ContactButton from "./ContactButton";
import { Menu } from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/app/lib/basePath";

const Navbar = () => {
    return (
        <nav className="w-full  p-4 sticky top-0 z-50 bg-background shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    className="text-lg font-semibold"
                    href="/"
                >
                    <Image
                        src={withBasePath("/images/logo-fanelli.svg")}
                        alt="Studio Dentistico Fanelli"
                        height={0}
                        width={0}
                        style={{ height: "auto", width: "160px" }}
                        priority
                    />
                </Link>
                <div className="justify-between gap-4 font-semibold hidden md:flex">
                    <Link
                        className="hover:underline"
                        href="/#services"
                    >
                        Servizi
                    </Link>
                    <Link
                        className=" hover:underline"
                        href="/#about_us"
                    >
                        Chi siamo
                    </Link>
                    <Link
                        className=" hover:underline"
                        href="/#contacts"
                    >
                        Contatti
                    </Link>
                </div>

                {/* Mobile menu */}
                <details className="dropdown dropdown-end md:hidden">
                    <summary className="btn btn-ghost m-1">
                        <Menu />
                    </summary>
                    <ul className="menu dropdown-content rounded-box z-1 w-52 p-2 mt-6 shadow-xl bg-white">
                        <li>
                            <Link
                                className="hover:underline"
                                href="/#services"
                            >
                                Servizi
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" hover:underline"
                                href="/#about_us"
                            >
                                Chi siamo
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" hover:underline"
                                href="/#contacts"
                            >
                                Contatti
                            </Link>
                        </li>
                        <li>
                            <ContactButton
                                action="form"
                                variant="default"
                                showIcon={false}
                            >
                                Prenota
                            </ContactButton>
                        </li>
                    </ul>
                </details>
                {/* Desktop menu */}
                <div className="justify-between gap-4 hidden md:flex">
                    <ContactButton
                        action="phone"
                        variant="outline"
                        showPhoneNumber
                        showIcon
                    />
                    <ContactButton
                        action="form"
                        variant="default"
                        showIcon={false}
                    >
                        Prenota
                    </ContactButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
