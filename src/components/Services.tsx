import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import { GiStoneBlock  } from "react-icons/gi";
import { TbShovelPitchforks } from "react-icons/tb";
import "../styles/Services.css";

// Bilder importieren
import Bild1 from "../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png";
import Bild2 from "../assets/img/gartenplatten-wiese.png";
import Bild3 from "../assets/img/schönerplattenboden.png";

const modalData: Record<
  "gartenpflege" | "gartenbau" | "naturstein",
  { title: string; text: string; image: string; textBelowImage: string }
> = {
  gartenpflege: {
    title: "Gartenpflege im Detail",
    text: `Unsere Gartenpflege umfasst regelmäßiges Mähen, Hecken- und
    Baumschnitt sowie die Pflege von Blumenbeeten und Rasenflächen. Wir sorgen
    dafür, dass Ihr Garten das ganze Jahr über gepflegt aussieht.`,
    image: Bild1,
    textBelowImage: `Auch die fachgerechte Entsorgung des Grünschnitts und die nachhaltige Pflege stehen bei uns im Fokus.`,
  },
  gartenbau: {
    title: "Gartenbau im Detail",
    text: `Unser Gartenbau bietet individuelle Gestaltung von Wegen, Plätzen,
    Beeten und Terrassen. Wir kombinieren Kreativität mit Funktionalität, um
    deinen Gartentraum Wirklichkeit werden zu lassen.`,
    image: Bild2,
    textBelowImage: `Mit modernen Materialien und bewährter Handwerkskunst schaffen wir dauerhafte Qualität.`,
  },
  naturstein: {
    title: "Natursteinarbeiten im Detail",
    text: `Naturstein verleiht jedem Garten Charakter. Ob Mauern, Wege oder
    Treppen – wir gestalten mit hochwertigen Materialien langlebige und
    ästhetische Elemente.`,
    image: Bild3,
    textBelowImage: `Jede Steinstruktur ist einzigartig – genau wie dein Garten.`,
  },
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<keyof typeof modalData | null>(null);

  // Scroll im Hintergrund deaktivieren, solange Modal offen
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const openModal = (serviceKey: keyof typeof modalData) => {
    setSelectedService(serviceKey);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const content = selectedService ? modalData[selectedService] : null;

  return (
    <>
      <section id="Dienstleistungen" className="services">
        <h2 className="services-title">Unsere Dienstleistungen</h2>
        <div className="services-container">
          <div className="service">
            <div className="service-header">
              <FaLeaf size={30} color="green" />
              <h4>Gartenpflege</h4>
            </div>
            <p>Wir halten deinen Garten gesund und schön.</p>
            <span className="info-link" onClick={() => openModal("gartenpflege")}>
              Mehr Informationen
            </span>
          </div>

          <div className="service">
            <div className="service-header">
              <TbShovelPitchforks  size={30} color="green" />
              <h4>Gartenbau</h4>
            </div>
            <p>Kreatives Design für deine Außenbereiche.</p>
            <span className="info-link" onClick={() => openModal("gartenbau")}>
              Mehr Informationen
            </span>
          </div>

          <div className="service">
            <div className="service-header">
              <GiStoneBlock   size={30} color="gray" />
              <h4>Natursteinarbeiten</h4>
            </div>
            <p>Robuste und stilvolle Gestaltung mit Naturmaterialien.</p>
            <span className="info-link" onClick={() => openModal("naturstein")}>
              Mehr Informationen
            </span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && content && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <img src={content.image} alt="Beispiel" className="modal-image" />
            <p>{content.textBelowImage}</p>

            <button onClick={closeModal} className="modal-close">
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
