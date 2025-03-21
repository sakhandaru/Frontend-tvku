import { About } from "@/components/about";
import Carousel from "@/components/carousel";
import { CarouselCompanyLogo } from "@/components/carouselCompanyLogo";
import NewsCard from "@/components/newsCard";
import { NewsHeader } from "@/components/newsHeader";
import { Program } from "@/components/program";
import Schedule from "@/components/schedule";
import { ValueSection } from "@/components/valueSection";

interface Inewsdata {
  id: number;
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: string;
}
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const response = await fetch(`${BASE_URL}/berita`);
const jsonData = await response.json();
const newsdatas: Inewsdata[] = jsonData.data;
console.log(newsdatas);

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="z-0">
        <Carousel />
      </div>
      <div className="container mx-auto">
        <Schedule />
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Berita Terkini
          </h1>
          <NewsHeader
            judul={newsdatas[0].judul}
            deskripsi={newsdatas[0].deskripsi}
            waktu={newsdatas[0].waktu}
            kategori={newsdatas[0].kategori}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsdatas.slice(1, 7).map((news, index) => (
              <NewsCard
                key={index}
                judul={news.judul}
                deskripsi={news.deskripsi}
                waktu={news.waktu}
                kategori={news.kategori}
              />
            ))}
          </div>
        </div>
        <Program />
        <About />
        <ValueSection />
        <CarouselCompanyLogo />
      </div>
    </div>
  );
}
