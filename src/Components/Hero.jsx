// src/components/Hero.jsx
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-12 relative"
      style={{
        background: "linear-gradient(90deg, #d7f2ffff 0%, #c0f1ffff 100%)",
      }}
    >
     
      <div className="max-w-7xl ml-5 mr-10 mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4
            className="mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug font-figtreesans-serif whitespace-nowrap"
            style={{ color: "#274760" }}
          >
            Healthy Smiles, Expert Care
          </h4>
          

          <motion.p
            
            className="mt-3 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Trusted Dental Clinic in Kolkata
            Your Trusted Dental Clinic in Kolkata
          </motion.p>

          {/* Patient Stats */}
          <motion.div
            className="mt-10 mb-8 flex items-center bg-white rounded-full shadow-md px-5 py-3 space-x-4 w-max cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://wa.me/918017710095?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-blue-500 rounded-xl transition flex flex-col items-center">
                <p className="font-bold text-lg text-[#274760]">
                  Book an Appointment Now
                </p>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        {/* <motion.div
          className="flex justify-center md:justify-end pl-0 md:pl-12 ml-0 md:ml-8"
        {/* <motion.div
          className="flex justify-center md:justify-end pl-0 md:pl-12 ml-0 md:ml-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1697033803887-b1a061290569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbnRpc3QlMjBpbmRpYW58ZW58MHx8MHx8fDA%3D"
            src="https://images.unsplash.com/photo-1697033803887-b1a061290569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbnRpc3QlMjBpbmRpYW58ZW58MHx8MHx8fDA%3D"
            alt="Healthcare Hero"
            className="w-full sm:w-[90%] md:w-[700px] h-auto sm:h-[450px] md:h-[550px] object-cover rounded-xl"
          />
        </motion.div> */}

        <motion.div
  className="flex justify-center md:justify-end pl-0 md:pl-12 ml-0 md:ml-8"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src="https://images.unsplash.com/photo-1697033803887-b1a061290569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
    alt="Healthcare Hero"
    className="w-[85%] sm:w-[85%] md:w-[700px] h-auto sm:h-[300px] md:h-[420px] object-cover rounded-xl mx-auto"
  />
</motion.div>

      </div>

      {/* Bottom Info Section */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-70px] w-[95%] md:w-[80%] bg-white shadow-lg rounded-2xl px-5 sm:px-8 py-6
  flex flex-col sm:flex-col md:flex-row items-start sm:items-center md:items-center 
  justify-start sm:justify-center md:justify-between space-y-5 sm:space-y-6 md:space-y-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Hotline */}
        <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
          <div className="bg-[#264660] text-white p-3 sm:p-4 rounded-full flex-shrink-0">
            <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="font-semibold text-sm sm:text-base text-[#274760] text-left">
            8777536694 / 8017710095
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
          <div className="bg-[#264660] text-white p-3 sm:p-4 rounded-full flex-shrink-0">
            <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="font-semibold text-sm sm:text-base text-[#274760] text-left">
            Topsia, Kolkata
          </p>
        </div>

        {/* Book Now Button */}
        <a
          href="https://wa.me/918017710095?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center sm:justify-center md:justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#264660] to-[#274760] text-white px-6 py-3 rounded-full font-medium 
      hover:opacity-90 transition text-sm sm:text-base w-full sm:w-auto"
          >
            Book Now →
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
