

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [rating, setRating] = useState(0);
  const mainSwiperRef = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate();

 

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => setReviewsData(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const handleSubmitReviews = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.rating = rating;
    initialData.photoURL = user?.photoURL || "";

    if (!user) {
      Swal.fire({
        title: "Please login to add review",
        icon: "info",
        timer: 2000,
      });

      // navigate to login page if user is not logged in

      navigate('/login');
      return;
  }

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Review added successfully!",
            icon: "success",
            timer: 2000,
          });
          const newReview = { ...initialData, _id: data.insertedId };
          setReviewsData((prevReviews) => [newReview, ...prevReviews]);
          e.target.reset();
          setRating(0);
        }
      })
      .catch(() => {
        Swal.fire({ title: "Failed to add review", icon: "error" });
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      <style>
        {`
          @keyframes blink {
            0% { border-color: red; }
            10% { border-color: orange; }
            20% { border-color: yellow; }
            30% { border-color: green; }
            40% { border-color: blue; }
            50% { border-color: indigo; }
            60% { border-color: violet; }
            70% { border-color: pink; }
            80% { border-color: cyan; }
            90% { border-color: lime; }
            100% { border-color: red; }
          }
          .animate-blink {
            animation: blink 5s infinite;
          }
        `}
      </style>

      {/* Review Slider */}
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        User Reviews
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, Pagination]}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => mainSwiperRef.current?.autoplay.stop()}
            onMouseLeave={() => mainSwiperRef.current?.autoplay.start()}
          >
            <motion.div
              className="relative bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform duration-500 hover:scale-105 w-full h-[300px] mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src={review.photoURL}
                alt=""
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
              <h3 className="text-xl font-semibold mt-3 text-white">
                {review.name}
              </h3>
              <motion.div className="mt-4 w-[300px] max-h-40 overflow-y-auto scroll-mb-5 text-sm text-gray-100 p-3 border border-gray-300 rounded-md bg-white/10">
                {review.review}
              </motion.div>

              <div className="mt-3 text-yellow-300 text-lg flex gap-1">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <img
              src={review.photoURL}
              alt=""
              className="w-[200px] h-[200px] mt-10 rounded-md shadow-md border border-gray-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Review Form */}
      <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-xl mt-10 border-2 animate-blink">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Submit Review
        </h1>
        <form onSubmit={handleSubmitReviews} className="space-y-4">
          <input
            type="text"
            name="name"
            value={user && user?.email ?  user?.displayName : "Please Login after Review"}
            readOnly
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full p-3 border rounded-md"
            required
          />
          <textarea
            name="review"
            className="w-full p-3 border rounded-md"
            required
            placeholder="Write your review here..."
          ></textarea>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">
            Rating (�� - 5)
          </h3>
          <div className="flex gap-2 text-yellow-400 text-2xl">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                onClick={() => setRating(num)}
                className="cursor-pointer"
              >
                {num <= rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
