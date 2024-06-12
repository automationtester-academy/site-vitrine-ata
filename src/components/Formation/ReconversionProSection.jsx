
import React from 'react';
import Reconversion from '../../assets/images/formation/Reconversion.png';

export default function ReconversionProSection() {
    return (
        <section className="pt-10 pb-10 bg-slate-800 text-white flex items-center justify-center">
            <div className="flex md:flex-row justify-between max-w-4xl w-full">
                <div className="flex flex-col items-center text-center md:mr-8" id="bootcamp-section">
                    <h1 className="Bootcamp_Text_Title w-[30rem] text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full">
                    Reconversion Professionnelle
                    </h1>
                    <p className="text-lg text-center mb-4">
                    Envie de changer de métier et démarrer une nouvelle <br/> carrière professionnelle, ATA propose un parcours <br/> complet pour commencer de zéro et être <br/> opérationnelle pour intégrer un nouveau projet dans <br/> le domaine de l’automatisation des tests logiciels.<br/>
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-800 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </div>
                    </div>
                </div>
                <div className="w-4/2">
                    <img src={Reconversion} width="310" height="297" alt="Reconversion Pro" />
                </div>
            </div>
        </section>
    );
}

