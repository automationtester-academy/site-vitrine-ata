import React, { useState, useEffect } from 'react';
import developer from '../../assets/images/MixLearning/developpeur.png';
import code from '../../assets/images/MixLearning/code.png';
import 'tailwindcss/tailwind.css';

export default function HeroSection({ interval = 4000 }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const img1 = new Image();
    img1.onload = () => setImageHeight(img1.height);
    img1.src = developer;

    const img2 = new Image();
    img2.onload = () => setImageHeight(Math.max(img2.height, img1.height));
    img2.src = code;

    const switchImage = setInterval(() => {
      setCurrentImage(prev => (prev === 0 ? 1 : 0));
    }, interval);

    return () => clearInterval(switchImage);
  }, [interval]);

  return (
    <div className="relative w-full ">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-mixlearning-herosection uppercase text-cyan-400  !text-6xl max-sm:text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center p-4 rounded-md" style={{ textShadow: '-1.7px -1.7px 0 #071323, 1.7px -1.7px 0 #071323, -1.7px 1.7px 0 #071323, 1.7px 1.7px 0 #071323' }}>
          <span className="text-mixlearning-herosection-span text-white">Mix</span> Learning
        </h2>
      </div>
      <img
        src={developer}
        alt="Developer"
        className={`absolute bg-slate-900 inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${currentImage === 0 ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: `${imageHeight}px` }}
      />
      <img
        src={code}
        alt="Code"
        className={`absolute bg-slate-900 inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${currentImage === 1 ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: `${imageHeight}px` }}
      />
      <div style={{ height: `${imageHeight}px` }}></div>
    </div>
  );
}
