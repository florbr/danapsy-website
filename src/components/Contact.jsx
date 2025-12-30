import { psychologistData } from '../data/psychologistData';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          Taking the first step can be difficult. I'm here to help. Reach out today to schedule a consultation.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>{psychologistData.contact.email}</p>
          </div>
          
          <div className="contact-item">
            <h3>Phone</h3>
            <p>{psychologistData.contact.phone}</p>
          </div>
          
          <div className="contact-item">
            <h3>Location</h3>
            <p>{psychologistData.contact.location}</p>
          </div>
          
          <div className="contact-item">
            <h3>Office Hours</h3>
            <p>{psychologistData.contact.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
