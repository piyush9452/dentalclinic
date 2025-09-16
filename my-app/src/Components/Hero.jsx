// src/components/Hero.jsx
import { FaPlay, FaPhoneAlt, FaAmbulance, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero"
      className="pt-24 pb-12 relative"
      style={{
        background: "linear-gradient(90deg, #d7f2ffff 0%, #c0f1ffff 100%)",
      }}
    >
      <div className="max-w-7xl ml-10 mr-10 mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1
            className="text-4xl md:text-6xl lg:text-6xl font-bold leading-snug font-figtreesans-serif"
            style={{ color: "#274760" }}
          >
            Your Partner in <br />
            Health and Wellness
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            We are committed to providing you with the best medical and
            healthcare services to help you live healthier and happier.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center space-x-6">
            {/* Play Button */}
            <button className="flex items-center space-x-3 text-gray-800 hover:text-[#2C6AE5] transition">
              <FaPlay className="w-10 h-10 border border-gray-400 rounded-full p-2" />
              <span className="font-medium">See how we work</span>
            </button>
          </div>

          {/* Patient Stats */}
          <div className="mt-10 flex items-center bg-white rounded-full shadow-md px-5 py-3 space-x-4 w-max">
            <div className="flex -space-x-2">
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
            </div>
            <div>
              <p className="text-[#2C6AE5] font-bold text-lg">150K+</p>
              <p className="text-gray-600 text-sm">Patient Recover</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://html.laralink.com/prohealth/assets/img/home_1/hero_img.png"
            alt="Healthcare Hero"
            className="w-[100%] md:w-[900px] h-[550px]"
          />
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] w-[90%] md:w-[80%] bg-white shadow-lg rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Hotline */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#264660] text-white p-4 rounded-full">
            <FaPhoneAlt className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-[#274760]">Hotline</h4>
            <p className="text-gray-500">123-456-7890</p>
          </div>
        </div>

        {/* Ambulance */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#264660] text-white p-4 rounded-full">
            <FaAmbulance className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-[#274760]">Ambulance</h4>
            <p className="text-gray-500">876-256-876</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#264660] text-white p-4 rounded-full">
            <FaMapMarkerAlt className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-[#264660]">Location</h4>
            <p className="text-gray-500">New York, US</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-[#264660] to-[#274760] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center space-x-2">
          <span>Book Now</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
