import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import { GiStonePath  } from "react-icons/gi";
import { MdConstruction  } from "react-icons/md";
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
    title: "Langfristige Gartenpflege für dauerhafte Schönheit",
    text: `Ein Garten ist ein lebendiger Raum – er wächst, verändert sich und entwickelt sich stetig weiter. Damit er dauerhaft gepflegt und ansprechend bleibt, ist eine kontinuierliche und fachkundige Betreuung unerlässlich.

    Bei J. Landolt Gartenbau GmbH bieten wir Ihnen eine umfassende und zuverlässige Gartenpflege, die den langfristigen Werterhalt Ihrer Grünflächen sicherstellt. Ob Rasen, Hecken, Sträucher oder Beete – wir kümmern uns mit Sorgfalt, Fachwissen und jahrelanger Erfahrung um jede Ecke Ihres Gartens.`,
    image: Bild1,
    textBelowImage: `Jorge Landolt betreut sowohl kleine Privatgärten als auch großzügige Anlagen – individuell abgestimmt auf Ihre Wünsche und die Bedürfnisse der Pflanzen. Denn nur durch regelmässige Pflege bleibt Ihr Garten gesund, blühend und einladend – das ganze Jahr über.`,
  },
  gartenbau: {
    title: "Gartenbau mit Leidenschaft und Kompetenz",
    text: `Ob Neugestaltung eines Gartens oder gezielte Umänderung bestehender Gartenflächen – bei J. Landolt Gartenbau GmbH erhalten Sie kreative Gartenideen und individuelle Lösungen, die perfekt auf Ihre Wünsche abgestimmt sind.

    Gemeinsam mit Ihnen entwickeln wir ein maßgeschneidertes Gartenkonzept – mit einem sicheren Gespür für Ästhetik, Funktionalität und Pflanzenvielfalt. Ihre persönliche Ansprechperson begleitet Sie durch jede Phase des Projekts – von der Beratung über die Planung bis hin zur fachgerechten Umsetzung vor Ort.`,
    image: Bild2,
    textBelowImage: `Als erfahrenes Unternehmen im Bereich Gartenbau in der Schweiz stehen wir für Qualität, Zuverlässigkeit und persönliche Betreuung. Vertrauen Sie auf unsere Expertise, um Ihren Traumgarten Wirklichkeit werden zu lassen.`,
  },
  naturstein: {
    title: "Natürliche Eleganz mit Naturstein im Garten",
    text: `Möchten Sie Ihrem Garten einen stilvollen und zeitlosen Charakter verleihen?
    Naturstein ist die ideale Wahl – vielseitig in Farbe, Struktur und Verarbeitung und dabei besonders langlebig. Jeder Stein ist ein Unikat und schafft eine einzigartige, natürliche Atmosphäre in Ihrem Aussenbereich.

    Ob Gartenwege, Mauern, Sitzplätze oder dekorative Elemente – wir unterstützen Sie von der ersten Beratung bis zur professionellen Umsetzung Ihres Projekts. Gemeinsam planen wir den Einsatz von Natursteinen, die perfekt zu Ihrem Garten und Ihren Vorstellungen passen.`,
    image: Bild3,
    textBelowImage: `J. Landolt Gartenbau GmbH ist Ihr zuverlässiger Partner für Natursteinarbeiten in Bülach und Umgebung. Vertrauen Sie auf unsere Erfahrung, um stilvolle Akzente mit Naturmaterialien zu setzen.`,
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
              <FaLeaf size={30} color="black" />
              <h4>Gartenpflege</h4>
            </div>
            <p>Wir halten deinen Garten gesund und schön.</p>
            <span className="info-link" onClick={() => openModal("gartenpflege")}>
              Mehr Informationen
            </span>
          </div>

          <div className="service">
            <div className="service-header">
              <MdConstruction  size={30} color="black" />
              <h4>Gartenbau</h4>
            </div>
            <p>Kreatives Design für deine Außenbereiche.</p>
            <span className="info-link" onClick={() => openModal("gartenbau")}>
              Mehr Informationen
            </span>
          </div>

          <div className="service">
            <div className="service-header">
              <GiStonePath   size={25} color="black" />
              <h4>Natursteinarbeiten</h4>
            </div>
            <p>Robuste und stilvolle Gestaltung mit Naturmaterialien.</p>
            <span className="info-link" onClick={() => openModal("naturstein")}>
              Mehr Informationen
            </span>
          </div>
           <p className='descriton-gall'>
            Ihr Fachbetrieb für <b>Gartenbau in Bülach, Kloten und Rümlang</b> 
             Mit langjähriger Erfahrung und echter Leidenschaft gestalten und pflegen wir individuelle Gärten – ganz nach Ihren Vorstellungen. Ob Neuanlage, Umgestaltung oder saisonale Pflege: Bei <b>J. Landolt Gartenbau GmbH</b> stehen <em>Engagement, Zuverlässigkeit und persönliche Beratung</em> im Mittelpunkt. Jorge Landolt und sein Team sind Ihr Ansprechpartner für professionellen Gartenbau im Zürcher Unterland.

            Zu unseren Arbeiten zählen Natursteinarbeiten, Rasenpflege, Hecken- und Baumschnitt sowie die kreative Gestaltung von Gartenwegen und Sitzplätzen.
      </p>
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
