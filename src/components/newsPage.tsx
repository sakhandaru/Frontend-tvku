"use client";

import FeaturedNews from "@/components/featuredNews";
import NewsList from "@/components/newsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { MultiTabContent } from "./multiTabContent";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface Inewsdata {
  id: number;
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: Ikategori;
  cover: string;
  path_media: string;
  link: string;
}

interface Ikategori {
  id_kategori: number;
  nama: string;
  slug: string;
  top_nav: string;
  urutan: number;
}

interface ApiResponse {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  data: Inewsdata[];
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function NewsPage() {
  const [newsData, setNewsData] = useState<Inewsdata[]>([]);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [kategoriData, setKategoriData] = useState<Ikategori[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [latestNewsResponse, newsResponse, kategoriResponse] =
          await Promise.all([
            axios.get<{ data: Inewsdata[] }>(`${BASE_URL}/berita?per_page=5`),
            axios.get<ApiResponse>(
              `${BASE_URL}/berita?current_page=${currentPage}`
            ),
            axios.get<{ data: Ikategori[]}>(`${BASE_URL}/kategori`),
          ]);

        setNewsData(latestNewsResponse.data.data);
        setApiData(newsResponse.data);
        setKategoriData(kategoriResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    console.log("Changing to page:", page);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!apiData || !apiData.data.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        No news data available
      </div>
    );
  }

  const { data: beritaData, last_page } = apiData;

  const getPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage, endPage;

    if (last_page <= maxVisiblePages) {
      startPage = 1;
      endPage = last_page;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
      const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + maxPagesAfterCurrent >= last_page) {
        startPage = last_page - maxVisiblePages + 1;
        endPage = last_page;
      } else {
        startPage = currentPage - maxPagesBeforeCurrent;
        endPage = currentPage + maxPagesAfterCurrent;
      }
    }

    items.push(
      <PaginationItem key="prev">
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
        />
      </PaginationItem>
    );

    if (startPage > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
            isActive={1 === currentPage}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page);
            }}
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < last_page) {
      if (endPage < last_page - 1) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key={last_page}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(last_page);
            }}
            isActive={last_page === currentPage}
          >
            {last_page}
          </PaginationLink>
        </PaginationItem>
      );
    }
    // Next button
    items.push(
      <PaginationItem key="next">
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < last_page) {
              handlePageChange(currentPage + 1);
            }
          }}
          className={
            currentPage === last_page ? "opacity-50 cursor-not-allowed" : ""
          }
        />
      </PaginationItem>
    );

    return items;
  };

  return (
    <div className="bg-gray-100 pb-6 pt-25 px-3">
      <div className="md:container md:mx-auto">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FeaturedNews
              cover={newsData[0]?.cover || ""}
              judul={newsData[0]?.judul || ""}
              deskripsi={newsData[0]?.deskripsi || ""}
              waktu={newsData[0]?.waktu || ""}
              kategori={
                newsData[0]?.kategori || {
                  id_kategori: 0,
                  nama: "",
                  slug: "",
                  top_nav: "0",
                  urutan: 0,
                }
              }
            />
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-white">
              <h2 className="font-bold text-2xl mb-4">Trending Now</h2>
              <div className="space-y-4">
                {newsData.map((news) => (
                  <NewsList
                    key={news.id}
                    judul={news.judul}
                    deskripsi={news.deskripsi}
                    kategori={news.kategori}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between items-center mt-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Berita Terkini
          </h1>
          <div>
            <MultiTabContent categories={kategoriData} newsData={beritaData} />
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>{getPaginationItems()}</PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
