import React from "react";
import baphoto from '../assets/coding.jpg';
import baphoto1 from '../assets/Hello.avif';
import baphoto2 from '../assets/c.jpg';
import Animation from '../assets/bg2.json';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const Slider = () => {
  return (
    <div className="relative w-full h-screen bg-blue-950 z-10 overflow-hidden">
      {/* 🟢 Full-screen Lottie Background */}
      <div className="absolute inset-0 z-10">
        <Lottie animationData={Animation} className="w-full h-full object-cover" />
      </div>

      {/* 🚀 Content Section */}
      <div className="hero-content gap-20 flex-col lg:flex-row-reverse relative z-10 px-6">
        {/* 📷 Animated Images */}
        <div className="space-y-6">
          <motion.img
            src={baphoto1}
            animate={{ y: [20, 50, 20] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-96 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] border-amber-600 border-l-8 border-b-8 shadow-2xl"
          />
          <motion.img
            src={baphoto}
            animate={{ x: [-10, 60, -10], y: [-10, 60, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-72 rounded-lg border-blue-700 border-l-8 border-b-8 shadow-2xl"
          />
          <motion.img
            src={baphoto2}
            animate={{ x: [-5, 50, -10], y:[-10, 50, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-72 absolute bottom-10 right-0 rounded-lg border-red-700 border-l-8 border-b-8 shadow-2xl"
          />
        </div>

        {/* 📝 Text & Button */}
        <div className="text-center lg:text-left">
          <motion.h1
            animate={{ x: 10 }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="text-6xl text-white font-bold leading-tight"
          >
            The{" "}
            <motion.span
              animate={{ color: ['#fb2b02', '#fc036c', '#fc0303', '#032cfc', '#f0fc01'] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-[#ff0000]"
            >
              Easiest Way
            </motion.span>{" "}
            <br /> to Get Your New <br /> Job
          </motion.h1>
          <p className="py-6 text-white">
            Each month, more than 3 million job seekers turn to <br /> our website in
            their search for work, making over 140,000 <br /> applications every single day.
          </p>
          <Link to={'/myCourseCards'}>
            <button className="bg-[#FF9800] hover:bg-green-500 text-black font-bold px-6 py-3 rounded-lg transition duration-300">
              All Courses Click First!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
