import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
      });
      const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mt-10 font-semibold">Login</h1>
        <div className="flex items-center justify-center mb-8 mt-3">
          <form className="w-full bg-green-200 p-12 rounded-3xl">
            <label className="text-lg font-medium">Email:</label>
            <input
              className="w-full border-2 focus:border-blue-600 rounded-md py-1 px-2 outline-none"
              placeholder="abcd123@gmail.com"
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
            <br />
            <label className="text-lg font-medium">Password:</label>
            <input
              className="w-full border-2 focus:border-blue-600 rounded-md py-1 px-2 outline-none"
              placeholder="*********"
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
            <br />
            <div className="mt-3">
              <input type="checkbox"/>
              <label className="ml-2 font-medium text-gray-500"> Remember me!</label>
            </div>
            <button className="w-full mt-3 py-1 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-500 text-white text-md font-bold rounded-xl " type="submit">Login</button>
            <p className="mt-2">Don't have an account ?  <Link className="pl-2 text-blue-600 font-sans" to="/register">Register</Link></p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login