// pages/campus-corner/index.tsx
import { useEffect, useState } from "react";
import CampusCard from "@/components/seputarUdinus/CampusCard";
import Pagination from "@/components/seputarUdinus/pagination";


interface CampusData {
    id: number;
    title: string;
    image: string;
}

export default function CampusCornerPage() {
    const [data, setData] = useState<CampusData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/campus-corner?page=${currentPage}&limit=${itemsPerPage}`);
                setData(res.data.items);
                setTotalPages(Math.ceil(res.data.total / itemsPerPage));
            } catch (err) {
                console.error("Gagal mengambil data:", err);
            }
        };
        fetchData();
    }, [currentPage]);

    return (
        <div className="p-6">
            <div className="flex flex-wrap -mx-4">
                {data.map(item => (
                    <CampusCard key={item.id} title={item.title} image={item.image} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
}
