import certification from "../../assets/images/formation_court/starts.png";
import preqeouis from "../../assets/images/formation_court/paper.png";
import financement from "../../assets/images/formation_court/Group.png";

export default function LeftSideContent()
{
    return (
        <>
             <div className="rightcontent">
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={certification} alt="" />
                        <span>CERTIFICATION</span>
                    </div>
                    <ul>
                        <li className="listTitle">Une attestation vous sera délivré en fin de formation</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={preqeouis} alt="" />
                        <span>PRÉREQUIS</span>
                    </div>
                    <ul>
                        <li className="listTitle">Des connaissances de base en test logiciel</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={preqeouis} alt="" />
                        <span>PRÉREQUIS</span>
                    </div>
                    <ul>
                        <li className="listTitle">Des connaissances de base en test logiciel</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={financement} alt="" />
                        <span>FINANCEMENT</span>
                    </div>
                    <div className="list-title">
                        Prix: <span>1790 euros</span>
                        <p>Toutes nos formations sont éligibles aux dispositifs de financement.</p>
                        <br/>
                        <p>Vous pouvez ainsi bénéficier d'une formation prise en charge jusqu'à 100% selon votre situation.</p>
                    </div>
                </div>
            </div>
        </>
    )
}