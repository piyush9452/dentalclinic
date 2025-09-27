import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const users = [
    { 
      name: "Rakesh Kumar", 
      location: "Uttarakhand, India", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCKcy05_u7YJ0ykQysHuFXySkipE78shYu0zTYiBJIl3-BENiPkrIlxs0_MSfj3ZRfEA&usqp=CAU" 
    },
    { 
      name: "Priya Dutta", 
      location: "Himanchal Pradesh, India", 
      image: "https://plus.unsplash.com/premium_photo-1681483544221-e04d719060ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" 
    },
    { 
      name: "Sanya Pandey", 
      location: "Uttar Pradesh, India", 
      image: "https://media.istockphoto.com/id/2216052190/photo/successful-confident-businesswoman-at-workplace-inside-office-woman-with-crossed-arms-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sh60m26Ofmk3m5x-rcvadS4CoEWU4d4M-bkro5bfLNg=" 
    },
  ];

  return (
    <section className="bg-[#f4faff] py-20 px-6">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#274760]">
          Some Reviews
        </h2>
        <p className="text-lg text-gray-600 mt-2">Of our clients</p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Users */}
        <div className="space-y-10">
          {users.map((user, idx) => (
            <div key={idx} className="flex items-center space-x-5">
              <img 
                src={user.image} 
                alt={user.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#2874c7]" 
              />
              <div>
                <h3 className="text-lg font-semibold text-[#274760]">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider + Right Side */}
        <div className="relative">
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-300 -ml-8"></div>

          {/* Review Statement */}
          <div className="text-center md:pl-10">
            <p className="text-gray-700 text-xl italic mb-8 leading-relaxed">
              “I recently had to bring my child to ProHealth for a minor injury, and I was so impressed 
              with the care he received. The pediatrician was great with him and made him feel at ease, 
              and the entire staff was kind and attentive.”
            </p>
            {/* 5 Stars */}
            <div className="flex justify-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
