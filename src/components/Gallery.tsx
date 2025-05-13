import "../styles/Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const images = [
  "https://cdn.pixabay.com/photo/2020/06/21/13/07/bee-5324761_640.jpg",
  "https://cdn.pixabay.com/photo/2022/01/16/14/08/agriculture-6942153_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/31/12/06/box-hedge-topiary-869073_640.jpg",
  "https://cdn.pixabay.com/photo/2017/03/27/14/34/garden-2179095_640.jpg",
  "https://cdn.pixabay.com/photo/2016/05/24/15/11/secateur-1412518_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/17/17/58/watering-1601143_640.jpg",
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
