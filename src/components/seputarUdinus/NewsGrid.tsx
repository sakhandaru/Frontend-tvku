"use client";
import React from "react";
import Image from "next/image";

interface NewsItem {
    id: number;
    id_slides_title: number;
    thumbnail: string;
    thumbnail_hover: string;
    teks: string;
    link: string;
    deskripsi: string;
}

interface NewsGridProps {
    items: NewsItem[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function NewsGrid({
    items,
    currentPage,
    totalPages,
    onPageChange,
}: NewsGridProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Grid 4x3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => (
                    <a
                        href={item.link}
                        key={item.id}
                        className="relative block aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group hover:scale-105"
                    >
                        <Image
                            src={item.thumbnail}
                            alt={item.teks}
                            fill
                            className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-10" />

                        <div className="absolute bottom-4 left-5 right-5 z-20 text-white">
                            <p className="text-lg font-semibold leading-snug max-h-[3rem] overflow-hidden transition-all duration-300 group-hover:max-h-[6rem]">
                                {item.deskripsi.split(" ").slice(0, 20).join(" ") + "..."}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => onPageChange(i + 1)}
                        className={`px-3 py-1 border rounded font-medium ${currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-800 hover:bg-blue-100"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
