import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/profile.png";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="md:w-2/3 md:h-[81vh] flex flex-col items-center p-3 md:p-10">
          <h1 className="text-orange-300 text-xl md:text-5xl font-bold ">
            Hii,
            <span className="text-gray-700 dynapuff-newfont">Player Name</span>
          </h1>
          <h2 className="text-sky-300 text-3xl md:text-8xl font-bold rubik-wet-paint-regular mt-3">
            Quiz<span className="text-yellow-300 dynapuff-newfont">Time</span>
          </h2>
          <p className="md:p-3 mt-9 mb-9 font-serif">
            Welcome to{" "}
            <span className="text-black dynapuff-newfont">QuizTime</span>, the
            ultimate platform to test and expand your knowledge through fun,
            interactive quizzes! Dive into a world of questions across various
            topics, challenge yourself, and see how much you know. Whether
            you're here to learn, compete, or just have fun,{" "}
            <span className="text-black dynapuff-newfont">QuizTime</span>{" "}
            provides a personalized experience to track your progress and
            enhance your skills. Start playing today, and let's see how far your
            knowledge can take you!
          </p>
          <button
            onClick={() => navigate("/")}
            className="primary-btn bg-blue-600 rounded-lg hover:scale-110 duration-200"
          >
            Let's Play
          </button>
        </div>
        <div className="w-1/3 h-[81vh] border border-l-gray-600 flex flex-col items-center justify-center">
          <div>
            <img src={ProfileImg} alt="" className="w-20 rounded-full" />
          </div>
          <div className="w-full pt-8">
            <div className="p-2">
              <p className="w-full p-3 mt-1 border border-gray-700 rounded-xl font-mono">
                Name: <span className="font-bold">Jagnyadatta Dalai</span>
              </p>
              <p className="w-full p-3 mt-1 border border-gray-700 rounded-xl font-mono">
                Email:{" "}
                <span className="font-bold">
                  jagnyadattadalai99215@gmail.com
                </span>
              </p>
              <p className="w-full p-3 mt-1 border border-gray-700 rounded-xl font-mono">
                Phone: <span className="font-bold">+91-7606976736</span>
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-semibold">Points: 203pts</p>
              <p className="font-semibold">Rank: 20</p>
            </div>
            <div className="flex items-center justify-center">
                <button className="primary-btn hover:scale-110 duration-200">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
