import NewsCard from "@/components/newsCard";
import FeaturedNews from "@/components/featuredNews";
import NewsList from "@/components/newsList";

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
    <div className="bg-gray-100 pb-6 pt-30">
      <div className="md:container md:mx-auto">
        <div className="md:flex gap-6 mb-6">
          <div className="mb-6">
            <FeaturedNews
              judul={newsdatas[0].judul}
              deskripsi={newsdatas[0].deskripsi}
              waktu={newsdatas[0].waktu}
              kategori={newsdatas[0].kategori}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Berita Terbaru
            </h2>
            {newsdatas.slice(1, 5).map((news, index) => (
              <NewsList
                key={index}
                judul={news.judul}
                waktu={news.waktu}
                kategori={news.kategori}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Berita Terkini
          </h1>
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
