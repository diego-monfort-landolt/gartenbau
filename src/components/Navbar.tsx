import "../styles/Navbar.css";
import Logo from '../assets/img/gartenbaubuelach-jorgelandolt.png'
const Navbar = () => (
  <nav>
      <img src={Logo} alt="J. Landolt Gartenbau GmbH Logo" className="logo" />
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#Dienstleistungen">Dienstleistungen</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
);

export default Navbar;
