import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/About';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMe />
    </div>
  );
}



export default App;
