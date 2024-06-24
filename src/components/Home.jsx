import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { home } from '../imagePath';
let name = 'Photographer...'
const Home = () => {
  const [text, setText] = useState('');
  const ref = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1])
      }
    }, 200);
    return () => clearInterval(interval);
  }, [text])

  const imageUrls = [

    'https://images.pexels.com/photos/6914621/pexels-photo-6914621.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1024965/pexels-photo-1024965.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7669960/pexels-photo-7669960.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7669984/pexels-photo-7669984.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://plus.unsplash.com/premium_photo-1661862397518-8e50332b6e97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1635919254233-38ea27301900?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    'https://images.pexels.com/photos/4552397/pexels-photo-4552397.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/15107211/pexels-photo-15107211/free-photo-of-couple-in-green-grass-field.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/16364574/pexels-photo-16364574/free-photo-of-bride-smiling-during-a-traditional-indian-wedding-custom.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/16364593/pexels-photo-16364593/free-photo-of-bride-smiling-during-a-traditional-indian-wedding-custom.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/16364616/pexels-photo-16364616/free-photo-of-bride-smiling-during-a-traditional-indian-wedding-custom.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/16364237/pexels-photo-16364237/free-photo-of-wedding-guests-in-traditional-clothing-dancing-at-the-reception.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/16364533/pexels-photo-16364533/free-photo-of-family-in-traditional-clothing-posing-for-a-picture-at-a-wedding.jpeg?auto=compress&cs=tinysrgb&w=800'



  ];

  return (
    <>
      <div className="relative flex items-center justify-center h-screen" id='home'>
        <img className="object-cover w-full h-full" src={home} alt="Home Image" />
        <div className="absolute text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Looking for a wedding&nbsp;</h1><span className='text-5xl text-4xl md:text-5xl lg:text-6xl font-extrabold'>{text}</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-gray-800 font-extrabold tracking-wider m-6 ml-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-pink-500">
        PORTFOLIO
      </h1>

      <div className="flex flex-wrap m-4">
        <br />
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-1">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover "
            />
          </div>
        ))}
      </div>
    </>
  )

}

export default Home