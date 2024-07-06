import { Link } from "react-router-dom"
import jean from "../../../assets/images/Profils/JEAN-BAPTISTE.svg"
export default function CommentOfJeanBaptiste(){
    return(
        <>
        <div className="Comment_content block w-[36%] px-6 pt-6 pb-2 bg-white border border-gray-200 rounded-3xl shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-sm:w-[100%] flex-col">        
            <p class="Commeny_content_text font-medium text-neutral-500 dark:text-gray-400 !h-[65%] !max-h-40 overflow-y-auto">Après avoir suivi ma formation chez ATA ma conclusion, se résume à dire à ceux et celle qui souhaitent acquérir de nouvelles compétences dans le domaine de l’Automatisation des tests à se lancer des nouvelles techno à la pointe et des formateurs veillant au bon déroulement de la formation. Formation qualitatif.Faible coût de la formation</p>
            <div className="Comments_profil_image flex flex-row mt-[4%] sm:max-lg:pb-[2.5%]">
                <img src={jean} alt="Jean profil picture"/>
                <Link to='https://www.linkedin.com/in/sylvain-jean-baptiste?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADi1ZlMBIMXrrqb42_G33mFU6OXMELSW9B8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B9YInFZxQSXWJHfEbv7VOgA%3D%3D' target="_blank" className="text-black text-xl font-bold  flex self-center px-6 ">Sylvain  <span className="text-cyan-400 ms-1"> JEAN-BAPTISTE</span></Link>
            </div> 
        </div>
        
        </>
    )
}