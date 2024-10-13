import DescriptionFC from "../components/FormationCourte/DescriptionFC";
import HeroSectionFc from "../components/FormationCourte/HeroSectionFc";
import BorderSection from "../components/FormationCourte/BorderSection";
import FormationsSection from "../components/FormationCourte/FormationsSection";
import Infopratice from "../components/Formation-Courte/InfoPratice.jsx";
import CardreReglementaire from "../components/Formation-Courte/CardreReglementaire.jsx";
import DevisEnLigne from "../components/Formation-Courte/DivisOnline.jsx";
import DivisForm from "../components/Formation-Courte/DivisContact/divisForm.jsx";
import FooterPartenaires from "../components/footer/FooterPartenaires.jsx";


export default function FormationCourte(){
  return(
      <>
      
      <HeroSectionFc/>
      <DescriptionFC/>
      {/* <BorderSection/> */}
      <FormationsSection/>
      <Infopratice />
      <CardreReglementaire />
      <DevisEnLigne />
      <DivisForm />
      <FooterPartenaires />
      </>
  )

}