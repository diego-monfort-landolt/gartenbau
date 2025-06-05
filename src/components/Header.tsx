import "../styles/Header.css";
import { Helmet } from "react-helmet";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp, FaPhone  } from "react-icons/fa"

const Header = () => (

  <>
   <Helmet>
      <title>Gartenbau & Gartenpflege in Bülach un Umgebung | J. Landolt Gartenbau GmbH</title>
      <meta 
      name="description" 
      content="Gartenbau und Gartenpflege in Bülach und Umgebung - J. Landolt Gartenbau GmbH – Kreative Gartengestaltung, Natursteinarbeiten und nachhaltige Pflege für stilvolle Außenbereiche." 
      />

      <meta name="keywords" content="Gartenbau, Gartenpflege, Bülach, Kloten, Rümlang, Landschaftsgestaltung, Natursteinarbeiten, Dachbegrünung, Gartenplanung, Gärtner" />
      <meta name="author" content="J. Landolt Gartenbau GmbH" />
      <meta name="robots" content="index, follow" />
    </Helmet>
   <header id='home' className="header">
    <div className="overlay">
      <h2>J. Landolt Gartenbau GmbH</h2>
      <div className="overlay-text">
        <h1>Gartenbau & Gartenpflege<br/> 
        in Bülach und Umgebung</h1>

       <a href="tel:+41764197508" className="phone-button">
         <FaPhone 
            className="phone-icon" 
            size={29} color="#25D366" 
            style={{ transform: "scaleX(-1) rotate(-15deg)" }} 
         />
        </a>
         <a
            href="https://wa.me/41764197508"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          ><FaWhatsapp className="whatsapp-icon" size={35} color="#25D366"  />
          </a>   
        {/* <p><FaMapMarkerAlt style={{ marginRight: '5px', transform: 'rotate(-15deg) ' }} />Bülach | Kloten | Rümlang</p> */}
        {/* <p>Ihr Experte für Gartenbau, Gartenpflege und Natursteinarbeiten.<br /><b>Individuell, stilvoll und nachhaltig</b> </p> */}
      </div>
    </div>
  </header>
  </>
 
);
export default Header;