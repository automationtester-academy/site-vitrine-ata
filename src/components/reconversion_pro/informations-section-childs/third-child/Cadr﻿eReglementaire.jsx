import CadreReglementaireLeftSection from "./Cadr﻿eReglementaireLeftSection";
import CadreReglementaireRightSection from "./Cadr﻿eReglementaireRightSection";

export default function CadreReglementaire(){
    return (
        <>
            <div className="w-full cadre-reglementaire-container">
                <div className="background-gradiant-div">
                    <div className="background-color-div">
                        <div className="w-full py-8 flex justify-center">
                            <h4 className="text-white font-bold text-3xl">Cadre <span className="text-[#39DDF5]">règlementaire</span></h4>
                        </div>
                        <div className="bg-red-700 flex p-5">
                            <div className="cadre-reglementaire-left-section w-2/4">
                                <CadreReglementaireLeftSection />
                            </div>
                            <div className="cadre-reglementaire-right-section w-2/4">
                                <CadreReglementaireRightSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}