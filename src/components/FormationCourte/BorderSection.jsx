import React from "react";

export default function BorderSection() {
    return (
        <>
            <div className="relative">
                <div className="profils-background w-full h-full p-7"></div>
                <div className="button-container">
                    <div className="flex justify-evenly items-center flex-wrap w-3/4">
                        <button
                         className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"                            aria-label="Section Bootcamp"
                        >
                            Front
                        </button>
                        <button
                         className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"                            aria-label="Section Formation courte"
                        >
                            Back 
                        </button>
                        <button
                         className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"                            aria-label="Section Abonnement"
                        >
                            Performances
                        </button>
                        <button
                        className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"                            aria-label="Section Reconversion pro"
                        >
                             CI/CD
                        </button>
                        <button
                       className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"                            aria-label="Section Mix-learning"
                        >
                       Mobile    
                      </button>
                    </div>
                </div>
            </div>
        </>
    );
}
