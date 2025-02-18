import profileImage from '../assets/balan.jpg';

function HeroSection() {
  return (
    <div>
      <section id="profile-picture">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </section>

      <section id="hero">
        <h1 className="hero-text">
          Hello! I'm <span className="hero-name">John Carlo Balan</span>, <br />
          Front-end Designer
        </h1>
      </section>
    </div>
  );
}

export default HeroSection;
