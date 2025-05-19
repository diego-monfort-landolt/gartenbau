import React from "react";
import "../styles/GartenpflegeGartenbau.css"; // Stelle sicher, dass du die CSS-Datei hast
import BeispielBild from "../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png"; // Beispielbild

const GartenpflegeGartenbau: React.FC = () => {
  return (
    <section id="Gartenbau" className="gartenpflege-gartenbau">
      <div className="text-container">
        <h2>Gartenpflege und Gartenbau</h2>
        <p>
          Ein gepflegter Garten ist mehr als nur eine Außenfläche – er ist ein Rückzugsort, eine Wohlfühloase und ein lebendiges Naturerlebnis. Mit unserer fachkundigen Gartenpflege sorgen wir dafür, dass Ihre Grünflächen gesund und blühend bleiben – das ganze Jahr über. Ob regelmäßige Pflege, Rasen- und Heckenservice oder gezielte Maßnahmen zum Werterhalt – wir kümmern uns mit Erfahrung und Leidenschaft um jeden Bereich Ihres Gartens

        Unsere Gartenbau-Dienstleistungen verwandeln Ihre Ideen in Wirklichkeit. Ob Neu- oder Umgestaltung, moderne oder natürliche Designs – wir planen und realisieren individuelle Gartenkonzepte nach Ihren Wünschen. Durch kreative Gestaltung, hochwertige Materialien und präzise Umsetzung schaffen wir stilvolle Außenbereiche, die Ästhetik und Funktionalität perfekt vereinen.

        Lassen Sie Ihren Garten in neuem Glanz erstrahlen <br/><b> wir freuen uns auf Ihre Anfrage!</b>
        </p>
      </div>
      <div className="image-container">
        <img src={BeispielBild} alt="Gartenpflege und Gartenbau Beispiel" />
      </div>
    </section>
  );
};

export default GartenpflegeGartenbau;
