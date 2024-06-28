import DivisSection2Text  from "../Formation-Courte/DivisSection2Text";
import "../../assets/css/style.css";

export default function DivisOnline()
{
    return (
        <>
           <div className="DivisOnlineTop relative ">
                <div className="DivisBackgroundImage"></div>
                <div className="divisTopContent ">
                    <h2 className="text-white text-center">DEVIS<span> EN LIGNE</span></h2>
                </div>
           </div>
           <div className="textcontainer w-[70%] mx-auto my-8">
                <DivisSection2Text />
           </div>
        </>
    )

}