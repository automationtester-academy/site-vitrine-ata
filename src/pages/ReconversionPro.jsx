import HeroSection from "../components/reconversion_pro/HeroSection"
import InformationsSection from "../components/reconversion_pro/InformationsSection"
import NotreObjectifSection from "../components/reconversion_pro/NotreObjectifSection"
import InfoPratice from "../components/reconversion_pro/informations-section-childs/second-child/InfoPratice";
import CadreReglementaire from "../components/reconversion_pro/informations-section-childs/third-child/CadreReglementaire"
import { fetchMixLearningFormation } from "../components/MixLearning-Formation/API";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
export default function ReconversionPro() {

    // const {data, error, isLoading} = useQuery({
    //     queryKey: ['ReconversionPro Formation', 2],
    //     queryFn: () => fetchMixLearningFormation(2),
    //     // refetchOnWindowFocus: false,
    //     // refetchOnMount: false,
    //     // cacheTime: 1000 * 60
    // })

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