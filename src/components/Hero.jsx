import { psychologistData } from '../data/psychologistData';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

function Hero() {
  const { language } = useLanguage();
  const data = psychologistData[language];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>{data.tagline}</h2>
          <p className="hero-description">
            {data.sections.heroDescription}
          </p>
          <a 
            href={psychologistData.bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            {data.sections.bookButton.replace(' sur Doctolib', '').replace(' on Doctolib', '')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
