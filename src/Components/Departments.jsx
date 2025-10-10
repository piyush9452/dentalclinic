// // import { FaHeartbeat } from "react-icons/fa";
// // import { FaSirenOn, FaChild } from "react-icons/fa6";
// // import { GiBrain, GiFemale } from "react-icons/gi";

// import { FaAmbulance, FaBaby, FaHeartbeat } from "react-icons/fa";
// import { GiBrain, GiFemale } from "react-icons/gi";

// export default function Departments() {
//  const departments = [
//     {
//       name: (
//         <>
//           Emergency <br /> Department
//         </>
//       ),
//       icon: <FaAmbulance size={40} />,
//     },
//     {
//       name: (
//         <>
//           Pediatric <br /> Departement
//         </>
//       ),
//       icon: <FaBaby size={40} />,
//     },
//     {
//       name: (
//         <>
//           Gynecology <br /> Department
//         </>
//       ),
//       icon: <GiFemale size={40} />,
//     },
//     {
//       name: (
//         <>
//           Cardiology <br /> Department
//         </>
//       ),
//       icon: <FaHeartbeat size={40} />,
     
//     },
//     {
//       name: (
//         <>
//           Neurology <br /> Department
//         </>
//       ),
//       icon: <GiBrain size={40} />,
//     },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-[#d7f2ffff] to-[#c0f1ffff]">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-6xl font-bold text-white mb-10">Departments</h2>
//         <div className="flex justify-center gap-6 flex-wrap">
//           {departments.map((dept, idx) => (
//             <div
//               key={idx}
//               className={`flex flex-col items-center justify-center w-52 h-52 rounded-2xl shadow-md cursor-pointer transition-all duration-300 
//                 ${
//                   dept.active
//                     ? "bg-[#307CB4] text-white"
//                     : "bg-white text-[#307CB4]  hover:bg-[#307CB4] hover:text-white"
//                 } hover:-translate-y-3`}
//             >
//               <div className="mb-4">{dept.icon}</div>
//               <h3 className="text-2xl font-medium">{dept.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

