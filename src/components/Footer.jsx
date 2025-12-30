import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Dana Teresa Allam. All rights reserved.</p>
        <p className="disclaimer">
          This website is for informational purposes only and does not constitute medical advice.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
