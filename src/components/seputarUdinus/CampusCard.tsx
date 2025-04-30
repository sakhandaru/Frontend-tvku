// components/CampusCard.tsx
import Image from "next/image";

interface CampusCardProps {
  title: string;
  image: string;
}

export default function CampusCard({ title, image }: CampusCardProps) {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="border shadow rounded-lg overflow-hidden">
        <Image src={image} alt={title} width={400} height={225} className="w-full" />
        <div className="p-4 text-sm font-semibold">
          {title}
        </div>
      </div>
    </div>
  );
}
