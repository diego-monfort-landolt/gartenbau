import "../styles/About.css";
import profielfoto from '../assets/img/Jorge Landolt - Ihr Gartenbauer in Bülach, Kloten & Rümlang.png';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="text-box">
        <h2>Wir planen, gestalten und pflegen Gärten nach Ihrem Wunsch. Mit Leidenschaft und Engagement</h2> 
        
        <p>Mit Gespür für die Wünsche unserer Kundinnen und Kunden, Sinn für Ästhetik und Begeisterung für die Natur, setzen wir Projekte für Neu- und Umgestaltungen von Gärten um.  
        Ihre Träume und Vorstellungen vereint mit unseren kreativen Ideen und unserer langjährigen Erfahrung schaffen Synergien für einzigartige Lebensräume mit Ausstrahlungskraft. Mit auserwählten Materialien und Pflanzen, unter Berücksichtigung der natürlichen Gegebenheiten Ihres Gartens, schenken wir ihm einen neuen Glanz. Zeitgemäss und stilvoll.<br/> <b>Ihr Gärtner in Bülach.</b></p><h2>Individuelle Gartenplanung mit persönlicher Beratung</h2>
      </div>
      <div className="image-box">
        <img src={profielfoto} alt="Gartenbau" className="about-image" />
      </div>
    </div>
    <p className="closing-text"></p>
  </section>
);
export default About;