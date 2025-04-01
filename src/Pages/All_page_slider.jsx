import React from "react";
import courseImage1 from '../assets/coding.jpg';
import courseImage2 from '../assets/Hello.avif';
import Animation from '../assets/bg2.json';
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const CourseSlider = () => {
  return (
    <div className="relative w-full min-h-screen -z-10 bg-blue-950">
      {/* 🟢 Lottie এনিমেশন ব্যাকগ্রাউন্ড */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Lottie
          animationData={Animation}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-6 lg:px-16 z-10">
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <div className="space-y-4">
            <motion.img
              src={courseImage1}
              animate={{ y: [20, 50, 20], y: [20, 50, 20] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="w-80 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] border-amber-600 border-l-8 border-b-8 shadow-2xl"
            />
            <motion.img
              src={courseImage2}
              animate={{ x: [-20, 50, -20], y: [20, 50 , 20] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="w-80 rounded-lg rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] border-blue-700 border-l-8 border-b-8 shadow-2xl mt-8"
            />
          </div>
          <div>
            <motion.h1
              animate={{ x: 10 }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="text-4xl lg:text-5xl text-white font-bold leading-tight text-center lg:text-left"
            >
              Explore Our{" "}
              <motion.span
                animate={{
                  color: ['#fb2b02', '#fc036c', '#fc0303', '#032cfc', '#f0fc01'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-[#ff0000]"
              >
                Premium Courses
              </motion.span>{" "}
              <br /> and Upgrade Your Skills
            </motion.h1>
            <p className="py-4 text-white text-center lg:text-left">
              We offer a variety of top-notch courses across different fields. <br />
              Join our community and take the first step towards advancing your career.
            </p>
            <div className="text-center lg:text-left">
              <button className="bg-[#FF9800] hover:bg-green-500 text-black font-bold p-3 rounded-lg transition duration-300">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
