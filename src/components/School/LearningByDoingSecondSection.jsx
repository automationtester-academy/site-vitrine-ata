import SchoolImageChild from "./SecondImage";
import SchoolTextChild from "./AccompagneText";

export default function LearningByDoingSecondSection() {
    return (
        <>
            <div className="financement-first-section flex justify-evenly pt-10 pb-10">
                <div className="img-child-container w-2/5 flex justify-end">
                    <SchoolImageChild />
                </div>
                <div className="text-child-container w-3/5 flex justify-center items-center">
                    <SchoolTextChild />
                </div>
            </div>
        </>
    );
}

