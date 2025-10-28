import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,

  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaCalendar,
} from "react-icons/fa";
import MapComponent from "./MapComponent";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="bg-gradient-to-r from-[#d7f2ff] to-[#c0f1ff] text-[#274760]">
        {/* Top Section */}
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10 items-start lg:items-center">
    
    {/* 📞 Contact Info (Left Side) */}
    <div className="flex flex-col justify-center text-center sm:text-left">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">
        FAMILY DENTAL CLINIC
      </h3>
      <ul className="space-y-3 text-sm leading-relaxed">
        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
          <FaMapMarkerAlt className="text-[#2874c7] mt-1 shrink-0" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=11A%2F1D%2C+East+Topsia+Road%2C+Mirania+Gardens%2C+Kolkata+700046"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2874c7] transition-colors text-center sm:text-left"
          >
            11A/1D, East Topsia Road, Mirania Gardens, Kolkata 700046
          </a>
        </li>

        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
          <FaPhoneAlt className="text-[#2874c7]" />
          <span>8777536694, 8017710095</span>
        </li>

        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
          <FaCalendar className="text-[#2874c7] mt-1 shrink-0" />
          <div className="text-center sm:text-left">
            <p>
              <b>TUE - SAT</b> | 11:00 AM TO 7:00 PM
            </p>
            <p>
              <b>SUNDAY</b> | 11:00 AM TO 4:00 PM
              <br />
              <b>*Monday Closed</b>
            </p>
          </div>
        </li>
      </ul>
    </div>

    {/* 🗺️ Map (Right on Desktop, Below on Mobile) */}
    <div className="w-full flex justify-center lg:justify-end">
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%]">
        <MapComponent />
      </div>
    </div>
  </div>
</div>

    


        {/* Bottom Bar */}
        <div className="bg-[#2874c7] text-white py-5 sm:py-6">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Social Icons */}
            <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3">
              <span className="font-medium text-sm sm:text-base">
                Follow Us
              </span>
              {[
                { Icon: FaWhatsapp },
                { Icon: FaInstagram },
                { Icon: FaLinkedinIn },
                { Icon: FaFacebookF },

              
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
            <p className="text-xs sm:text-sm text-center md:text-right mt-2 sm:mt-0">
              © 2025 All rights reserved. Designed by Simtrak Solutions
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
