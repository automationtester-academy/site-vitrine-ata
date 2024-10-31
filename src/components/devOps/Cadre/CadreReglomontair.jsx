
import "../../../assets/css/style.css";
import CadreReglementaireLeftSection from "../informations-section-childs/third-child/CadreReglementaireLeftSection";
import CadreReglementaireRightSection from "../informations-section-childs/third-child/CadreReglementaireRightSection";

export default function CadreReglementaire() {
    return (
        <>
            <div className=" cadre-reglementaire-container w-[75%] max-sm:w-[90%]">
                <div className="background-gradiant-div">
                    <div className="background-color-div">
                        <div className="w-full py-8 flex justify-center">
                            <h4 className="text-white font-bold text-3xl text-center container-title">Cadre <span className="text-[#39DDF5]">règlementaire</span></h4>
                        </div>
                        <div className="flex p-5 cadre-reglementaire-main-content mb-5">
                            <div className="cadre-reglementaire-left-section w-3/5">
                                <CadreReglementaireLeftSection />
                            </div>
                            <div className="cadre-reglementaire-right-section bg-[#0C1827] w-2/5 p-4" style={{ height: '560px' }}>
                                <div className="overflow-auto" style={{ height: '520px' }}>
                                    <CadreReglementaireRightSection />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}