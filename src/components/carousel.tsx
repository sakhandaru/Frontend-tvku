"use client";

import React from "react";
import Image from "next/image";
import img1 from "../../public/images/slideshows/2022-12-14-03-49-44.jpg";
import img2 from "../../public/images/slideshows/2023-02-15-05-38-54.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image src={img1} alt="gambar1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img2} alt="gambar2" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
