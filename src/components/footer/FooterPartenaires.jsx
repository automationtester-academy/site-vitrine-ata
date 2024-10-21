import AgefiphLogo from "../../assets/logos/AgefiphLogo";
import SimplonLogo from "../../assets/logos/SimplonLogo";
import QualiopiLogo from "../../assets/logos/QualiopiLogo";
import TransitionsLogo from "../../assets/logos/TransitionsLogo";
import CPFLogo from "../../assets/logos/CPFLogo";
import DataDocke from "../../assets/logos/datadocke.png";
import Qualiopi from "../../assets/logos/qualiopi.png"
import "../../assets/css/style.css"

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
            <div style={{ display: "contents"}} className="Qualiopi">
                {/* <Qualiopi /> */}
                <img src={Qualiopi} style={{width:"10%"}} alt="DataDocke Logo" />
            </div>
            <div>
            <img src={DataDocke} style={{width:"70%", margin:"auto"}} alt="DataDocke Logo" />
            </div>
        </div>
        </>
    );
}