import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function SalarieFifthDropDown() {

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
                    <span className={`ml-4 text-xl ${textColor}`}>Transition collective</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Tout nouveau dispositif, présenté le 26 octobre 2020 par la Ministre du Travail. Il prévoit d’aider les salariés dont l’emploi est menacé, à développer de nouvelles compétences pour s’inscrire dans un parcours de reconversion. Ce dispositif s’inscrit dans le grand plan “France Relance”. L’idée est de se tourner vers un métier porteur, parce que ce sont des métiers d’avenir et/ou des métiers pour lesquels les entreprises (peut-être la vôtre) peinent à recruter. Le financement (frais de formation et rémunération) sera total ou partiel, en fonction de la taille de votre entreprise. Ce dispositif permet aux salariés les plus fragiles de suivre un parcours de formation long, jusqu’à 24 mois.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Le dispositif “Transitions collectives” fait partie des différentes mesures d’aides initiées
                                dans le cadre du plan de relance.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Le dispositif “transitions collectives” répond à un double objectif :</p>
                                <ul className="pl-10 leading-[2rem]">
                                    <li  className="text-xl text-white list-decimal my-4">Pour les employeurs, il s’agit d’anticiper les mutations économiques de leur secteur. Difficultés à court et moyen terme, évolution du modèle économique, etc.
                                    </li>
                                    <li  className="text-xl text-white  list-decimal mb-4 ">Pour les salariés, le but est de les accompagner vers une reconversion “apaisée, préparée et sécurisée”.</li>
                                </ul>
                                <p className="text-xl text-white">Le dispositif s’adresse donc particulièrement <strong> aux salariés dont l’emploi est fragilisé et qui souhaitent se reconvertir vers un emploi porteur au niveau local. </strong> L’objectif final est donc d’éviter des licenciements en organisant une reconversion vers un autre métier en demande.</p>

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