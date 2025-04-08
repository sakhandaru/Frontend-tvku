'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
    ],
  },

];

type titleProps = {
  id: number;
  judul: string;
  urutan: number;
}

type slidesProps = {
  id: number;
  id_slides_title: number;
  thumbnail: string;
  thumbnail_hover: string;
  teks: string;
  link: string;
  deskripsi: string;
}



export default function SeputarUdinus({
  titles,
  data,
}: {
  titles: titleProps[];
  data: slidesProps[];
}) {
  // Kelompokkan berdasarkan title
  const grouped = titles.map((title) => ({
    title: title.judul,
    items: data.filter((item) => item.id_slides_title === title.id),
  }));

  return (
    <div className="mt-30 mb-30 px-4 sm:px-6 md:px-10 lg:px-30 space-y-6">
      {grouped.map((group, index) => (
        <div key={index} className="space-y-3">
          <h2 className="text-xl font-semibold">{group.title}</h2>
          <div className="relative">
            <ScrollContainer items={group.items} />
          </div>
        </div>
      ))}
    </div>
  );
}




function ScrollContainer({ items }: { items: slidesProps[] }) {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild instanceof HTMLElement ? scrollRef.current.firstChild.offsetWidth + 16 : 0;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

  const BASE_URL = 'http://apidev.tvku.tv/api';


  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-3 rounded-full text-white shadow-md hover:bg-opacity-75 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2">
        {items.map((item, index) => (
          <div key={index} className="w-80 flex-shrink-0 bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image src={`${BASE_URL}${item.thumbnail}`} alt={item.teks} width={320} height={180} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <p className="text-sm font-medium text-gray-800">{item.teks}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-3 rounded-full text-white shadow-md hover:bg-opacity-75 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
