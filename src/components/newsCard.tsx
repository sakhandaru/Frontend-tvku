import React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export default function NewsCard({
  judul,
  deskripsi,
  kategori,
  waktu,
  cover,
}: newsDataProps) {
  const markup = { __html: deskripsi };
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={cover}
          alt="bahlil"
          width={500}
          height={500}
          className="object-cover"
        />
        <Badge className="absolute top-2 left-2">{kategori?.nama}</Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
          {judul}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          <div dangerouslySetInnerHTML={markup} />
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{waktu}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
