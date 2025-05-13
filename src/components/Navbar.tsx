import "../styles/Navbar.css";
// import foto1 from '../assets/img/Logo-jorgelandolt.svg'

const Navbar = () => (
  <nav>
    {/* <div className="logo">
      <img src={foto1} alt="Jorge Landolt -logo - gartenbau bülach, Kloten und Zürich" />
    </div> */}
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#Dienstleistungen">Dienstleistungen</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
);

export default Navbar;
