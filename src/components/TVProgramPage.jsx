"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const programs = [
  {
    id: 1,
    title: "Stranger Things",
    description: "A group of kids discover supernatural mysteries.",
    image: "/images/stranger-things.jpg",
    background: "/images/stranger-things-bg.jpg",
  },
  {
    id: 2,
    title: "Dark",
    description: "Time travel and mysteries in a small town.",
    image: "/images/dark.jpg",
    background: "/images/dark-bg.jpg",
  },
  {
    id: 3,
    title: "Sherlock",
    description: "A modern take on Sherlock Holmes.",
    image: "/images/sherlock.jpg",
    background: "/images/sherlock-bg.jpg",
  },
];

const TVProgramPage = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <motion.div
        key={activeProgram.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${activeProgram.background})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">{activeProgram.title}</h1>
        <p className="text-lg max-w-2xl text-center">{activeProgram.description}</p>
      </div>

      {/* Slider */}
      <div className="absolute bottom-10 w-full px-20">
        <Slider {...settings}>
          {programs.map((program) => (
            <div key={program.id} className="px-2">
              <motion.div
                onHoverStart={() => setActiveProgram(program)}
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <img src={program.image} alt={program.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{program.title}</h3>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TVProgramPage;
