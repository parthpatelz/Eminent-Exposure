import React, { useEffect, useState, useRef } from 'react';
import { home } from '../imagePath';
import { FaArrowDown, FaExpandArrowsAlt } from 'react-icons/fa';

const Home = () => {
  const [text, setText] = useState('');
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(0);
  const name = 'Photographer...';

  // Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        setText(prev => prev + name[ref.current]);
        ref.current++;
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Image grid data
  const imageUrls = [
    // ... keep your existing image URLs

    'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2395249/pexels-photo-2395249.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg',
    'https://images.pexels.com/photos/1023233/pexels-photo-1023233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/28925735/pexels-photo-28925735/free-photo-of-dramatic-close-up-of-a-red-rose-with-raindrops.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/614874/pexels-photo-614874.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7181782/pexels-photo-7181782.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2269686/pexels-photo-2269686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4536150/pexels-photo-4536150.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/24355433/pexels-photo-24355433/free-photo-of-father-and-mother-holding-hands-with-daughter-in-wedding-dress.jpeg?auto=compress&cs=tinysrgb&w=800'



  ];

  // Lightbox handler
  const openLightbox = (index) => {
    setLightbox(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-gray-900" id='home'>
        <img 
          className="object-cover w-full h-full opacity-70" 
          src={home} 
          alt="Wedding couple" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        <div className="absolute text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Looking for a wedding<br/>
            <span className="text-gradient bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent">
              {text}
              <span className="ml-2 animate-pulse">|</span>
            </span>
          </h1>
          
          <a 
            href="#gallery" 
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowDown className="animate-bounce" />
            View Gallery
          </a>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-gray-900 py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 mx-4">
            WEDDING SEASON IS HERE • 
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mx-4">
            CAPTURE YOUR MOMENTS • 
          </span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div 
        id="gallery" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100"
      >
        {imageUrls.map((imageUrl, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <img
              src={imageUrl}
              alt={`Wedding moment ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white">
                <h3 className="font-bold text-lg">Wedding Moment #{index + 1}</h3>
                <p className="text-sm opacity-90">Click to expand</p>
              </div>
              <FaExpandArrowsAlt className="absolute top-4 right-4 text-white text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={imageUrls[lightbox]}
              alt="Enlarged view"
              className="max-h-[90vh] w-auto mx-auto rounded-lg"
            />
            <div className="absolute top-4 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {lightbox + 1} / {imageUrls.length}
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}

export default Home;