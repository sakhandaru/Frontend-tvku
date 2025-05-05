"use client";
import { useState, useEffect } from "react";
import NewsGrid from "@/components/seputarUdinus/NewsGrid";
import axios from "axios";
import { useParams } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function SeputarUdinus() {
    const [title, setTitle] = useState("");
    const {id} = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [sliderData, setSliderData] = useState([]);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Fetch data baru jika menggunakan API
    };

    const getData = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/seputar-dinus-slider?per_page=12&id_slides_title=${id}&current_page=${currentPage}`);
            setSliderData(data.data);
        } catch (error) {
            throw error;
        }
    }
    const getTitle = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/seputar-dinus-slides-title/${id}`);
            setTitle(data.judul);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        getData();
        getTitle();
    }, [currentPage]);

    return (
        <div className="mt-28"> 
            <h1 className="text-2xl font-bold text-left mt-8">{title}</h1>
            <NewsGrid
                items={sliderData}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}