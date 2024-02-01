import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

import Services from './Components/services'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
