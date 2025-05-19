import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/Gallery.css'

import Foto1 from '../assets/img/gartenplatten-wiese.png';
import Foto2 from '../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png';
import Foto3 from '../assets/img/schönerplattenboden.png';
import Foto4 from '../assets/img/kleinemauer.png';
import Foto5 from '../assets/img/J.LandoltGartenbauGmbH.png';
import Foto6 from '../assets/img/garten-j-landolt.png';
import Foto7 from '../assets/img/Naturstein-Boden-Gärtner-in-Bülach J. Landolt Gartenbau GmbH.png';
import Foto8 from '../assets/img/Privater-GartenJ. Landolt Gartenbau GmbH.png';

const images = [
  { original: Foto1, thumbnail: Foto1, description: 'Gartenplatten und Grünfläche, Frisch geschnitten' },
  { original: Foto2, thumbnail: Foto2, description: 'Gartenweg - J. Landolt Gartenbau GmbH' },
  { original: Foto3, thumbnail: Foto3, description: 'Schöner Plattenboden' },
  { original: Foto4, thumbnail: Foto4, description: 'Natursteinmauer' },
  { original: Foto5, thumbnail: Foto5, description: 'J. Landolt Gartenbau GmbH' },
  { original: Foto6, thumbnail: Foto6, description: 'Grünfläche, Frisch geschnitten' },
  { original: Foto7, thumbnail: Foto7, description: 'Plattenboden neu erstellt - J.Landolt Gartenbau GmbH' },
  { original: Foto8, thumbnail: Foto8, description: 'Plattenboden neu erstellt - J.Landolt Gartenbau GmbH' },
];

const GalleryComponent: React.FC = () => {
  return (
    <section id='Gallery' className="gallery ">
      <h2 className="gallery-title">Galerie</h2>
     

        <Gallery 
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={true}
        showNav={true}
        autoPlay={true}
        slideInterval={4000}
        /> 

    </section>
  );
};

export default GalleryComponent;
