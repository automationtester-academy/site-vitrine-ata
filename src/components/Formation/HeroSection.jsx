import React, { useState, useEffect, useRef } from 'react';
import Image1 from '../../assets/images/formation/FormationHero.jpg';
import Image2 from '../../assets/images/formation/FormationHero2.jpg';

const images = [Image1, Image2];
const intervalTime = 3000;

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full h-[513px] overflow-hidden">
      {images.map((image, index) => (
        <HeroImage
          key={index}
          image={image}
          isVisible={index === currentImageIndex}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-container">
          <h2 className="uppercase text-white flex gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center p-4 rounded-md">
            <span className="text-[#39DDF5]">Nos</span> Formations
          </h2>
        </div>
      </div>
    </div>
  );
}

function HeroImage({ image, isVisible }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
