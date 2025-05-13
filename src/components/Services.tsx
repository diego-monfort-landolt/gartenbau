import { FaLeaf, FaHammer, FaHandsHelping, FaPhone } from "react-icons/fa";
import "../styles/Services.css";

const Services = () => (
  
  <section id="services" className="services">
    <h2 className="services-title">Unsere Dienstleistungen</h2> {/* Titel zentrieren */}
    <div className="services-container">
      <div className="service">
        <div className="service-header">
          <FaLeaf size={40} />
          <h4>Gartenpflege</h4>
        </div>
        <p>Wir halten deinen Garten gesund und schön.</p>
      </div>

      <div className="service">
        <div className="service-header">
          <FaHammer size={40} />
          <h4>Gartenbau</h4>
        </div>
        <p>Kreatives Design für deine Außenbereiche.</p>
      </div>

       <div className="service">
        <div className="service-header">
          <FaHandsHelping  size={40} />
          <h4>Natursteinarbeiten</h4>
        </div>
        <p>Kreatives Design für deine Außenbereiche.</p>
      </div>

      <div className="service">
        <div className="service-header">
          <FaPhone size={40} />
          <h4>Kontakt</h4>
        </div>
        <p>Erreiche uns schnell und einfach!</p>
      </div>
    </div>
  </section>
);

export default Services;
