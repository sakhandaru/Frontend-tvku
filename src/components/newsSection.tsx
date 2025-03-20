import React from "react";
import Image from "next/image";
import img1 from "../../public/images/bahlil.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Inewsdata {
  id: number;
  judul: string;
  deskripsi: string;
  waktu: string;
  kategori: string;
}

export const NewsSection = async() => {
  const dateTime = new Date();

  const response = await fetch(`${BASE_URL}/berita`);
  const newsdatas: Inewsdata[] = await response.json();

  return (
    <Tabs defaultValue="trending" className="md:container md:mx-auto">
      <div className="grid justify-between gap-3 md:flex md:justify-between">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Berita Terkini</h1>
        <TabsList className="h-[40px] md:h-[45px] gap-3 mb-2 bg-gray-200 font-semibold">
          <TabsTrigger value="trending" className="md:text-lg">
            Trending
          </TabsTrigger>
          <TabsTrigger value="pendidikan" className="md:text-lg">
            Pendidikan
          </TabsTrigger>
          <TabsTrigger value="investasi" className="md:text-lg">
            Investasi
          </TabsTrigger>
          <TabsTrigger value="ekonomi" className="md:text-lg">
            Ekonomi
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="trending">
        <Card className="container md:flex md:mx-auto mb-6">
          <Image
            src={img1}
            alt="bahlil"
            className="w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          ></Image>
          <div className="flex flex-col justify-between items-center">
            <CardHeader>
              <CardTitle>
                <h2 className="text-3xl font-bold">
                  {newsdatas[0].judul}
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1 gap-10">
              <div>
                <CardDescription>
                  <p className="text-muted-foreground mb-6">
                    {newsdatas[0].deskripsi}
                  </p>
                </CardDescription>
                <Button>Read More</Button>
              </div>
              <div className="flex justify-between items-center">
                <p className="border rounded-2xl px-4 py-1 font-semibold shadow ">
                  politik
                </p>
                <span>
                  {dateTime.toLocaleDateString()} -{" "}
                  {dateTime.toLocaleTimeString()}{" "}
                </span>
              </div>
            </CardContent>
          </div>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsdatas.slice(1,7).map((newsdata) => {
            return(
              <Card key={newsdata.id} className="flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{newsdata.waktu}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{newsdata.judul}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm">
                  {newsdata.deskripsi}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2 border-t">
                <span className="text-xs font-bold">TRENDING</span>
                <span className="text-xs font-medium">
                  {dateTime.toLocaleDateString()} -{" "}
                  {dateTime.toLocaleTimeString()}{" "}
                </span>
              </CardFooter>
            </Card>
            )
          })}
        </div>
      </TabsContent>
      <TabsContent value="pendidikan">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Politics News</h3>
          <p className="text-muted-foreground">
            Switch to the All News tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="investasi">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Technology News</h3>
          <p className="text-muted-foreground">
            Switch to the All News tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ekonomi">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Business News</h3>
          <p className="text-muted-foreground">
            Switch to the All News tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};
