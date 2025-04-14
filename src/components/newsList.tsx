import React from "react";
import { Badge } from "./ui/badge";

interface NewsDataProps {
  judul: string;
  deskripsi: string;
  kategori: NewsKategoriProps;
}

interface NewsKategoriProps {
  id_kategori: number;
  nama: string;
  slug: string;
}

const NewsList = ({ judul, deskripsi, kategori }: NewsDataProps) => {
  return (
    <div className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div>
        <Badge variant="outline" className="mb-1">
          {kategori?.nama}
        </Badge>
        <div className="font-bold hover:text-primary transition-colors line-clamp-2">
          {judul}
        </div>
        <div className="font-light line-clamp-1">{deskripsi}</div>
      </div>
    </div>
  );
};

export default NewsList;
