import { FeaturedNews } from "@/components/featuredNews";
import NewsCard from "@/components/newsCard";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function News() {
  interface newsDataProps {
    judul: string;
    deskripsi: string;
    waktu: string;
    kategori: string;
    cover: string;
  }

  const response = await fetch(`${BASE_URL}/berita`);
  const news: newsDataProps[] = await response.json();
  const limitedNews = news.slice(1, 7);

  return (
    <div className="container mx-auto my-20">
      <div>
        <FeaturedNews 
            judul={news[0].judul}
            deskripsi={news[0].deskripsi}
            waktu={news[0].waktu}
            kategori={news[0].kategori}
            cover={news[0].cover}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedNews.map((news, index) => (
          <NewsCard
            key={index}
            judul={news.judul}
            deskripsi={news.deskripsi}
            waktu={news.waktu}
            kategori={news.kategori}
            cover={news.cover}
          />
        ))}
      </div>
    </div>
  );
}
