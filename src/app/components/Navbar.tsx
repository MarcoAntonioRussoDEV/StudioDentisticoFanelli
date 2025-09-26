"use client";

import Link from "next/link";
import Button from "./Button";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="w-full  p-4 sticky top-0 z-1 bg-background shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    className="text-lg font-semibold"
                    href="/"
                >
                    <Image
                        src="./images/logo-fanelli.svg"
                        alt="Studio Dentistico Fanelli"
                        height={160}
                        width={160}
                        priority
                    />
                </Link>
                <div className="justify-between gap-4 font-semibold hidden md:flex">
                    <Link
                        className="hover:underline"
                        href="#services"
                    >
                        Servizi
                    </Link>
                    <Link
                        className=" hover:underline"
                        href="/aboutus"
                    >
                        Chi siamo
                    </Link>
                    <Link
                        className=" hover:underline"
                        href="#contatti"
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
                                href="#services"
                            >
                                Servizi
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" hover:underline"
                                href="/aboutus"
                            >
                                Chi siamo
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" hover:underline"
                                href="#contatti"
                            >
                                Contatti
                            </Link>
                        </li>
                        <li>
                            <Button
                                variant={"default"}
                                onClick={() => console.log("Prenota clicked")}
                            >
                                Prenota
                            </Button>
                        </li>
                    </ul>
                </details>
                {/* Desktop menu */}
                <div className="justify-between gap-4 hidden md:flex">
                    <Button
                        variant="outline"
                        onClick={() => console.log("Phone number clicked")}
                    >
                        <Phone
                            className="mr-2"
                            size={16}
                        />
                        0881123456
                    </Button>
                    <Button
                        variant={"default"}
                        onClick={() => console.log("Prenota clicked")}
                    >
                        Prenota
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
