import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Logo from '../assets/img/landoltgartenbaugmbhbuelach.png';
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleNavToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const toggleDropdown = (event: React.MouseEvent) => {
    if (isMobile) {
      event.stopPropagation(); // Verhindert, dass handleLinkClick ausgelöst wird
      setIsDropdownOpen(!isDropdownOpen);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop <= lastScrollTop.current);
      lastScrollTop.current = scrollTop;
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={isVisible ? "visible" : "hidden"}>
      <img src={Logo} alt="J. Landolt Gartenbau GmbH Logo" className="logo" />
      <button className="hamburger" onClick={handleNavToggle}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={handleLinkClick}><a href="#home">Home</a></li>
        <li onClick={handleLinkClick}><a href="#ueberuns">Über uns</a></li>
        <li
          className={`dropdown ${isDropdownOpen ? "open" : ""}`}
          onClick={toggleDropdown}
          onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
        >
          <a href="">Dienstleistungen <MdKeyboardArrowDown /></a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={handleLinkClick}><a href="#Gartenbau">Gartenbau</a></li>
              <li onClick={handleLinkClick}><a href="#Gartenpflege">Gartenpflege</a></li>
              <li onClick={handleLinkClick}><a href="#Natursteinarbeiten">Natursteinarbeiten</a></li>
            </ul>
          )}
        </li>
        <li onClick={handleLinkClick}><a href="#Gallery">Gallery</a></li>
        <li onClick={handleLinkClick}><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;