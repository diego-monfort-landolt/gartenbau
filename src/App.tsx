import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import GartenpflegeGartenbau from "./components/GartenpflegeGartenbau";
import Gartenpflege from "./components/Gartenpflege";
import Natursteinarbeiten from "./components/Natursteinarbeiten";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>J. Landolt Gartenbau GmbH | Gartenbau & Gartenpflege in Bülach und Umgebung</title>
        <meta name="description" content="Gartenbau & Gartenpflege für stilvolle Außenbereiche Entdecken Sie erstklassigen Gartenbau und Gartenpflege in Bülach – präzise umgesetzt mit hochwertigen Materialien aus der Schweiz und Europa. Als erfahrene Gärtner in Bülach bieten wir individuelle Gestaltungskonzepte, maßgeschneiderte Lösungen und professionelle Umsetzung für Ihren Traumgarten.
        Unsere Expertise reicht von Natursteinmauern, Plattenbelägen und Holzdecks bis hin zu üppigen Staudenrabatten und nachhaltiger Gartenpflege. Wir vereinen Handwerkskunst mit Kreativität, um stilvolle und funktionale Außenbereiche zu schaffen. Vertrauen Sie auf unsere langjährige Erfahrung, Präzision und Leidenschaft für hochwertige Gartengestaltung.
        Jetzt unverbindlich beraten lassen und Ihren Garten in eine naturnahe Wohlfühloase verwandeln!" />
        <meta name="keywords" content="Gartenbau Bülach, Gartenpflege, Natursteinmauer, Plattenbeläge, Holzdecks, Landschaftsgestaltung" />
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <div className="container">
        <Services />
      </div>
      <GartenpflegeGartenbau />
      <Gartenpflege />
      <Natursteinarbeiten />
       <Gallery />
      <Contact />
    </>
  );
}
export default App;