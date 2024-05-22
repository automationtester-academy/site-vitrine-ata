import AgefiphLogo from "../logos/AgefiphLogo";
import SimplonLogo from "../logos/SimplonLogo";
import QualiopiLogo from "../logos/QualiopiLogo";
import TransitionsLogo from "../logos/TransitionsLogo";
import CPFLogo from "../logos/CPFLogo";

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