import "../styles/Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import Foto1 from '../assets/img/gartenplatten-wiese.png'
import Foto2 from '../assets/img/J. Landolt Gartenbau GmbH,gartenweg.png'
import Foto3 from '../assets/img/schönerplattenboden.png'
import Foto4 from '../assets/img/kleinemauer.png'
import Foto5 from '../assets/img/J. Landolt Gartenbau GmbH.png'
import Foto6 from '../assets/img/garten-j-landolt.png'


const images = [
  Foto1,
  Foto2,
  Foto3,
  Foto4,
  Foto5,
  Foto6,
  "https://cdn.pixabay.com/photo/2014/07/05/08/30/lawn-mower-384589_640.jpg",
  "https://cdn.pixabay.com/photo/2014/07/25/19/45/landscape-gardener-401880_640.jpg"
];

const Gallery = () => {

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }
  ]
};



  return (
   
    
 <section className="gallery">
      <h2 className="gallery-title">Galerie</h2>
      <div className="gallery-box">
         <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt="Gartenbild" className="gallery-item" />
          </div>
        ))}
      </Slider>
      </div>
     
    </section>

    
    
    
  );
};

export default Gallery;
