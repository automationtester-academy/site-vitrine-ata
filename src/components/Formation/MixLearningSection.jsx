import React from 'react';
import MixLearning from '../../assets/images/formation/MixLearning.png';

export default function MixLearningSection() {
    const sectionStyle = "pt-10 pb-10 bg-slate-900 text-white flex items-center justify-center";
    const containerStyle = "flex flex-col md:flex-row justify-between max-w-4xl w-full      items-center md:items-center text-center md:text-center md:mr-16 mb-8 md:mb-0";
    const textContainerStyle = "flex flex-col items-center text-center md:text-center md:items-start lg:text-center lg:items-center md:mr-8";

    return (
        <section className={sectionStyle} aria-labelledby="MixLearning-heading">
            <div className={containerStyle}>
                <div className={textContainerStyle} id="bootcamp-section">
                    <h1 className="Bootcamp_Text_Title w-full text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:text-2xl max-sm:w-full">
                        Mix-learning
                    </h1>
                    <p className="text-lg text-center md:text-center lg:text-center mb-4">
                        Le mix-learning est un dispositif pédagogique qui <br className="hidden md:inline" /> s’adresse à tous les publics, notamment ceux qui <br className="hidden md:inline" /> accèdent difficilement à la formation en présentiel.<br className="hidden md:inline" /> Chez ATA nous avons mis en place ce dispositif pour <br className="hidden md:inline" /> vous permettre d’acquérir des compétences en <br className="hidden md:inline" /> automatisation de tests à votre rythme tout en étant <br className="hidden md:inline" /> encadré par une équipe pédagogique s’assurant du <br className="hidden md:inline" /> bon déroulement de votre formation .<br className="hidden md:inline" /> 
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-auto flex justify-center md:justify-start md:ml-16 mt-8 md:mt-0"> 
                    <img src={MixLearning} className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" alt="Mix Learning" />
                </div>
            </div>
        </section>
    );
}
