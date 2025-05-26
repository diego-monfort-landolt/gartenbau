import React from "react";
import "../styles/Natursteinarbeiten.css"; // Stelle sicher, dass die CSS-Datei existiert
import NatursteinBild from "../assets/img/kleinemauer.png"; // Beispielbild

const Natursteinarbeiten: React.FC = () => {
  return (
    <section id="Natursteinarbeiten" className="naturstein-container">
      <div className="image-wrapper">
        <img src={NatursteinBild} alt="Beispiel für Natursteinarbeiten" />
      </div>
      <div className="text-wrapper">
        <h2>Natursteinarbeiten</h2>
        <p>
          Naturstein ist zeitlos, elegant und langlebig. Ob für Gartenmauern, Wege oder Terrassen – mit hochwertiger Natursteingestaltung setzen Sie stilvolle Akzente in Ihrem Garten. Unsere Experten beraten Sie individuell und setzen Ihre Wünsche professionell um.
          <br />
          Wir verwenden ausgesuchte Materialien, um eine harmonische und nachhaltige Gartengestaltung zu ermöglichen. Naturstein bietet nicht nur Ästhetik, sondern auch Wetterbeständigkeit und Stabilität.
          <br />
        </p>
        <p> Unser Leistungsspektrum im Bereich <strong>Natursteinarbeiten</strong> umfasst: <ul> <li>Terrassen aus Naturstein</li> <li>Natursteintreppen und Stufenanlagen</li> <li>Trockenmauern und Gartenmauern</li> <li>Wege und Einfahrten mit Natursteinpflaster</li> <li>Einfassungen, Palisaden und Zierobjekte</li> </ul> </p>
        <p> Durch die Kombination aus traditionellem Handwerk, hochwertigen Materialien und moderner Technik sorgen wir für präzise und langlebige Ergebnisse. Ob Sandstein, Granit, Basalt oder Schiefer – wir beraten Sie umfassend zur Auswahl des passenden Natursteins für Ihr Projekt.<br /> <b>Kontaktieren Sie uns für Ihre Natursteingestaltung!</b> </p>
      </div>
    </section>
  );
};
export default Natursteinarbeiten;