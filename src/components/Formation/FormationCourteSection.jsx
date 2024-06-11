import React from 'react';

export default function FormationCourteSection() {
    const sectionStyle = "min-h-screen p-10 bg-gray-800 text-white flex flex-col items-center justify-center";
    return (
        <div id="formation-courte-section" className={sectionStyle} aria-labelledby="formation-courte-heading">
            <h2 id="formation-courte-heading" className="text-3xl mb-4">Formation Courte Section</h2>
            <img src="https://via.placeholder.com/600x400" alt="Formation Courte" className="mb-4"/>
            <p className="text-lg">
                Our short courses are perfect for those looking to quickly acquire new skills and knowledge in a specific area. Learn from experts and apply what you learn immediately.
            </p>
        </div>
    );
}
