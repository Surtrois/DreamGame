import React from "react";
import Slider from "react-slick";
import "./css/Carousel.css"
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import entree from "./img/entree.jpg"
import JeuxVideoRetro from "./img/jeuxvideoretro.jpg";
import Photo from "./img/photo.jpg"

const entreeSrc = entree
const JeuxVideoRetroSrc = JeuxVideoRetro 
const PhotoSrc = Photo

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="carousel-container">
    <Slider {...settings}>
<div>
        <img className='AnImage' src={entreeSrc} alt="Entree" />
      </div>
      <div>
       <img className='AnImage' src={JeuxVideoRetroSrc} alt="JeuxRetro" />
      </div>
      <div>
        <img className='AnImage' src={PhotoSrc} alt="Photo" />
      </div>
    </Slider>
    </div>
  );
};


export default Carousel;