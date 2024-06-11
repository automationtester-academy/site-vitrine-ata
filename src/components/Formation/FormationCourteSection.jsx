import React from 'react';
import F_courte from '../../assets/images/formation/F_courte.png';

export default function FormationCourteSection() {
    const sectionStyle = "pt-10 pb-10 bg-slate-800 text-white flex items-center justify-center";
    const containerStyle = "flex md:flex-row justify-between max-w-4xl w-full";
    const textContainerStyle = "flex flex-col items-center text-center md:mr-8"; 

    return (
        <section className={sectionStyle} aria-labelledby="">
            <div className={containerStyle}>
                <div className="w-4/2">
                    <img src={F_courte} width="310" height="297" alt="Formation Courte" />
                </div>
                <div className={textContainerStyle} id="bootcamp-section">
                    <h1 className="formation-courte-text w-[30rem] text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full">
                        Formation courte
                    </h1>
                    <p className="text-lg text-center mb-4">
                        Nos formations professionnelles courtes sont souvent <br /> des formations intensives, d’une durée de quelques <br /> jours. Elles ont pour objectif de vous former <br /> rapidement sur un sujet précis et d’acquérir des <br /> compétences spécifiques sur les tests UI, API,<br /> performances …
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-800 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
