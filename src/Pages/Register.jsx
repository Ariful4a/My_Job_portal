import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Animation1 from "../assets/register.json";
import AuthContext from "../Context/AuthContext";
import axios from "axios";  // axios import করা হলো

const Register = () => {
  const { createUser, updateUserProfile, logOutUser, loading } =
    useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const gender = form.gender.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile({ displayName: name, photoURL: photoURL })  // শুধু name এবং photoURL আপডেট হচ্ছে
          .then(() => {
            logOutUser();
            alert("User profile updated");

            // MongoDB-তে gender সহ ডাটা পাঠানো হচ্ছে
            axios
              .post("http://localhost:5000/register", {
                name,
                email,
                photoURL,
                gender
              })
              .then((response) => {
                console.log(response.data);
                setError(null);
                navigate("/login");
              })
              .catch((error) => {
                console.error(error);
                setError({ message: "Failed to register user data to database!" });
              });

          })
          .catch((error) => {
            console.error(error);
            setError({ ...error, message: "Registration Failed!" });
          });
      })
      .catch((error) => {
        console.error(error);
        setError({
          ...error,
          message:
            "Registration Failed! Please Provide your valid email and password",
        });
      });
  };

  return (
    <div className="flex items-center gap-28 justify-center min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              placeholder="Paste your photo URL"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Gender</label>
            <select
              name="gender"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300"
          >
            Register
          </button>
          <button className="w-full flex items-center justify-center mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-300">
            <FcGoogle className="mr-2 text-2xl" /> Sign up with Google
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-blue-400 hover:underline" to={"/login"}>
              Login
            </Link>
          </p>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
      <Lottie className="w-[400px] -mt-72" animationData={Animation1}></Lottie>
    </div>
  );
};

export default Register;
