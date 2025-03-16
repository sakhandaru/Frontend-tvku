"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBroadcast } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-500 bg-white/30 backdrop-blur-lg shadow-md z-10 ${
        scroll ? "bg-white/100" : "bg-transparent"
      }`}
    >
      <header className="container mx-auto flex items-center justify-between ">
        <Image
          src="/images/tvkublue2x.png"
          width={100}
          height={60}
          alt="tvku logo"
        />
        <nav>
          <ul className="flex gap-8 font-semibold text-base text-gray-700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/newsPage">News</Link>
            </li>
            <li>
              <Link href="/programPage">Program</Link>
            </li>
            <li className="relative group">
              <Link href="#">Lainnya ▾</Link>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-40 mt-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/solution1">Opsi 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/solution2">Opsi 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div>
          <Link href="/liveStream">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-all flex items-center gap-2">
              <BsBroadcast />
              Live Streaming
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
