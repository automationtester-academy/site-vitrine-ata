import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function DemandeDeEmploiSecondDropDown() {
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
                    <span className={`ml-4 text-xl ${textColor}`}>L'Aide individuelle à la formation</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">AIF : L’aide individuelle à la formation</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Public : Demandeurs d’emploi et personnes en accompagnement CRP/CTP ou CSP 
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">L’aide individuelle à la formation est une contribution de Pôle Emploi pour (co)financer une formation dont l’objectif est un retour rapide à l’emploi. La contribution est versée directement à l’organisme de formation.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">1 : Choisir votre formation et votre date de rentrée </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">2 : Remplir notre formulaire de contact, notre équipe prendra contact avec vous pour définir vos besoins et le mode de financement le plus adéquat en fonction de votre situation, le devis AIF sera saisie par Automation Tester Academy via le portail Kairos.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">3 : Préparez votre rendez-vous avec votre conseillère ou conseiller France Travail</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Il va falloir présenter la cohérence de ton projet par rapport à ton parcours et ton objectif</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">L’objectif ici est que ton conseiller valide ton projet professionnel et donne son accord pour soumettre une demande de financement.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">C’est aussi à ce moment-là que le conseiller te parlera des éventuels plafonds de financements et de co-financement possibles (uniquement pour l’AIF).</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Bien entendu, pour préparer tout cela, l’équipe d’Automation Tester Academy sera là pour t’accompagner dans ces démarches.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}