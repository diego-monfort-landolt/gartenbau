import "../styles/Services.css";
import { Helmet } from "react-helmet";

const Services = () => {
  
  return (
    <>
     {/* SEO-Optimierung mit Helmet */}
      <Helmet>
        <title>Über uns | J. Landolt Gartenbau GmbH – Ihr Gärtner in Bülach</title>
        <meta name="description" content="Erfahren Sie mehr über J. Landolt Gartenbau GmbH – Ihr Experte für Gartenbau und Gartenpflege in Bülach. Hochwertige Materialien, individuelle Gestaltung und präzise Umsetzung." />
        <meta name="keywords" content="Gärtner Bülach, Gartenbau, Gartenpflege, Landschaftsgestaltung, Natursteinmauer, Plattenbeläge, Holzdecks" />
        <meta property="og:title" content="Über uns | J. Landolt Gartenbau GmbH – Ihr Gärtner in Bülach" />
        <meta property="og:description" content="Seit 2015 steht J. Landolt Gartenbau GmbH für professionelle Gartengestaltung, individuelle Beratung und hochwertige Ausführung." />
      </Helmet>
      <section id="Dienstleistungen" className="services">
        <h2 className="services-title">Über uns</h2>
          <p className='descriton-gall'>
           Nach dem Abschluss der Lehre zum Landschaftsgärtner im 2011, habe ich meinen Traum einer eigenen Firma verwirklicht und 2015 die J. Landolt Gartenbau GmbH gegründet.  

          Mein Ziel war es, aus der Leidenschaft für Natur und Garten eine berufliche Mission zu machen. 

          Seitdem stehen wir für professionellen Gartenbau, individuelle Beratung und hochwertige Ausführung – alles aus einer Hand. 
      </p>
      <h3>Ihr Experte für Gartenbau & Gartenpflege</h3>
      </section>
    </>
  );
};
export default Services;