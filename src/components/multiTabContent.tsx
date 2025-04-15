"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "./newsCard";

interface NewsData {
  judul: string;
  deskripsi: string;
  waktu: string;
  cover: string;
  kategori: Ikategori;
}

interface Ikategori {
  id_kategori: number;
  nama: string;
  slug: string;
}

interface MultiTabContentProps {
  categories: Ikategori[];
  newsData: NewsData[];
}

export function MultiTabContent({
  categories,
  newsData,
}: MultiTabContentProps) {
  const hasCategories = newsData.length > 0;

  return (
    <Tabs defaultValue={hasCategories ? "all" : undefined} className="gap-5">
      <TabsList className="border rounded-lg py-5 bg-white">
        <TabsTrigger value="all" className="text-md font-semibold">
          All
        </TabsTrigger>
        {categories.map((category) => (
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
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
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
        {categories.map((category) => (
          <TabsContent
            key={category.id_kategori}
            value={String(category.id_kategori)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData
                .filter(
                  (news) => news.kategori?.id_kategori === category.id_kategori
                )
                .map((news, index) => (
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
