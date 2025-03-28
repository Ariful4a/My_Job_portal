import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Animation1 from '../assets/3.json'
import Lottie from "lottie-react";
import AuthContext from "../Context/AuthContext";


const Login = () => {
const {signInUser} = useContext(AuthContext);
const [error , setError] = useState();
const location = useLocation();
const navigate = useNavigate();

  const handaleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result =>{
      console.log(result);
      alert("Success");
      setError(null);
      form.reset();
      navigate(location.state ? location.state : "/");

    })
    .catch(error => {
      console.error(error);
      setError({...error , message:'Invalid email or password'})
    });

  };

    return (
        <div className="flex items-center gap-28 justify-center min-h-screen bg-gray-900 text-white px-4">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
            <form onSubmit={handaleLogin}>
              <div className="mb-4">
                <label className="block mb-2">Email Address</label>
                <input name="email"
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                  type="password" name="password"
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
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300">
                Login
              </button>
              <button className="w-full flex items-center justify-center mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-300">
                <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
              </button>
              <p className="text-center mt-4">
                Don't have an account? <Link className="text-blue-400 hover:underline" to={'/register'}>Sign Up</Link>
              </p>
              {error && <p className="text-red-500">{error.message}</p>}
            </form>
          </div>
          <Lottie className="w-[400px]" animationData={Animation1}></Lottie>
        </div>
      );
};

export default Login;
