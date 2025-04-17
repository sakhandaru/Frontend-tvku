"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const dummyData = [
  {
    title: "Dune: Part Two",
    genre: "Science Fiction, Adventure",
    image: "images/program.jpg",
  },
  {
    title: "Oppenheimer",
    genre: "Thriller, Detective",
    image: "images/bahlil.jpeg",
  },
  {
    title: "The Witcher",
    genre: "Drama, Adventure",
    image: "images/fotogedung.jpg",
  },
  {
    title: "Dune: Part Two",
    genre: "Science Fiction, Adventure",
    image: "images/programTV/campusOnTv.png",
  },
  {
    title: "Oppenheimer",
    genre: "Thriller, Detective",
    image: "images/programTV/kabarSepekan.jpg",
  },
  {
    title: "The Witcher",
    genre: "Drama, Adventure",
    image: "images/fotogedung.jpg",
  },
];

export default function TVProgramUI() {
  return (
    <div className="max-w-7xl mx-auto mt-24 mb-24 px-4 py-6 ">
      {/* Hero Carousel */}
      <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 1000 }}>
        {dummyData.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-96 rounded-2xl overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
                <h2 className="text-white text-3xl font-bold">{movie.title}</h2>
                <p className="text-white text-sm">{movie.genre}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trending Now */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Program TVKU</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyData.map((movie, index) => (
          <div
            key={index}
            className="h-48 rounded-xl overflow-hidden bg-cover bg-center relative"
            style={{ backgroundImage: `url(${movie.image})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h4 className="text-white font-semibold">{movie.title}</h4>
              <p className="text-white text-sm">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
