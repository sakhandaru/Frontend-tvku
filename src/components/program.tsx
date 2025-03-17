"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const programTelevisi = [
  {
    id: 201,
    title: "Ocean's Depths",
    genre: "Adventure",
    rating: 4.6,
    image: "/images/program/1.webp",
  },
  {
    id: 202,
    title: "City Lights",
    genre: "Drama",
    rating: 4.2,
    image: "/images/program/2.webp",
  },
  {
    id: 203,
    title: "Wilderness",
    genre: "Reality",
    rating: 4.4,
    image: "/images/program/3.webp",
  },
  {
    id: 204,
    title: "Cooking Masters",
    genre: "Reality",
    rating: 4.7,
    image: "/images/program/4.webp",
  },
  {
    id: 205,
    title: "Cooking Masters",
    genre: "Reality",
    rating: 4.7,
    image: "/images/program/5.webp",
  },
  {
    id: 206,
    title: "Cooking Masters",
    genre: "Reality",
    rating: 4.7,
    image: "/images/program/6.webp",
  },
  {
    id: 207,
    title: "Cooking Masters",
    genre: "Reality",
    rating: 4.7,
    image: "/images/program/7.webp",
  },
  {
    id: 208,
    title: "Cooking Masters",
    genre: "Reality",
    rating: 4.7,
    image: "/images/program/8.webp",
  },
];
export const Program = () => {
  return (
    <div className="container mx-auto my-15">
      <div >
        <h1 className="text-3xl font-bold mb-4">Program</h1>
      </div>
      <div className="py-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
        >
          {programTelevisi.map((program) => (
            <SwiperSlide key={program.id}>
              <div className="group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-[1.05] hover:z-10">
                <div className="relative" style={{ aspectRatio: "314/444" }}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-10 left-0 w-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h4 className="text-white font-bold mb-1 truncate text-2xl">
                      {program.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="bg-primary px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                          {program.genre}
                        </span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-[10px] text-white">
                            {program.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="hero-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="hero-next absolute right-4 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
