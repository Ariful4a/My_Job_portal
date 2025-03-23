import { useContext, useState } from "react";
import Animation from '../assets/register.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState(null);

  const handleCreateUser = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(!name ||!email ||!password ||!confirmPassword){
      alert("All fields are required");
      return;
    };

    if(password!==confirmPassword){
      alert("Passwords do not match");
      return;
    };
    const user = {name, email, password, confirmPassword};
    console.log(user);
    createUser(email, password)
    .then(result =>{
      console.log(result.user);
      setError(null);
      form.reset();
    })
    .catch(error =>{
      setError(error.message)
    });

  }
    return (
        <div className="flex items-center gap-28 py-14 justify-center min-h-screen bg-gray-900 text-white px-4">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-4">
                <label className="block mb-2">Full Name</label>
                <input
                  type="text" name="name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email Address</label>
                <input
                  type="email" name="email"
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
              <div className="mb-4">
                <label className="block mb-2">Confirm Password</label>
                <input
                  type="password" name="confirmPassword"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300">
                Register
              </button>
              <p className="text-center mt-4">
                Already have an account? <Link className="text-blue-400 hover:underline" to='/login'>Login</Link>
              </p>
              {error && <div className="text-red-500 text-center">{error}</div>}
            </form>
            <div>
            </div>
          </div>
         <div className="flex text-center items-center -mt-60">
         <Lottie className="flex text-center" animationData={Animation}></Lottie>
         </div>
        </div>
      );
};

export default Register;
