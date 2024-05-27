import FinancerSaFormationComponent from "../components/financement/FinancerSaFormationComponent";
import FooterPartenaires from "../components/footer/FooterPartenaires"
import ProfilsBordereauCompoment from "../components/financement/ProfilsBordereauCompoment";
import DemandeDeEmploiComponent from "../components/financement/DemandeDeEmploiComponent";
export default function FinancementPage(){
    return (
        <>
        <FinancerSaFormationComponent />
        <ProfilsBordereauCompoment />
        <DemandeDeEmploiComponent />
        <FooterPartenaires />
        </>
    );
}