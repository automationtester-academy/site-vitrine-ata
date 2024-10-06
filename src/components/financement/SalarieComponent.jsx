import SalarieFirstDropDown from "./SalarieFirstDropDown";
import SalarieSecondDropDown from "./SalarieSecondDropDown";
import SalarieThirdDropDown from "./SalarieThirdDropDown";
import SalarieFourthDropDown from "./SalarieFourthDropDown";
import SalarieFifthDropDown from "./SalarieFifthDropDown";
import { Link } from "react-router-dom";
export default function SalarieComponent() {
    return (
        <>
            <div className="flex flex-col items-center mb-7">
                <div>
                    <h2 className="text-4xl financement-situation-title text-white text-center font-bold p-7">
                        Je suis salarié(e)
                    </h2>
                </div>
                <div className="financement-button-container p-0.5 hover:bg-none hover:bg-cyan-600  rounded-md">
                    <Link to={'/contact'} className="financement-button-style rounded-md font-bold bg-[#071323] text-white text-[0.8rem] p-2 hover:bg-cyan-600 border border-solid border-2  border-[#3adef5]">
                        Je m'inscris pour être accompagné
                    </Link>
                </div>
                <div className="w-3/4 faqLookLike">
                    <SalarieFirstDropDown />
                    <SalarieSecondDropDown />
                    <SalarieThirdDropDown />
                    <SalarieFourthDropDown />
                    <SalarieFifthDropDown />
                </div>
            </div>
        </>
    );
}