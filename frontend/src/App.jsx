import './App.css'
import Hero from './components/Hero'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Terms from './components/Terms'
// import BgImage from "./assets/dna.jpg"


// const bgStyle = {
//   // backgroundImage: `url(${BgImage})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

function App() {

  return (
    <>
      <div className='relative min-h-screen'>
      <div className="absolute inset-0 bg-blue-100 backdrop-blur-md"></div>
        <div className="relative">
          <Navbar />
          <Hero/>
          <Terms/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
