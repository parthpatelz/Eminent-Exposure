import React  from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-gray-800 p-8 text-white text-center overflow-x-hidden">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-wider mb-6 bg-clip-text ">
            Follow us on
          </h1>
          <div className="mb-8">
            <div className="flex flex-col items-center mb-4">
              <a href="https://www.facebook.com/profile.php?id=61554977925542" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl lg:text-2xl mx-2 hover:text-blue-500">              <span className="text-2xl md:text-lg lg:text-xl cursor-pointer underline">Facebook</span>

              </a>
            </div>
    
            <div className="flex flex-col items-center mb-4">
              <a href="your_twitter_link" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl lg:text-2xl mx-2 hover:text-red-600">
              <span className="text-2xl md:text-lg lg:text-xl cursor-pointer underline">Youtube</span>
              </a>
            </div>
    
            <div className="flex flex-col items-center mb-4">
              <a href="https://www.instagram.com/vpn_studios_/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl lg:text-2xl mx-2 hover:text-pink-500">
              <span className="text-2xl md:text-lg lg:text-xl cursor-pointer underline">Instagram</span>

              </a>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-wider mb-6 bg-clip-text ">
            Contact Us
          </h1>
          <div className="mb-8">
            <div className="flex flex-col items-center mb-4">
              <Link to='/contact' className='underline text-2xl cursor-pointer hover:text-red-800'>Contact</Link>
            </div>
            <h1>
              vpnstudios1@gmail.com
            </h1>
            <h2>+91 9542402123</h2>
            <h2>+91 9912491246</h2>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            VPN STUDIOS
          </h1>
        </div>
      );
}

export default Footer