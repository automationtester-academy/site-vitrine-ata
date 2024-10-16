import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function IndependantthirdDropDown() {

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
                    <span className={`ml-4 text-xl ${textColor}`}>AUTOFINANCEMENT</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Définition :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">L’autofinancement est le fait de payer sa formation, en totalité ou en partie avec un
                                paiement en plusieurs mensualités.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Etre inscrit dans l’une de nos formations et de valider le devis envoyé par notre commercial, un acompte de 30% sera demandé avant l’entrée en formation</p>
                            </div>
                           
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">1. Choisir votre formation et votre date de rentrée
                                </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">2. Remplir notre formulaire de contact, notre équipe prendra contact avec vous pour définir vos besoins et le mode de financement le plus adéquat en fonction de votre situation.
                                </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">3. Signer le devis de formation
                                </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">4. Fournir les éléments à la validation du dossier d’inscription
                                </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">5. Signer le contrat de formation
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}