import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Hotjobs from "./HotJobs";
import useAuth from "../Hooks/useAuth";
import { motion } from "framer-motion";
import ReviewForm from "../Reviws/ReviewForm";
// import Reviews from "../Reviws/Reviws";

const Home = () => {
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
    <div>
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

      <Slider></Slider>
      {
        user && user?.email === "afkgamingno1@gmail.com" && (
          <Hotjobs></Hotjobs>
        )
      }
      <div className="bg-cyan-950 py-10">
        {/* <Reviews></Reviews> */}
        <ReviewForm></ReviewForm>
      </div>
      
    </div>
  );
};

export default Home;
