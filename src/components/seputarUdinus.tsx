'use client';
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
  const BASE_URL = "http://apidev.tvku.tv";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resTitles, resItems] = await Promise.all([
          axios.get(`${BASE_URL}/api/seputar-dinus-slides-title`),
          axios.get(`${BASE_URL}/api/seputar-dinus-slider`)
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
        const relatedItems = items.filter(item => item.id_slides_title === title.id);

        if (relatedItems.length === 0) return null; // Lewati jika tidak ada data

        return (
          <div key={title.id} className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{title.judul}</h2>
              <a href="#" className="text-sm text-blue-500 hover:underline">more..</a>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-2">
              {relatedItems.map(item => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[250px] max-w-[250px] bg-white shadow-md hover:shadow-lg transition rounded overflow-hidden"
                >
                  <img
                    src={`${BASE_URL}/${item.thumbnail}`}
                    alt={item.teks}
                    className="w-full h-40 object-cover"
                  />
                  
                  <div className="p-3">
                    <p className="text-sm font-medium line-clamp-3">{item.teks}</p>
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
