// import { useState } from "react";
// import { FiCalendar, FiClock, FiPhone, FiUser, FiHash } from "react-icons/fi";

// export default function AppointmentForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     medicalRecord: "",
//     dob: "",
//     gender: "",
//     age: "",
//     date: "",
//     time: "",
//     reason: "",
//     otherReason: "",
//   });

//   const dentalProblems = [
//     "Tooth Filling",
//     "Braces & Aligner",
//     "Tooth Whitening",
//     "Tooth Extraction",
//     "RCT",
//     "Implants",
//     "Crown & Bridge",
//     "Tooth Cleaning",
//     "Other",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();


//     const finalData = {
//       ...formData,
//       reason:
//         formData.reason === "Other" ? formData.otherReason : formData.reason,
//     };

//     console.log("Appointment Data Submitted:", finalData);
//     alert("✅ Appointment booked! Check console for details.");

//     // 👉 Later: send finalData to backend
//   };

//   return (
//     <div
//       id="appointment"
//       className="flex flex-col md:flex-row rounded-2xl shadow-lg p-8 items-center"
//     >
//       {/* Left Side Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full md:w-1/2 space-y-4 ml-3"
//       >
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-[#264660] mb-4">
//           Book Your <br /> Consultation Today!
//         </h2>

//         {/* Name + Phone */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <div className="flex items-center border border-[#264660] rounded-xl px-3 py-2">
//               <FiUser className="text-[#264660] w-5 h-5 mr-2" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="David John"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Phone Number
//             </label>
//             <div className="flex items-center border border-[#264660] rounded-xl px-3 py-2">
//               <FiPhone className="text-[#264660] w-5 h-5 mr-2" />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="(123) 456-789"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* DOB + Gender + Age */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">DOB</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-[#264660] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#264660]"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-[#264660] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#264660]"
//               required
//             >
//               <option value="">Select</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Age</label>
//             <input
//               type="number"
//               name="age"
//               placeholder="25"
//               value={formData.age}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-[#264660] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#264660]"
//               required
//             />
//           </div>
//         </div>

//         {/* Medical Record */}
//         {/* <div>
//           <label className="block text-sm font-medium mb-1">
//             Medical Record Number
//           </label>
//           <div className="flex items-center border border-[#264660] rounded-xl px-3 py-2">
//             <FiHash className="text-[#264660] w-5 h-5 mr-2" />
//             <input
//               type="text"
//               name="medicalRecord"
//               placeholder="123456-7890-0987"
//               value={formData.medicalRecord}
//               onChange={handleChange}
//               className="w-full focus:outline-none"
//             />
//           </div>
//         </div> */}

//         {/* Date + Time */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Preferred Date
//             </label>
//             <div className="flex items-center border border-[#264660] rounded-xl px-3 py-2">
//               <FiCalendar className="text-[#264660] w-5 h-5 mr-2" />
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Preferred Time
//             </label>
//             <div className="flex items-center border border-[#264660] rounded-xl px-3 py-2">
//               <FiClock className="text-[#264660] w-5 h-5 mr-2" />
//               <input
//                 type="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* Reason for Visit */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Reason for Visit
//           </label>
//           <select
//             name="reason"
//             value={formData.reason}
//             onChange={handleChange}
//             className="w-full rounded-xl border border-[#264660] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#264660]"
//             required
//           >
//             <option value="">Select Problem</option>
//             {dentalProblems.map((problem, idx) => (
//               <option key={idx} value={problem}>
//                 {problem}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Show extra input if "Other" selected */}
//         {formData.reason === "Other" && (
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Please Describe Your Problem
//             </label>
//             <textarea
//               name="otherReason"
//               placeholder="Describe your dental issue..."
//               value={formData.otherReason}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-[#264660] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#264660]"
//               rows="3"
//               required
//             />
//           </div>
//         )}

//         {/* Submit */}
//         <button
//           type="submit"
//           className=" bg-gradient-to-r from-[#264660] to-[#274760] w-full text-white py-3 rounded-xl font-semibold transition hover:opacity-90"
//         >
//           Book Appointment
//         </button>
//       </form>

//       {/* Right Side Image */}
//       <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
//         <img
//           src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGlzdCUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"
//           alt="Doctor"
//           className="w-96 rounded-2xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }
