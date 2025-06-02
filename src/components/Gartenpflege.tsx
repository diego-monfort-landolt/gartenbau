import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Gartenpflege.css";
import BeispielBild from "../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png";

const Gartenpflege: React.FC = () => {
  return (
  <>
    <Helmet>
        <title>Gartenpflege | J. Landolt Gartenbau GmbH</title>
        <meta 
          name="description" 
          content="Professionelle Gartenpflege in Bülach und Umgebung. Wir gestalten und pflegen private Gärten, Wohnsiedlungen und Parkanlagen mit Leidenschaft und Expertise. Kontaktieren Sie uns für eine individuelle Beratung! Gartenbau Landolt, Buelach, Kloten, Rümlang"
        />
        <meta name="keywords" content="Gartenpflege, Gartenbau, Bülach, Garten gestalten, Parkanlagen, Dachbegrünung, Balkonbepflanzung, Pflanzenpflege" />
        <meta name="author" content="J. Landolt Gartenbau GmbH" />
        <meta name="robots" content="index, follow" />
      </Helmet>
   <section id="Gartenpflege" className="gartenpflege-container">
      <div className="image-wrapper">
        <img src={BeispielBild} alt="Gartenpflege und Gartenbau Beispiel" />
      </div>
      <div className="text-wrapper">
        <h1>Gartenpflege</h1>
        <p>
         Unsere Stärken sind die Pflege von privaten Gärten, Wohnsiedlungen und Parkanlagen. Auch für Ihre Balkon-Bepflanzung oder Dachbegrünung sind wir die richtige Wahl.
          Wir übernehmen für Sie die Pflege Ihrer Pflanzen, als einmaligen Auftrag oder in wiederkehrenden Intervallen. Wir gehen Ihnen gern auch sporadisch zur Hand, wenn Ihnen die Zeit fehlt oder Sie andere Prioritäten setzen wollen.  
          <br />
          Um Ihren Unterhaltsbedarf zu klären und Ihre Wünsche zu erfüllen können Sie uns gerne kontaktieren.
        </p>
      </div>
    </section>
  </>
   
  );
};
export default Gartenpflege;