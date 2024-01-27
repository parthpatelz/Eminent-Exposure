import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import engage2 from '../assets/engage2.jpg';
import birthday from '../assets/birthdays.jpg';
import wedding from '../assets/weddings.jpg';


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const frameStyle ='w-full h-auto p-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'

  return (
    <div className="bg-white-900 text-black min-h-screen" id='portfolio'>
      <div className="container mx-auto py-8 mt-4">
        <h1 className="text-4xl font-bold text-center mb-4 md:text-5xl">Our Work</h1>
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4">
            <img
              src={engage2}
              alt="Image 1"
              className={frameStyle}
            />
            <img
              src={birthday}
              alt="Image 2"
              className={frameStyle}
            />
            <img
              src={wedding}
              alt="Image 3"
              className={frameStyle}
            />
          </div>
        </div>

        <div className="md:hidden">
          <Slider {...settings}>
            <img
              src={engage2}
              alt="Image 1"
              className={frameStyle}
            />
            <img
              src={birthday}
              alt="Image 2"
              className={frameStyle}
            />
            <img
              src={wedding}
              alt="Image 3"
              className={frameStyle}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
