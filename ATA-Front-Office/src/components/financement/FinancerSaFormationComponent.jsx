import FinancerSaFormationImageChild from "./FinancerSaFormationImageChild";
import FinancerSaFormationTextChild from "./FinancerSaFormationTextChild";
export default function FinancerSaFormationComponent() {
    return (
        <>
            <div className="financement-first-section flex pt-6 pb-7">
                <div className="w-3/5 flex justify-center items-center">
                    <FinancerSaFormationTextChild />
                </div>
                <div className="w-2/5">
                    <FinancerSaFormationImageChild />
                </div>
            </div>
        </>
    );
}