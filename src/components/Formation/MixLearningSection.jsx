import React from 'react';
import MixLearning from '../../assets/images/formation/MixLearning.png';

export default function MixLearningSection() {
    const sectionStyle = "pt-10 pb-10 bg-slate-900 text-white flex items-center justify-center";
    const containerStyle = "flex md:flex-row justify-between max-w-4xl w-full";
    const textContainerStyle = "flex flex-col items-center text-center md:mr-8";

    return (
        <section className={sectionStyle} aria-labelledby="MixLearning-heading">
            <div className={containerStyle}>
                <div className={textContainerStyle} id="bootcamp-section">
                    <h1 className="Bootcamp_Text_Title w-[30rem] text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full">
                        Mix-learning
                    </h1>
                    <p className="text-lg text-center mb-4">
                        Le mix-learning est un dispositif pédagogique qui <br /> s’adresse à tous les publics, notamment ceux qui <br /> accèdent difficilement à la formation en présentiel.<br /> Chez ATA nous avons mis en place ce dispositif pour <br /> vous permettre d’acquérir des compétences en <br /> automatisation de tests à votre rythme tout en étant <br /> encadré par une équipe pédagogique s’assurant du <br /> bon déroulement de votre formation .<br /> 
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </div>
                    </div>
                </div>
                <div className="w-4/2">
                    <img src={MixLearning} width="310" height="297" alt="Mix Learning" />
                </div>
            </div>
        </section>
    );
}
