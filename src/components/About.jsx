import "../style/about.css";
import AboutImg from '../assets/me.jpg'

function AboutMe() {
  return (
    <section id="about-me" className="aboutt">
      <h2>About Me</h2>
      <div className="aboutContent">
        <p>
          I'm a web designer who loves making websites look great while keeping
          them easy to use or user-friendly. I focus on creating clean,
          responsive designs that work well on any device.I enjoy learning new
          things and improving my skills.
        </p>
        <img src={AboutImg} alt="" />
      </div>
    </section>
  );
}

export default AboutMe;
