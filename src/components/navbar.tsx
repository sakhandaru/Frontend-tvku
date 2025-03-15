import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBroadcast } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="flex sticky top-0 z-10 items-center justify-between px-10 bg-white shadow-md">
      <Image
        src="/images/tvkublue2x.png"
        width={80}
        height={40}
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
          <BsBroadcast />Live Streaming
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
