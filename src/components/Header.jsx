import { Link } from 'react-router-dom';
import { psychologistData } from '../data/psychologistData';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const data = psychologistData[language];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>{data.name}</h1>
          </Link>
          <p className="subtitle">{data.title}</p>
        </div>
        <nav className="nav">
          <Link to="/">{data.nav.home}</Link>
          <Link to="/services">{data.nav.services}</Link>
          <Link to="/approach">{data.nav.approach}</Link>
          <Link to="/contact">{data.nav.contact}</Link>
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
