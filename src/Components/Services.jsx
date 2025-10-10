// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  FaTooth,
  FaXRay,
  FaUserMd,
  FaTeethOpen,
} from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { GiTooth, GiToothbrush } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export default function Services() {
  const services = [
    {
      name: "Tooth Filling",
      icon: <FaTooth size={36} className="text-[#307CB4]" />,
      desc: "Repair cavities and restore your smile.",
    },
    {
      name: "Braces & Aligners",
      icon: <MdHealthAndSafety size={36} className="text-[#307CB4]" />,
      desc: "Straighten teeth with modern aligner care.",
    },
    {
      name: "Teeth Whitening",
      icon: <GiToothbrush size={36} className="text-[#307CB4]" />,
      desc: "Brighten your smile safely and effectively.",
    },
    {
      name: "Tooth Extraction",
      icon: <FaUserMd size={36} className="text-[#307CB4]" />,
      desc: "Painless extraction with expert care.",
    },
    {
      name: "Root Canal (RCT)",
      icon: <FaXRay size={36} className="text-[#307CB4]" />,
      desc: "Save natural teeth with gentle treatment.",
    },
    {
      name: "Dental Implants",
      icon: <GiTooth size={36} className="text-[#307CB4]" />,
      desc: "Permanent solution for missing teeth.",
    },
    {
      name: "Crown & Bridge",
      icon: <FaTeethOpen size={36} className="text-[#307CB4]" />,
      desc: "Restore function with durable crowns.",
    },
    {
      name: "Teeth Cleaning",
      icon: <MdCleaningServices size={36} className="text-[#307CB4]" />,
      desc: "Professional cleaning for lasting oral health.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl font-semibold text-[#307CB4] uppercase tracking-wide">
            Our Services
          </h2>
          <h3 className="text-5xl font-bold text-[#264660] mt-2">
            What We Offer
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive dental solutions for every age — delivered with care, precision, and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#b5d9f2] via-[#d9ecfa] to-[#ffffff] shadow-lg rounded-2xl p-8 flex flex-col items-center text-center
                         hover:shadow-2xl hover:from-[#9fcdf0] hover:to-[#f0f7fd] cursor-pointer 
                         transition-all duration-300"
              whileHover={{ scale: 1.08, y: -8 }}
            >
              {/* Icon with glow */}
              <motion.div
                className="mb-4 bg-[#e6f3fc] p-5 rounded-full shadow-inner transition-all duration-300"
                whileHover={{
                  boxShadow: "0px 0px 20px 5px rgba(39,71,96,0.4)",
                  scale: 1.1,
                }}
              >
                {service.icon}
              </motion.div>

              <h4 className="text-xl font-semibold text-[#274760] mb-2">
                {service.name}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
