import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testmonials from './Components/Testimonials/Testmonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'


const App = () => {


  const [playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we Offer' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='GALLERY' title='CAMPUS PHOTOS' />
        <Gallery/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testmonials/>
        <Title subTitle='CONTACT US' title='Get in Touch'/>
        <Contact/>
       <Footer/>
       <Videoplayer playState={playState} setPlayState={playState}/>
      </div>
    </div>
  )
  
}

export default App
