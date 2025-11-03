import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { team } from "../lib/data/team";

const Carousel2 = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {team.map((member, index) => (
                <SwiperSlide
                    key={index}
                    className="p-4 mb-10"
                >
                    <Link
                        key={index}
                        href={member.url || "#about_us"}
                        className="block"
                    >
                        <Image
                            src={member.image}
                            alt={`${member.name} - Team Studio Dentistico Fanelli Foggia`}
                            width={600}
                            height={400}
                            className="xl:mt-24 transition-all duration-150 md:grayscale md:hover:grayscale-0"
                            priority
                        />
                        <h4 className="text-white rounded-xl bg-primary/40 w-full text-center bottom-0 text-lg md:text-2xl px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
                            {member.name}
                        </h4>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel2;
