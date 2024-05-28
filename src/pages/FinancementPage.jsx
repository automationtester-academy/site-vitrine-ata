import FinancerSaFormationComponent from "../components/financement/FinancerSaFormationComponent";
import FooterPartenaires from "../components/footer/FooterPartenaires"
import ProfilsBordereauCompoment from "../components/financement/ProfilsBordereauCompoment";
import DemandeDeEmploiComponent from "../components/financement/DemandeDeEmploiComponent";
import SalarieComponent from "../components/financement/SalarieComponent";
import EtudiantComponent from "../components/financement/EtudiantComponent";
import IndependantComponent from "../components/financement/IndependantComponent";
import HandicapComponent from "../components/financement/HandicapComponent";
export default function FinancementPage(){
    return (
        <>
        <FinancerSaFormationComponent />
        <ProfilsBordereauCompoment />
        <DemandeDeEmploiComponent />
        <SalarieComponent />
        <EtudiantComponent />
        <IndependantComponent />
        <HandicapComponent />
        <FooterPartenaires />
        </>
    );
}