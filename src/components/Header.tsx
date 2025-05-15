import "../styles/Header.css";
import { FaMapMarkerAlt } from "react-icons/fa";


const Header = () => (
  <header id='home' className="header">
    <div className="overlay">
      <h1>J. Landolt Gartenbau GmbH</h1>
      <div className="overlay-text">
        <h2>Gartenbau & Gartenpflege</h2>
        <p><FaMapMarkerAlt style={{ marginRight: '5px', transform: 'rotate(-15deg)' }} />Bülach | Kloten | Rümlang</p>
      </div>
    </div>
  </header>
);

export default Header;
