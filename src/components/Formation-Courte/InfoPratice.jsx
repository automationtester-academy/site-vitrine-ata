import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import "../../assets/css/style.css";
export default function InfoPratice()
{
    return (
        <>
            <div className="conatainer text-white infopratice ">
                <div className="conatainer_holder  m-auto justify-center p-3 border border-sky-500 mt-8 rounded-2xl">
                    <div className="titleInfoPratice text-center">
                        <h2>Info <span>pratiques</span></h2>
                    </div>
                    <div className="containerInfoPratice flex p-6 rounded items-center">
                        <div className="left_container">
                            <LeftSideContent />
                        </div>
                        <div className="right_container pt-6 pl-6 rounded w-[50%] m-auto" >
                            <RightSideContent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}