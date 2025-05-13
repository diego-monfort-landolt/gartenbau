import Typewriter from "typewriter-effect";
import "../styles/Header.css";

const Header = () => (
  <header id='home' className="header">
    <div className="overlay">
      <h1>Willkommen bei Garten Design</h1>
      <h2>
         <Typewriter
          options={{
            strings: ["Gartenpflege & kreative Gestaltung", "Natürliche Schönheit für dein Zuhause"],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </h2>
      
    </div>
  </header>
);

export default Header;
