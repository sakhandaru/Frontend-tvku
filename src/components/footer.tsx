import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-10 text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; 2025 TVKU</p>

        <nav className="flex flex-wrap justify-center space-x-4 text-sm">
          <a href="#" className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform">Home</a>
          <a href="#" className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform">News</a>
          <a href="#" className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform">Program</a>
          <a href="#" className="hover:text-red-600 hover:font-bold hover:scale-110 transform transition-transform">Live Streaming</a>
          <a href="#" className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform">Seputar Udinus</a>
          <a href="#" className="hover:text-blue-600 hover:font-bold hover:scale-110 transform transition-transform">Kontak Kami</a>
        </nav>

        <div className="flex space-x-3 text-gray-500">
          <a href="#" className="hover:text-gray-700"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-700"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-700"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-700"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-700"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
