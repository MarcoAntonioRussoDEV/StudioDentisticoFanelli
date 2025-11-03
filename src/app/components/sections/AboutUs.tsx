"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import IconBox from "../IconBox";
import { aboutStats } from "@/app/lib/data/aboutStats";
import { team } from "@/app/lib/data/team";
import "keen-slider/keen-slider.min.css";
import Carousel2 from "../Carousel2";

function useResponsivePerView() {
    const [perView, setPerView] = useState(2.5);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) setPerView(3.5); // desktop
            else if (window.innerWidth >= 640) setPerView(2.5); // tablet
            else setPerView(2.5); // mobile
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return perView;
}
const AboutUs = () => {
    const perView = useResponsivePerView();
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: perView,
            spacing: 15,
        },
    });
    return (
        <>
            <article
                className="py-16 container mx-auto px-4 bg-primary-100 place-items-center"
                id="about_us"
            >
                <section className="gap-16 flex flex-col items-center w-full">
                    <div className="flex flex-col gap-6 max-w-4xl text-center">
                        <h2 className="text-6xl font-bold">Chi Siamo</h2>
                        <p className="text-xl leading-relaxed text-soft">
                            Siamo un team di professionisti appassionati e
                            altamente qualificati, dedicati alla salute orale e
                            al benessere dei nostri pazienti. La nostra mission
                            è offrire cure dentali di eccellenza in un ambiente
                            moderno, accogliente e rassicurante, dove ogni
                            persona si sente a proprio agio.
                        </p>
                        <p className="text-lg text-soft">
                            Vuoi conoscere meglio il nostro team e scoprire la
                            preparazione e l&apos;esperienza di ogni
                            specialista? Clicca sui volti qui sotto per
                            approfondire!
                        </p>
                    </div>

                    {/* Carousel */}
                    {/* <div
                        ref={ref}
                        className="keen-slider"
                    >
                        {team.map((member, index) => (
                            <Link
                                key={index}
                                href={member.url || "#about_us"}
                                className="keen-slider__slide relative cursor-pointer"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={600}
                                    height={400}
                                    className="xl:mt-24 rounded-full grayscale hover:grayscale-0 transition-all duration-150"
                                />
                                <h4 className="text-white rounded-2xl bg-primary/40 w-full text-center bottom-0 text-2xl px-2">
                                    {member.name}
                                </h4>
                            </Link>
                        ))}
                    </div> */}
                </section>
                <Carousel2 />
            </article>
            <article className="container px-4 mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aboutStats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg flex flex-col gap-4 items-center justify-center aspect-square"
                        >
                            <IconBox Icon={stat.icon} />
                            <p className="text-4xl font-bold text-primary">
                                {stat.value}
                            </p>
                            <h3 className="text-xl font-semibold">
                                {stat.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </article>
        </>
    );
};

export default AboutUs;
