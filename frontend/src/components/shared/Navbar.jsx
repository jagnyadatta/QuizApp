import React from "react";
import profileImg from "../../assets/profile.png"

const Navbar = () => {
  const user = false;
  return (
    <nav className="bg-sky-300 p-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Empty for now */}
        <div></div>

        {/* Center Section - QuizTime */}
        <div className="text-white text-3xl md:text-5xl font-bold rubik-wet-paint-regular">Quiz<span className="text-yellow-300 dynapuff-newfont">Time</span></div>

        {/* Right Section - Profile Photo */}
        {user ? (
          <div className="flex items-center space-x-4">
            <img
              src={profileImg}    
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        ) : (
          <div>
            <button className='primary-btn hover:scale-110 duration-200 sm:px-2 py-1'>Leaderboard</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
