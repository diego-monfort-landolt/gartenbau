import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Kontakt</h2>
      <div className="description-k">
        <p>
          Jorge Landolt betreut sowohl kleine Privatgärten als auch großzügige Anlagen – individuell abgestimmt auf Ihre Wünsche und die Bedürfnisse der Pflanzen.
          Denn nur durch regelmäßige Pflege bleibt Ihr Garten gesund, blühend und einladend – das ganze Jahr über.
          <br />
          <b>Kontaktieren Sie uns, wir freuen uns auf Sie und Ihren Garten!</b>
        </p>
      </div>

      <form
        className="contact-form"
        action="https://formsubmit.co/landoltdiego@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Ihr Name" required />
        <input type="text" name="subject" placeholder="Betreff" required />
        <input type="email" name="email" placeholder="Ihre E-Mail" required />
        <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
        <button type="submit">Nachricht senden</button>
        <input type="hidden" name="_replyto" value="{email}" />
        <input type="hidden" name="_subject" value="Neue Anfrage von {name}" />
        <input type="hidden" name="_autoresponse" value="Danke für deine Nachricht! Wir melden uns bald." />

      </form>

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
