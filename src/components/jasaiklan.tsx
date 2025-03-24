import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaBullhorn, FaGlobe, FaRocket, FaMoneyBillWave } from "react-icons/fa";

const Iklan = () => {
  return (
    <div className="container mx-auto p-10">
      {/* Judul utama */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Jasa Iklan YouTube</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      
      {/* Tentang TVKU */}
      {[1, 2].map((_, index) => (
        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 ${index % 2 ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Tentang TVKU</h2>
            <p className="text-slate-600 mb-8 text-base md:text-lg">
              Stasiun televisi yang memiliki nilai strategis dalam rangka mencerdaskan kehidupan bangsa...
            </p>
            <p className="text-slate-600 text-base md:text-lg">
              TVKU secara resmi mendapatkan izin untuk membangun stasiun televisi pendidikan...
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/fotogedung.jpg" alt="Gedung TVKU" fill className="object-cover" />
          </div>
        </div>
      ))}
      
      {/* Mengapa Iklan YouTube Penting */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Mengapa Iklan YT Penting untuk Usaha Anda?</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{icon: FaChartLine, text: "Meningkatkan Brand Awareness"},
          {icon: FaUsers, text: "Menjangkau Audiens Lebih Luas"},
          {icon: FaBullhorn, text: "Strategi Marketing Efektif"},
          {icon: FaGlobe, text: "Jangkauan Internasional"},
          {icon: FaRocket, text: "Meningkatkan Konversi"},
          {icon: FaMoneyBillWave, text: "Iklan yang Hemat Biaya"}].map(({icon: Icon, text}, i) => (
          <div key={i} className="flex flex-col items-center p-5 shadow-lg rounded-lg bg-white">
            <Icon className="text-blue-500 text-4xl mb-3" />
            <p className="text-center text-lg font-medium">{text}</p>
          </div>
        ))}
      </div>
      
      {/* Kerjasama dengan TVKU */}
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold">Kerjasama dengan TVKU</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      {/* <motion.div className="flex space-x-10 overflow-hidden" animate={{ x: [0, -200, 0] }} transition={{ repeat: Infinity, duration: 10 }}>
        {["/images/tvkublue.png", "/images/tvkublue.png", "/images/tvkublue.png", "/images/tvkublue.png"].map((logo, i) => (
          <Image key={i} src={`/images/${logo}`} alt="Partner Logo" width={150} height={100} className="mx-5" />
        ))}
      </motion.div> */}
      
      {/* Letak Iklan */}
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold">Letak Iklan</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={`/images/ad-${i}.jpg`} alt={`Posisi ${i}`} width={400} height={250} className="object-cover" />
            <p className="absolute bottom-0 bg-black bg-opacity-50 text-white text-center w-full p-2">Posisi {i}</p>
          </div>
        ))}
      </div>
      
      {/* Penawaran Harga */}
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold">Penawaran Harga</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Hemat", "Umum", "Bisnis"].map((tier, i) => (
          <div key={i} className={`p-6 rounded-lg shadow-lg ${tier === "Umum" ? "border-2 border-blue-500" : ""} text-center` }>
            <h3 className="text-xl font-bold mb-3">{tier}</h3>
            <p className="text-lg">Rp{tier === "Hemat" ? "500.000" : tier === "Umum" ? "1.000.000" : "2.500.000"}</p>
            <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg">Pilih</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iklan;
