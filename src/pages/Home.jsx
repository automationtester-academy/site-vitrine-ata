import HerosectionCompnent from '../components/Home/HerosectionCompnent'
import LearningByDoingComponent from '../components/Home/LearningByDoingComponent'
import FooterPartenaires from "../components/footer/FooterPartenaires";
import FooterPartenaireSlider from "../components/footer/FooterPartenaireSlider"
import Recruiters from '../components/Home/RecruitersComponent'
import OnlineTraning from '../components/Home/OnlineTraining'
import CommentComponent from '../components/Home/CommentComponent'
import ContactForm from "../components/Contact_Form/ContactForm.jsx";
export default function Home(){
    return(
        <>
            <HerosectionCompnent/>
            <LearningByDoingComponent/>
            <Recruiters/>
            <OnlineTraning/>
            <CommentComponent/>
            <FooterPartenaires />
            {/* <FooterPartenaireSlider/> */}
            <ContactForm />
        </>
    ) 
}