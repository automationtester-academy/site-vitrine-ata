import React from 'react';
import BootcampPic from '../../assets/images/formation/BootcampPic.png';
import { Link } from 'react-router-dom';



const BootcampSection = () => {


    

    
    return (
        <section className="pt-10 pb-10 bg-slate-900 text-white flex items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl w-full">
                <div className="flex flex-col items-center md:items-center text-center md:text-center md:mr-16 mb-8 md:mb-0" id="bootcamp-section">
                    <h1 className="Bootcamp_Text_Title text-cyan-400 text-[26px] sm:text-2xl md:text-3xl font-bold mb-[2.7%] mt-[6.5%] leading-tight w-full">
                        DevOps
                    </h1>
                    <p className="text-lg mb-4">
                        Une formation DevOps permet de maîtriser l’automatisation des processus de développement et de déploiement, favorisant ainsi la collaboration entre équipes et l’accélération des cycles de production. Elle améliore l’efficacité, l qualité des logiciels et répond à la forte demande sur la marché du travail.
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <Link to={"/devops"} onClick={() => window.scrollTo(0, 0)} className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-auto flex justify-center md:ml-16"> 
                    <img src={BootcampPic} className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" alt="Bootcamp" />
                </div>
            </div>
        </section>
    );
};

export default BootcampSection;
