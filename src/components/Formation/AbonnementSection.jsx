import React from 'react';

export default function AbonnementSection() {
    const sectionStyle = "min-h-screen p-10 bg-gray-800 text-white flex flex-col items-center justify-center";
    return (
        <div id="abonnement-section" className={sectionStyle} aria-labelledby="abonnement-heading">
            <h2 id="abonnement-heading" className="text-3xl mb-4">Abonnement Section</h2>
            <img src="https://via.placeholder.com/600x400" alt="Abonnement" className="mb-4"/>
            <p className="text-lg">
                Subscribe to our platform and get unlimited access to all our courses. Stay up-to-date with the latest industry trends and continue learning at your own pace.
            </p>
        </div>
    );
}
