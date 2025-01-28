import React from 'react';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* YouTube Card */}
          <a 
            href="https://www.youtube.com/channel/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80 group-hover:opacity-100">Subscribe on</p>
                <h3 className="text-2xl font-bold">YouTube</h3>
                <p className="text-xl mt-2">69K+</p>
              </div>
              <FaYoutube className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity text-red-600" />
            </div>
          </a>

          {/* Facebook Card */}
          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80 group-hover:opacity-100">Like us on</p>
                <h3 className="text-2xl font-bold">Facebook</h3>
                <p className="text-xl mt-2">50K+</p>
              </div>
              <FaFacebook className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity text-blue-600" />
            </div>
          </a>

          {/* Twitter Card */}
          <a 
            href="https://twitter.com/parthpatelz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80 group-hover:opacity-100">Follow on</p>
                <h3 className="text-2xl font-bold">Twitter</h3>
                <p className="text-xl mt-2">48K+</p>
              </div>
              <FaTwitter className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity text-sky-500" />
            </div>
          </a>

          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/_parthpatelz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80 group-hover:opacity-100">Follow on</p>
                <h3 className="text-2xl font-bold">Instagram</h3>
                <p className="text-xl mt-2">131K+</p>
              </div>
              <FaInstagram className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity text-pink-500" />
            </div>
          </a>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-light opacity-90">
              © 2024 Eminent Exposure. All rights reserved.
            </p>
            <div className="mt-2 space-x-4">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors border border-gray-700"
          >
            <span>Back to Top</span>
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;