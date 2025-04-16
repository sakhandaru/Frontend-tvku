"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "./newsCard";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [activeTab, setActiveTab] = useState<string>("all");

  const getActiveTabName = () => {
    if (activeTab === "all") return "All";
    const category = categories.find(
      (cat) => String(cat.id_kategori) === activeTab
    );
    return category ? category.nama : "All";
  };

  return (
    <div className="w-full space-y-4">
      {/* Mobile Dropdown  */}
      <div className="md:hidden w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span>{getActiveTabName()}</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full" align="start">
            <DropdownMenuItem
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "bg-muted" : ""}
            >
              All
            </DropdownMenuItem>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <DropdownMenuItem
                  key={category.id_kategori}
                  onClick={() => setActiveTab(String(category.id_kategori))}
                  className={
                    activeTab === String(category.id_kategori) ? "bg-muted" : ""
                  }
                >
                  {category.nama}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop */}
      <Tabs
        defaultValue={"all"}
        value={activeTab}
        onValueChange={setActiveTab}
        className="gap-5 w-full"
      >
        <div className="hidden md:block overflow-x-auto pb-2">
          <TabsList className="border py-2 px-1 bg-white h-auto inline-flex flex-nowrap min-w-full">
            <TabsTrigger
              value="all"
              className="text-sm lg:text-md font-semibold px-3 py-1.5"
            >
              All
            </TabsTrigger>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <TabsTrigger
                  key={category.id_kategori}
                  value={String(category.id_kategori)}
                  className="text-sm lg:text-md font-semibold px-3 py-1.5 whitespace-nowrap"
                >
                  {category.nama}
                </TabsTrigger>
              ))}
          </TabsList>
        </div>

        <div className="pt-4">
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
          {Array.isArray(categories) &&
            categories.map((category) => (
              <TabsContent
                key={category.id_kategori}
                value={String(category.id_kategori)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {newsData
                    .filter(
                      (news) =>
                        news.kategori?.id_kategori === category.id_kategori
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
    </div>
  );
}
