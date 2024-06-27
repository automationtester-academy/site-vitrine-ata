import Calendry from "../../../assets/images/formation_court/calndry.png";
import preqeouis from "../../../assets/images/formation_court/writing.png";

export default function LeftSideContent()
{
    return (
        <>
             <div className="rightcontent">
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={preqeouis} alt="" />
                        <span>MODALITÉS D’ÉVALUATION</span>
                    </div>
                    <ul>
                        <li className="listTitle">Cas pratique / workshop</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={Calendry} alt="" />
                        <span>DÉLAI D’ACCÈS À LA FORMATION</span>
                    </div>
                    <ul>
                        <li className="listTitleRegle ">Financement via entreprise : 2 semaines</li>
                        <li className="listTitleRegle ">Paiement personnel : 2 semaines avant la session visée</li>
                        <li className="listTitleRegle ">OPCO : 2 semaines avant la session visée</li>
                        <li className="listTitleRegle ">Financement via Pôle Emploi : Durée flexible de 15 jours à 1 mois</li>
                    </ul>
                </div>
            </div>
        </>
    )
}