
import React from 'react';
import abbonement from '../../assets/images/formation/abbonement.png';

export default function AbonnementSection() {
    return (
        <section className="pt-10 pb-10 bg-slate-900 text-white flex items-center justify-center">
            <div className="flex md:flex-row justify-between max-w-4xl w-full">
                <div className="flex flex-col items-center text-center md:mr-8" id="bootcamp-section">
                    <h1 className="Bootcamp_Text_Title w-[30rem] text-cyan-400 text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full">
                    Abonnement                    </h1>
                    <p className="text-lg text-center mb-4">
                    Quand vous le souhaitez, où que vous soyez et à votre <br/> rythme, en souscrivant à notre abonnement vous <br/> avez accès à l’ensemble de notre plateforme de cours <br/> en e-learning et à plein d’options. <br/>
                    </p>
                    <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                            En savoir plus
                        </div> 
                    </div>
                </div>
                <div className="w-4/2">
                    <img src={abbonement} width="310" height="297" alt="Bootcamp" />
                </div>
            </div>
        </section>
    );
}
