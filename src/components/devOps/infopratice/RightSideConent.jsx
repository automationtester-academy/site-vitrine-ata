import ClockImg from "../../../assets/images/formation_court/Vector.png";
import Metiers from "../../../assets/images/formation_court/studying.png";
import Lieu from "../../../assets/images/formation_court/location.png"

export default function RightSideContent()
{
    return (
        <>
            <div className="rightcontent">
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={ClockImg} alt="" />
                        <span>Durée</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle ">Toute la formation : 5 jours
                        </li>
                        {/* <p>(399h)</p> */}
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={Metiers} alt="" />
                        <span>DÉBOUCHÉS</span>
                    </div>
                    <div className="list-title text-lg">
                        Métiers:
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle ">Ingénieur DevOps</li>
                        <li className="listTitle ">Consultant DevOps</li>
                        <li className="listTitle ">Responsable de l’Automatisation
                        </li>
                        
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={Lieu} alt="" />
                        <span>LIEU</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle ">La formation est en téléprésentiel</li>
                    </ul>
                </div>
            </div>
        </>
    )
}