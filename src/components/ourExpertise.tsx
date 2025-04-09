"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";
import img1 from "../../public/images/bahlil.jpeg";

import { useEffect, useState } from "react";

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
    <div className="container mx-auto mt-30">
      <h1 className="flex justify-center text-xl md:text-4xl font-bold mb-15">
        HERE ARE SOME OF OUR EXPERTISE
      </h1>
      <div>
        {expertise.map((item) => (
          <section key={item.id} className="py-5">
            <div className="">
                <div className="gap-5">
                  <div className="w-full lg:w-1/2">
                    <div className="overflow-hidden rounded-lg">
                      <Image src={img1} alt={item.judul} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="max-w-lg">
                      <h2 className="text-2xl lg:text-2xl font-bold text-foreground mb-6">
                        {item.judul}
                      </h2>
                      <p className="text-l lg:text-lg text-muted-foreground ">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
