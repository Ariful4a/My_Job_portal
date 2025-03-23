import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Animation1 from '../assets/2.json'
import Lottie from "lottie-react";

const Login = () => {
    return (
        <div className="flex items-center gap-28 justify-center min-h-screen bg-gray-900 text-white px-4">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300">
                Login
              </button>
              <button className="w-full flex items-center justify-center mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-300">
                <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
              </button>
              <p className="text-center mt-4">
                Don't have an account? <Link className="text-blue-400 hover:underline" to={'/register'}>Sign Up</Link>
              </p>
            </form>
          </div>
          <Lottie className="w-[400px]" animationData={Animation1}></Lottie>
        </div>
      );
};

export default Login;
