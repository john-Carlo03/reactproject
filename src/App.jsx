import React from 'react';
import './App.css';
import profileImage from './balan.jpg';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMe />
      <ProfilePicture />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
}
function HeroSection() {
  return (
    <div>
      <section id="profile-picture">

<img src={profileImage} alt="Profile" className="profile-image" />


      </section>

      <section id="hero">
        <h1 className="hero-text">
          Hello! I'm <span className="hero-name">John Carlo Balan</span>, <br />Front-end Designer
        </h1>
      </section>
    </div>
  );
}

function ProfilePicture() {
  return (
    ""
  );
}


function AboutMe() {
  return (
    
    <section id="about-me">
      <h2>About Me</h2>
      <p> I'm a web designer who loves creating simple and user-friendly designs. I focus on making websites look great and work well on any device. I'm always learning new things to improve my skills every day.</p>
    </section>

  );
  
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>Html & Css</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
  
      </div>
      <div className="project">
        
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>CONTACT ME!!</p>
      <a href="johncarlomallajibalan@gmail.com" className="blue-link">Email:&nbsp;</a><h>johncarlomallajibalan@gmail.com</h><br></br> <br></br>
<a href="https://web.facebook.com/profile.php?id=100023414855311&_rdc=1&_rdr#" className="blue-link">Facebook:&nbsp;</a><h>John Carlo Balan</h>


    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 John Carlo Balan. All rights reserved.</p>
    </footer>
  );
}

export default App;