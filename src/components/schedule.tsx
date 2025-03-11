"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperNavButtons } from "./swiperNavButton";

const schedules = [
  { time: "06:15 WIB", title: "Status Selebriti" },
  { time: "07:30 WIB", title: "GASPOL (Games Asyik Pali...)" },
  { time: "09:00 WIB", title: "Lucky Voice" },
  { time: "10:30 WIB", title: "FTV Pagi: Fix Sudah Jatuh K..." },
  { time: "12:30 WIB", title: "Liputan 6 Siang" },
  { time: "06:15 WIB", title: "Status Selebriti" },
  { time: "07:30 WIB", title: "GASPOL (Games Asyik Pali...)" },
  { time: "09:00 WIB", title: "Lucky Voice" },
  { time: "10:30 WIB", title: "FTV Pagi: Fix Sudah Jatuh K..." },
  { time: "12:30 WIB", title: "Liputan 6 Siang" },
];

const Schedule = () => {
  return (
    <div>
      <div className="flex item-center px-3 py-2 bg-white rounded-xl">
        <div className="font-black px-5 text-blue-800">
          TODAY <br /> SCHEDULE
        </div>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={"auto"}
          >
            <div className="w-[200px]">
              {schedules.map((schedule, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <div className="px-6 border-r text-gray-800">
                    <p className="text-sm">{schedule.time}</p>
                    <p className="font-bold">{schedule.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
              <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
