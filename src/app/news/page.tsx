import FeaturedNews from "@/components/featuredNews";
import { MultiTabContent } from "@/components/multiTabContent";
import NewsList from "@/components/newsList";

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
  data: Inewsdata[];
}
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const [newsdatas, kategoridata] = await Promise.all([
  fetch(`${BASE_URL}/berita`).then((res) => res.json()),
  fetch(`${BASE_URL}/kategori`).then((res) => res.json()),
]);

const beritaData: Inewsdata[] = newsdatas.data;
const kategoriData: Ikategori[] = kategoridata;

export default function Home() {
  return (
    <div className="bg-gray-200 pb-6 pt-25">
      <div className="md:container md:mx-auto">
        <div className="md:flex gap-6 mb-6">
          <div className="mb-6">
            <FeaturedNews
              cover={beritaData[0].cover}
              judul={beritaData[0].judul}
              deskripsi={beritaData[0].deskripsi}
              waktu={beritaData[0].waktu}
              kategori={beritaData[0].kategori}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Berita Terbaru
            </h2>
            {beritaData.slice(1, 6).map((news, index) => (
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
          <div className=" justify-between items-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Berita Terkini</h1>
            <div>
              <MultiTabContent categories={kategoriData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
