import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Animation5 from "../assets/6.json";
import Animation6 from "../assets/fire.json";
import Lottie from "lottie-react";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className="relative w-full h-96 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-all hover:scale-105 hover:shadow-[0px_0px_25px_rgba(0,255,255,0.6)] border border-cyan-400/50 backdrop-blur-xl overflow-hidden"
      transition={{ type: "spring", stiffness: 200 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        pointerEvents: "auto",
        boxShadow: "0px 0px 25px rgba(0, 255, 255, 0.4)",
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Lottie animationData={Animation5} className="w-full h-full mt-28" />
      </div>
      <div className="absolute inset-0 z-0 opacity-40">
        {" "}
        {/* এখানে opacity কমানো হয়েছে */}
        <Lottie animationData={Animation6} className="w-full h-full mt-28" />
      </div>

      {/* Thumbnail */}
      <div className="relative z-10 w-full h-44 bg-gray-200 rounded-lg overflow-hidden shadow-md border border-cyan-300/50">
        <img
          src={course.courseThumbnail}
          alt={course.courseName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Course Info */}
      <div className="relative z-10 text-white text-center mt-3">
        <h2 className="text-2xl font-bold drop-shadow-lg text-cyan-300 tracking-wider">
          {course.courseName}
        </h2>
        <p className="text-sm opacity-80 mt-2 text-cyan-200 leading-relaxed truncate">
          {course.courseDescription}
        </p>
      </div>

      {/* Course Link */}
      <Link to={`/CourseDetails/${course._id}`}>
        <motion.button className="relative z-10 btn bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-2 px-6 rounded-xl shadow-lg hover:shadow-[0px_0px_15px_rgba(255,215,0,0.8)] transition-all">
          কোর্সের বিস্তারিত
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
