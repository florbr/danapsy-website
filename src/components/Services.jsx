import { psychologistData } from '../data/psychologistData';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Areas of Specialization</h2>
        <div className="services-grid">
          {psychologistData.specializations.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
