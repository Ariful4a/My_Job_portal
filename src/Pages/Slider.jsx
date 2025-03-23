import React from "react";
import baphoto from '../assets/picture.jpeg'
import baphoto1 from '../assets/picture2.jpeg'

import { motion } from "motion/react"



const Slider = () => {
  return (
    <div>
      <div className=" bg-[#c5d5eb] min-h-screen">
        <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
          <div className="space-y-4">
          <motion.img 
            src={baphoto1}
            animate = {{y: [20, 50, 20]}}
            transition={{duration: 20, repeat: Infinity}}
            className="w-96 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] border-amber-600 border-l-8 border-b-8 shadow-2xl"
          />
          <motion.img
            src={baphoto}
            animate = {{x: [-20, 50, -20]}}
            transition={{duration: 20, repeat: Infinity}}
            className="w-72 rounded-lg rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] border-blue-700 border-l-8 border-b-8 shadow-2xl mt-14"
          />
          </div>
          <div className="">
            <motion.h1 animate={{x: 10}} transition={{repeat: Infinity, duration: 5}} className="text-6xl font-bold leading-15">
              The <motion.span animate= {{color: ['#fb2b02', '#fc036c', '#fc0303', '#032cfc', '#f0fc01']}} transition={{duration: 5, repeat: Infinity}} className="text-[#ff0000]">Easiest Way</motion.span> <br /> to Get Your New <br /> Job
            </motion.h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to <br /> website in
              their search for work, making over 140,000 <br /> applications every
              single day
            </p>
            <button className=" bg-[#FF9800] hover:bg-green-500 text-black font-bold p-2 rounded-lg transition duration-300">
              Find Your Job Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
