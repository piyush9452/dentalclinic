// src/components/Doctors.jsx



export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Devarshi Nandi",
      qualification: "BDS, MDS (Orthodontics)",
      contact: "+91 877536694",
      image: "https://i.pravatar.cc/200?img=47",
    },
    {
      name: "Dr. Ankur Aggarwal",
      qualification: "BDS, MDS (Endodontics)",
      contact: "+91 8017710095",
      image:  "https://i.pravatar.cc/200?img=12",
    },
  ];

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[#307CB4]">OUR DOCTORS</h2>
          <h3 className="text-4xl font-bold text-[#264660]">Meet Our Specialists</h3>
        </div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-blue-50 shadow-md hover:shadow-xl rounded-xl p-4 flex flex-col items-center text-center transition transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md mb-4"
              />
              {/* Info */}
              <h4 className="text-lg font-semibold text-[#264660]">{doctor.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{doctor.qualification}</p>
              <p className="text-sm text-[#307CB4] font-medium">{doctor.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
