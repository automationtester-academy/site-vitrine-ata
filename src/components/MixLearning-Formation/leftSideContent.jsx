import certification from "../../assets/images/formation_court/starts.png";
import preqeouis from "../../assets/images/formation_court/paper.png";
import financement from "../../assets/images/formation_court/Group.png";
import { fetchMixLearningFormation } from "./API";
import { useQuery } from "@tanstack/react-query";

export default function LeftSideContent() {

    const {data} = useQuery({
        queryKey: ['Mix-Learning Formation', 3],
        queryFn: () => fetchMixLearningFormation(3),
        refetchOnWindowFocus: false,
        // refetchOnMount: false,
        cacheTime: 1000 * 60
    });

    return (
        <>
            <div className="rightcontent">
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={certification} alt="" />
                        <span>CERTIFICATION</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle">Une attestation vous sera délivré en fin de formation</li>
                    </ul>
                </div>
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={preqeouis} alt="" />
                        <span>PRÉREQUIS</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle">Des connaissances de base en test logiciel</li>
                        <li className="listTitle">beaucoup beaucoup beaucoup (ce n’est pas une erreur de copier-coller) de motivation</li>
                    </ul>
                </div>

                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={financement} alt="" />
                        <span>FINANCEMENT</span>
                    </div>
                    <div className="list-title">
                        Prix: <span>{data ? data.formation.price : ""} euros.</span>
                        <p>Toutes nos formations sont éligibles aux dispositifs de financement.</p>
                        <br />
                        <p>Vous pouvez ainsi bénéficier d'une formation prise en charge jusqu'à 100% selon votre situation.</p>
                    </div>
                </div>
            </div>
        </>
    )
}