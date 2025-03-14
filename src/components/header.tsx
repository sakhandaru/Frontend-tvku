"use client";

import React from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between sticky top-0 w-full transition-all duration-500 bg-white z-10 p-4 ${
        scroll ? "bg-white/10 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-10">
        <Image
          src="/images/tvkublue2x.png"
          width={80}
          height={60}
          alt="tvku logo"
        />
        <nav className="hidden md:flex space-x-4 font-semibold text-lg">
          {["HOME", "NEWS", "PROGRAM", "SEPUTAR UDINUS", "KONTAK KAMI"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>

      <div className="hidden md:block">
        <a
          href="#"
          className="font-bold text-red-600 hover:text-red-600 hover:scale-110 transform transition-transform"
        >
          LIVE STREAMING
        </a>
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <LuMenu size={30}/>
      </button>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setIsDrawerOpen(false)}
            >
              <IoMdClose size={30}/>
            </button>
            <nav className="flex flex-col space-y-4 text-lg font-semibold">
              {["HOME", "NEWS", "PROGRAM", "SEPUTAR UDINUS", "KONTAK KAMI"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-blue-600 hover:font-bold"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <a
              href="#"
              className="mt-6 font-bold text-red-600 text-lg"
              onClick={() => setIsDrawerOpen(false)}
            >
              LIVE STREAMING
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
