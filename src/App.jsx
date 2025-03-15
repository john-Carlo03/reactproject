import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
    
  )
}

export default App