import React from 'react'
import HeroImg from "../assets/brain.jpg"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

  return (
    <div className='p-8 pt-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 min-h-[600px]'>
            {/* text section  */}
            <div className='flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10'>
                <h1 className='text-4xl lg:text-6xl font-semibold playwrite-gb-s-newfont'>Let's Test Your <span className="text-pink-400 dynapuff-newfont">Knowledge</span> by Playing <span className="text-yellow-300 dynapuff-newfont">Quiz!</span></h1>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos reiciendis eos. Tempore non autem vitae odio commodi dolor blanditiis.</p> */}
                <div className='flex pt-5 gap-3 items-center md:justify-start justify-center'>
                    <button onClick={()=> navigate("/register")} className='primary-btn hover:scale-110 duration-200'>Register</button>
                    <button onClick={()=> navigate("/login")} className='secondary-btn hover:scale-110 duration-200'>Login</button>
                </div>
            </div>
            {/* image section */}
            <div className='flex flex-col justify-center'>
                <img src={HeroImg} alt="hero image" className='rounded-full img-shadow w-[500px] mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Hero