import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function EtudiantThirdDropDown() {

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
                    <span className={`ml-4 text-xl ${textColor}`}>Le Fonds d'aide aux jeunes</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Le Fonds d’Aide aux Jeunes ou FAJ est destiné à venir en aide aux jeunes sans emploi les
                                plus démunis.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Chaque département a établi ses propres critères d’éligibilité, mais la majorité des bénéficiaires du FAJ répondent tous aux mêmes conditions : <strong>âgé de 18 à 25 ans, souffrant de difficultés financières importantes </strong> du fait d’un manque de ressources, mais ne pouvant percevoir d’aides comme le RSA ou l’AAH</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Délivrée par le département, l’aide offerte par <strong>le FAJ est soumise à un plafond et son montant varie suivant les collectivités territoriales </strong>et peut être versé directement auprès d’un prestataire tiers.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            
                            <div className="my-2">
                                <p className="text-xl text-white"><strong>  Pour faire une demande de FAJ, il est impératif de se faire accompagner par un travailleur social de la Mission Locale.</strong> Avec son aide, vous pourrez monter votre dossier. Ce dernier sera ensuite présenté à une commission d’attribution qui prendra sa décision.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}