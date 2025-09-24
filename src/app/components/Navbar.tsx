"use client";

import Link from "next/link";
import Button from "./Button";
import { Phone } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="w-full  p-4 fixed top-0 z-1  bg-background">
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    className="text-lg font-semibold"
                    href="/"
                >
                    Studio Dentistico Fanelli
                </Link>
                <div className="flex justify-between gap-4">
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
                <div className="flex justify-between gap-4">
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
                        variant={"accent"}
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
