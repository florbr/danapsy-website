import { psychologistData } from '../data/psychologistData';
import './Approach.css';

function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container">
        <h2>My Approach</h2>
        <p className="approach-text">{psychologistData.approach}</p>
      </div>
    </section>
  );
}

export default Approach;
