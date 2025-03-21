'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: 'Kabar Udinus',
    items: [
      { image: '/image1.jpg', title: 'Udinus Bagikan Seribu Takjil Gratis Untuk Mahasiswa Selama Ramadhan' },
      { image: '/image2.jpg', title: 'Pusat Kegiatan Mahasiswa Udinus Hadir Dengan Nuansa Open Space' },
      { image: '/image3.jpg', title: 'Udinus Gelar Posbindu dan Pengobatan Gratis' },
    ],
  },
  {
    title: 'Sapa Dosen',
    items: [
      { image: '/image4.jpg', title: 'SAPA DOSEN - Anemia pada Remaja - Seg 3' },
      { image: '/image5.jpg', title: 'SAPA DOSEN - Anemia pada Remaja - Seg 2' },
      { image: '/image6.jpg', title: 'SAPA DOSEN - Investasi Sementara dan Investasi Jangka Panjang - Seg 1' },
    ],
  },
];

type ScrollContainerProps = {
  items: { image: string; title: string }[];
};

export default function seputarUdinus() {
  return (
    <div className="space-y-6">
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
          <div key={index} className="w-64 flex-shrink-0 bg-white shadow-lg rounded-xl overflow-hidden">
            <Image src={item.image} alt={item.title} width={256} height={144} className="w-full h-36 object-cover" />
            <div className="p-3">
              <p className="text-sm font-medium">{item.title}</p>
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
