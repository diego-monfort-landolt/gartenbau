import { useState, useEffect } from "react";
import { FaLeaf, FaHammer, FaHandsHelping } from "react-icons/fa";
import "../styles/Services.css";

import Bild1 from '../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png';

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  // Scroll im Hintergrund deaktivieren, solange Modal offen
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup bei unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <section id="Dienstleistungen" className="services">
        <h2 className="services-title">Unsere Dienstleistungen</h2>
        <div className="services-container">
          <div className="service">
            <div className="service-header">
              <FaLeaf size={40} />
              <h4>Gartenpflege</h4>
            </div>
            <p>Wir halten deinen Garten gesund und schön.</p>
            <span
              className="info-link"
              onClick={() => setShowModal(true)}
            >
              Mehr Informationen
            </span>
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
              <FaHandsHelping size={40} />
              <h4>Natursteinarbeiten</h4>
            </div>
            <p>Kreatives Design für deine Außenbereiche.</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Gartenpflege im Detail</h2>
            <p>
              Unsere Gartenpflege umfasst regelmäßiges Mähen, Hecken- und
              Baumschnitt sowie die Pflege von Blumenbeeten und Rasenflächen.
              Wir sorgen dafür, dass Ihr Garten das ganze Jahr über gepflegt
              aussieht.
            </p>
            <img
              src={Bild1}
              alt="Beispiel Gartenpflege"
              className="modal-image"
            />
            <p>
              Unsere Gartenpflege umfasst regelmäßiges Mähen, Hecken- und
              Baumschnitt sowie die Pflege von Blumenbeeten und Rasenflächen.
              Wir sorgen dafür, dass Ihr Garten das ganze Jahr über gepflegt
              aussieht.
            </p>
            <button onClick={() => setShowModal(false)} className="modal-close">
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
