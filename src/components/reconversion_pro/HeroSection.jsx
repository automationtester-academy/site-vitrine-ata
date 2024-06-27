import { useEffect, useRef, useState } from "react";
import cardImage1 from "../../assets/images/ReconversionProImg-1.png"
import cardImage2 from "../../assets/images/ReconversionProImg-2.png"

export default function HeroSection() {
    const images = [cardImage1, cardImage2];
    const intervalTime = 4000;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            // console.log('Current Image Index:', currentImageIndex);
        }, intervalTime);

        return () => clearInterval(intervalRef.current);
    }, []);
    return (
        <>
            <div className="reconversion-first-section-container relative w-full h-[200px] overflow-hidden">
                {images.map((image, index) => (
                    <HeroImage
                        key={index}
                        image={image}
                        isVisible={index === currentImageIndex}
                    />
                ))}
                <div className="reconversion-first-section-title flex justify-center">
                    <h2 className="uppercase text-white text-5xl font-bold">Reconversion <span className="text-[#39DDF5]">professionnelle</span></h2>
                </div>
            </div>
        </>
    )
}

function HeroImage({ image, isVisible }) {
    return (
        <>
            <div
                className={`reconversion-first-section-img absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        </>
    )
}