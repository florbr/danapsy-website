import { psychologistData } from '../data/psychologistData';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

function Services() {
  const { language } = useLanguage();
  const data = psychologistData[language];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{data.sections.specializations}</h2>
        <div className="services-grid">
          {data.specializations.map((service, index) => (
            <div key={index} className="service-item">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
