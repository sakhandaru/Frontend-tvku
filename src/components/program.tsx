"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";

interface Iprogram {
  id: number;
  thumbnail: string;
  judul: string;
  deskripsi: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const Program = () => {
  const [programs, setPrograms] = useState<Iprogram[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/our-programs`
        );
        setPrograms(response.data.data);
      } catch (err) {
        let errorMessage = "Failed to load programs";

        if (axios.isAxiosError(err)) {
          if (err.code === "ECONNABORTED") {
            errorMessage = "Request timeout. Please try again.";
          } else if (!err.response) {
            errorMessage = "Network error. Please check your connection.";
          } else {
            errorMessage = err.response.data?.message || err.message;
          }
        } else if (err instanceof Error) {
          errorMessage = err.message;
        }

        setError(errorMessage);
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto mt-15 flex justify-center items-center h-40">
        <p>Loading programs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto mt-15">
        <h1 className="text-2xl md:text-4xl font-bold">Program</h1>
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-15">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Program</h1>
      </div>
      <div className="pt-8 pb-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {programs.map((program) => (
            <SwiperSlide key={program.id}>
              <div className="group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-[1.05] hover:z-10">
                <div className="relative" style={{ aspectRatio: "314/444" }}>
                  <Image
                    src={program.thumbnail}
                    alt={program.judul}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={program.id === programs[0]?.id}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full p-3 md:bottom-10 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <h4 className="text-white font-bold mb-1 truncate text-lg md:text-2xl">
                      {program.judul}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                          {program.deskripsi}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
    </div>
  );
};
