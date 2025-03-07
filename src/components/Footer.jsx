import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '/logo.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
          <div className="w-28 md:w-36">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <ul className="flex flex-wrap justify-center md:justify-end gap-6 mt-6 md:mt-0">
            <li>
              <Link to={"/"} className="text-lg hover:text-[#3eae94] transition text-gray-800 duration-300">Home</Link>
            </li>
            <li>
              <p className="text-lg hover:text-[#3eae94] transition text-gray-800 duration-300">Product</p>
            </li>
            <li>
              <Link to={"/contact-us"} className="text-lg hover:text-[#3eae94] transition text-gray-800 duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <p className="text-sm text-gray-400">© 2025 <Link to={"https://pagedone.io/"} className="hover:text-[#3eae94]">Nooks</Link>. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to={"#"} className="p-2 rounded-full bg-gray-800 hover:bg-[#3eae94] transition">
              <FaFacebookF className="text-white text-lg" />
            </Link>
            <Link to={"#"} className="p-2 rounded-full bg-gray-800 hover:bg-[#3eae94] transition">
              <FaTwitter className="text-white text-lg" />
            </Link>
            <Link to={"#"} className="p-2 rounded-full bg-gray-800 hover:bg-[#3eae94] transition">
              <FaInstagram className="text-white text-lg" />
            </Link>
            <Link to={"#"} className="p-2 rounded-full bg-gray-800 hover:bg-[#3eae94] transition">
              <FaLinkedinIn className="text-white text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
