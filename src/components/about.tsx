import React from "react";
import { Users, BookOpen, Trophy } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <div className="container mx-auto mt-15">
      <div className="flex md:flex-row gap-12">
        <div className="md:w-1/2">
          <Image
            src="/images/fotogedung.jpg"
            alt="foto gedung tvku"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="justify-between md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-8">Tentang Kami</h2>
            <p className="mb-4">
              Stasiun televisi yang memiliki nilai strategis dalam rangka turut
              serta dalam mencerdaskan kehidupan bangsa dan memberikan
              alternatif solusi atas berbagai permasalahan di masyarakat melalui
              program-program siaran yang berkualitas dan tepat sasaran.
              Mengingat, hingga saat ini belum ada program pendidikan yang layak
              sehingga keberadaan stasiun pendidikan sangat dibutuhkan.
            </p>
            <p className="mb-6">
              Pada tanggal 13 September 2003, Surat Keputusan Gubernur Jawa
              Tengah No. 483/116/2003 telah diperbarui pada tanggal 8 Februari
              2005 dengan No. 483/12A/2005, secara resmi mendapatkan izin untuk
              membangun stasiun televisi pendidikan yang dikelola oleh PT.
              Televisi kampus Universitas Dian Nuswantoro dikenal dengan TVKU.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <Users className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">WE ARE PASIONATE</h3>
                <p className="text-sm text-muted-foreground">
                  TVKU menjadi televisi lokal yang berdaya dan memberdayakan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <BookOpen className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">HONEST DEPENDABLE</h3>
                <p className="text-sm text-muted-foreground">
                  Menumbuhkembangkan ilmu pengetahuan dan menyegarkan bangsa
                  melalui media audio visual
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <Trophy className="h-10 w-10 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Always Improving</h3>
                <p className="text-sm text-muted-foreground">
                  Meningkatkan kesejahteraan warga dengan meningkatkan
                  pengetahuan teoritis dan keterampilan praktis dan diterapkan
                  melalui program siaran
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
