import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function IndependantSecondDropDown() {

    const [isActive, setActive] = useState(false);

    const activeDropDown = () => {
        setActive(!isActive);
    }

    const textColor = isActive ? "text-[#39DDF5]" : "text-white";
    const dropDownStyle = isActive ? "flex text-white font-bold py-5 px-4 w-full items-center" : "drop-down-style flex items-center text-white font-bold py-5 px-4 w-11/12";

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <button
                    className={`${dropDownStyle}`}
                    onClick={activeDropDown}
                >
                    {isActive ? <img src={CartIcon2} alt="" /> : <img src={CartIcon} alt="" />}
                    <span className={`ml-4 text-xl ${textColor}`}>Le fond d'assurance à la formation</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-full p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">CPF: Compte personnel de formation</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Avoir un compte CPF activé et done le solde est positif</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Vous pouvez utiliser votre compte CPF pour financer votre formation O’clock. Si la somme disponible ne couvre pas la totalité des frais de formation, vous pouvez compléter soit par un autofinancement, soit par une demande d’AIF (Aide individuelle de formation) auprès de France Travail.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Inscrivez-vous et passez notre parcours d’admissibilité : le Chemin vers O’clock.<br />
                                    Laissez-vous guider par votre référent admission de l’École O’clock dédié.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Nous répondrons alors à cette demande sur la plateforme « Mon Compte Formation ».</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Si le montant de votre solde CPF ne couvre pas tous les frais de formation, vous pourrez autofinancer le reste à charge (en une ou plusieurs mensualités) ou faire une demande d’AIF à votre conseiller France Travail.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}