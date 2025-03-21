import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-lg font-semibold">We growing up your business with personal AI manager.</h2>
          <p className="text-gray-400 mt-2">TVKU, 2025.</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2">Nakula I 5-11, Semarang Tengah, E Building 2nd Floor, UDINUS</p>
          <div className="mt-2 flex flex-col gap-1">
            <p><FaPhoneAlt className="inline mr-2" />024 - 3520334</p>
            <p><FaWhatsapp className="inline mr-2" />+6281228115941 (Bagus)</p>
            <p><FaWhatsapp className="inline mr-2" />+6281227241195 (Fitri)</p>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="text-gray-400 hover:text-white">Program</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Live streaming</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Proposal</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        <p>&copy; 2025 TVKU. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
