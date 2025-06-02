import React from "react";
import { Helmet } from "react-helmet";
import "../styles/GartenpflegeGartenbau.css";
import BeispielBild from "../assets/img/gartenbau-landolt-buelach.jpeg";

const GartenpflegeGartenbau: React.FC = () => {
  return (
    <>
      {/* SEO-Optimierung mit Helmet */}
      <Helmet>
        <title>Gartenbau & Gartenpflege in Bülach | Hochwertige Gartengestaltung</title>
        <meta name="description" content="Gartenbau und Gartenpflege in Bülach. Hochwertige Materialien, individuelle Gestaltung und präzise Umsetzung für Ihren Traumgarten." />
        <meta name="keywords" content="Gartenbau Bülach, Gartenpflege, Natursteinmauer, Plattenbeläge, Holzdecks, Landschaftsgestaltung" />
        <meta property="og:title" content="Gartenbau & Gartenpflege in Bülach | Hochwertige Gartengestaltung" />
        <meta property="og:description" content="Ihr Experte für Gartenbau und Gartenpflege in Bülach. Lassen Sie Ihren Garten in neuem Glanz erstrahlen!" />
        <meta property="og:image" content={BeispielBild} />
         <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "J. Landolt Gartenbau GmbH",
            "description": "Gartenbau und Gartenpflege in Bülach und Umgebung.",
            "image": BeispielBild,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chlihölzliweg. 5",
              "addressLocality": "Winkel",
              "addressCountry": "CH"
            },
            "telephone": "+41 76 419 75 08",
            "email": "jorgelandolt@hotmail.com"
          })}
        </script>
      </Helmet>

      <section id="Gartenbau" className="gartenpflege-section">
        <div className="image-box">
          <img src={BeispielBild} alt="Hochwertige Gartenpflege und Gartenbau in Bülach – Natursteinmauer, Plattenbeläge & Holzdecks" />
        </div>
        <div className="text-box">
          <h1>Gartenbau</h1>
          <p>
            Wir setzen auf Qualität und Genauigkeit. Wir stellen Ihr Gartenprojekt zuverlässig und zeitgerecht auf die Beine. <b>Wir verwenden hochwertige Materialien aus der Schweiz oder dem europäischen Raum.</b> 
          </p>
          <h3>Qualität und Präzision für Ihr Gartenprojekt</h3>
          <p>
            Grenzenlose Gestaltungsmöglichkeiten für Ihren Traumgarten: Ob Natursteinmauer, Plattenbeläge, Holzdecks oder üppige Staudenrabatten. Jeder Garten wird individuell gestaltet, angepasst an Ihre Wünsche und die Umgebung. Lassen Sie Ihrer Kreativität freien Lauf, wir setzen Ihre Ideen fachgerecht um!
          </p>
        </div>
      </section>
    </>
  );
};
export default GartenpflegeGartenbau;