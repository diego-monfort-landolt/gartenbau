import "../styles/About.css";
import profielfoto from '../assets/img/Jorge Landolt - Ihr Gartenbauer in Bülach, Kloten & Rümlang.png';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="text-box">
        <h2>Ihr Gärtner für kreative Gartengestaltung</h2> 
        <p>Die J. Landolt Gartenbau GmbH wurde im Jahr 2015 gegründet – mit dem Ziel, aus der Leidenschaft für Natur und Garten eine berufliche Mission zu machen. Seitdem stehen wir für professionellen Gartenbau, individuelle Beratung und hochwertige Ausführung – alles aus einer Hand.</p>
        <h2>Individuelle Gartenplanung mit persönlicher Beratung</h2>
        <p>Ob moderne Gartenanlage, naturnahe Umgestaltung oder einfache Gartenpflege: Wir nehmen uns Zeit für Ihre Wünsche und entwickeln gemeinsam mit Ihnen ein individuelles Konzept für Ihren Traumgarten. Unsere persönliche Beratung ist die Basis jeder erfolgreichen Gartengestaltung – denn jeder Garten ist so einzigartig wie seine Besitzer.</p>
      </div>
      <div className="image-box">
        <img src={profielfoto} alt="Gartenbau" className="about-image" />
      </div>
    </div>
    <p className="closing-text"><b>Fachkompetenz und Erfahrung im Gartenbau</b><br />Mit langjähriger Erfahrung, fachlicher Qualifikation und viel Leidenschaft betreuen wir Projekte in allen Bereichen des Gartenbaus. Von der regelmäßigen Gartenpflege bis zur kompletten Neugestaltung Ihrer Grünflächen – auf unser Team können Sie sich verlassen.
    Lassen Sie Ihren Garten in neuem Glanz erblühen! Vertrauen Sie auf unsere Expertise und gestalten Sie mit uns Ihren Garten ganz nach Ihren Vorstellungen. Wir freuen uns auf Ihre Anfrage!</p>
  </section>
);
export default About;