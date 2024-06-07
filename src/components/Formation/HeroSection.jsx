import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/images/FormationHero.jpg';
import Image2 from '../../assets/images/FormationHero2.jpg';

const images = [Image1, Image2];
const intervalTime = 3000; // 3 seconds

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-image ${index === currentImageIndex ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {index === currentImageIndex && (
            <div className="relative z-10 flex justify-center items-center h-full">
              <h2 className="uppercase text-white text-7xl font-bold">
                <span className="text-[#39DDF5]">Nos</span> Formation
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
