import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
      });
      const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email" name="email" value={input.email} />
                <label>Password:</label>
                <input type="password" name="password" value={input.password} />
                <button type="submit">Login</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Login