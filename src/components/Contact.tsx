import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Kontakt</h2>
<div className="description-k">
  <p>Jorge Landolt betreut sowohl kleine Privatgärten als auch großzügige Anlagen – individuell abgestimmt auf Ihre Wünsche und die Bedürfnisse der Pflanzen. Denn nur durch regelmässige Pflege bleibt Ihr Garten gesund, blühend und einladend – das ganze Jahr über.<br />
<b>Kontaktieren Sie uns, wir freuen uns auf Sie und Ihren Garten! </b></p>
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
  <a href="mailto:landoltdiego@gmail.com?subject=Info zu Gartenbau&body=Hallo, ich habe eine Frage zu Ihrem Gartenbau-Service." className="email-button">
  📩 E-Mail schreiben
  </a>

    <div className="contact-info">
      <div className="contact-item">
        <FaPhone size={20} />
        <p>076 419 75 08</p>
      </div>
      <div className="contact-item">
        <FaEnvelope size={20} />
        <p>jorgelandolt@hotmail.com</p>
      </div>
      <div className="contact-item"><p></p>
        <FaMapMarkerAlt size={20} />
        <p>J. Landolt Gartenbau GmbH</p>
      </div>
    </div>
  </section>
);

export default Contact;
