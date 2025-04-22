"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
// import img1 from "../../public/images/bahlil.jpeg";
import "swiper/css";



function truncateWords(text: string, limit: number) {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function TVProgramUI() {
  const [program, setProgram] = useState<Iprogram[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get<{ data: Iprogram[] }>(
          `${BASE_URL}/our-programs`
        );
        setProgram(response.data.data);
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
      }
    };
    fetchPrograms();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto mt-15">
        <h1 className="text-2xl md:text-4xl font-bold">About</h1>
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
    <div className="max-w-7xl mx-auto pt-28 pb-24 px-4 py-6 ">
      <Swiper slidesPerView={1} loop={true} modules={[Autoplay]}>
        {program.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-96 rounded-2xl overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${data.thumbnail})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <h2 className="text-white text-3xl font-bold">{data.judul}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-xl font-semibold mt-10 mb-4">Program TVKU</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {program.map((data, index) => (
          <div key={index} className="relative group">
            <div
              className="h-40 rounded-xl overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${data.thumbnail})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-2">
                <h4 className="text-white font-semibold">{data.judul}</h4>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700 line-clamp-3">{data.deskripsi}</p>

            {/* Hover Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full 
              bg-black/60 backdrop-blur-md text-white rounded-xl p-4 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
            >
              <h4 className="font-semibold text-lg">{data.judul}</h4>
              <p className="mt-2 text-sm">{data.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
