// import { FaAward, FaTrophy, FaMedal, FaRegStar } from "react-icons/fa";

// export default function AwardsSection() {
//   const awards = [
//     {
//       title: "Malcolm Baldrige National Quality Award",
//       description:
//         "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
//       icon: <FaAward className="text-[#274760] text-3xl mr-3" />,
//     },
//     {
//       title: "HIMSS Davies Award",
//       description:
//         "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
//       icon: <FaTrophy className="text-[#274760] text-3xl mr-3" />,
//     },
//     {
//       title: "Healthgrades National’s Best Hospital",
//       description:
//         "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
//       icon: <FaMedal className="text-[#274760] text-3xl mr-3" />,
//     },
//     {
//       title: "Joint Commission Gold Seal of Approval",
//       description:
//         "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
//       icon: <FaRegStar className="text-[#274760] text-3xl mr-3" />,
//     },
//   ];

//   return (
//     <section className="bg-blue-50 py-16 px-6">
//       {/* Section Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-6xl font-bold text-[#274760]">Awards</h2>
//       </div>

//       {/* Awards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {awards.map((award, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
//           >
//             <div className="flex items-center mb-3">
//               {award.icon}
//               <h3 className="text-xl font-semibold text-[#274760]">
//                 {award.title}
//               </h3>
//             </div>
//             <p className="text-gray-600 leading-relaxed">{award.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
