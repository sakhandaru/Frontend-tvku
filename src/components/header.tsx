import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex sticky top-0 z-10 items-center justify-between px-20 bg-white">
      <div className="flex items-center gap-10">
        <Image
          src="/images/tvkublue2x.png"
          width={100}
          height={80}
          alt="tvku logo"
        />
        <ul className="flex gap-10 font-semibold text-l font-sans">
          <li>HOME</li>
          <li>NEWS</li>
          <li>PROGRAM</li>
          <li>SEPUTAR UDINUS</li>
        </ul>
      </div>
      <div className="flex items-center">
        <p className="font-sans font-bold text-red-500">LIVE STREAM</p>
      </div>
    </header>
  );
};

export default Header;
