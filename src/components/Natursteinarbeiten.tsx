import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Natursteinarbeiten.css"; // Stelle sicher, dass die CSS-Datei existiert
import NatursteinBild from "../assets/img/kleinemauer.png"; // Beispielbild

const Natursteinarbeiten: React.FC = () => {
  return (

    <>
      <Helmet>
        <title>Gartenbau & Gartenpflege in Bülach un Umgebung | Gartenbau mit Stil – J. Landolt Gartenbau GmbH</title>
        <meta 
            name="description" 
            content="Gartenbau & Gartenpflege in Bülach und Umgebung - J. Landolt Gartenbau GmbH – Hochwertige Natursteinarbeiten, stilvolle Gartenwege, Terrassen und Treppen aus edlem Stein – für einen einzigartigen Außenbereich." 
        />
        <meta 
          name="keywords" 
          content="Natursteinarbeiten Bülach, Natursteinmauer bauen, Gartenwege aus Stein, Naturstein Terrasse, Gartenbau Bülach, Trockenmauern, Steintreppen, Pflasterarbeiten" 
        />
        <meta name="author" content="J. Landolt Gartenbau GmbH" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Natursteinarbeiten in Bülach – J. Landolt Gartenbau GmbH" />
        <meta property="og:description" content="Exklusive Natursteinmauern, Wege & Terrassen aus hochwertigen Materialien. Ihr Gartenbau-Spezialist in Bülach." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_CH" />
    </Helmet>
     <section id="Natursteinarbeiten" className="naturstein-container">
      <div className="image-wrapper">
        <img src={NatursteinBild} alt="Hochwertige Natursteinarbeiten in Bülach – stilvolle Pflasterungen, Natursteinmauern und Wege für eine langlebige und ästhetische Gartengestaltung" />
      </div>
      <div className="text-wrapper">
        <h1>Natursteinarbeiten</h1>
        <p>
          Kein Baustoff ist so verschieden und interessant wie Naturstein. Bei der Verarbeitung ist Fachwissen gefragt, da keiner dem anderen gleicht, und die verschiedenen Gesteinsarten verschieden bearbeitet und verarbeitet werden. 
          Der Stein lebt - Nach Jahrmillionen aus dem Fels gehauen besticht der Naturstein mit einzigartigen Eigenschaften. Wind und Wetter ausgesetzt verändert er sich und bekommt eine einzigartige Patina. 

          Wir verwenden Natursteine unter anderem für Pflästerungen, Bodenplatten für Wege und Plätze, im Kiesbett oder in Mörtel verlegt, für Natursteinmauern zur Terrassierung oder freistehend, zur Herstellung von Treppen im Garten und als Füllmaterial für Gabionen, oder einfach als dekoratives Gestaltungselement z.B. mit einem Findling. 

          Stein für Stein einzigartig 
          <br />
        </p>
        <p> Unser Leistungsspektrum im Bereich <strong>Natursteinarbeiten</strong> umfasst: <ul> <li>Terrassen aus Naturstein</li> <li>Natursteintreppen und Stufenanlagen</li> <li>Trockenmauern und Gartenmauern</li> <li>Wege und Einfahrten mit Natursteinpflaster</li> <li>Einfassungen, Palisaden und Zierobjekte</li> </ul> </p>
       
      </div>
    </section>
    </>
   
  );
};
export default Natursteinarbeiten;