import React from "react";
import Image from "next/image";

const Iklan = () => {
  return (
    <>
      <div className="text-center mb-20 py-16 bg-gray-100 ">
        <h1 className="text-4xl font-bold">Jasa Iklan YouTube</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Tentang TVKU</h2>
          <p className="text-slate-600 mb-8 text-base md:text-lg">
            TVKU merupakan televisi swasta di Jawa Tengah yang terpopuler di
            Semarang dan sekitarnya, berdasar data dari AGB Nielsen Media
            Research (per Oktober 2013). Hal ini bisa dicapai karena TVKU
            punya program-program acara berkualitas dengan pangsa pasar yang
            jelas. Oleh karena itu, melalui proposal ini kami tawarkan
            kerjasama secara menguntungkan, karena kami media yang tepat untuk
            promosi.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/fotogedung.jpg"
            alt="Gedung TVKU"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/iklan/jangkauan.png"
            alt="Jangkauan Siaran TVKU"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Jangkauan Siaran TVKU</h2>
          <p className="text-slate-600 mb-8 text-base md:text-lg">
          Dengan kekuatan 20.000 watt, kini Siaran TVKU menjangkau 12,5 juta warga Jawa Tengah di Kota Salatiga, Kab. Kendal, Kab. Demak, Kab. Grobogan, Kab. Jepara, Kab. Kudus, Kab. Pati, Kab. Blora, Kab. Temanggung, Magelang, Kota Pekalongan, Kab. Pekalongan, Kab. Sragen, Kab. Batang, Kab. Pemalang, Kab. Karanganyar, Kab. Boyolali, Kab. Sukoharjo dan sekitarnya.
          </p>
        </div>
      </div>
    </div>
    </>

  );
};

export default Iklan;
