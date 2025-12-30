import { psychologistData } from '../data/psychologistData';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

function Contact() {
  const { language } = useLanguage();
  const data = psychologistData[language];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{data.sections.contactTitle}</h2>
        <p className="contact-intro">
          {data.sections.contactIntro}
        </p>
        
        {data.sections.cancellationPolicy && (
          <p className="cancellation-policy">
            {data.sections.cancellationPolicy}
          </p>
        )}
        
        <a 
          href={psychologistData.bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
          style={{ display: 'inline-block', marginBottom: '3rem' }}
        >
          {data.sections.bookButton}
        </a>

        <div className="email-section">
          <p>{data.sections.emailIntro}</p>
          <a href={`mailto:${data.contact.email}`} className="email-link">{data.contact.email}</a>
        </div>
        
        <div className="contact-info">
          <div className="contact-row">
            <div className="contact-item phone-item">
              <h3>{data.sections.phone}</h3>
              <p><a href={`tel:${data.contact.phone.replace(/\s/g, '')}`}>{data.contact.phone}</a></p>
            </div>
            
            <div className="contact-item pricing-item">
              <h3>{data.sections.pricing}</h3>
              <p>{data.sections.consultation} : <strong>{data.pricing.consultation}</strong></p>
              <p>{data.sections.visio} : <strong>{data.pricing.visio}</strong></p>
              <p>{data.sections.homeVisit} : <strong>{data.pricing.homeVisit}</strong></p>
              <p className="home-visit-note">{data.sections.homeVisitNote}</p>
              <p className="payment-info">{data.pricing.payment}</p>
              <p className="reimbursement-info">{data.pricing.reimbursement}</p>
            </div>
          </div>
          
          <div className="contact-item locations-item">
            <h3>{data.sections.address}</h3>
            <div className="locations-grid">
              {data.locations.map((location, index) => (
                <div key={index} className="location">
                  {index === 0 && (
                    <img 
                      src="https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_600,h_400,c_fill/uooemx15qzulujhqccrr.jpg" 
                      alt="Cabinet 113 Rue du Faubourg Poissonnière" 
                      className="location-image"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src="https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_600,h_400,c_fill/kv1zizqtdt9xndzadolf.jpg" 
                      alt="12 Rue Nélaton - Vue avec Tour Eiffel" 
                      className="location-image"
                    />
                  )}
                  <p className="address">{location.address}</p>
                  <p className="hours-info"><strong>{data.sections.hours}:</strong> {location.hours}</p>
                  <p className="metro-info">{location.metro}</p>
                  <p className="accessibility-info">{location.accessibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
