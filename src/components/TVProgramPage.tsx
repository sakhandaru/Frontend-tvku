"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const dummyData = [
  {
    title: "Dune: Part Two",
    description:
      "Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "images/program.jpg",
  },
  {
    title: "Oppenheimer",
    description:
      "Thriller, Detective Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "images/bahlil.jpeg",
  },
  {
    title: "The Witcher",
    description:
      "Drama, Adventure Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "images/fotogedung.jpg",
  },
  {
    title: "Dune: Part Two",
    description:
      "Science Fiction, Adventure Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "images/programTV/campusOnTv.png",
  },
  {
    title: "Oppenheimer",
    description:
      "Thriller, Detective Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "images/programTV/kabarSepekan.jpg",
  },
  {
    title: "The Witcher",
    description:
      "Drama, Adventure Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "images/fotogedung.jpg",
  },
];

function truncateWords(text: string, limit: number) {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

export default function TVProgramUI() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto pt-28 pb-24 px-4 py-6 ">
      {/* Hero Carousel */}
      <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 1000 }} modules={[Autoplay]}>
        {dummyData.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-96 rounded-2xl overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <h2 className="text-white text-3xl font-bold">{movie.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trending Now */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Program TVKU</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyData.map((movie, index) => (
          <div key={index} className="relative group">
            <div
              className="h-40 rounded-xl overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-2">
                <h4 className="text-white font-semibold">{movie.title}</h4>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">{truncateWords(movie.description, 20)}</p>

            {/* Hover Overlay */}
            {/* Hover Overlay */}
            <div className="absolute top-0 left-0 w-full h-full 
              bg-black/60 backdrop-blur-md text-white rounded-xl p-4 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h4 className="font-semibold text-lg">{movie.title}</h4>
              <p className="mt-2 text-sm">{movie.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
