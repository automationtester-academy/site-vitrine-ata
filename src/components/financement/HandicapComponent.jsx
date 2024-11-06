import HandicapFirstDropDown from "./HandicapFirstDropDown";
import HandicapSecondDropDown from "./HandicapSecondDropDown";
import { Link } from "react-router-dom";
export default function HandicapComponent() {
    return (
        <>
            <div className="flex flex-col items-center mb-7">
                <div className="w-[50%]  m-auto max-sm:w-[90%] mb-4">
                    <h2 className="text-4xl financement-situation-title text-white text-center font-bold p-7">
                        Je suis en situation de handicap
                    </h2>
                    <p className="text-center text-white text-[0.8rem]">Nos Formation est ouverte à tous, y compris aux personnes en situation de handicap. Nous encourageons vivement les personnes concernées à contacter notre référent handicap: BENNOUF Asma 
                        <a href="mailto:asmaa@automationtesteracademy.com" className="text-[0.8rem]">asmaa@automationtesteracademy.com </a>
                        Pour discuter des mesures d’accessibilité et de soutien disponibles </p>
                </div>
                <div className="financement-button-container p-0.5 hover:bg-none hover:bg-cyan-600  rounded-md">
                    <Link to={'/contact'} className="financement-button-style rounded-md font-bold bg-[#071323] text-white text-[0.8rem] p-2 hover:bg-cyan-600 border border-solid border-2  border-[#3adef5]">
                        Je m'inscris pour être accompagné
                    </Link>
                </div>
                <div className="w-3/4 faqLookLike">
                    <HandicapFirstDropDown />
                    <HandicapSecondDropDown />
                </div>
            </div>
        </>
    );
}