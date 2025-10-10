// src/components/Footer.jsx
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaCalendar,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="bg-gradient-to-r from-[#d7f2ff] to-[#c0f1ff] text-[#274760]">
        {/* Top Section */}
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 justify-between">
            {/* Contact Info */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-xl font-semibold mb-5">
                FAMILY DENTAL CLINIC
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#2874c7] mt-1 shrink-0" />
                  <span>
                    11A/1D, East Topsia Road, Mirania Gardens, Kolkata 700046
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#2874c7]" />
                  <span>8777536694, 8017710095</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCalendar className="text-[#2874c7] mt-1 shrink-0" />
                  <div>
                    <p>
                      <b>TUE - SAT</b> | 11:00 AM TO 7:00 PM
                    </p>
                    <p>
                      <b>SUNDAY</b> | 11:00 AM TO 4:00 PM <br></br>
                      <b>*Monday Closed</b>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links 1 */}
            <div className="col-span-1">
              <ul className="space-y-3 text-sm list-none m-0 p-0">
                <li>About Us</li>
                <li>Doctors</li>
                <li>Timetable</li>
                <li>Appointment</li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div className="col-span-1">
              <ul className="space-y-3 text-sm list-none m-0 p-0">
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2874c7] text-white py-6">
          <div className="max-w-[90rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <span className="font-medium">Follow Us</span>
              {[
                { Icon: FaWhatsapp },
                { Icon: FaInstagram },
                { Icon: FaLinkedinIn },
                { Icon: FaFacebookF },
                { Icon: FaYoutube },
              ].map(({ Icon }, i) => (
                <a
                  key={i}
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2874c7] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-center md:text-right">
              © 2025 All rights reserved. Designed by Simtrak Solutions
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
