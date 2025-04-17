import { About } from "@/components/about";
import Carousel from "@/components/carousel";
import { CarouselCompanyLogo } from "@/components/carouselCompanyLogo";
import NewsCard from "@/components/newsCard";
import { NewsHeader } from "@/components/newsHeader";
import { OurExpertise } from "@/components/ourExpertise";
import { Program } from "@/components/program";
import Schedule from "@/components/schedule";

interface Inewsdata {
  id: number;
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: Ikategori;
  cover: string;
}
interface Ikategori {
  id_kategori: number;
  nama: string;
  slug: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const response = await fetch(`${BASE_URL}/berita`);
const jsonData = await response.json();
const newsdatas: Inewsdata[] = jsonData.data;

export default function HomePage() {
  return (
    <div className="bg-gray-100 ">
      <div className="z-0">
        <Carousel />
      </div>
      <div className="mx-3">
        <Schedule />
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold">
            Berita Terkini
          </h1>
          <NewsHeader
            cover={newsdatas[0].cover}
            judul={newsdatas[0].judul}
            deskripsi={newsdatas[0].deskripsi}
            waktu={newsdatas[0].waktu}
            kategori={newsdatas[0].kategori}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsdatas.slice(1, 4).map((news, index) => (
              <NewsCard
                key={index}
                cover={news.cover}
                judul={news.judul}
                deskripsi={news.deskripsi}
                waktu={news.waktu}
                kategori={news.kategori}
              />
            ))}
          </div>
        </div>
        <Program />
      </div>
      <div>
        <div className="bg-white py-20 px-3">
          <div>
            <CarouselCompanyLogo />
          </div>
          <div>
            <About />
          </div>
          <div>
            <OurExpertise />
          </div>
        </div>
      </div>
    </div>
  );
}
