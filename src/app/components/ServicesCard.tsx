import React from "react";
import IconBox from "./IconBox";
import { Service } from "../lib/data/services";
import Link from "next/link";

const ServicesCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <Link
            href={service.url}
            className="h-full"
        >
            <div
                className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-start gap-4 h-full"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="flex gap-4 justify-between items-end w-full">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <IconBox iconSrc={service.icon} />
                </div>
                <p className="text-gray-600">{service.description}</p>
            </div>
        </Link>
    );
};

export default ServicesCard;
