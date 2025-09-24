import React from "react";
import IconBox from "./IconBox";
import { Service } from "../lib/data/services";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const ServicesCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-start gap-4">
            <div className="flex gap-4 justify-between items-end w-full">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <IconBox Icon={service.Icon} />
            </div>
            <p className="text-gray-600">
                Impianti dentali di ultima generazione per sostituire i denti
                mancanti.
            </p>
            <ul className="list-disc list-inside">
                {service.solutions.map((solution, index) => (
                    <li
                        key={index}
                        className="text-gray-600"
                    >
                        {solution}
                    </li>
                ))}
            </ul>
            <Link
                href={`/services/${service.title}`}
                className="mt-auto ms-auto  hover:underline inline-flex text-primary"
            >
                Scopri di più
                <ChevronRight />
            </Link>
        </div>
    );
};

export default ServicesCard;
