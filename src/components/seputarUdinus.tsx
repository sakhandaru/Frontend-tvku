"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SeputarUdinus = () => {
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
        setTitles(resTitles.data);
        setItems(resItems.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">SEPUTAR UDINUS</h1>

      {titles.map((title) => {
        const relatedItems = items.filter(
          (item) => item.id_slides_title === title.id
        );

        if (relatedItems.length === 0) return null; // Lewati jika tidak ada data

        return (
          <div key={title.id} className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{title.judul}</h2>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                more..
              </a>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-2">
              {relatedItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative min-w-[250px] max-w-[250px] aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Background image */}
                  <img
                    // src={`${BASE_URL}/uploads/seputarudinus/${item.thumbnail}`}
                    // src="https://source.unsplash.com/400x225/?university,student"
                    src="/images/programTV/sapaDosen.png"
                    alt={item.teks}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Text content */}
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <p className="text-xs opacity-80">Continue Watching</p>
                    <p className="text-sm font-semibold line-clamp-2">
                      {item.teks}
                    </p>
                  </div>

                  {/* Play button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <div className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeputarUdinus;
