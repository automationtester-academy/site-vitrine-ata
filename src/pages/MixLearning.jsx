import HeroSection from "../components/MixLearning-Formation/HeroSection";
import MixLearningIntroduction from "../components/MixLearning-Formation/MixLearningIntroduction";
import ComponentCadre from "../components/MixLearning-Formation/ComponentCadre"
import DevenirTesteur from "../components/MixLearning-Formation/DevenirTesteur";
import InfoPratiqueComp from "../components/MixLearning-Formation/InfoPratiqueComp";
import CadreReglementaire from "../components/MixLearning-Formation/CadreReglementaire";
import InfoPratice from "../components/MixLearning-Formation/InfoPratice"
import { useQuery } from "@tanstack/react-query";
import { fetchMixLearningFormation } from "../components/MixLearning-Formation/API";
import toast from "react-hot-toast";
export default function MixLearning(){

    // const {data, error, isLoading} = useQuery({
    //     queryKey: ['Mix-Learning Formation', 3],
    //     queryFn: () => fetchMixLearningFormation(3),
    //     // refetchOnWindowFocus: false,
    //     // refetchOnMount: false,
    //     // cacheTime: 1000 * 60
    // })

    // if(error){
    //     toast.error(error);
    // }

    // if (isLoading) {
    //     return (
    //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
    //             <div className="bg-white flex justify-center p-4 rounded-lg shadow-lg w-[10%]">
    //                 <svg
    //                     className="animate-spin h-10 w-10 text-blue-300"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                 >
    //                     <circle
    //                         className="opacity-25"
    //                         cx="12"
    //                         cy="12"
    //                         r="10"
    //                         stroke="currentColor"
    //                         strokeWidth="4"
    //                     ></circle>
    //                     <path
    //                         className="opacity-75"
    //                         fill="currentColor"
    //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //                     ></path>
    //                 </svg>
    //             </div>
    //         </div>
    //     );
    // }

        return (
        <>
        <HeroSection/>
        <MixLearningIntroduction/>
        <ComponentCadre/>
        <DevenirTesteur/>
        <InfoPratiqueComp />
        <InfoPratice />
        <CadreReglementaire/>
        </>
    )
}