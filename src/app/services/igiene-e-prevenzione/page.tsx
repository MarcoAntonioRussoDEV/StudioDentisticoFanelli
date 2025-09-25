import Carousel from "@/app/components/Carousel";
import IconBox from "@/app/components/IconBox";
import { services } from "@/app/lib/data/services";
import { CheckCircle, Clock, Shield } from "lucide-react";
import Image from "next/image";

const page = () => {
    const service = services.filter(s => s.title === "Igiene e Prevenzione")[0];

    const benefits = [
        "Prevenzione di carie e malattie gengivali",
        "Mantenimento dell'igiene orale ottimale",
        "Sorriso più luminoso e sano",
        "Risparmio a lungo termine su cure dentali complesse",
        "Maggiore fiducia in se stessi grazie a un sorriso curato",
        "Salute generale migliorata",
    ];

    return (
        <div className="bg-primary-100">
            <div className="container mx-auto py-36 px-4">
                <header className="flex justify-between w-full min-h-96">
                    <div className="flex flex-col items-start justify-start gap-16 w-full">
                        <div className="flex items-center gap-4">
                            <IconBox Icon={service.Icon} />
                            <h1 className="text-6xl font-bold">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-2xl">{service.description}</p>
                    </div>
                    <Carousel />
                </header>
            </div>
            <div className="bg-white">
                <main className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-bold text-center py-16">
                        Perché Scegliere i Nostri Servizi di Igiene e
                        Prevenzione?
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                        {benefits.map((benefit, index) => (
                            <div
                                className="flex gap-4 border border-gray-300 p-4 py-8 rounded-lg items-center"
                                key={index}
                            >
                                <CheckCircle className="text-success" />
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <div className="bg-primary-100">
                <main className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-bold text-center py-16">
                        I Nostri Trattamenti
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {service.solutions.map((solution, index) => (
                            <div
                                className=" shadow-xl p-4 py-8 rounded-lg items-center"
                                key={index}
                            >
                                <h3 className="text-xl font-bold text-primary">
                                    {solution.title}
                                </h3>
                                <p>{solution.description}</p>
                                <div className="flex gap-8 mt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock />
                                        <p>{solution.duration}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield />
                                        <p>{solution.frequency}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default page;
