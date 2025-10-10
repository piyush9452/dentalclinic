
// // src/components/Values.jsx
// import { motion } from "framer-motion";
// import { FaHandsHelping, FaLightbulb, FaBalanceScale, FaCogs, FaUsers } from "react-icons/fa";

// export default function Values() {
//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-20 bg-blue-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Title */}
//         <motion.h2
//           className="text-6xl font-bold mb-14 mt-12"
//           style={{ color: "#274760" }}
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Our Values
//         </motion.h2>

//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <FaHandsHelping className="text-[#264660] text-4xl" />,
//               title: "Compassion",
//               desc: "We understand that seeking medical care can be stressful, and we strive to create a supportive environment that puts our patients at ease.",
//             },
//             {
//               icon: <FaLightbulb className="text-[#264660] text-4xl" />,
//               title: "Excellence",
//               desc: "We are committed to providing excellent care, continuously improving our skills and resources to deliver the highest quality service.",
//             },
//             {
//               icon: <FaBalanceScale className="text-[#264660] text-4xl" />,
//               title: "Integrity",
//               desc: "We practice medicine with honesty, transparency, and always put our patients’ interests first.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               custom={i}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-center mb-4">{item.icon}</div>
//               <h3
//                 className="text-xl font-semibold mb-3"
//                 style={{ color: "#274760" }}
//               >
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
//           {[
//             {
//               icon: <FaCogs className="text-[#264660] text-4xl" />,
//               title: "Respect",
//               desc: "We embrace new technologies and modern practices to enhance patient care and improve efficiency in healthcare delivery.",
//             },
//             {
//               icon: <FaUsers className="text-[#264660] text-4xl" />,
//               title: "Teamwork",
//               desc: "We work together with patients, families, and professionals to achieve the best health outcomes for everyone.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               custom={i + 3} // continues delay sequence
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-center mb-4">{item.icon}</div>
//               <h3
//                 className="text-xl font-semibold mb-3"
//                 style={{ color: "#274760" }}
//               >
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
