// import { useState, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import useAuth from '../Hooks/useAuth';

// const Reviews = () => {
//   const [reviewsData, setReviewsData] = useState([]);
//   const mainSwiperRef = useRef(null);
//   const thumbSwiperRef = useRef(null);
//   const { user } = useAuth();

//   useEffect(() => {
//     fetch('http://localhost:5000/reviews')
//       .then(response => response.json())
//       .then(data => setReviewsData(data))
//       .catch(error => console.error('Error fetching reviews:', error));
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-5">
//       <h2 className="text-3xl font-bold text-center mb-10 text-white">User Reviews</h2>
      
//       {/* প্রধান Swiper */}
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation={true}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         modules={[Navigation, Autoplay, Pagination]}
//         onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
//       >
//         {reviewsData.map((review, index) => (
//           <SwiperSlide key={index} 
//             onMouseEnter={() => mainSwiperRef.current?.autoplay.stop()} 
//             onMouseLeave={() => mainSwiperRef.current?.autoplay.start()}>
//             <motion.div 
//               className="relative bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform duration-500 hover:scale-105 w-full max-w-[350px] mx-auto"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//             >
//               <motion.img 
//                 src={review.photoURL} 
//                 alt='' 
//                 className="w-20 h-20 rounded-full border-4 border-white shadow-md" 
//               />
//               <h3 className="text-xl font-semibold mt-3 text-white">{review.name}</h3>
      
//               <motion.div 
//                 className="mt-4 text-sm text-gray-100 max-w-[280px] h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 p-3 border border-gray-300 rounded-md bg-white/10"
//               >
//                 "{review.review}"
//               </motion.div>
      
//               <div className="mt-3 text-yellow-300 text-lg flex gap-1">
//                 {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* থাম্বনেইল Swiper */}
//       <Swiper
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//       >
//         {reviewsData.map((review, index) => (
//           <SwiperSlide key={index}>
//             <img src={review.photoURL} alt='' className="w-[200px] h-[200px] mt-10 rounded-md shadow-md border border-gray-300" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Reviews;