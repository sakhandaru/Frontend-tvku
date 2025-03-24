import React from "react";
import { Badge } from "./ui/badge";

interface NewsDataProps {
  judul: string;
  waktu: string;
  kategori: NewsKategoriProps;
}

interface NewsKategoriProps {
  id_kategori: number;
  nama: string;
  slug: string;
}

const NewsList = ({ judul, kategori, waktu }: NewsDataProps) => {
  return (
    <div className="border-b pb-4 last:border-0">
      <Badge variant="outline" className="mb-1">
        {kategori.nama}
      </Badge>
      <h3 className="font-medium hover:text-primary cursor-pointer">{judul}</h3>
      <p className="text-sm text-muted-foreground">{waktu}</p>
    </div>
  );
};

export default NewsList;
