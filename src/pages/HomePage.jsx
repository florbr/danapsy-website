import { psychologistData } from '../data/psychologistData';
import '../components/Hero.css';
import '../components/About.css';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>{psychologistData.tagline}</h2>
            <p className="hero-description">
              A safe, supportive space for healing and personal growth
            </p>
            <a href="/contact" className="cta-button">Schedule a Consultation</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p className="bio">{psychologistData.bio}</p>
          
          <div className="credentials-section">
            <h3>Credentials & Qualifications</h3>
            <ul className="credentials-list">
              {psychologistData.credentials.map((credential, index) => (
                <li key={index}>{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
