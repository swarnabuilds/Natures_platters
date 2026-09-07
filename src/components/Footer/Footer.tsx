import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../../assets/img/footer-logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="w-[120px] h-[60px] object-contain" />
          <p className="text-md text-gray-400 w-10/12">
            Fresh and organic products delivered straight to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-500 transition-colors">Home</a></li>
            <li><a href="/" className="hover:text-green-500 transition-colors">About Us</a></li>
            <li><a href="/" className="hover:text-green-500 transition-colors">Services</a></li>
            <li><a href="/" className="hover:text-green-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-green-500 text-lg" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-500" />
              <span>info@naturesplatter.com</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Natures Platter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;