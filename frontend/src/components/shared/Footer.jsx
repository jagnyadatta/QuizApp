import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='p-3 bg-gray-300'>
        <div className='flex items-center justify-center gap-4'>
            <p className='font-bold'>Created by:- Jagnyadatta Dalai</p>
            <div className='flex gap-3'>
                <a href="https://www.linkedin.com/in/jagnyadattadalai/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200 hover:text-blue-500'/></a>
                <a href="https://github.com/jagnyadatta" target="_blank" rel="noopener noreferrer"><FaGithubSquare className='text-2xl cursor-pointer hover:scale-110 duration-200 hover:text-red-600'/></a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer