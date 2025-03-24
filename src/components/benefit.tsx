import { motion } from "framer-motion";
import { FaTv, FaBolt, FaSlidersH, FaComments, FaBullseye, FaChartBar } from "react-icons/fa";

const benefits = [
  {
    icon: <FaTv className="text-teal-500 text-4xl" />,
    title: "JANGKAUAN PENGGUNA LUAS",
    description: "Youtube memiliki sekitar 1,3 Milyar pengguna aktif yang terdiri dari banyak latar belakang dan rentang usia. Youtube telah mencakup 95% dari seluruh populasi internet."
  },
  {
    icon: <FaBolt className="text-teal-500 text-4xl" />,
    title: "BIAYA TERJANGKAU DAN FLEKSIBEL",
    description: "Youtube memungkinkan anda menentukan sendiri seberapa kecil atau besarnya biaya beriklan anda."
  },
  {
    icon: <FaSlidersH className="text-teal-500 text-4xl" />,
    title: "BAYAR JIKA IKLAN DITONTON",
    description: "Pengiklan hanya berbayar jika iklan ditonton selama lebih dari 30 detik atau keseluruhannya."
  },
  {
    icon: <FaComments className="text-teal-500 text-4xl" />,
    title: "IKLAN YOUTUBE BERSIFAT DUA ARAH.",
    description: "Penonton bisa memberi feedback dengan berlangganan (subscribe), menyukai (like), berkomentar, atau membagikan kembali (sharing)."
  },
  {
    icon: <FaBullseye className="text-teal-500 text-4xl" />,
    title: "TARGET DAN RELEVAN",
    description: "Youtube menyimpan semua data dan preferensi penggunanya untuk penargetan iklan. Tiap iklan hanya ditampilkan kepada pemirsa dengan preferensi yang anda tentukan."
  },
  {
    icon: <FaChartBar className="text-teal-500 text-4xl" />,
    title: "LAPORAN YANG DETAIL DAN AKURAT",
    description: "Berbeda dengan rating TV yang hanya hasil survey sampling. Dalam laporan iklan Youtube Anda dapat melihat jumlah pemirsa secara akurat, total menit iklan ditayangkan, sampai profil (usia, jenis kelamin, lokasi, kesukaan) pemirsa."
  }
];

export default function Benefit() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">MENGAPA YOUTUBE ADS PENTING UNTUK USAHA ANDA?</h2>
      <div className="w-12 mx-auto mt-2 border-b-2 border-gray-300"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            {benefit.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
            <p className="mt-2 text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
