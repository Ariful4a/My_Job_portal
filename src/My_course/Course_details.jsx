import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Animation10 from "../assets/10.json";
import Animation11 from "../assets/11.json";
import Animation8 from "../assets/8.json";
import Animation9 from "../assets/9.json";
import Animation12 from "../assets/12.json";
import Animation13 from "../assets/13.json";
import Animation14 from "../assets/14.json";
import Animation15 from "../assets/15.json";
import Lottie from "lottie-react";
import useAuth from "../Hooks/useAuth";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const course = useLoaderData(); // Fetch the course data
  const { user } = useAuth();

  const [gender, setGender] = useState(null);

  // 🔥 1️⃣ ইউজারের gender আনবে
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/register/email?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setGender(data.gender))
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [user?.email]);

  // 🔥 2️⃣ Gender-based title logic
  const isMale = gender === "male";
  const isFemale = gender === "female";

  return (
    <div className="bg-cyan-800 min-h-screen flex flex-col items-center py-6 relative overflow-hidden">
      {/* Dynamic Moving User Display */}
      <motion.div
        className="fixed font-bold py-2 px-6 text-lg rounded-lg"
        animate={{
          x: [0, window.innerWidth - 200, 0, -window.innerWidth + 200, 0],
          y: [0, 0, window.innerHeight - 50, window.innerHeight - 50, 0],
          rotateX: [0, 15, 0, -15, 0],
          rotateY: [0, 15, 0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          zIndex: 9999,
          textShadow: "0px 0px 15px rgba(255,255,255,0.8)",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Light BG for visibility
          borderRadius: "8px",
          padding: "8px 16px",
        }}
      >
        {/* ✅ 4️⃣ Dynamic Name Formatting */}
        <motion.span
          animate={{ color: ["#FF5733", "#33FF57", "#337BFF", "#FF33EC"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          {isMale ? "Welcome Mr." : isFemale ? "Welcome Ms." : "Welcome"}
        </motion.span>

        <motion.span
          animate={{
            color: [
              "#FF0000",
              "#FF4500",
              "#00FF00",
              "#FFD700",
              "#1E90FF",
              "#9400D3",
              "#FF1493",
              "#FF6347",
            ],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          {" "}
          {user?.displayName}
        </motion.span>

        <motion.span
          animate={{
            color: ["#FFD700", "#00FFFF", "#FFA07A", "#7FFF00", "#DC143C"],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          {" "}
          {isMale ? "Sir" : isFemale ? "Ma'am" : ""}
        </motion.span>
      </motion.div>

      {/* Background Animations */}
      <div className="absolute top-20 right-0 w-52 z-0">
        <Lottie animationData={Animation11} loop={true} />
      </div>
      <div className="absolute top-20 left-0 w-52 ">
        <Lottie animationData={Animation12} loop={true} />
      </div>
      {/* Course Card */}
      <div className="relative max-w-4xl w-full bg-gray-900 shadow-lg rounded-lg p-8 mt-6 transform transition-all hover:scale-105 hover:shadow-3xl z-10">
        {/* Course Thumbnail */}
        <div className="w-full h-full mb-6 overflow-hidden rounded-lg shadow-md">
          <img
            src={course.descriptionUrl}
            alt={course.courseName}
            className="w-full h-full object-cover transition-all hover:scale-110 duration-500"
          />
        </div>
        <div className="absolute inset-0 top-0">
          <Lottie
            className="top-0 opacity-20"
            animationData={Animation8}
            loop={true}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-52 z-0">
          <Lottie animationData={Animation15} loop={true}></Lottie>
        </div>

        <div className="absolute bottom-0 right-10 w-52 z-0">
          <Lottie animationData={Animation13} loop={true} />
        </div>

        {/* Course Info */}
        <div className="text-center mb-6 relative">
          <h2 className="text-4xl font-extrabold text-white mb-4 transition-all duration-300">
            {course.courseName}
          </h2>
          <p className="text-lg text-gray-400 mb-4">
            {course.courseDescription}
          </p>

          {/* Course Link */}
          <a
            href={course.courseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Start Course
          </a>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <a href="/myCourseCards">
            <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all">
              Back to Courses
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Animation */}
      <div className="w-full relative mt-10">
        <Lottie animationData={Animation10} loop={true} />
        <div className="absolute bottom-0 right-10 w-72">
          <Lottie animationData={Animation9} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
