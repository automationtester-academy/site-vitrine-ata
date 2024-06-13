import LearningByDoing from "../components/School/LearningByDoing";
import LearningByDoingSecondSection from '../components/School/LearningByDoingSecondSection';
import LearningByDoingThirdSection from '../components/School/LearningByDoingThirdSection';
import PedagoySection from '../components/School/pedagoysection';
import SchoolCollaboration from '../components/School/SchoolCollaboration'
import SeFocaliserSurLemployabilite from '../components/School/SeFocaliserSurLemployabilite'
import ResterSerieux from '../components/School/ResterSerieux';
import TestemonialSchool from '../components/School/TestemonialSchool'
import FooterPartenaires from "../components/footer/FooterPartenaires"


export default function Ecole(){
    return(
        <>
        <LearningByDoing/>
        <LearningByDoingSecondSection />
        <LearningByDoingThirdSection />
        <PedagoySection />
        <SchoolCollaboration />
        <SeFocaliserSurLemployabilite />
        <ResterSerieux />
        <TestemonialSchool />
        < FooterPartenaires/>
        </>
    )
}