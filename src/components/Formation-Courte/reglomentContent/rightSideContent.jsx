import statistics from "../../../assets/images/formation_court/statistics.png";

export default function LeftSideContent()
{

    const currentYear = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(currentYear.getFullYear() + 1);

    return (
        <>
             <div className="rightcontent">
                <div className="rightcontent_title">
                    <div className="IconTitle">
                        <img src={statistics} alt="" />
                        <span>TAUX D'OBTENTION {currentYear.getFullYear()}/{nextYear.getFullYear()}</span>
                    </div>
                    <ul className="list-disc">
                        <li className="listTitle">100% taux d'achèvement</li>
                    </ul>
                    <div>
                        <div className="textbottomContent ml-[1rem]">
                            <p>TAUX DE SATISFACTION GLOBAL ANNUEL <br/> <span>95%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}