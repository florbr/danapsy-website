import { psychologistData } from '../data/psychologistData';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

function About() {
  const { language } = useLanguage();
  const data = psychologistData[language];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{data.sections.about}</h2>
        
        <div className="about-intro">
          <div className="about-photo">
            <img src="https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_800/iexwtgtearyiok4phkl8.jpg" alt="Dana Teresa Allam" />
          </div>
          
          <div className="about-text">
            {data.quote && <blockquote className="quote">{data.quote}</blockquote>}
            <p className="bio">{data.bio}</p>
          </div>
        </div>
        
        <div className="languages-section">
          <h3>{data.sections.languages}</h3>
          <p className="languages">{data.languages.join(' • ')}</p>
        </div>
        
        <div className="credentials-section">
          <h3>{data.sections.credentials}</h3>
          
          <div className="subsection">
            <h4>{data.sections.education}</h4>
            <ul className="credentials-list">
              {data.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          <div className="subsection">
            <h4>{data.sections.formations}</h4>
            <ul className="credentials-list">
              {data.formations.map((formation, index) => (
                <li key={index}>{formation}</li>
              ))}
            </ul>
          </div>

          <div className="subsection">
            <h4>{data.sections.conferences}</h4>
            <ul className="credentials-list">
              {data.conferences.map((conference, index) => (
                <li key={index}>{conference}</li>
              ))}
            </ul>
          </div>

          <div className="subsection">
            <h4>{data.sections.experience}</h4>
            <ul className="credentials-list">
              {data.experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>

          <div className="subsection">
            <h4>{data.sections.stages}</h4>
            <ul className="credentials-list">
              {data.stages.map((stage, index) => (
                <li key={index}>{stage}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
