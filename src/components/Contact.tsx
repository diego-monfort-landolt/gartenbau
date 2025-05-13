import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Kontakt</h2>

    <form
      className="contact-form"
      action="https://formsubmit.io/send/test@test.com" // ❗️Deine E-Mail
      method="POST"
    >
      <input type="text" name="name" placeholder="Ihr Name" required />
      <input type="email" name="email" placeholder="Ihre E-Mail" required />
      <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
      <input type="text" name="_formsubmit_id" style={{ display: "none" }} />
      <button disabled type="submit">Nachricht senden</button>
    </form>

    {/* Icons und Kontaktinformationen jetzt UNTER dem Formular */}
    <div className="contact-info">
      <div className="contact-item">
        <FaPhone size={30} />
        <p>076 419 75 08</p>
      </div>
      <div className="contact-item">
        <FaEnvelope size={30} />
        <p>jorgelandolt@hotmail.com</p>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt size={30} />
        <p>J. Landolt Gartenbau GmbH</p>
      </div>
    </div>
  </section>
);

export default Contact;
