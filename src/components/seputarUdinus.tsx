"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Title {
  id: number;
  judul: string;
}

interface Item {
  id: number;
  id_slides_title: number;
  link: string;
  thumbnail: string;
  teks: string;
}

const SeputarUdinus = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resTitles, resItems] = await Promise.all([
          axios.get(`${BASE_URL}/seputar-dinus-slides-title`),
          axios.get(`${BASE_URL}/seputar-dinus-slider`),
        ]);
        setTitles(resTitles.data.data);
        setItems(resItems.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen px-6 sm:px-10 md:px-16 py-12">
      <h1 className="text-4xl font-bold mt-20 mb-10 text-left text-gray-800">
        SEPUTAR UDINUS
      </h1>

      {titles.map((title) => {
        const relatedItems = items.filter(
          (item) => item.id_slides_title === title.id
        );

        return (
          <div key={title.id} className="mb-14">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                {title.judul}
              </h2>
                <a
                href={`/seputar_udinus/${title.id}`}
                className="text-sm text-blue-600 hover:underline"
                >
                more..
                </a>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
              {relatedItems.length > 0 ? (
                relatedItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative min-w-[320px] max-w-[320px] aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.teks}
                      width={320}
                      height={180}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <p className="text-xs opacity-80">Continue Watching</p>
                      <p className="text-base font-semibold line-clamp-2">
                        {item.teks}
                      </p>
                    </div>

                    <div className="absolute bottom-4 right-4 z-10">
                      <div className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="text-gray-500 italic">
                  Belum ada konten tersedia.
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeputarUdinus;
