import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center m-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Tentang TVKU</h2>
        <p className="text-slate-600 mb-8 text-base md:text-lg">
          Stasiun televisi yang memiliki nilai strategis dalam rangka turut
          serta dalam mencerdaskan kehidupan bangsa dan memberikan alternatif
          solusi atas berbagai permasalahan di masyarakat melalui
          program-program siaran yang berkualitas dan tepat sasaran. Mengingat,
          hingga saat ini belum ada program pendidikan yang layak sehingga
          keberadaan stasiun pendidikan sangat dibutuhkan.
        </p>
        <p className="text-slate-600 text-base md:text-lg">
          Pada tanggal 13 September 2003, Surat Keputusan Gubernur Jawa Tengah
          No. 483/116/2003 telah diperbarui pada tanggal 8 Februari 2005 dengan
          No. 483/12A/2005, secara resmi mendapatkan izin untuk membangun
          stasiun televisi pendidikan yang dikelola oleh PT. Televisi kampus
          Universitas Dian Nuswantoro dikenal dengan TVKU.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
        <Image
          src={"/images/fotogedung.jpg"}
          alt="GedungTVKU"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
