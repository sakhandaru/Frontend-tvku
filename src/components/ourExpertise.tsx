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

interface Iexpertise {
  id: number;
  thumbnail: string;
  judul: string;
  deskripsi: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const OurExpertise = () => {
  const [expertise, setExpertise] = useState<Iexpertise[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get<Iexpertise[]>(
          `${BASE_URL}/home/our-expertise1`
        );
        setExpertise(response.data);
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
      <div className="grid grid-cols-2 gap-5 lg:gap-8">
        {expertise.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative">
              <Image
                src={img1}
                alt={item.judul}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className=" hover:text-primary cursor-pointer">
                {item.judul}
              </CardTitle>
              <CardDescription>
                {item.deskripsi}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
