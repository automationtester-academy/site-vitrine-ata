import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function SalarieSecondDropDown() {

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
                    <span className={`ml-4 text-xl ${textColor}`}>Le Projet de Transition Professionnelle</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Le <strong>Projet de Transition Professionnelle</strong> permet à un salarié de s’absenter de son poste de travail afin de suivre une formation dans le but de se qualifier, d’évoluer ou de se reconvertir. Pour cela, il faut remplir certains critères qui sont présentés dans l’article. Il est alors possible de demander le financement de la formation et de réaliser une demande de maintien de salaire auprès de Transition Pro (anciennement Fongecif).</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">La base, c’est d’être salarié et de justifier d’une activité salariée d’au moins 2 années, consécutives ou non, dont une année dans la même entreprise, quelle que soit la nature des contrats successifs.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Si vous êtes salarié intérimaire, vous devez avoir travaillé 1600 heures dans une profession au cours des 18 derniers mois et sur le même type de poste.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">De plus, parmi ces 1600 heures, 600 doivent avoir été effectuées dans l’entreprise de travail temporaire ou dans le groupe d’entreprises de travail temporaire où s’effectue la demande.</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Le maintien de votre salaire</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Prendre contact avec notre équipe pour vous aider à préparer votre dossier.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}