import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuIcon } from '../imagePath';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between">
        <div className="text-3xl sm:text-2xl font-extrabold">
        <a href="/" 
   class="relative inline-block text-white text-4xl font-bold tracking-wider bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-2 rounded-lg transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-500">
  <span class="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg opacity-50 blur-md hover:blur-lg hover:opacity-70"></span>
  <span class="relative z-10">Eminent Exposure</span>
</a>

        </div>
        <div className="hidden sm:flex space-x-4 items-center text-lg">
          <Link to='/' className='text-white'>Home</Link>
          <Link to='/portfolio' className='text-white'>Portfolio</Link>
          <Link to='/services' className='text-white'>Services</Link>
          {/* <Link to='/about'>About</Link> */}
          <Link to='/contact' className='text-white'>Contact Us</Link>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? <img src='https://img.icons8.com/?size=100&id=YOrgWKvUdGE3&format=png' alt="Menu Icon" className='h-20 w-20' style={{ color: 'white' }} /> : <img src='https://img.icons8.com/?size=100&id=YOrgWKvUdGE3&format=png' alt="Mennu Icon" className='h-10 w-10' />}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none text-gray-500">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu} >Home</Link></li>
            <li><Link to='/portfolio' onClick={closeMobileMenu}>Portfolio</Link></li>
            <li><Link to='/services' onClick={closeMobileMenu} >Services</Link></li>
            {/* <li><Link to='/DroneCanvas' onClick={closeMobileMenu}>About</Link></li> */}
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
