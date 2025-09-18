// src/components/Footer.jsx
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaYoutube, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaCalendar
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer">
    <footer className="bg-gradient-to-r from-[#d7f2ffff] to-[#c0f1ffff] text-[#274760]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            FAMILY DENTAL CLINIC
          </h3>
          <ul className="space-y-4 text-sm leading-relaxed">
            <li className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#2874c7]" />
              <span>11A/1D, East Topsia Road, Mirania Gardens, Kolkata 700046</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#2874c7]" />
              <span>8777536694,</span>
              <span>8017710095</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaCalendar className="text-[#2874c7]" />
              <p><b>TUE - SAT</b> | 11:00 AM TO 7:00 PM</p>
              <p><b>SUNDAY</b> | 11:00 AM TO 4:00 PM </p>
              

            </li>
          </ul>
        </div>

        {/* Quick Links 1 */}
        <div>
          <ul className="space-y-4 text-sm">
            <li>About Us</li>
            <li>Departments</li>
            <li>Doctors</li>
            <li>Timetable</li>
            <li>Appointment</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <ul className="space-y-4 text-sm">
            <li>Blog</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Be Our Subscribers</h3>
          <p className="text-sm mb-6">
            To get the latest news about health from our experts
          </p>

          {/* Input + Button */}
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full py-4 pl-6 pr-40 text-sm rounded-full border border-gray-300 shadow-md focus:outline-none"
            />
            <button
              className="absolute top-1/2 right-1 -translate-y-1/2 bg-gradient-to-r from-[#2c6ed5] to-[#224a9f] 
                         text-white px-8 py-3 text-sm font-semibold rounded-full shadow-md hover:opacity-90 transition"
            >
              Submit →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2874c7] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="font-semibold mr-3">Follow Us</span>
            
            <a className="w-9 h-9 rounded-full bg-[#2874c7] border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2874c7] transition">
              <FaFacebookF />
            </a>
            <a className="w-9 h-9 rounded-full bg-[#2874c7] border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2874c7] transition">
              <FaYoutube />
            </a>
            <a className="w-9 h-9 rounded-full bg-[#2874c7] border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2874c7] transition">
              <FaLinkedinIn />
            </a>
            <a className="w-9 h-9 rounded-full bg-[#2874c7] border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2874c7] transition">
              <FaTwitter />
            </a>
            <a className="w-9 h-9 rounded-full bg-[#2874c7] border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2874c7] transition">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-right">
            Copyright © 2025 Simtrak Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
}
