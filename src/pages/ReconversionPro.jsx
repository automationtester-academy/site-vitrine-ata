import HeroSection from "../components/reconversion_pro/HeroSection"
import InformationsSection from "../components/reconversion_pro/InformationsSection"
import NotreObjectifSection from "../components/reconversion_pro/NotreObjectifSection"
import InfoPratice from "../components/reconversion_pro/InfoPratice";


export default function ReconversionPro() {
    return (
        <>
            <HeroSection />
            <div className="flex flex-col items-center">
                <NotreObjectifSection />
                <InformationsSection />
                <InfoPratice />
            </div>
        </>
    )
}