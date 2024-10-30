import HeroSection from "../components/devOps/HeroSection"
import InformationsSection from "../components/devOps/InformationsSection"
import NotreObjectifSection from "../components/devOps/NotreObjectifSection"
// import CadreReglementaire from "../components/devOps/Cadre/CadreReglomontair"
import CadreReglementaire from "../components/devOps/Cadre/CadreReglomontair"



export default function  devOps()
{
    return (
        <>
            <HeroSection />
            <div className="flex flex-col items-center">
                <NotreObjectifSection />
                <InformationsSection />
                < CadreReglementaire/>
            </div>
        </>
    )
}