import HeroSection from "../components/MixLearning-Formation/HeroSection";
import MixLearningIntroduction from "../components/MixLearning-Formation/MixLearningIntroduction";
import ComponentCadre from "../components/MixLearning-Formation/ComponentCadre"
import DevenirTesteur from "../components/MixLearning-Formation/DevenirTesteur";
import InfoPratiqueComp from "../components/MixLearning-Formation/InfoPratiqueComp";
import CadreReglementaire from "../components/MixLearning-Formation/CadreReglementaire";
import InfoPratice from "../components/MixLearning-Formation/InfoPratice"
export default function MixLearning(){
    return (
        <>
        <HeroSection/>
        <MixLearningIntroduction/>
        <ComponentCadre/>
        <DevenirTesteur/>
        <InfoPratiqueComp/>      
        <InfoPratice />
        <CadreReglementaire/>
        </>
    )
}