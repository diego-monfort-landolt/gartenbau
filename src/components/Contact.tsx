import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Kontakt</h2>
<div className="description-k">
  <p>Bei Fragen bin ich gerne via Telefon oder via E-Mail für Sie erreichbar.
        <b> 076 419 75 08</b></p>
</div>
    <form
      className="contact-form"
      action="https://formsubmit.co/landoltdiego@gmail.com" method="POST" 
    >
      <input type="text" name="name" placeholder="Ihr Name" required />
      <input type="text" name="name" placeholder="Betreff" required />
      <input type="email" name="email" placeholder="Ihre E-Mail" required />
      <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
      <input type="text" name="_formsubmit_id" style={{ display: "none" }} />
      <button type="submit">Nachricht senden</button>
      <input type="hidden" name="_next" value="https://diego-monfort-landolt.github.io/gartenbau/"></input>
    </form>

    {/* Icons und Kontaktinformationen jetzt UNTER dem Formular */}
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

export default Contact;
