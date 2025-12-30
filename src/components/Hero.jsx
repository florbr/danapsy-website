import { psychologistData } from '../data/psychologistData';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>{psychologistData.tagline}</h2>
          <p className="hero-description">
            A safe, supportive space for healing and personal growth
          </p>
          <a href="#contact" className="cta-button">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
