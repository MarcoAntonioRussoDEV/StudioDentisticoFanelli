import React from "react";
import { Service } from "../model/Service";

const ServicesCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-start gap-4">
            <div className="p-4 bg-gradient-to-br from-primary-800 to-primary-500 rounded-3xl">
                <service.Icon
                    size={40}
                    className="text-white"
                />
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
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
        </div>
    );
};

export default ServicesCard;
