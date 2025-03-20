
import React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Badge } from "lucide-react";
import img1 from "../../public/images/bahlil.jpeg";

interface newsDataProps {
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: string;
  cover: string;
}

export default function NewsCard({
  judul,
  deskripsi,
  waktu,
  kategori,
}: newsDataProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={img1} alt="bahlil" fill className="object-cover" />
        <Badge className="absolute top-2 left-2">{kategori}</Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
          {judul}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {deskripsi}
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
