import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showFallbackEmail, setShowFallbackEmail] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(/Mobi|Android/i.test(userAgent));
  }, []);
  const handleEmailClick = () => {
    const mailtoLink = `mailto:landoltdiego@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    if (isMobile) {
      // Direkt öffnen auf Mobilgeräten
      window.location.href = mailtoLink;
    } else {
      // Desktop: Simulierter Klick ohne Browser-Tab-Wechsel
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Fallback nach 2 Sekunden anzeigen
      setTimeout(() => {
        setShowFallbackEmail(true);
        setEmailError(true);
      }, 2000);
    }
    // Formular zurücksetzen
    setSubject("");
    setMessage("");
  };
  return (
    <section id="contact" className="contact">
      <h2>Kontakt</h2>
      <div className="description-k">
        <p>
          Jorge Landolt betreut sowohl kleine Privatgärten als auch großzügige Anlagen – individuell abgestimmt auf Ihre Wünsche und die Bedürfnisse der Pflanzen.
          Denn nur durch regelmässige Pflege bleibt Ihr Garten gesund, blühend und einladend – das ganze Jahr über.
          <br />
          <b>Kontaktieren Sie uns, wir freuen uns auf Sie und Ihren Garten! </b>
        </p>
      </div>
      {/* Formular wird nur angezeigt, wenn kein Fehler */}
      {!emailError && (
        <>
          <form
            className="contact-form"
            action="https://formsubmit.co/landoltdiego@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Ihr Name" required />
            <input type="text" name="subject" placeholder="Betreff" required />
            <input type="email" name="email" placeholder="Ihre E-Mail" required />
            <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
            <input type="text" name="_formsubmit_id" style={{ display: "none" }} />
            <button type="submit">Nachricht senden</button>
            <input type="hidden" name="_next" value="https://diego-monfort-landolt.github.io/gartenbau/" />
          </form>
          <div className="contact-form">
            <input
              type="text"
              placeholder="Betreff: test"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Ihre Nachricht..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button onClick={handleEmailClick}>📩 E-Mail schreiben</button>
          </div>
        </>
      )}
      {/* Fallback E-Mail-Anzeige, wenn kein Mailprogramm gefunden */}
      {showFallbackEmail && (
        <div className="fallback-email" style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          <p>📧 Kein E-Mail-Programm erkannt?</p>
          <p style={{
            fontSize: "18px",
            fontWeight: "bold",
            background: "#f1f1f1",
            padding: "10px",
            display: "inline-block",
            borderRadius: "8px"
          }}>
            landoltdiego@gmail.com
          </p>
          <p>Bitte kopieren und manuell versenden.</p>
        </div>
      )}
      {/* Kontaktinformationen immer sichtbar */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone size={20} />
          <p>076 419 75 08</p>
        </div>
        <div className="contact-item">
          <FaEnvelope size={20} />
          <p>jorgelandolt@hotmail.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt size={20} />
          <p>J. Landolt Gartenbau GmbH</p>
        </div>
      </div>
    </section>
  );
};
export default Contact;