import FinancerSaFormationComponent from "../components/financement/FinancerSaFormationComponent";
import FooterPartenaires from "../components/footer/FooterPartenaires"
import ProfilsBordereauCompoment from "../components/financement/ProfilsBordereauCompoment";
import DemandeDeEmploiComponent from "../components/financement/DemandeDeEmploiComponent";
import SalarieComponent from "../components/financement/SalarieComponent";
import EtudiantComponent from "../components/financement/EtudiantComponent";
import IndependantComponent from "../components/financement/IndependantComponent";
import HandicapComponent from "../components/financement/HandicapComponent";
import { useRef } from "react";
export default function FinancementPage() {

    const demandeurRef = useRef(null);
    const salarieRef = useRef(null);
    const etudiantRef = useRef(null);
    const independantRef = useRef(null);
    const handicapRef = useRef(null);

    const handleScrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <>

            <FinancerSaFormationComponent />
            <ProfilsBordereauCompoment
                onDemandeurClick={() => handleScrollTo(demandeurRef)}
                onSalarieClick={() => handleScrollTo(salarieRef)}
                onEtudiantClick={() => handleScrollTo(etudiantRef)}
                onIndependantClick={() => handleScrollTo(independantRef)}
                onHandicapClick={() => handleScrollTo(handicapRef)}
            />
            <section className="financement-situation-sections" ref={demandeurRef}>
                <DemandeDeEmploiComponent />
            </section>
            <section className="financement-situation-sections" ref={salarieRef}>
                <SalarieComponent />
            </section>
            <section className="financement-situation-sections" ref={etudiantRef}>
                <EtudiantComponent />
            </section>
            <section className="financement-situation-sections" ref={independantRef}>
                <IndependantComponent />
            </section>
            <section className="financement-situation-sections" ref={handicapRef}>
                <HandicapComponent />
            </section>
            
            <FooterPartenaires />
        </>
    );
}