"use client";
import React from "react";
import Image from "next/image";
import { use } from "react";

interface NewsItem {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
}

interface NewsGridProps {
    items: NewsItem[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function NewsGrid({ items, currentPage, totalPages, onPageChange }: NewsGridProps) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-6">
                {items.map(item => (
                    <a href={item.link} key={item.id} className="hover:shadow-lg transition">
                        <div className="rounded overflow-hidden">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={400}
                                height={200}
                                className="w-full object-cover h-48"
                            />
                            <p className="mt-2 text-gray-800 font-semibold">{item.title}</p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => onPageChange(i + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
