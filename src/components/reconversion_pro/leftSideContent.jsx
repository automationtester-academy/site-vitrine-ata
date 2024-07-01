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
                    <ul className="list-disc">
                        <li className="listTitle leading-normal mb-4">Appliquer la méthode DevOps pour optimiser le cycle de vie des applications</li>
                        <li  className="listTitle leading-normal mb-4">Code(s) NSF :326 : Informatique, traitement de l'information, réseaux de transmission</li>
                        <li  className="listTitle leading-normal mb-4">Formacode(s) :31024 : Méthode agile</li>
                        <li  className="listTitle leading-normal mb-4">Date d’échéance de l’enregistrement : 18-11-2024</li>
                        <li  className="listTitle leading-normal mb-4">Certificateur : Simplon</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={preqeouis} alt="" />
                        <span>PRÉREQUIS</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle">1 an minimum en tant que technicien systèmes et réseaux ou assimilé, ou développeur.</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={financement} alt="" />
                        <span>FINANCEMENT</span>
                    </div>
                    <div className="list-title">
                        Prix: <span>8400 euros TTC</span>
                        <p>Toutes nos formations sont éligibles aux dispositifs de financement.</p>
                        <br/>
                        <p>Vous pouvez ainsi bénéficier d'une formation prise en charge jusqu'à 100% selon votre situation.</p>
                    </div>
                </div>
            </div>
        </>
    )
}