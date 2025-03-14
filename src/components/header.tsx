"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between fixed top-0 w-full transition-all duration-300 bg-white z-10 ${scroll? "bg-white/10 backdrop-blur-lg shadow-md": "bg-transparent"}`}
    >
      <div className="flex items-center gap-10">
        <Image
          src="/images/tvkublue2x.png"
          width={100}
          height={80}
          alt="tvku logo"
        />
        <nav className="flex flex-wrap space-x-4 font-semibold text-l font-sans">
          <a
            href="#"
            className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform"
          >
            HOME
          </a>
          <a
            href="#"
            className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform"
          >
            NEWS
          </a>
          <a
            href="#"
            className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform"
          >
            PROGRAM
          </a>
          <a
            href="#"
            className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform"
          >
            SEPUTAR UDINUS
          </a>
          <a
            href="#"
            className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform"
          >
            KONTAK KAMI
          </a>
        </nav>
      </div>
      <div>
        <a
          href="#"
          className="font-bold text-red-600 hover:text-red-600 hover:scale-110 transform transition-transform"
        >
          LIVE STREAMING
        </a>
      </div>
    </header>
  );
};
