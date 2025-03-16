import Carousel from "@/components/carousel";
import { NewsSection } from "@/components/newsSection";
import { Program } from "@/components/program";
import Schedule from "@/components/schedule";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="z-0">
        <Carousel />
      </div>

      {/* need to fix  */}
      <div className="justify-items-center">
        <Schedule />
      </div>
      
      <NewsSection />
      <Program />
    </div>
  );
}
