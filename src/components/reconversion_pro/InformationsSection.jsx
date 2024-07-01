import TeachingMethod from "./informations-section-childs/first-child/TeachingMethod";
import InfoPratique from "./informations-section-childs/second-child/InfoPratique";

export default function InformationsSection(){
    return(
        <>
        <div className="informations-section-parent-container w-9/12 my-12">
            <div>
                <TeachingMethod />
                {/* <InfoPratique /> */}
            </div>
        </div>
        </>
    )
}