import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import img1 from "../../public/images/bahlil.jpeg";

interface NewsDataProps {
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: NewsKategoriProps;
  cover: string;
  imageAlt?: string;
}
interface NewsKategoriProps {
  id_kategori: number;
  nama: string;
  slug: string;
}

export default function FeaturedNews({
  judul,
  deskripsi,
  kategori,
  waktu,
}: // cover,
NewsDataProps) {

  return (
    <Card className="overflow-hidden">
      <div className="relative h-[300px] md:h-[400px]">
        <Image src={img1} alt={judul} fill className="object-cover" priority />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full">
            {kategori.nama}
          </span>
          <span className="text-xs text-muted-foreground">{waktu}</span>
        </div>
        <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
          {judul}
        </CardTitle>
        <CardDescription className="text-base">
          {deskripsi}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
