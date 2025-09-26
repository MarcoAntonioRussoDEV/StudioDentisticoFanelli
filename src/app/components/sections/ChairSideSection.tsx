import { CheckCircle, Monitor, Printer, Scan } from "lucide-react";
import React from "react";
import IconBox from "../IconBox";
import Image from "next/image";
import ChairsideCard from "../ChairsideCard";

const ChairSideSection = () => {
    const steps = [
        {
            title: "Scansione 3D",
            description:
                "Scansione digitale precisa del dente danneggiato, senza impronte fastidiose.",
            icon: Scan,
        },
        {
            title: "Progettazione CAD",
            description:
                "Design computerizzato della protesi con software all'avanguardia.",
            icon: Monitor,
        },
        {
            title: "Fresatura CAM",
            description:
                "Realizzazione della protesi in ceramica di alta qualità.",
            icon: Printer,
        },
        {
            title: "Applicazione",
            description:
                "Cementazione della protesi finale con perfetto adattamento.",
            icon: CheckCircle,
        },
    ];
    return (
        <article
            className="py-16"
            id="services"
        >
            <div className="container px-4 mx-auto flex flex-col gap-16 items-center">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-4xl font-bold text-center">
                        Tecnologia Chairside
                    </h2>
                    <p className="text-soft text-xl lg:max-w-1/2 text-center">
                        Il futuro dell&apos;odontoiatria è qui. La nostra
                        tecnologia CAD/CAM permette di realizzare protesi
                        dentali perfette in tempi record, direttamente nel
                        nostro studio.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex flex-col gap-8 ">
                        <h3 className="text-3xl font-bold">
                            Come funziona il processo Chairside
                        </h3>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-4 items-center"
                            >
                                <IconBox Icon={step.icon} />
                                <div>
                                    <h4 className="font-semibold">
                                        {step.title}
                                    </h4>
                                    <p className="text-soft">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ChairsideCard />
                </div>
            </div>
        </article>
    );
};

export default ChairSideSection;
