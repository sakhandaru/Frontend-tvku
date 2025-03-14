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
    <div>
      <h1 className="container mx-auto text-3xl font-bold mt-4">Program</h1>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
