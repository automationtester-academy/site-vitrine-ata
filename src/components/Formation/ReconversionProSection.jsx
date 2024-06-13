import React from 'react';
import Reconversion from '../../assets/images/formation/Reconversion.png';

export default function ReconversionProSection() {
    return (
        <section className="pt-7 pb-7 bg-slate-800 text-white flex flex-col md:flex-row items-center justify-around">
            <div className="w-full md:w-2/5 flex justify-center md:justify-end mb-8 md:mb-0">
                <img src={Reconversion} width="350" height="240" alt="Reconversion Pro" />
            </div>
            <div className="w-full md:w-3/5 flex justify-center">
                <div className="flex flex-col items-center text-center md:items-start md:text-left lg:items-center lg:text-center w-full" id="bootcamp-section">
                    <h1 className="Reconversion_Text_Title w-full text-cyan-400 text-[26px] font-bold mb-4 mt-6 leading-tight sm:text-2xl">
                        Reconversion Professionnelle
                    </h1>
                    <p className="text-lg text-center md:text-left lg:text-center mb-4">
                        Envie de changer de métier et démarrer une nouvelle <br className="hidden md:inline" /> carrière professionnelle, ATA propose un parcours <br className="hidden md:inline" /> complet pour commencer de zéro et être <br className="hidden md:inline" /> opérationnelle pour intégrer un nouveau projet dans <br className="hidden md:inline" /> le domaine de l’automatisation des tests logiciels.<br />
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
