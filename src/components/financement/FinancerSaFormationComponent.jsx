import FinancerSaFormationImageChild from "./FinancerSaFormationImageChild";
import FinancerSaFormationTextChild from "./FinancerSaFormationTextChild";
export default function FinancerSaFormationComponent() {
    return (
        <>
            <div className="financement-first-section flex justify-evenly pt-10 pb-10">
                <div className="text-child-container w-3/5 flex justify-center items-center">
                    <FinancerSaFormationTextChild />
                </div>
                <div className="img-child-container w-2/5 flex justify-start items-center">
                    <FinancerSaFormationImageChild />
                </div>
            </div>
        </>
    );
}