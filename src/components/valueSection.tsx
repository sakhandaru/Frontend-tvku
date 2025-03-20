import React from "react";
import { Card } from "@/components/ui/card";
import { HeartHandshake, Shrub, ChartNoAxesCombined } from "lucide-react";

export const ValueSection = () => {
  return (
    <div className="grid grid-cols-1 gap-5  md:grid-cols-3 md:container md:mx-auto ">
      <Card className="flex items-center justify-center gap-5 p-5 ">
        <HeartHandshake size={50} className=" text-blue-600 min-w-20" />
        <div className="">
          <h1 className="text-xl font-bold">WE ARE PASIONATE</h1>
          <p className="text-muted-foreground text-[15px]">
            TVKU menjadi televisi lokal yang berdaya dan memberdayakan{" "}
          </p>
        </div>
      </Card>

      <Card className="flex flex-col-1 items-center justify-center gap-5 p-5 ">
        <Shrub size={50} className="text-blue-600 min-w-20 " />
        <div className="">
          <h1 className="text-xl font-bold">Honest Dependable</h1>
          <p className="text-muted-foreground">
            Menumbuhkembangkan ilmu pengetahuan dan menyegarkan bangsa melalui
            media audio visual
          </p>
        </div>
      </Card>

      <Card className="flex flex-col-1 items-center justify-center gap-5 p-5 ">
        <ChartNoAxesCombined size={50} className="text-blue-600 min-w-20" />
        <div className="">
          <h1 className="text-xl font-bold">Always Improving</h1>
          <p className="text-muted-foreground">
            Meningkatkan kesejahteraan warga dengan meningkatkan pengetahuan
            teoritis dan keterampilan praktis dan diterapkan melalui program
            siaran
          </p>
        </div>
      </Card>
    </div>
  );
};
