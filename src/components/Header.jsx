import { Link } from 'react-router-dom';
import { psychologistData } from '../data/psychologistData';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>{psychologistData.name}</h1>
          </Link>
          <p className="subtitle">{psychologistData.title}</p>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/approach">Approach</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
