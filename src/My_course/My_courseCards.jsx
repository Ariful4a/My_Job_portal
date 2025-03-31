import { useEffect, useState } from "react";
import CourseCard from "./Course_card";
import useAuth from "../Hooks/useAuth";
import { motion } from "framer-motion";

const MyCourseCards = () => {
    const [courses, setCourse] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch("http://localhost:5000/myCourses")
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 relative">
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
                {/* Welcome Mr. (4 Colors) */}
                <motion.span
                    animate={{ color: ["#FF5733", "#33FF57", "#337BFF", "#FF33EC"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                    Welcome Mr.
                </motion.span>

                {/* User Name (8 Colors) */}
                <motion.span
                    animate={{
                        color: [
                            "#FF0000", "#FF4500", "#00FF00", "#FFD700", 
                            "#1E90FF", "#9400D3", "#FF1493", "#FF6347"
                        ],
                    }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                    {" "}{user?.displayName}
                </motion.span>

                {/* Sir (5 Colors) */}
                <motion.span
                    animate={{ color: ["#FFD700", "#00FFFF", "#FFA07A", "#7FFF00", "#DC143C"] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                >
                    {" "}Sir
                </motion.span>
            </motion.div>

            {/* Responsive Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default MyCourseCards;
