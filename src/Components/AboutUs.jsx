// src/components/AboutUs.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mt-7 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative flex flex-col items-center">
          {/* Main Image */}
          <img
            src="https://img.freepik.com/premium-photo/comprehensive-dental-care-dentists-dental-procedures_984027-223992.jpg?ga=GA1.1.315191760.1755696332&semt=ais_hybrid&w=740&q=80"
            alt="Doctor with patient"
            className="rounded-2xl w-[90%] mb-6"
          />

          {/* Overlay Badge with rotating ring */}
          <div className="absolute -top-8 right-8 bg-white rounded-full shadow-lg flex flex-col items-center text-[#274760] font-semibold text-sm w-35 h-35 justify-center">
            {/* Rotating Ring */}
            <motion.img
              src="https://html.laralink.com/prohealth/assets/img/home_1/about_mini.svg"
              alt="Rotating Ring"
              className="absolute w-40 h-40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />

            {/* Center Tick */}
            <img
              src="https://html.laralink.com/prohealth/assets/img/icons/tick.svg"
              alt="Tick Icon"
              className="w-8 h-8 relative z-10"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-6xl font-extrabold mb-2"
            style={{ color: "#274760" }}
          >
            About Us
          </h2>
          <p className="text-xl font-semibold text-[#274740] mb-6">FAMILY DENTAL CLINIC</p>

          <div className="flex items-start mb-6">
            <FaArrowRight className="text-[#274740] text-xl mt-1 mr-3" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Family Dental Clinic is a team of experienced medical professionals
            </p>
          </div>

          <p className="text-gray-500 leading-relaxed text-lg">
            Dedicated to providing top-quality healthcare services. We believe
            in a holistic approach to healthcare that focuses on treating the
            whole person, not just the illness or symptoms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
