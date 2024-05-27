import AgefiphLogo from "../../assets/logos/AgefiphLogo";
import SimplonLogo from "../../assets/logos/SimplonLogo";
import QualiopiLogo from "../../assets/logos/QualiopiLogo";
import TransitionsLogo from "../../assets/logos/TransitionsLogo";
import CPFLogo from "../../assets/logos/CPFLogo";

export default function FooterPartenaires(){
    return (
        <>
        <div className="footer-partenaires-container">
            <div>
                <TransitionsLogo />
            </div>
            <div>
                <SimplonLogo />
            </div>
            <div>
                <CPFLogo />
            </div>
            <div>
                <AgefiphLogo />
            </div>
            <div>
                <QualiopiLogo />
            </div>
        </div>
        </>
    );
}