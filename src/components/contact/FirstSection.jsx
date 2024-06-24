import { useEffect, useRef, useState } from "react";
import CardImage from "../../assets/images/contactImg.jpg"
import cardImage2 from "../../assets/images/contactImg-2.png"

export default function FirstSection() {
    const images = [CardImage, cardImage2];
    const intervalTime = 3000;
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
            <div className="contact-first-section-container relative w-full h-[513px] overflow-hidden">
                {images.map((image, index) => (
                <HeroImage 
                key={index}
                image={image}
                isVisible={index === currentImageIndex}
                />
                ))}
                <div className="contact-first-section-title flex justify-center">
                    <h2 className="uppercase text-white text-7xl font-bold"><span className="text-[#39DDF5]">On</span> papote ?</h2>
                </div>
            </div>
        </>
    );
}

function HeroImage({ image, isVisible }) {
    console.log('Image:', image);
    return (
        <>
            <div
                className={`contact-first-section-img absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${image})`}}
            ></div>
        </>
    )
}