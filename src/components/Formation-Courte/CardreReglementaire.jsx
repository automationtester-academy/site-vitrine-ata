import LeftSideContent from "./reglomentContent/leftSideContent";
import RightSideContent from "./reglomentContent/rightSideContent";
import "../../assets/css/style.css";
export default function InfoPratice()
{
    return (
        <>
            <div className="conatainer text-white infopratice ">
                <div className="conatainer_holder  m-auto justify-center p-3 border border-sky-500 mt-8 mb-8 rounded-2xl">
                    <div className="titleInfoPratice text-center">
                        <h2>Cadre <span>règlementaire</span></h2>
                    </div>
                    <div className="containerInfoPratice flex p-6 rounded items-center">
                        <div className="left_container">
                            <LeftSideContent />
                        </div>
                        <div className="right_container pt-6 pl-6 rounded w-[40%] m-auto" >
                            <RightSideContent />
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
