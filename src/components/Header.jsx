import { psychologistData } from '../data/psychologistData';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>{psychologistData.name}</h1>
          <p className="subtitle">{psychologistData.title}</p>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
