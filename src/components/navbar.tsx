"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBroadcast } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-500 bg-white/30 backdrop-blur-lg shadow-md z-10 ${
        scroll ? "bg-white/100" : "bg-transparent"
      }`}
    >
      <header className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Image
          src="/images/tvkublue2x.png"
          width={100}
          height={60}
          alt="tvku logo"
        />

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-bold text-base text-gray-900 p-4 md:p-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/programPage">Program</Link>
            </li>
            <li>
              <Link href="/seputarUdinus">Seputar UDINUS</Link>
            </li>
            <li className="relative group">
              <Link href="#">Lainnya ▾</Link>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-40 mt-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/digitalMarketing">Digital Marketing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/sales">Sales</Link>
                </li>
              </ul>
            </li>
            <li className="md:hidden mt-4">
              <Link href="/liveStream">
                <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-all flex items-center gap-2 w-full justify-center">
                  <BsBroadcast />
                  Live Streaming
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Tombol Live Streaming */}
        <div className="hidden md:block">
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
