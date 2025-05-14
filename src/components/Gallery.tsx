import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Foto1 from '../assets/img/gartenplatten-wiese.png';
import Foto2 from '../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png';
import Foto3 from '../assets/img/schönerplattenboden.png';
import Foto4 from '../assets/img/kleinemauer.png';
import Foto5 from '../assets/img/J.LandoltGartenbauGmbH.png';
import Foto6 from '../assets/img/garten-j-landolt.png';

const images = [
  { original: Foto1, thumbnail: Foto1, description: 'Gartenplatten auf Wiese' },
  { original: Foto2, thumbnail: Foto2, description: 'Gartenweg von J. Landolt' },
  { original: Foto3, thumbnail: Foto3, description: 'Schöner Plattenboden' },
  { original: Foto4, thumbnail: Foto4, description: 'Kleine Mauer' },
  { original: Foto5, thumbnail: Foto5, description: 'J. Landolt Gartenbau GmbH' },
  { original: Foto6, thumbnail: Foto6, description: 'Garten von J. Landolt' },
];

const GalleryComponent: React.FC = () => {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Galerie</h2>
      <Gallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        autoPlay={true}
        slideInterval={4000}
        />

    </section>
  );
};

export default GalleryComponent;
