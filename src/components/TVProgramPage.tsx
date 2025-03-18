"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Sapa Dosen",
    description:
      "Dengan gravitasi yang lebih menarik, sapa dosen menyapa mahasiswa Universitas Dian Nuswantoro dengan memberikan materi pembelajaran yang berbeda di setiap episodenya, hanya dengan menyaksikannya melalui tayangan TVKU dan Youtube.",
    image: "/images/programTV/sapaDosen.png",
  },
  {
    id: 2,
    title: "Campus On TV",
    description:
      "Campus on TV merupakan media pembelajaran jarak jauh yang diberikan oleh Udinus untuk mempermudah mahasiswa dalam mengikuti perkuliahan. Campus On TV hadir bersama dosen Universitas Dian Nuswantoro untuk menyampaikan materi materi perkuliahan di setiap episodenya.",
    image: "/images/programTV/campusOnTv.png",
  },
  {
    id: 3,
    title: "Campus Corner",
    description:
      "Campus Corner sebagai etalase kampus untuk unjuk gigi menunjukkan prestasi-prestasinya dalam bentuk talkshow setiap Hari Kamis.",
    image: "/images/programTV/campusCorner.png",
  },
  {
    id: 4,
    title: "Kabar Sepekan",
    description:
      "Kabar Sepekan menyajikan berita dan informasi terkini yang dirangkum dalam sepekan kepada pemirsa.",
    image: "/images/programTV/kabarSepekan.jpg",
  },
  {
    id: 5,
    title: "La La Land",
    description: "A musical romance filled with dreams and love.",
    image: "/la-la-land.jpg",
  },
  {
    id: 6,
    title: "The Notebook",
    description: "A timeless love story across decades.",
    image: "/the-notebook.jpg",
  },
];

export default function TVProgramPage() {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);
  const [lastHoveredProgram, setLastHoveredProgram] = useState<Program>(
    programs[0]
  );

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-end bg-cover bg-center p-6 transition-all duration-500"
      style={{
        backgroundImage: `url(${
          activeProgram ? activeProgram.image : lastHoveredProgram.image
        })`,
      }}
    >
      <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {activeProgram && (
        <motion.div
          key={activeProgram.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute top-95 left-20 text-white"
        >
          <h1 className="text-5xl font-bold">{activeProgram.title}</h1>
          <p className="text-md mt-2">{activeProgram.description}</p>
        </motion.div>
      )}

      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mt-5"
        >
          {programs.map((program) => (
            <SwiperSlide key={program.id}>
              <div
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white"
                onMouseEnter={() => {
                  setActiveProgram(program);
                  setLastHoveredProgram(program);
                }}
                onMouseLeave={() => setActiveProgram(null)}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <h3 className="absolute top-3 left-4 text-black font-semibold text-lg px-2 py-1 rounded-md">
                  {program.title}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 via-white/50 to-transparent p-3 flex items-end rounded-b-xl">
                  <p className="text-sm text-gray-700 font-medium truncate">
                    {program.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
