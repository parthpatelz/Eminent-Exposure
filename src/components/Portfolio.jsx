import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const frameStyle = 'w-full h-auto p-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'

  return (
    <div className="bg-white-900 text-black min-h-screen pt-16 overflow-x-hidden" id='portfolio'>
      <div className="container mx-auto py-8 mt-4">
        <h1 className="text-4xl font-bold text-center mb-4 md:text-5xl">Our Work</h1>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src='https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'
                alt="Image 1"
                className={frameStyle}
              />
              <h1 className='text-4xl'>Wedding</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                src='https://images.unsplash.com/photo-1551892644-51a6e2e8fc65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcnRoZGF5fGVufDB8fDB8fHww'
                alt="Image 2"
                className={frameStyle}
              />
              <h1 className='text-4xl'>Birthday</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                src='https://images.unsplash.com/photo-1608433008134-2c01ebb7a13c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdvdGhhbXxlbnwwfHwwfHx8MA%3D%3D'
                alt="Image 3"
                className={frameStyle}
              />
              <h1 className='text-4xl'>Street</h1>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <Slider {...settings}>
            <div className="flex flex-col items-center">
              <img
                src='https://images.pexels.com/photos/6085682/pexels-photo-6085682.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt="Image 1"
                className={frameStyle}
              />
              <h1 className='text-4xl text-center'>Wedding</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                src='https://images.pexels.com/photos/12934446/pexels-photo-12934446.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt="Image 2"
                className={frameStyle}
              />
              <h1 className='text-4xl text-center'>Baby Birthdays</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                src='https://images.pexels.com/photos/13518885/pexels-photo-13518885.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt="Image 3"
                className={frameStyle}
              />
              <h1 className='text-4xl text-center'>Street Photography</h1>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
