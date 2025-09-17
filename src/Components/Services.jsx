// src/components/Services.jsx
import { FaTooth, FaSmile, FaTeethOpen, FaSyringe } from "react-icons/fa";
import { GiToothbrush, GiTooth, GiWisdom } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";

export default function Services() {
  const services = [
    { name: "Tooth Filling", icon: <FaTooth size={28} className="text-[#274760]" /> },
    { name: "Braces & Aligner", icon: <FaSmile size={28} className="text-[#274760]" /> },
    { name: "Tooth Whitening", icon: <GiToothbrush size={28} className="text-[#274760]" /> },
    { name: "Tooth Extraction", icon: <GiWisdom size={28} className="text-[#274760]" /> },
    { name: "RCT", icon: <FaSyringe size={28} className="text-[#274760]" /> },
    { name: "Implants", icon: <GiTooth size={28} className="text-[#274760]" /> },
    { name: "Crown & Bridge", icon: <FaTeethOpen size={28} className="text-[#274760]" /> },
    { name: "Tooth Cleaning", icon: <MdOutlineCleaningServices size={28} className="text-[#274760]" /> },
  ];

  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[#307CB4]">OUR SERVICES</h2>
          <h3 className="text-5xl font-bold text-[#264660]">What We Offer</h3>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center 
                         transition transform duration-300 ease-in-out 
                         hover:scale-105 hover:bg-[#e6f4ff] hover:shadow-xl cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-lg font-semibold text-[#274760]">
                {service.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
