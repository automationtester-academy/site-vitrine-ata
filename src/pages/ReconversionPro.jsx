import HeroSection from "../components/reconversion_pro/HeroSection"
import InformationsSection from "../components/reconversion_pro/InformationsSection"
import NotreObjectifSection from "../components/reconversion_pro/NotreObjectifSection"
import CadreReglementaire from "../components/reconversion_pro/informations-section-childs/third-child/Cadr﻿eReglementaire"
export default function ReconversionPro() {
    return (
        <>
            <HeroSection />
            <div className="flex flex-col items-center">
                <NotreObjectifSection />
                <InformationsSection />
            </div>
        </>
    )
}