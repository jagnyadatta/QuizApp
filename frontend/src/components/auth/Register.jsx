import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1>Register</h1>
        <form>
          <label>Full Name:</label>
          <input
            type="text"
            value={input.fullname}
            name="fullname"
            onChange={changeEventHandler}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
          />
          <br />
          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
