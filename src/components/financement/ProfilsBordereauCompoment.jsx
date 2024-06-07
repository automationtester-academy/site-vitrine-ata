import React from "react";
export default function ProfilsBordereauCompoment({ onDemandeurClick, onSalarieClick, onEtudiantClick, onIndependantClick, onHandicapClick }) {
    return (
        <>
            <div className="relative">
                <div className="profils-background w-full h-full p-7"></div>
                <div className="button-container">
                    <div className="flex justify-evenly items-center flex-wrap w-3/4">
                        <div className="">
                            <button onClick={onDemandeurClick} className="uppercase text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">DEMANDEUR D’EMPLOI</button>
                        </div>
                        <div className="">
                            <button onClick={onSalarieClick} className="uppercase text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">SALARIÉ</button>
                        </div>
                        <div className="">
                            <button onClick={onEtudiantClick} className="uppercase text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">ÉTUDIANT</button>
                        </div>
                        <div className="">
                            <button onClick={onIndependantClick} className="uppercase text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">INDÉPENDANT</button>
                        </div>
                        <div className="">
                            <button onClick={onHandicapClick} className="uppercase text-white font-bold py-2 px-4 rounded hover:bg-cyan-600">SITUATION DE HANDICAP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}