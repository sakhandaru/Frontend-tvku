"use client"

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "./newsCard";

interface NewsData {
  judul: string;
  deskripsi: string;
  waktu: string;
  cover: string;
  kategori: NewsKategoriProps;
}

interface NewsKategoriProps {
  id_kategori: number;
  nama: string;
  slug: string;
  data: NewsData[];
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const [newsdatas, kategoridata] = await Promise.all([
  fetch(`${BASE_URL}/berita`).then((res) => res.json()),
  fetch(`${BASE_URL}/kategori`).then((res) => res.json()),
]);

const beritaData: NewsData[] = newsdatas.data;
const kategoriData: NewsKategoriProps[] = kategoridata;

export function MultiTabContent({categories}: { categories: NewsKategoriProps[];}) {
  

  return (
    <Tabs defaultValue={String(categories[1]?.id_kategori)} className="gap-10">
      <TabsList>
        
        {kategoriData.map((category) => (
          <TabsTrigger
            key={category.id_kategori}
            value={String(category.id_kategori)}
            className="text-md font-semibold"
          >
            {category.nama}
          </TabsTrigger>
        ))}
      </TabsList>
      <div>
        {kategoriData.map((category) => (
          <TabsContent
            key={category.id_kategori}
            value={String(category.id_kategori)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beritaData.filter((news) => news.kategori?.id_kategori === category.id_kategori).map((news, index) => (
                  <NewsCard
                    key={index}
                    cover={news.cover}
                    judul={news.judul}
                    deskripsi={news.deskripsi}
                    waktu={news.waktu}
                    kategori={news.kategori}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
