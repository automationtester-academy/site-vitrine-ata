import React from 'react';
import BootcampPic from '../../assets/images/BootcampPic.png';
const FormationCourteSection = () => {
    const sectionStyle = "pt-10 pb-10 bg-slate-900 text-white flex items-center justify-center";
    const containerStyle = "flex  md:flex-row justify-between max-w-4xl w-full";
    const textContainerStyle = "flex flex-col items-center text-center md:mr-8"; 

    return (
        <div className={sectionStyle} aria-labelledby="">
            <div className={containerStyle}>
            <div className=" w-4/2">
                    <img src={BootcampPic} width="310" height="297" alt="Bootcamp" />
                </div>
                <div className={textContainerStyle} id="bootcamp-section">
                    <h1 className="Bootcamp_Text_Title w-[30rem] text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full">Bootcamp</h1>
                    <p className="text-lg text-center mb-4">
                        Notre bootcamp est un programme de formation <br /> intensif et dynamique en petit groupe qui dure <br /> quelques semaines
                        et allie théorie et pratique pour acquérir des compétences en automatisation de tests logiciels.
                        Pour faire simple, c’est la version concentrée <br /> d’une formation qui aurait pu s'étaler sur plusieurs <br /> mois.
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default FormationCourteSection;
