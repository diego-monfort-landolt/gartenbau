import "../styles/Header.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"


const Header = () => (
  <header id='home' className="header">
    <div className="overlay">
      <h1>J. Landolt Gartenbau GmbH</h1>
      <div className="overlay-text">
        <h2>Gartenbau & Gartenpflege</h2>
         <a
            href="https://wa.me/41791234567"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          ><FaWhatsapp className="whatsapp-icon" size={28} color="#25D366"  />
          </a>
        <p><FaMapMarkerAlt style={{ marginRight: '5px', transform: 'rotate(-15deg)' }} />Bülach | Kloten | Rümlang</p>
      </div>
    </div>
  </header>
);

export default Header;
