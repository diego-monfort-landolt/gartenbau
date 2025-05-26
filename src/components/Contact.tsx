import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    (form.querySelector('input[name="_subject"]') as HTMLInputElement)!.value = `Neue Anfrage von ${name}`;
    form.submit();
  };
  return (
    <section id="contact" className="contact">
      <h2>Kontakt</h2>
      <div className="description-k">
        <p>
          <b>Kontaktieren Sie uns, wir freuen uns auf Sie und Ihren Garten!</b>
        </p>
      </div>
      <form
        className="contact-form"
        action="https://formsubmit.co/landoltdiego@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Ihr Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="subject"
          placeholder="Betreff"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input type="email" name="email" placeholder="Ihre E-Mail" required />
        <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
        <button type="submit">Nachricht senden</button>
        <input type="hidden" name="_subject" value="Neue Anfrage" />
        <input type="hidden" name="_replyto" value="{email}" />
        <input type="hidden" name="_autoresponse" value="Danke für Ihre Nachricht! Wir melden uns so schnell Wie möglich. J. Landolt Gartenbau GmbH - jorgelandolt@hotmail.com - 076 419 75 08" />
        <input type="hidden" name="_next" value="https://diego-monfort-landolt.github.io/gartenbau/" />
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
          <p>Chlihölzliweg 5, 8185 Winkel</p>
        </div>
      </div>
    </section>
  );
};
export default Contact;