import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function IndependantSecondDropDown() {

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
                    <span className={`ml-4 text-xl ${textColor}`}>FIPPL</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DÉFsssINITION :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Fonds interprofessionnel de formation des professions libérales (F.I.P.-P.L.)</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Public : Travailleurs indépendants, leurs conjoints collaborateurs et les micro- entrepreneurs</p>
                            </div>
                            <div className="my-4">
                                <p className="text-xl text-white">Description : Le FIF-PL est un fonds créé à l’initiative de l’Union nationale des professions libérales (UNAPL) et destiné à participer au financement de la formation continue des professions libérales. Ce dispositif est financé par la Contribution à la formation professionnelle (CFP) versée chaque année par les travailleurs indépendants.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Le plafond annuel et les critères de prise en charge sont fixés chaque année pour les quatre domaines d’activité relevant du FIF-PL (Cadre de vie, Juridique, Santé et Technique).</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">DEMARCHES A SUIVRE :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Pour en bénéficier, le formé doit soumettre une demande préalable de prise en charge avant le début de l’action de formation.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}