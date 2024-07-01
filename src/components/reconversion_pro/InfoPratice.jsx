import LeftSideContent from "./leftSideContent";
import RightSideContent from "./RightSideContent";
import "../../assets/css/style.css";
import "../../assets/css/App.css";


export default function InfoPratice()
{
    return (
        <>
            <div className="conatainer text-white infopratice w-[74%] max-sm:w-[90%] max-sm:mt-6">
                <div className="conatainer_holder  m-auto justify-center p-3 border-[0.1999rem] border-sky-500 mt-[-3rem] ml-[1rem] max-sm:ml[0] rounded-2xl">
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