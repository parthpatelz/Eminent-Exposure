import React from 'react';

export const servicesand = [
  {
    service: 'Wedding Photography',
    points: 'Pre-wedding Shoot, Haldi Shoot',
    logo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Eminent Exposure',
  },
  {
    service: 'Out Door Photography',
    points: 'Outdoor Shooting, Song making',
    logo: 'https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Eminent Exposure',
  },
  {
    service: 'Birthday Events',
    points: 'Outdoor Shooting, Baby Shoots, Cake Cutting',
    logo: 'https://plus.unsplash.com/premium_photo-1692604570035-088db7caeccd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Eminent Exposure',
  },
  {
    service: 'Gift Items',
    points: 'Marriage Gift Items',
    logo: 'https://images.unsplash.com/photo-1521478706270-f2e33c203d95?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Eminent Exposure',
  },
  {
    service: 'Photo Frames',
    points: 'Photo Frames of any size',
    logo: 'https://images.unsplash.com/photo-1597378080785-fc16687451ce?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Eminent Exposure',
  },
  {
    service: 'LED Walls',
    points: 'LED walls for marriages and other events',
    logo: 'https://images.unsplash.com/photo-1600867062551-60fca7e0b9c6?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Eminent Exposure',
  },
];

const Services = () => {
  return (
    <div className="bg-white mt-16 py-12 scroll-mt-16" id="services"> {/* mt-16 and scroll-mt-16 for fixed navbar */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-lg font-light text-gray-600">We are happy to serve</h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesand.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={item.logo}
                alt={item.service}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.service}</h3>
                <p className="text-gray-600">{item.points}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Provided by: {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;