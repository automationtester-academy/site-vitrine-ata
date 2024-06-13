import SchoolImageChild from "./SchoolImageChild";
import SchoolTextChild from "./SchoolTextChild"
export default function FinancerSaFormationComponent() {
    return (
        <>
            <div className="financement-first-section edited flex justify-evenly pt-10 pb-10">
                <div className="text-child-container w-3/5 flex justify-center items-center">
                    <SchoolTextChild />
                </div>
                <div className="img-child-container .edited w-2/5 flex justify-start">
                    <SchoolImageChild />
                </div>
            </div>
        </>
    );
}