import { useState } from 'react'
import Navbar from './vendor/navbar'
import Hero from './vendor/Hero'
import AboutMe from './vendor/AboutMe'
import Achievement from './vendor/Achievement'
import WhySmk from './vendor/WhySmk'
import Vocational from './vendor/Vocational'
import Blog from './vendor/Blog'
import Footer from './vendor/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Navbar/>
    <Hero />
    <AboutMe />
    <Achievement />
    <WhySmk />
    <Vocational />
    <Blog />
    <Footer />

    </>
  )
}

