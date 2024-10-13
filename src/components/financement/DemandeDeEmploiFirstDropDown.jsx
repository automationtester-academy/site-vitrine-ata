import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function DemandeDeEmploiFirstDropDown() {

    const [isActive, setActive] = useState(false);

    const activeDropDown = () => {
        setActive(!isActive);
    }

    const textColor = isActive ? "text-[#39DDF5]" : "text-white";
    const dropDownStyle = isActive ? "flex text-white font-bold py-5 px-4 w-11/12 items-center" : "drop-down-style flex items-center text-white font-bold py-5 px-4 w-11/12";

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center mt-6 ">
                <button
                    className={`${dropDownStyle}`}
                    onClick={activeDropDown}
                >
                    {isActive ? <img src={CartIcon2} alt="" /> : <img src={CartIcon} alt="" />}
                    <span className={`ml-4 text-xl ${textColor}`}>Aide individuelle régionale vers l’emploi</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">AIDE individuelle régionale vers l’emploi</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Public : Demandeurs d’emploi résident en Ile-De-France</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">
                                    Destinée à faciliter l'accès ou le retour dans l'emploi des Franciliens, l’Aide individuelle régionale vers l’emploi (AIRE) finance 80% des frais de certaines formations certifiantes, du CAP au diplôme d’ingénieur. Et cela, tout en ouvrant droit au statut de stagiaire de la formation professionnelle rémunéré.
                                    </p>
                                <br/>
                                <p className="text-xl text-white">
                                AIRE à mis en place un nouveau règlement par délibération n°2023-402 du 17 novembre 2023 et est applicable à compter du ler janvier 2024 avec comme nouveau dispositif un taux maximal de 80% de prise en charge du coût de la formation après instruction et financement du reste à charge de 20%
                                (par d'autres voies de co-financement de type Pôle Emploi, OPCO, fonds propres)
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">1 : Choisir votre formation et votre date de rentrée</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">2 : Remplir notre formulaire de contact, notre équipe prendra contact avec vous pour définir vos besoins et le mode de financement le plus adéquat en fonction de votre situation, la demande de financement AIRE sera saisie par Automation Tester Academy via le portail mes démarches Région Ile-De-France.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">3 : Préparez votre rendez-vous avec votre conseillère ou conseiller France Travail afin de lui informer de votre projet et pour une éventuelle prise en charge du reste à charge de 20% de la formation.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">4 : Fournir les documents nécessaires à la demande de financement à notre gestionnaire formation, qui aura pris contact en amont avec vous,
                                Le délai de réponse de la Région Ile-De-France est de 6 semaines</p>
                            </div>  
                            <div className="my-2">
                                <p className="text-xl text-white">5 : Signer votre convention de formation</p>
                            </div>  
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}