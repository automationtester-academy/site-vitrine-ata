import ClockImg from "../../assets/images/formation_court/Vector.png";
import Metiers from "../../assets/images/formation_court/studying.png";
import Lieu from "../../assets/images/formation_court/location.png"



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
                        <li className="listTitle ">Vous êtes maitre de votre temps, apprenez à votre rythme</li>
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
                        <li className="listTitle ">Ingénieur qualité</li>
                        <li className="listTitle ">Software engineer in test</li>
                        <li className="listTitle ">Quality engineer</li>
                        <li className="listTitle ">Test lead</li>
                        <li className="listTitle ">Quality manager</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={Lieu} alt="" />
                        <span>LIEU</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle ">Formation en ligne</li>
                    </ul>
                </div>
            </div>
        </>
    )
}