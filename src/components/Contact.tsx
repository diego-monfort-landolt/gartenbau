import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Kontakt</h2>

    <form
      className="contact-form"
      action="https://formsubmit.io/send/info@garten-design.de" // ❗️Deine E-Mail
      method="POST"
    >
      <input type="text" name="name" placeholder="Ihr Name" required />
      <input type="email" name="email" placeholder="Ihre E-Mail" required />
      <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
      <input type="text" name="_formsubmit_id" style={{ display: "none" }} />
      <button type="submit">Nachricht senden</button>
    </form>

    {/* Icons und Kontaktinformationen jetzt UNTER dem Formular */}
    <div className="contact-info">
      <div className="contact-item">
        <FaPhone size={30} />
        <p>+49 123 456 789</p>
      </div>
      <div className="contact-item">
        <FaEnvelope size={30} />
        <p>info@garten-design.de</p>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt size={30} />
        <p>Beispielstraße 10, 10115 Berlin</p>
      </div>
    </div>
  </section>
);

export default Contact;
