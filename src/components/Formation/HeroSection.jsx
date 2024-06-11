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
    <div className="hero-container">
      {images.map((image, index) => (
        <HeroImage
          key={index}
          image={image}
          isVisible={index === currentImageIndex}
        />
      ))}
      <div className="text-container">
        <h2 className="uppercase text-white text-7xl font-bold">
          <span className="text-[#39DDF5]">Nos</span> Formation
        </h2>
      </div>
    </div>
  );
}

function HeroImage({ image, isVisible }) {
  return (
    <div
      className={`hero-image ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
