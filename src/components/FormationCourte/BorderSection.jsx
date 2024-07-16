import React from "react";

export default function BorderSection() {
    return (
        <div className="relative">
            <div className="profils-background w-full h-full p-7 absolute inset-0 z-0 pt-4"></div>
            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-evenly items-center flex-wrap w-3/4 mx-auto">
                    <button
                        className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 sm:border-0 border-b border-gray-300 w-full sm:w-auto mb-2 sm:mb-0"
                        aria-label="Section Bootcamp"
                    >
                        Front
                    </button>
                    <button
                        className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 sm:border-0 border-b border-gray-300 w-full sm:w-auto mb-2 sm:mb-0"
                        aria-label="Section Formation courte"
                    >
                        Back
                    </button>
                    <button
                        className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 sm:border-0 border-b border-gray-300 w-full sm:w-auto mb-2 sm:mb-0"
                        aria-label="Section Abonnement"
                    >
                        Performances
                    </button>
                    <button
                        className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 sm:border-0 border-b border-gray-300 w-full sm:w-auto mb-2 sm:mb-0"
                        aria-label="Section Reconversion pro"
                    >
                        CI/CD
                    </button>
                    <button
                        className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 sm:border-0 border-b border-gray-300 w-full sm:w-auto mb-2 sm:mb-0"
                        aria-label="Section Mix-learning"
                    >
                        Mobile
                    </button>
                </div>
            </div>
        </div>
    );
}
