import Carousel from "@/components/carousel";
import { NewsSection } from "@/components/newsSection";
import { Program } from "@/components/program";
import Schedule from "@/components/schedule";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <Schedule />
        <NewsSection />
        <Program />
      </div>
    </div>
  );
}
