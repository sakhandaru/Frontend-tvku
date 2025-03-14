"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/program/1.webp",
  "/images/program/2.webp",
  "/images/program/3.webp",
  "/images/program/4.webp",
  "/images/program/5.webp",
  "/images/program/6.webp",
  "/images/program/7.webp",
  "/images/program/8.webp",
];
export const Program = () => {
  return (
    <>
    <h1 className="text-3xl font-bold mt-4">Program</h1>
      <div className="py-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16} 
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden shadow">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
  );
};
