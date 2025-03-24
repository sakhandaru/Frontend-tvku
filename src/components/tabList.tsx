import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NewsKategoriProps {
    id_kategori: number;
    nama: string;
  }

const TabList = ({ id_kategori, nama }: NewsKategoriProps) => {
  return (
    <TabsList>
      <TabsTrigger value={id_kategori.toString()}>{nama}</TabsTrigger>
    </TabsList>
  );
};

export default TabList;
