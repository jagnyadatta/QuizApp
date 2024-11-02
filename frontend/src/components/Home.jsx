import React from 'react'
import Navbar from './shared/Navbar.jsx'
import  Footer from './shared/Footer.jsx'
import Hero from "./Hero.jsx"
import Terms from "./Terms.jsx"


const Home = () => {
  return (
    <>
      <div className='relative min-h-screen'>
      <div className="absolute inset-0 bg-blue-100 backdrop-blur-md"></div>
        <div className="relative">
          <Navbar/>
          <Hero/>
          <Terms/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home