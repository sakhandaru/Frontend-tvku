import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const About = () => {
  return (
    <div className="container mx-auto">
      <Card className="grid lg:flex">
        <Image
          src={"/images/fotogedung.jpg"}
          alt="foto gedung"
          width={700}
          height={400}
          className="h-62 w-full md:h-full md:w-full object-cover rounded-t-2xl md:rounded-l-2xl"
        />
        <div className="md:p-6">
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl font-bold">Tentang Kami</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-muted-foreground mb-6">
                Stasiun televisi yang memiliki nilai strategis dalam rangka
                turut serta dalam mencerdaskan kehidupan bangsa dan memberikan
                alternatif solusi atas berbagai permasalahan di masyarakat
                melalui program-program siaran yang berkualitas dan tepat
                sasaran. Mengingat, hingga saat ini belum ada program pendidikan
                yang layak sehingga keberadaan stasiun pendidikan sangat
                dibutuhkan.
              </p>
              <p>
                Pada tanggal 13 September 2003, Surat Keputusan Gubernur Jawa
                Tengah No. 483/116/2003 telah diperbarui pada tanggal 8 Februari
                2005 dengan No. 483/12A/2005, secara resmi mendapatkan izin
                untuk membangun stasiun televisi pendidikan yang dikelola oleh
                PT. Televisi kampus Universitas Dian Nuswantoro dikenal dengan
                TVKU.
              </p>
            </CardDescription>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
