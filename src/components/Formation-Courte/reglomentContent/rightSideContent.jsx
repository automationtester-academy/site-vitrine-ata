import statistics from "../../../assets/images/formation_court/statistics.png";

export default function LeftSideContent()
{
    return (
        <>
             <div className="rightcontent">
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={statistics} alt="" />
                        <span>TAUX D'OBTENTION 2022/2023</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle">100% taux d'achèvement</li>
                    </ul>
                    <div>
                        <div className="textbottomContent">
                            <p>TAUX DE SATISFACTION GLOBAL ANNUEL <span><ul className="list-disc"><li>95%</li></ul></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}