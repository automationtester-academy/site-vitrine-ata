import FinancerSaFormationComponent from "../components/financement/FinancerSaFormationComponent";
import FooterPartenaires from "../components/footer/FooterPartenaires"
import ProfilsBordereauCompoment from "../components/financement/ProfilsBordereauCompoment";
export default function FinancementPage(){
    return (
        <>
        <FinancerSaFormationComponent />
        <ProfilsBordereauCompoment />
        <FooterPartenaires />
        </>
    );
}