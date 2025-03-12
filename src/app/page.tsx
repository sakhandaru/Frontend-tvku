import Carousel from "@/components/carousel";
import { NewsSection } from "@/components/newsSection";
import Schedule from "@/components/schedule";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="z-0">
        <Carousel />
      </div>
      <div className="justify-items-center my-15">
        <Schedule />
      </div>
      <div>
        <NewsSection />
      </div>
    </div>
  );
}
