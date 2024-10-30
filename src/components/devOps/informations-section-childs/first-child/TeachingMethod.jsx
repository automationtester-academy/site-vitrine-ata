import LeftSectionFirstPart from "./LeftSectionFirstPart";
import LeftSectionSecondPart from "./LeftSectionSecondPart";
import RightSection from "./RightSection";

export default function TeachingMethod() {
    return (
        <>
            <div className="w-full flex teaching-method-container">
                <div className="teaching-method-left-section flex flex-col justify-between items-center w-3/6 py-12">
                    <div className="background-gradiant-div-1">
                        <LeftSectionFirstPart />
                    </div>
                    <div className="background-gradiant-div-2">
                        <LeftSectionSecondPart />
                    </div>
                </div>
                <div className="teaching-method-right-section w-3/6 py-12 flex justify-center">
                    <div className="background-gradiant-div">
                        <RightSection />
                    </div>
                </div>
            </div>
        </>
    )
}