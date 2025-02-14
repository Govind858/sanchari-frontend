// import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import './Login.css'
function Login() {
  return (
    <div className="LoginBox flex justify-center mt-24 items-center bg-gradient-to-r from-blue-500 to-purple-600 " style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <div className="bg-white p-8 shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <form className="mt-6">
          <div className="relative mb-6">
            <input
              type="text"
              id="email"
              className="peer w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Email
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              className="peer w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Password
            </label>
          </div>
          
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
            Login
          </button>
          <h4 className="mt-5 text-center text-gray-800">Login With</h4>
          <div className="mt-4 flex justify-center gap-6">
            <button className="p-3 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all">
              <FcGoogle size={28} />
            </button>
            <button className="p-3 bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all">
              <FaFacebook size={28} className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
