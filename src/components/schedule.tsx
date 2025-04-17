"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

interface ScheduleItem {
  id: number;
  id_hari: number;
  jam_awal: string;
  jam_akhir: string;
  acara: string;
  link: string;
  uploader: number;
  waktu: string;
  hari: {
    id: number;
    hari: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Schedule = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get<{ data: ScheduleItem[] }>(
          `${BASE_URL}/jadwal-acara`
        );
        setSchedules(response.data.data);
      } catch (error) {
        console.error("Failed to fetch schedules:", error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          <div className="bg-blue-50 p-4 sm:p-6 flex items-center justify-center sm:justify-start sm:rounded-l-3xl">
            <h2 className="font-black text-blue-800 text-center sm:text-left text-xl sm:text-2xl leading-tight">
              TODAY
              <br />
              SCHEDULE
            </h2>
          </div>

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
                  <div className="px-4 py-4 sm:py-6 border-r border-gray-300 h-full flex flex-col justify-center hover:bg-blue-50/30 transition-colors">
                    <div className="flex items-center gap-2">
                      <p className="flex items-center gap-2 text-sm text-gray-500">
                        {schedule.jam_awal}
                        <span className="text-gray-400">-</span>
                        {schedule.jam_akhir}
                      </p>
                    </div>
                    <p className="text-lg md:text-md font-bold text-gray-800 line-clamp-1">
                      {schedule.acara}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
