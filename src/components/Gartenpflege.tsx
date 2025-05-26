import React from "react";
import "../styles/Gartenpflege.css";
import BeispielBild from "../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png";

const Gartenpflege: React.FC = () => {
  return (
    <section id="Gartenpflege" className="gartenpflege-container">
      <div className="image-wrapper">
        <img src={BeispielBild} alt="Gartenpflege und Gartenbau Beispiel" />
      </div>
      <div className="text-wrapper">
        <h2>Gartenpflege</h2>
        <p>
          Ein gepflegter Garten ist mehr als nur eine Außenfläche – er ist ein Rückzugsort, eine Wohlfühloase und ein lebendiges Naturerlebnis. Mit unserer fachkundigen Gartenpflege sorgen wir dafür, dass Ihre Grünflächen gesund und blühend bleiben – das ganze Jahr über. Ob regelmäßige Pflege, Rasen- und Heckenservice oder gezielte Maßnahmen zum Werterhalt – wir kümmern uns mit Erfahrung und Leidenschaft um jeden Bereich Ihres Gartens.
          Unsere Gartenbau-Dienstleistungen verwandeln Ihre Ideen in Wirklichkeit. Ob Neu- oder Umgestaltung, moderne oder natürliche Designs – wir planen und realisieren individuelle Gartenkonzepte nach Ihren Wünschen. Durch kreative Gestaltung, hochwertige Materialien und präzise Umsetzung schaffen wir stilvolle Außenbereiche, die Ästhetik und Funktionalität perfekt vereinen.
          Lassen Sie Ihren Garten in neuem Glanz erstrahlen. <br/>
          <h3>Gartenpflege nach Maß – abgestimmt auf Ihre Bedürfnisse</h3>
          <p>Unser Service umfasst die regelmäßige Gartenpflege, Rasenmähen, Heckenschnitt, Beetpflege und saisonale Arbeiten wie Laubentfernung oder Pflanzenschnitt. Auch gezielte Maßnahmen zur Werterhaltung Ihrer Gartenanlage gehören zu unserem Leistungsangebot. Mit langjähriger Erfahrung, einem geschulten Auge und viel Leidenschaft kümmern wir uns um jeden Bereich Ihres Gartens.</p>
          <b>Wir freuen uns auf Ihre Anfrage!</b>
        </p>
      </div>
    </section>
  );
};
export default Gartenpflege;