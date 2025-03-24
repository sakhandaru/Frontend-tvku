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
      { image: '/images/programTV/sapaDosen.png', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
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

export default function SeputarUdinus() {
  return (
    <div className="mt-30 mb-30 px-30 space-y-6">
      {categories.map((category, index) => (
        <div key={index} className="space-y-3">
          <h2 className="text-xl font-semibold">{category.title}</h2>
          <div className="relative">
            <ScrollContainer items={category.items} />
          </div>
        </div>
      ))}
    </div>
  );
}

type ScrollContainerProps = {
  items: { image: string; title: string }[];
};

function ScrollContainer({ items }: ScrollContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild instanceof HTMLElement ? scrollRef.current.firstChild.offsetWidth + 16 : 0;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

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
            <Image src={item.image} alt={item.title} width={320} height={180} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
              <div className="flex items-center space-x-2">
              </div>
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