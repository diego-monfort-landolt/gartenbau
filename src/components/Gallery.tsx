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

import Foto9 from '../assets/img/Aussenbrunnen_gartenbau_landolt_buelach_gaertner_bülach_gartenbau_gartenunterhalt.jpeg';
import Foto01 from '../assets/img/Spielplatzt_Gartenbau_elegant_schoen_professionell_gartenbau_buelach.jpeg';
import Foto02 from '../assets/img/Aussenpool_Natursteinboden_gartenpflege.jpeg';
import Foto03 from '../assets/img/Blühenden_Strauch_Gartenbau_landolt.jpeg';
import Foto04 from '../assets/img/Trennwand_garten_buelach_kloten_ruemlang_landoltGartenbau.jpeg';
import Foto05 from '../assets/img/Natursteinboden_frischgelegt_buelach_gartenbau_gartenpflege_natursteine.jpeg';
import Foto06 from '../assets/img/Wasserpflanzen_pflege_gartenpglege_gartenunterhalt_buelach_landolt_gartenbau_gmbh.jpeg';
import Foto07 from '../assets/img/Gartenpflege_hecke_büsche_rosen_wiese_rundumpacket_gartenpflege_Buelach.jpeg';
import Foto08 from '../assets/img/Pflastersteine_Natursteinarbeiten_buelach.jpeg';
import Foto09 from '../assets/img/ausengarten_gartenbau_landolt_buelach.jpeg';
import Foto10 from '../assets/img/gartenbau-landolt-buelach.jpeg';


const images = [
  { original: Foto1, thumbnail: Foto1, description: 'Gartenplatten und Grünfläche, Frisch geschnitten' },
  { original: Foto2, thumbnail: Foto2, description: 'Gartenweg - J. Landolt Gartenbau GmbH' },
  { original: Foto3, thumbnail: Foto3, description: 'Schöner Plattenboden' },
  { original: Foto4, thumbnail: Foto4, description: 'Natursteinmauer' },
  { original: Foto5, thumbnail: Foto5, description: 'J. Landolt Gartenbau GmbH' },
  { original: Foto6, thumbnail: Foto6, description: 'Grünfläche, Frisch geschnitten' },
  { original: Foto7, thumbnail: Foto7, description: 'Plattenboden neu erstellt - J.Landolt Gartenbau GmbH' },
  { original: Foto8, thumbnail: Foto8, description: 'Eleganter Platenboden - J.Landolt Gartenbau GmbH' },
  { original: Foto9, thumbnail: Foto9, description: 'Aussen Brunnen - J.Landolt Gartenbau GmbH' },
  { original: Foto01, thumbnail: Foto01, description: 'Spielplatzt - J.Landolt Gartenbau GmbH' },
  { original: Foto02, thumbnail: Foto02, description: 'Modern gestalteter Poolbereich mit stilvollem Gartenbau - J.Landolt Gartenbau GmbH' },
  { original: Foto03, thumbnail: Foto03, description: 'Üppige Blütenpracht im Garten – stilvolle Naturgestaltung mit J. Landolt Gartenbau GmbH' },
  { original: Foto04, thumbnail: Foto04, description: 'Eleganter Sichtschutz mit natürlicher Blütenpracht – J. Landolt Gartenbau GmbH' },
  { original: Foto05, thumbnail: Foto05, description: 'Harmonisch gestalteter Gartenplatz mit stilvollen Naturmaterialien – J. Landolt Gartenbau GmbH' },
  { original: Foto06, thumbnail: Foto06, description: 'Harmonische Wassergestaltung mit eleganten Wasserpflanzen – J. Landolt Gartenbau GmbH' },
  { original: Foto07, thumbnail: Foto07, description: 'Naturnahe Gartengestaltung – J. Landolt Gartenbau GmbH' },
  { original: Foto08, thumbnail: Foto08, description: 'Pflastersteine – J. Landolt Gartenbau GmbH' },
  { original: Foto09, thumbnail: Foto09, description: 'NeuBau - Rasen & Natursteinplatten  – J. Landolt Gartenbau GmbH' },
  { original: Foto10, thumbnail: Foto10, description: 'Baumschnitt - Baumpflege – J. Landolt Gartenbau GmbH' },
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
        lazyLoad={true}
        /> 
    </section>
  );
};
export default GalleryComponent;