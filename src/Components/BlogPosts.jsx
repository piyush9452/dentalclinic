// import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

// export default function BlogPosts() {
//   const posts = [
//     {
//       date: "May 1, 2023",
//       title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
//       image: "https://html.laralink.com/prohealth/assets/img/home_1/post_1.jpeg",
//     },
//     {
//       date: "May 1, 2023",
//       title: "Healthy Eating on a Budget: Tips and Strategies",
//       image: "https://html.laralink.com/prohealth/assets/img/home_1/post_2.jpeg",
//     },
//     {
//       date: "May 1, 2023",
//       title: "The Importance of Regular Cancer Screenings and Early Detection",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFc8kfsdtU95_YLkfTQH8QQuD_NzxcYGbZA&s",
//     },
//   ];

//   return (
//     <section id="blog" className="py-12 px-6 bg-white">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-[#307CB4] text-2xl font-semibold">BLOG POSTS</h2>
//         <h3 className="text-6xl font-bold text-[#264660]">Latest Update</h3>
//       </div>

//       {/* Blog Grid */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {posts.map((post, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
//           >
//             {/* Image */}
//             <img
//               src={post.image}
//               alt={post.title}
//               className="rounded-2xl w-full shadow-lg h-56 object-cover text-[#264660]"
//             />

//             {/* Date + Social Icons */}
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-gray-500 text-sm">{post.date}</span>
//               <div className="flex space-x-3 text-[#264660]">
//                 <a href="#" className="hover:text-[#307CB4]">
//                   <FaLinkedinIn />
//                 </a>
//                 <a href="#" className="hover:text-[#307CB4]">
//                   <FaFacebookF />
//                 </a>
//                 <a href="#" className="hover:text-[#307CB4]">
//                   <FaTwitter />
//                 </a>
//               </div>
//             </div>

//             {/* Title */}
//             <h4 className="mt-3 text-lg font-semibold text-[#264660]">
//               {post.title}
//             </h4>

//             {/* Learn More */}
//             <a
//               href="#"
//               className="mt-2 inline-block text-[#264660] font-medium hover:underline"
//             >
//               Learn More
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
