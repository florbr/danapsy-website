import { psychologistData } from '../data/psychologistData';
import './About.css';

function About() {
  return (
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
  );
}

export default About;
