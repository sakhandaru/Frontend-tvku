"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export const CarouselCompanyLogo = () => {
  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center text-xl md:text-4xl font-bold mb-15">
        KERJASAMA YANG TERJALIN DENGAN TVKU
      </h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Tablet
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // Desktop
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // Large Desktop
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="TVKU"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/tvkublue.png"}
            alt="company logo"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <div className="hidden md:block">
          <div className="hero-prev absolute left-5 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="hero-next absolute right-5 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};
