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
import img1 from "../../public/images/bahlil.jpeg";

interface newsDataProps {
  judul: string;
  deskripsi: string;
  waktu: string;
  cover: string;
  kategori: NewsKategoriProps;
}

interface NewsKategoriProps {
  id_kategori: number;
  nama: string;
  slug: string;
}

export const NewsHeader = ({
  judul,
  deskripsi,
  waktu,
  // cover,
}: newsDataProps) => {
  const markup = { __html: deskripsi };

  return (
    <div>
      <Card className="container md:flex md:mx-auto mb-6">
        <Image
          src={img1}
          alt="bahlil"
          width={1000}
          height={500}
          className="w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
        />
        <div className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl font-bold">{judul}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between flex-1">
            <div className="space-y-3.5">
              <CardDescription>
                <span
                  className="text-muted-foreground mb-6"
                  dangerouslySetInnerHTML={markup}
                />
              </CardDescription>
              <Button>Read More</Button>
            </div>
            <div className="flex justify-between items-center">
              <p className="border rounded-2xl px-4 py-1 font-semibold shadow ">
                politik
              </p>
              <span>{waktu}</span>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
