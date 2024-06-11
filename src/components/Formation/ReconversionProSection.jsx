import React from 'react';

export default function ReconversionProSection() {
    const sectionStyle = "min-h-screen p-10 bg-gray-800 text-white flex flex-col items-center justify-center";
    return (
        <div id="reconversion-pro-section" className={sectionStyle} aria-labelledby="reconversion-pro-heading">
            <h2 id="reconversion-pro-heading" className="text-3xl mb-4">Reconversion Pro Section</h2>
            <img src="https://via.placeholder.com/600x400" alt="Reconversion Pro" className="mb-4"/>
            <p className="text-lg">
                Looking to change careers? Our professional reconversion programs are tailored to help you transition smoothly into a new field, with support and guidance every step of the way.
            </p>
        </div>
    );
}
