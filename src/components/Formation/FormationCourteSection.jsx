import React from 'react';
import F_courte from '../../assets/images/formation/F_courte.png';
import FormationCourte from '../../pages/FormationCourte';
import { Link } from 'react-router-dom';

export default function FormationCourteSection() {
    const sectionStyle = "pt-10 pb-10 bg-slate-800 text-white flex items-center justify-center";
    const containerStyle = "flex flex-col md:flex-row justify-between items-center max-w-4xl w-full";
    const textContainerStyle = "flex flex-col items-center text-center md:text-left lg:text-center md:ml-16";

    return (
        <section className={sectionStyle} aria-labelledby="FormationCourte-heading">
            <div className={containerStyle}>
                <div className="w-full md:w-auto flex justify-center md:justify-start md:mr-16 mb-8 md:mb-0">
                    <img src={F_courte} height="240" width="350" alt="Formation Courte" />
                </div>
                <div className={textContainerStyle} id="bootcamp-section">
                    <h1 className="formation-courte-text w-full text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:text-2xl sm:w-full max-sm:w-full lg:w-full lg:text-center">
                        Formation courte
                    </h1>
                    <p className="text-lg text-center mb-4 lg:text-center">
                        Nos formations professionnelles courtes sont souvent <br className="hidden md:inline" /> des formations intensives, d’une durée de quelques <br className="hidden md:inline" /> jours. Elles ont pour objectif de vous former <br className="hidden md:inline" /> rapidement sur un sujet précis et d’acquérir des <br className="hidden md:inline" /> compétences spécifiques sur les tests UI, API,<br className="hidden md:inline" /> performances …
                    </p>

                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">

                        {/* <Link to="/FormationCourte" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-cyan-600 hover:underline font-semibold">
                            <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-800 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                                En savoir plus
                            </div>
                        </Link> */}
                        <Link to='/formation-courte' className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-800 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
