"use client";
import { useState } from "react";
import NewsGrid from "@/components/seputarUdinus/NewsGrid";

const DUMMY_NEWS = [
    {
        id: 1,
        title: "Tingkatkan Kualitas SDM, Udinus Terima SK Guru Besar",
        imageUrl: "/images/berita1.jpg",
        link: "/berita/1",
    },
    // Tambahkan data dummy lainnya sesuai kebutuhan
];

export default function SeputarUdinus() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Fetch data baru jika menggunakan API
    };

    return (
        <div className="mt-28"> 
            <h1 className="text-2xl font-bold text-center mt-8">Seputar UDINUS</h1>
            <NewsGrid
                items={DUMMY_NEWS}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}