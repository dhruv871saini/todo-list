import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", user);
      localStorage.setItem("token", res.data.token);
      
      toast.success(res.data.message || "Login successful!");
      navigate("/tasks");
    } catch (error) {
      console.log("Error Response:", error.response?.data); 
  
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold text-center mb-4">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4  dark:bg-gray-800 " onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4  dark:bg-gray-800" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded font-bold">Login</button>
        <div className="text-center"><Link to="/register" className="text-blue-600 underline font-bold">If you don't have account ? sign in </Link></div>
      </form>
    </div>
  );
};

export default Login;
