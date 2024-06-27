import HeroSection from "../components/reconversion_pro/HeroSection"
import InformationsSection from "../components/reconversion_pro/InformationsSection"
import NotreObjectifSection from "../components/reconversion_pro/NotreObjectifSection"
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