import React from "react";
import Image from "next/image";
import img1 from "../../public/images/bahlil.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

export const NewsSection = () => {
  const dateTime = new Date();
  return (
    <Tabs defaultValue="trending" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Berita Terkini</h1>
      <TabsList className="mb-4 bg-gray-200">
        <TabsTrigger value="trending">Trending</TabsTrigger>
        <TabsTrigger value="pendidikan">Pendidikan</TabsTrigger>
        <TabsTrigger value="investasi">Investasi</TabsTrigger>
        <TabsTrigger value="ekonomi">Ekonomi</TabsTrigger>
      </TabsList>
      <TabsContent value="trending">
        <Card className="flex">
          <Image
            src={img1}
            alt="bahlil"
            className="w-[700px] h-[400px] object-fill rounded-l-xl"
          ></Image>
          <div className="flex flex-col justify-between items-center">
            <CardHeader>
              <CardTitle>
                <h2 className="text-3xl font-bold">
                  Global Summit Addresses Climate Change with New Initiatives
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1">
              <div>
                <CardDescription>
                  <p className="text-muted-foreground mb-6">
                    World leaders gathered to announce ambitious new targets for
                    reducing carbon emissions and funding renewable energy
                    projects in developing nations.
                  </p>
                </CardDescription>
                <Button>Read More</Button>
              </div>
              <div className="flex justify-between items-center">
                <p className="border rounded-2xl px-4 py-1 font-semibold shadow ">
                  Politik
                </p>
                <span>
                  {dateTime.toLocaleDateString()} -{" "}
                  {dateTime.toLocaleTimeString()}{" "}
                </span>
              </div>
            </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="pendidikan">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Politics News</h3>
          <p className="text-muted-foreground">
            Switch to the "All News" tab to see the full demo content.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="investasi">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Technology News</h3>
          <p className="text-muted-foreground">
            Switch to the "All News" tab to see the full demo content.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="ekonomi">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Business News</h3>
          <p className="text-muted-foreground">
            Switch to the "All News" tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};
