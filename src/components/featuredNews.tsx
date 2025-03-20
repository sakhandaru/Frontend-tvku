import React from 'react'
import Image from 'next/image'
import { Badge, CalendarIcon } from 'lucide-react'
import img1 from "../../public/images/bahlil.jpeg";

interface newsDataProps {
    judul: string;
    deskripsi: string;
    waktu: string;
    kategori: string;
    cover: string;
  }

export const FeaturedNews = ({ judul, deskripsi, kategori, waktu } : newsDataProps) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <Image
        src={img1 || "/globe.svg"}
        alt={"bahlil"}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{judul}</h1>
        <p className="text-white/90 mb-4 max-w-2xl">{deskripsi}</p>
        <div className="flex items-center gap-4 text-white/80 text-sm">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{waktu}</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge className="h-4 w-4" />
            <span>{kategori}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
