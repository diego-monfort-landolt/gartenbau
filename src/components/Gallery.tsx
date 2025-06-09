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
  {
    original: Foto1, thumbnail: Foto1, description: 'Gartenplatten und Grünfläche, Frisch geschnitten',
    originalAlt: 'Professionell verlegte Gartenplatten mit frischer Grünfläche in Bülach – Gartenbau J. Landolt',
    thumbnailAlt: 'Gartenplatten mit Rasen in Bülach – Gartenarbeiten'
  },
  {
    original: Foto2, thumbnail: Foto2, description: 'Gartenweg - J. Landolt Gartenbau GmbH',
    originalAlt: 'Gepflasterter Gartenweg vom Gärtner in Bülach – J. Landolt Gartenbau GmbH',
    thumbnailAlt: 'Gartenweg in Bülach – Gärtnerarbeit'
  },
  {
    original: Foto3, thumbnail: Foto3, description: 'Schöner Plattenboden',
    originalAlt: 'Moderner Plattenboden im Garten – Gartenbau Bülach von J. Landolt',
    thumbnailAlt: 'Plattenboden Garten Bülach'
  },
  {
    original: Foto4, thumbnail: Foto4, description: 'Natursteinmauer',
    originalAlt: 'Natursteinmauer im privaten Garten – Gartenarbeiten Bülach vom Profi',
    thumbnailAlt: 'Garten Natursteinmauer Bülach'
  },
  {
    original: Foto5, thumbnail: Foto5, description: 'J. Landolt Gartenbau GmbH',
    originalAlt: 'Logo von J. Landolt Gartenbau GmbH – Ihr Gärtner für Bülach und Umgebung',
    thumbnailAlt: 'J. Landolt Gartenbau Bülach'
  },
  {
    original: Foto6, thumbnail: Foto6, description: 'Grünfläche, Frisch geschnitten',
    originalAlt: 'Frisch geschnittene Grünfläche vom Gärtner in Bülach – Gartenpflege Landolt',
    thumbnailAlt: 'Grünfläche Gartenpflege Bülach'
  },
  {
    original: Foto7, thumbnail: Foto7, description: 'Plattenboden neu erstellt - J.Landolt Gartenbau GmbH',
    originalAlt: 'Neu verlegter Plattenboden vom Gartenbauunternehmen in Bülach – J. Landolt',
    thumbnailAlt: 'Neuer Gartenboden Bülach'
  },
  {
    original: Foto8, thumbnail: Foto8, description: 'Eleganter Platenboden - J.Landolt Gartenbau GmbH',
    originalAlt: 'Eleganter Plattenboden im Garten – Gartenarbeiten Bülach von J. Landolt Gartenbau GmbH',
    thumbnailAlt: 'Eleganter Plattenweg Garten Bülach'
  },
  {
    original: Foto9, thumbnail: Foto9, description: 'Aussen Brunnen - J.Landolt Gartenbau GmbH',
    originalAlt: 'Außenbrunnen im Garten – Wasserinstallation vom Gartenbauer in Bülach',
    thumbnailAlt: 'Gartenbrunnen Bülach Gartenbau'
  },
  {
    original: Foto01, thumbnail: Foto01, description: 'Spielplatzt - J.Landolt Gartenbau GmbH',
    originalAlt: 'Gestalteter Spielplatzbereich vom Gärtner in Bülach – Gartenbau für Familien',
    thumbnailAlt: 'Spielplatz im Garten Bülach'
  },
  {
    original: Foto02, thumbnail: Foto02, description: 'Modern gestalteter Poolbereich mit stilvollem Gartenbau - J.Landolt Gartenbau GmbH',
    originalAlt: 'Poolbereich mit Natursteinboden – hochwertiger Gartenbau in Bülach von J. Landolt',
    thumbnailAlt: 'Garten mit Pool Bülach – Natursteinarbeiten'
  },
  {
    original: Foto03, thumbnail: Foto03, description: 'Üppige Blütenpracht im Garten – stilvolle Naturgestaltung mit J. Landolt Gartenbau GmbH',
    originalAlt: 'Blühende Sträucher und Blumen – Gärtnerarbeiten in Bülach von J. Landolt',
    thumbnailAlt: 'Blühender Garten Bülach'
  },
  {
    original: Foto04, thumbnail: Foto04, description: 'Eleganter Sichtschutz mit natürlicher Blütenpracht – J. Landolt Gartenbau GmbH',
    originalAlt: 'Sichtschutz mit Blumen im Garten – Gartenbau Bülach durch J. Landolt',
    thumbnailAlt: 'Blumiger Sichtschutz Garten Bülach'
  },
  {
    original: Foto05, thumbnail: Foto05, description: 'Harmonisch gestalteter Gartenplatz mit stilvollen Naturmaterialien – J. Landolt Gartenbau GmbH',
    originalAlt: 'Gartenplatz mit Naturmaterialien in Bülach – Gärtnerarbeiten von J. Landolt',
    thumbnailAlt: 'Naturgarten Gestaltung Bülach'
  },
  {
    original: Foto06, thumbnail: Foto06, description: 'Harmonische Wassergestaltung mit eleganten Wasserpflanzen – J. Landolt Gartenbau GmbH',
    originalAlt: 'Wasserpflanzen und Teichgestaltung im Garten – Gartenpflege Bülach vom Profi',
    thumbnailAlt: 'Gartenteich mit Pflanzen Bülach'
  },
  {
    original: Foto07, thumbnail: Foto07, description: 'Naturnahe Gartengestaltung – J. Landolt Gartenbau GmbH',
    originalAlt: 'Heckenpflege und naturnahe Gartengestaltung vom Gärtner in Bülach',
    thumbnailAlt: 'Naturnaher Garten Bülach'
  },
  {
    original: Foto08, thumbnail: Foto08, description: 'Pflastersteine – J. Landolt Gartenbau GmbH',
    originalAlt: 'Verlegte Pflastersteine im Garten – Gartenbau Bülach von J. Landolt',
    thumbnailAlt: 'Garten Pflastersteine Bülach'
  },
  {
    original: Foto09, thumbnail: Foto09, description: 'NeuBau - Rasen & Natursteinplatten – J. Landolt Gartenbau GmbH',
    originalAlt: 'Neu angelegter Garten mit Rasen und Natursteinplatten – Gartenarbeiten in Bülach',
    thumbnailAlt: 'Rasenneuanlage Natursteine Bülach'
  },
  {
    original: Foto10, thumbnail: Foto10, description: 'Baumschnitt - Baumpflege – J. Landolt Gartenbau GmbH',
    originalAlt: 'Professioneller Baumschnitt und Baumpflege durch Gartenbauer in Bülach',
    thumbnailAlt: 'Baumpflege Gärtner Bülach'
  },
];
type GalleryImage = {
  original?: string;
  thumbnail?: string;
  description?: string;
  originalAlt?: string;
  thumbnailAlt?: string;
};

const renderGalleryImage = (item: GalleryImage) => {
  return (
    <div className="image-gallery-image">
      <img
        src={item.original}
        alt={item.originalAlt || item.description}
        loading="lazy"
      />
      {
        item.description &&
        <span className="image-gallery-description">
          {item.description}
        </span>
      }
    </div>
  );
};

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
        renderItem={renderGalleryImage}
        /> 
    </section>
  );
};
export default GalleryComponent;