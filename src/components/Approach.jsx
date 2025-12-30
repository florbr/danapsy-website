import { psychologistData } from '../data/psychologistData';
import { useLanguage } from '../context/LanguageContext';
import './Approach.css';

function Approach() {
  const { language } = useLanguage();
  const data = psychologistData[language];

  return (
    <section id="approach" className="approach">
      <div className="container">
        <h2>{data.sections.myApproach}</h2>
        <p className="approach-text">{data.approach}</p>
      </div>
    </section>
  );
}

export default Approach;
