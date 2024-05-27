import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function DemandeDeEmploiFirstDropDown() {

    const [isActive, setActive] = useState(false);
    let textColor;

    const activeDropDown = () => {
        setActive(!isActive);
    }
    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center mt-6 p-4">
                <button
                    className="drop-down-style flex text-white font-bold py-5 px-4 w-11/12"
                    onClick={activeDropDown}
                >
                    {isActive ? <img src={CartIcon2} alt="" /> : <img src={CartIcon} alt="" />}
                    {isActive ? textColor = "text-[#39DDF5]" : textColor = "text-white"}
                    <span className="ml-4' text-xl">Le Compte Personnel de Formation (CPF)</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 bg-blue-500 p-4">
                        <h2 className="text-xl text-white font-bold">Hidden Section</h2>
                        <p>This is the content of the hidden section.</p>
                    </div>
                )}
            </div>
        </>
    );
}