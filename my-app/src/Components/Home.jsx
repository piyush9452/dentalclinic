// src/components/Hero.jsx
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-24 pb-12" style={{
    background:"linear-gradient(90deg, #b5e8ffff 0%, #a2ebffff 100%)"
  }}>
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
            We are committed to providing you with the best medical 
            and healthcare services to help you live healthier and happier.
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
    </section>
  );
}
