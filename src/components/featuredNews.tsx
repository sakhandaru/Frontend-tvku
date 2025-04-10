import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
  // cover,
}: NewsDataProps) {

  const markup = { __html: deskripsi };

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <Image
        src={img1}
        alt={judul}
        width={1200}
        height={600}
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <Badge className="mb-2">{kategori.nama}</Badge>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
          {judul}
        </h1>
        <p className="text-white/90 mb-4 max-w-2xl" dangerouslySetInnerHTML={markup}/>
        <div className="flex items-center gap-4 text-white/80 text-sm">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{waktu}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
