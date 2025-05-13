import { FaLeaf, FaHandsHelping, FaPhone, FaTools } from "react-icons/fa";
import "../styles/Services.css";

const Services = () => (
  
  <section id="services" className="services">
    <h2 className="services-title">Unsere Dienstleistungen</h2> {/* Titel zentrieren */}
    <div className="services-container">
      <div className="service">
        <div className="service-header">
          <FaLeaf size={40} />
          <h3>GARTENPFLEGE</h3>
        </div>
        <p>Wir halten deinen Garten gesund und schön.</p>
      </div>

      <div className="service">
        <div className="service-header">
          <FaTools size={40} />
          <h3>Gartenbau</h3>
        </div>
        <p>Kreatives Design für deine Außenbereiche.</p>
      </div>

       <div className="service">
        <div className="service-header">
          <FaHandsHelping  size={40} />
          <h3>Natursteinarbeiten</h3>
        </div>
        <p>Kreatives Design für deine Außenbereiche.</p>
      </div>

      <div className="service">
        <div className="service-header">
          <FaPhone size={40} />
          <h3>Kontakt</h3>
        </div>
        <p>Erreiche uns schnell und einfach!</p>
      </div>
    </div>
  </section>
);

export default Services;
