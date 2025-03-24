import NewsCard from "@/components/newsCard";
import FeaturedNews from "@/components/featuredNews";

interface Inewsdata {
  id: number;
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: Ikategori;
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

export default function Home() {
  return (
    <div className="bg-gray-100 pb-6">
      <div className="container mx-auto">
        <div className="mb-6">
          <div>
            <FeaturedNews
              judul={newsdatas[0].judul}
              deskripsi={newsdatas[0].deskripsi}
              waktu={newsdatas[0].waktu}
              kategori={newsdatas[0].kategori}
            />
          </div>
          <div></div>
        </div>
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
    </div>
  );
}
