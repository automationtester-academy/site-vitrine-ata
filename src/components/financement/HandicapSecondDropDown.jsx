import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function HandicapSecondDropDown() {

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
                    <span className={`ml-4 text-xl ${textColor}`}>L'AGEFIPH</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">L’AGEFIPH est l’Association de Gestion des Fonds pour l’Insertion des Personnes Handicapées. L’objectif de l’AGEFIPH, c’est de favoriser l’accès et le maintien dans l’emploi des personnes en situation de handicap en milieu ordinaire de travail. Pour y parvenir, son rôle est d’informer, de conseiller et de financer tes frais pédagogiques .</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">L’AGEFIPH peut aider au financement des formations des demandeurs d’emploi reconnus handicapés.
                                </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Pour valider votre situation et votre éligibilité, deux interlocuteurs possibles : le conseiller Pôle Emploi ou le conseiller Cap Emploi.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">L’AGEFIPH fait en sorte que vous soyez dans les conditions les plus optimales selon vos besoins, en adaptant votre poste de travail.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            
                            <div className="my-2">
                                <p className="text-xl text-white">Votre conseiller vous communique un dossier à renseigner. Habituellement, vous le remplirez avec son aide.
                                </p>
                            </div>

                            <div className="my-2">
                                <p className="text-xl text-white"> Par la suite, une commission examinera la demande et acceptera ou non de prendre en charge le coût de la formation ainsi que votre maintien de salaire. Elle définit au passage le montant de l’aide.</p>
                            </div>
                            < br/>
                            <div className="my-2">
                                <p className="text-xl text-white">Vous pouvez également compter sur l’aide de notre référente Handicap Mme BENNOUF Asmaa (<a href="mailto:asmaa@automationtesteracademy.com">asmaa@automationtesteracademy.com</a>) pour vous aider dans vos démarches.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}