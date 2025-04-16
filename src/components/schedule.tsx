"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface ScheduleItem {
  time: string;
  title: string;
}

const schedules: ScheduleItem[] = [
  { time: "06:15 WIB", title: "Status Selebriti" },
  { time: "07:30 WIB", title: "GASPOL (Games Asyik Pali...)" },
  { time: "09:00 WIB", title: "Lucky Voice" },
  { time: "10:30 WIB", title: "FTV Pagi: Fix Sudah Jatuh K..." },
  { time: "12:30 WIB", title: "Liputan 6 Siang" },
  { time: "14:00 WIB", title: "Status Selebriti" },
  { time: "15:30 WIB", title: "GASPOL (Games Asyik Pali...)" },
  { time: "17:00 WIB", title: "Lucky Voice" },
  { time: "18:30 WIB", title: "FTV Pagi: Fix Sudah Jatuh K..." },
  { time: "20:00 WIB", title: "Liputan 6 Siang" },
];

const Schedule = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Title section */}
          <div className="bg-blue-50 p-4 sm:p-6 flex items-center justify-center sm:justify-start sm:rounded-l-3xl">
            <h2 className="font-black text-blue-800 text-center sm:text-left text-xl sm:text-2xl leading-tight">
              TODAY
              <br />
              SCHEDULE
            </h2>
          </div>

          {/* Swiper section */}
          <div className="flex-1 flex items-center overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={"auto"}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="!w-full"
            >
              {schedules.map((schedule, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <div className="px-4 py-4 sm:py-6 border-r border-gray-100 h-full flex flex-col justify-center hover:bg-blue-50/30 transition-colors rounded-lg">
                    <p className="text-sm text-gray-500">{schedule.time}</p>
                    <p className="font-bold text-gray-800 line-clamp-1">
                      {schedule.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-end items-center p-3 bg-gray-50 sm:bg-white sm:rounded-r-3xl">
            <button
              className="p-2 rounded-full hover:bg-blue-100 transition-colors"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous schedule"
            >
              <ChevronLeft size={24} className="text-blue-800" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-blue-100 transition-colors ml-2"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next schedule"
            >
              <ChevronRight size={24} className="text-blue-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
