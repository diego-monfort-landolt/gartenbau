import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [showImpressum, setShowImpressum] = useState(false); // NEW

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
        action="https://formsubmit.co/jorgelandolt@hotmail.com, landoltdiego@gmail.com"
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
        <input type="email" name="email" placeholder="Ihre E-Mail" required />
        <input
          type="text"
          name="subject"
          placeholder="Betreff"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea name="message" placeholder="Ihre Nachricht" rows={5} required />
        <button type="submit">Nachricht senden</button>
        <input type="hidden" name="_subject" value="Neue Anfrage" />
        <input type="hidden" name="_replyto" value="{email}" />
        <input type="hidden" name="_autoresponse" value="Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.
        J. Landolt Gartenbau GmbH 📧 jorgelandolt@hotmail.com 📞 076 419 75 08" />
        <input type="hidden" name="_next" value="https://gartenbaulandolt.ch/" />
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

      {/* 👇 IMPRESSUM Toggle Section */}
      <div className="impressum-section">
        <button 
          onClick={() => setShowImpressum(!showImpressum)} 
          className="impressum-toggle"
        >
          {showImpressum ? "Impressum verbergen" : "Impressum anzeigen"}
        </button>

        {showImpressum && (
          <div className="impressum-content">
            <h3>Impressum</h3>
            <p><strong>J. Landolt Gartenbau GmbH</strong></p>
            <p>Chlihölzliweg 5</p>
            <p>8185 Winkel, Schweiz</p>
            <p>Telefon: 076 419 75 08</p>
            <p>E-Mail: jorgelandolt@hotmail.com</p>
            <p>Geschäftsführer: Jorge Landolt</p>
            <p> Haftungsausschluss  
                Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.  

                Urheberrecht  
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.  

                Datenschutz  
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
