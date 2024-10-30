import LeftSideContent from "./LiftSideContent";
import RightSideContent from "./RightSideConent";
import "../../../assets/css/style.css";
import "../../../assets/css/App.css";


export default function InfoPratice()
{
    return (
        <>
            <div className="conatainer text-white mb-12 infopratices w-[97%] max-sm:w-[100%] max-sm:mt-6">
                <div className="conatainer_holder  m-auto justify-center p-3 border-[0.1999rem] border-sky-500 mt-[-0.2rem] rounded-2xl">
                    <div className="titleInfoPratice text-center">  
                        <h2>Info <span>pratiques</span></h2>
                    </div>
                    <div className="containerInfoPratice flex p-6 rounded items-center">
                        <div className="left_container">
                            <LeftSideContent />
                        </div>
                        <div className="right_container pt-6 pl-6 rounded m-auto" >
                            <RightSideContent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}