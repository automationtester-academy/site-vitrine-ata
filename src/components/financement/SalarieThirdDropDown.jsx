import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function SalarieThirdDropDown() {

    const [isActive, setActive] = useState(false);

    const activeDropDown = () => {
        setActive(!isActive);
    }

    const textColor = isActive ? "text-[#39DDF5]" : "text-white";
    const dropDownStyle = isActive ? "flex text-white font-bold py-5 px-4 w-11/12 items-center" : "drop-down-style flex items-center text-white font-bold py-5 px-4 w-11/12";

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <button
                    className={`${dropDownStyle}`}
                    onClick={activeDropDown}
                >
                    {isActive ? <img src={CartIcon2} alt="" /> : <img src={CartIcon} alt="" />}
                    <span className={`ml-4 text-xl ${textColor}`}>L'OPCO</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Les OPCO remplacent les anciens Organismes Paritaires Collecteurs Agréés (OPCA).
                                    Les principales missions des OPCO sont :
                                    <br/>
                                    Financer les contrats d’alternance.
                                    <br/>
                                    Venir en aide aux branches professionnelles pour construire des certifications.
                                    <br/>   
                                    Vous aidez si vous êtes TPE (une Très Petite Entreprise) ou une PME (Petite ou Moyenne Entreprise) à déterminer quels sont vos besoins en formations.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Vous pouvez bénéficier d’un financement pour vos actions de formation de la part de l’OPCO dont vous dépendez si vous êtes une entreprise de moins de 50 salariés. Cependant, si vous dépassez ce nombre, vous devrez utiliser votre budget formation.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Votre entreprise peut prendre en charge le financement de votre formation via leur OPCO ou enveloppe formation.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Prendre contact avec notre équipe pour vous aider à préparer votre dossier</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}