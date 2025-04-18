"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";
import img1 from "../../public/images/bahlil.jpeg";

import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Iexpertise1 {
  id: number;
  thumbnail: string;
  judul: string;
  deskripsi: string;
}

interface Iexpertise2 {
  id: number;
  thumbnail: string;
  judul: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const OurExpertise = () => {
  const [expertise1, setExpertise1] = useState<Iexpertise1[]>([]);
  const [expertise2, setExpertise2] = useState<Iexpertise2[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get<{ data: Iexpertise1[] }>(`${BASE_URL}/home/our-expertise1`),
          axios.get<{ data: Iexpertise1[] }>(`${BASE_URL}/home/our-expertise2`),
        ]);
        setExpertise1(response1.data.data);
        setExpertise2(response2.data.data);
      } catch (error) {
        console.error("Error fetching expertise data:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-16">
        HERE ARE SOME OF OUR EXPERTISE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        {expertise1.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative w-full h-[300px]">
              <Image
                src={img1}
                alt={item.judul}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-l md:text-lg font-semibold">
                {item.judul}
              </CardTitle>
              <CardDescription className="text-sm">
                {item.deskripsi}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-8 mt-10">
        {expertise2.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative">
              <Image
                src={img1}
                alt={item.judul}
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-l md:text-lg lg:text-xl font-semibold">
                {item.judul}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
