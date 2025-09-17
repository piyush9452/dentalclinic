// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // map links to section IDs (no Pages now)
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Doctor Details", href: "#doctors" },
    { name: "Blog", href: "#blog" },
    
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav className="transition bg-gradient-to-r from-[#b5e8ff] to-[#a2ebff] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#274760]">
          Family Dental<span>Clinic</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium relative text-[#274760]">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Search + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            className="text-[#274760] hover:text-yellow-300 text-xl"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle Search"
          >
            {searchOpen ? <FaTimes /> : <FaSearch />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-300 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-blue-400 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Search bar dropdown */}
      <div
        className={`bg-white shadow-md px-6 flex items-center space-x-3 overflow-hidden transition-all duration-500 ${
          searchOpen ? "max-h-20 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={() => setSearchOpen(false)}
          className="text-gray-600 hover:text-red-500 text-xl"
        >
          <FaTimes />
        </button>
      </div>
    </nav>
  );
}
