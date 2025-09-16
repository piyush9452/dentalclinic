import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  // map links to section IDs
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Pages", href: "#" }, 
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav className="transition bg-gradient-to-r from-[#b5e8ff] to-[#a2ebff] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#274760]">
          Dental<span className="text-yellow-200">Clinic</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium relative text-[#274760]">
          {links.map((link, idx) =>
            link.name === "Pages" ? (
              <li
                key={idx}
                className="relative group cursor-pointer flex items-center space-x-1"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                <span className="hover:text-yellow-300 transition-colors duration-200">
                  {link.name}
                </span>
                <FaChevronDown className="text-sm" />

                {/* Dropdown */}
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-40 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Appoinments
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Doctors
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Doctor Details
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Departments
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Department Details
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Pricing Plan
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Gallery
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                    Time Table
                  </li>
                </ul>
              </li>
            ) : (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            )
          )}
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
          {links.map((link, idx) =>
            link.name === "Pages" ? (
              <li key={idx} className="w-full text-center">
                <button
                  className="flex items-center justify-center w-full hover:text-yellow-300 transition-colors"
                  onClick={() => setPagesOpen(!pagesOpen)}
                >
                  Pages <FaChevronDown className="ml-2 text-sm" />
                </button>
                {pagesOpen && (
                  <ul className="mt-2 bg-white text-gray-700 shadow-md rounded-md space-y-2 py-2">
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Appoinments
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Doctors
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Doctor Details
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Departments
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Department Details
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Pricing Plan
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Gallery
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      Time Table
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            )
          )}
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
