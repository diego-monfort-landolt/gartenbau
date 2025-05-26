import React from "react";
import "../styles/GartenpflegeGartenbau.css";
import BeispielBild from "../assets/img/schönerplattenboden.png";

const GartenpflegeGartenbau: React.FC = () => {
  return (
    <section id="Gartenbau" className="gartenpflege-section">
      <div className="image-box">
        <img src={BeispielBild} alt="Gartenpflege und Gartenbau Beispiel" />
      </div>
      <div className="text-box">
        <h2>Gartenbau</h2>
        <p>
          Ein gepflegter Garten ist mehr als nur eine Außenfläche – er ist ein Rückzugsort, eine Wohlfühloase und ein lebendiges Naturerlebnis. Mit unserer fachkundigen Gartenpflege sorgen wir dafür, dass Ihre Grünflächen gesund und blühend bleiben – das ganze Jahr über. Ob regelmäßige Pflege, Rasen- und Heckenservice oder gezielte Maßnahmen zum Werterhalt – wir kümmern uns mit Erfahrung und Leidenschaft um jeden Bereich Ihres Gartens.
        </p>
        <h3>Warum Gartenpflege vom Fachbetrieb?</h3>
        <p>
        Eine regelmäßige und fachgerechte Gartenpflege schützt nicht nur Pflanzen und Boden, sondern steigert auch den langfristigen Wert Ihrer Immobilie. Als erfahrener Gartenbaubetrieb in Winkel arbeiten wir effizient, umweltschonend und mit hohem Qualitätsanspruch. Unser Ziel: Ein Garten, in dem Sie sich rundum wohlfühlen – zu jeder Jahreszeit.
        </p>
        <p>
          Unsere Gartenbau-Dienstleistungen verwandeln Ihre Ideen in Wirklichkeit. Ob Neu- oder Umgestaltung, moderne oder natürliche Designs – wir planen und realisieren individuelle Gartenkonzepte nach Ihren Wünschen. Durch kreative Gestaltung, hochwertige Materialien und präzise Umsetzung schaffen wir stilvolle Außenbereiche, die Ästhetik und Funktionalität perfekt vereinen.
          Lassen Sie Ihren Garten in neuem Glanz erstrahlen. <br/><b>Wir freuen uns auf Ihre Anfrage!</b>
        </p>
      </div>
    </section>
  );
};
export default GartenpflegeGartenbau;