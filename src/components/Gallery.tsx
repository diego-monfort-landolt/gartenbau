import { useState } from "react";
import "../styles/Gallery.css";

import Foto1 from '../assets/img/gartenplatten-wiese.png';
import Foto2 from '../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png';
import Foto3 from '../assets/img/schönerplattenboden.png';
import Foto4 from '../assets/img/kleinemauer.png';
import Foto5 from '../assets/img/J.LandoltGartenbauGmbH.png';
import Foto6 from '../assets/img/garten-j-landolt.png';

const images = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery">
      <h2 className="gallery-title">Galerie</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Bild ${index + 1}`} onClick={() => setSelectedImage(src)} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close">✖</button>
          <img src={selectedImage} alt="Vergrößertes Bild" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
