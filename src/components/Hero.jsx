import { Link } from 'react-router-dom';
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
          <Link to="/contact" className="cta-button">Schedule a Consultation</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
