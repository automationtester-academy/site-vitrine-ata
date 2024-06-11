import React from 'react';

export default function MixLearningSection() {
    const sectionStyle = "min-h-screen p-10 bg-gray-800 text-white flex flex-col items-center justify-center";
    return (
        <div id="mix-learning-section" className={sectionStyle} aria-labelledby="mix-learning-heading">
            <h2 id="mix-learning-heading" className="text-3xl mb-4">Mix-learning Section</h2>
            <img src="https://via.placeholder.com/600x400" alt="Mix-learning" className="mb-4"/>
            <p className="text-lg">
                Experience the best of both worlds with our mix-learning programs. Combine online learning with in-person sessions for a comprehensive educational experience.
            </p>
        </div>
    );
}
