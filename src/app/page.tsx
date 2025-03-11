import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Schedule from "@/components/schedule";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header/>
      <div className="z-0">
        <Carousel/>
      </div>
      <div className="flex justify-center items-center my-20">
        <Schedule/>
      </div>

    </div>
  );
}
