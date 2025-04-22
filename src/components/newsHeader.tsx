import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import img1 from "../../public/images/bahlil.jpeg";

interface NewsKategoriProps {
  id_kategori: number;
  nama: string;
  slug: string;
}

interface NewsDataProps {
  judul: string;
  deskripsi: string;
  waktu: string;
  cover: string;
  kategori: NewsKategoriProps;
}

export const NewsHeader = ({
  judul,
  deskripsi,
  waktu,
  cover,
  kategori,
}: NewsDataProps) => {
  const markup = { __html: deskripsi };

  return (
    <div className="container mx-auto py-6">
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2 h-[300px] md:h-96 relative">
            <Image
              src={cover}
              alt={judul}
              fill
              className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <CardHeader className="pb-2">
              <CardTitle>
                <h2 className="text-2xl md:text-3xl font-bold line-clamp-3">
                  {judul}
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1 pt-0">
              <div className="space-y-4">
                <CardDescription>
                  <div
                    className="text-muted-foreground line-clamp-4 md:line-clamp-6"
                    dangerouslySetInnerHTML={markup}
                  />
                </CardDescription>
                <Button className="w-full md:w-auto">Read More</Button>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="bg-slate-100 rounded-full px-4 py-1 text-sm font-medium shadow-sm">
                  {kategori.nama}
                </span>
                <span className="text-sm text-muted-foreground">{waktu}</span>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};
