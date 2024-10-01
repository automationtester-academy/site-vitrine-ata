import HandicapFirstDropDown from "./HandicapFirstDropDown";
import HandicapSecondDropDown from "./HandicapSecondDropDown";
import { Link } from "react-router-dom";
export default function HandicapComponent() {
    return (
        <>
            <div className="flex flex-col items-center mb-7">
                <div>
                    <h2 className="text-4xl financement-situation-title text-white text-center font-bold p-7">
                        Je suis en situation de handicap
                    </h2>
                </div>
                <div className="financement-button-container p-0.5 hover:bg-none rounded-md">
                    <Link to={'/contact'} className="financement-button-style rounded-md font-bold bg-[#071323] text-white text-xl p-2 hover:bg-cyan-600 border border-solid border-2 border-[#3adef5]">
                        Je m'inscris pour être accompagné
                    </Link>
                </div>
                <div className="w-3/4">
                    <HandicapFirstDropDown />
                    <HandicapSecondDropDown />
                </div>
            </div>
        </>
    );
}