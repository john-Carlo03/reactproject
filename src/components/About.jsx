function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">

            <img src="/profile/balan.jpg" alt="Profile" className="image-placeholder" />
          </div>
          <div className="about-text">
            <p>Hello! I'm John Carlo Balan, a frontend developer with a keen eye for creating elegant user interfaces. I'm currently pursuing my degree in Information Technology and honing my skills in modern web technologies.</p>
            <p>In my free time, I enjoy contributing to open-source projects and staying updated with the latest trends in web development. I'm always eager to learn new technologies and tackle challenging problems.</p>
            <div className="about-buttons">
              <a href="/cv/Resume.pdf" download className="btn btn-outline">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;