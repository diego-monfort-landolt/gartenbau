import "../styles/Header.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp, FaPhone  } from "react-icons/fa"

const Header = () => (
  <header id='home' className="header">
    <div className="overlay">
      <h1>J. Landolt Gartenbau GmbH</h1>
      <div className="overlay-text">
        <h2>Gartenbau & Gartenpflege</h2>
         <FaPhone className="phone-icon" size={28} color="#25D366" style={{ transform: "scaleX(-1) rotate(-15deg)" }} />
         <a
            href="https://wa.me/41764197508"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          ><FaWhatsapp className="whatsapp-icon" size={28} color="#25D366"  />
          </a>
            <a href="tel:+41764197508" className="phone-button">
        </a>
        <p><FaMapMarkerAlt style={{ marginRight: '5px', transform: 'rotate(-15deg) ' }} />Bülach | Kloten | Rümlang</p>
      </div>
    </div>
  </header>
);

export default Header;
