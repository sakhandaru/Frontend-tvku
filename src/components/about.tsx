"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";

import { Card } from "@/components/ui/card";
import { HeartHandshake, Shrub, ChartNoAxesCombined } from "lucide-react";
import { useEffect, useState } from "react";

interface Iabout {
  id: number;
  judul: number;
  deskripsi: string;
  gambar: string;
  motto1: string;
  motto2: string;
  motto3: string;
  motto1sub: string;
  motto2sub: string;
  motto3sub: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const About = () => {
  const [abouts, setAbout] = useState<Iabout[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get<{ data: Iabout[] }>(
          `${BASE_URL}/home/who-we-are`
        );
        setAbout(response.data.data);
      } catch (err) {
        let errorMessage = "Failed to load programs";

        if (axios.isAxiosError(err)) {
          if (err.code === "ECONNABORTED") {
            errorMessage = "Request timeout. Please try again.";
          } else if (!err.response) {
            errorMessage = "Network error. Please check your connection.";
          } else {
            errorMessage = err.response.data?.message || err.message;
          }
        } else if (err instanceof Error) {
          errorMessage = err.message;
        }

        setError(errorMessage);
        console.error("API Error:", err);
      }
    };

    fetchAbout();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto mt-15">
        <h1 className="text-2xl md:text-4xl font-bold">About</h1>
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {abouts.map((about) => (
        <div key={about.id} className="mt-30">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center m-10">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                {about.judul}
              </h2>
              <p className="text-slate-600 mb-8 text-base md:text-lg">
                {about.deskripsi}
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={"/images/fotogedung.jpg"}
                alt="GedungTVKU"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5  md:grid-cols-3 md:container md:mx-auto ">
            <Card className="flex flex-col-1 items-center justify-center gap-5 p-5 ">
              <HeartHandshake size={50} className="text-blue-600 min-w-20 " />
              <div className="">
                <h1 className="text-xl font-bold">{about.motto1}</h1>
                <p className="text-muted-foreground">{about.motto1sub}</p>
              </div>
            </Card>

            <Card className="flex flex-col-1 items-center justify-center gap-5 p-5 ">
              <Shrub size={50} className="text-blue-600 min-w-20 " />
              <div className="">
                <h1 className="text-xl font-bold">{about.motto2}</h1>
                <p className="text-muted-foreground">{about.motto2sub}</p>
              </div>
            </Card>

            <Card className="flex flex-col-1 items-center justify-center gap-5 p-5 ">
              <ChartNoAxesCombined
                size={50}
                className="text-blue-600 min-w-20"
              />
              <div className="">
                <h1 className="text-xl font-bold">{about.motto3}</h1>
                <p className="text-muted-foreground">{about.motto3sub}</p>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
};
