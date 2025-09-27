// src/components/Hero.jsx
import { FaPlay, FaPhoneAlt, FaAmbulance, FaMapMarkerAlt } from "react-icons/fa";
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
      <div className="max-w-7xl ml-10 mr-10 mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-6xl font-bold leading-snug font-figtreesans-serif"
            style={{ color: "#274760" }}
          >
            Healthy Smiles, Expert Care<br />
            Your Trusted Dental Clinic in Kolkata
          </h1>

          <motion.p
            className="mt-6 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to Family Dental Clinic, led by Dr. Ankur Aggarwal & Dr. Devarshi Nandi. We provide advanced and affordable dental care in a comfortable environment.
          </motion.p>


          {/* Patient Stats */}
          <motion.div
            className="mt-10 mb-8 flex items-center bg-white rounded-full shadow-md px-5 py-3 space-x-4 w-max"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {/* <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Patient"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Patient"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/56.jpg"
                alt="Patient"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div> */}

              <a href="#appointment">
  {/* <button className=" text-blue-500 rounded-xl transition flex flex-col items-center"> */}
    <p className="font-bold text-lg text-blue-500">Call to action button</p>
    <p className="text-sm">Book Appointment Now</p>
  {/* </button> */}
</a>



            
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/dentist.png"
            alt="Healthcare Hero"
            className="w-[100%] md:w-[900px] h-[550px]"
          />
        </motion.div>
      </div>

      {/* Bottom Info Section */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] w-[90%] md:w-[80%] bg-white shadow-lg rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Hotline */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#264660] text-white p-4 rounded-full">
            <FaPhoneAlt className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-[#274760]">Number</h4>
            <p className="text-gray-500">8777536694/8017710095</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#264660] text-white p-4 rounded-full">
            <FaMapMarkerAlt className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-[#274760]">Location</h4>
            <p className="text-gray-500">Topsia,Kolkata</p>
          </div>
        </div>

        <a href="#appointment">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#264660] to-[#274760] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center space-x-2"
          >
            <span>Book Now</span>
            <span>→</span>
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
