import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Logo from '../assets/img/landoltgartenbaugmbhbuelach.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  const handleNavToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); // Schließt das Menü automatisch

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setIsVisible(false); // Menü ausblenden beim Scrollen nach unten
      } else {
        setIsVisible(true); // Menü anzeigen beim Scrollen nach oben
      }
      lastScrollTop.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isVisible ? "visible" : "hidden"}>
      <img src={Logo} alt="J. Landolt Gartenbau GmbH Logo" className="logo" />
      <button className="hamburger" onClick={handleNavToggle}>
        ☰ {/* Symbol für das Menü */}
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`} onClick={handleLinkClick}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Über uns</a></li>
        <li><a href="#Dienstleistungen">Dienstleistungen</a></li>
        <li><a href="#Gallery">Gallery</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
