import { Link } from 'react-router-dom'
import Fredy from '../../../assets/images/Profils/Fredy.svg'
export default function CommentOfMougonFredy(){
    return(
        <>
        <div className="Comment_content block w-[36%] px-6 pt-6 pb-2 bg-white border border-gray-200 rounded-3xl shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-sm:w-[100%]">        
            <p className="Commeny_content_text font-medium text-neutral-500 dark:text-gray-400 h-[65%] max-h-40 overflow-y-auto">Souhaitant monter en compétences en automatisation des tests, j’ai donc suivi le parcours fullstack d’Automation Tester Academy sur la plateforme dédiée en blended learning. Cette plateforme qui propose un parcours cohérent et logique de six modules m’a réellement permis de sensiblement monter en compétences sur la maitrise des outils (Postman, Cypress), mais aussi l’environnement collaboratif (Git-Git Hub) et l’univers web (HTML-CSS). La plateforme est très ergonomique et la méthode pédagogique efficace grâce à de nombreuses vidéos, l’apprentissage par l’exemple et un coaching très compétent, réactif et disponible sur Slack. Le mode blended learning s’adapte à tous les rythmes d’apprentissage permettant de ralentir ou d’accélérer selon la complexité des modules.
                J’ai pu récemment mesurer l’intérêt que suscite ce parcours ATA auprès des recruteurs lors de mes entretiens d’embauche.
                Mes remerciements à Meryem pour son soutien indéfectible concernant l’organisation et le suivi de l’apprentissage. Un grand merci à Mohammed Ali pour son coaching réactif et son excellente pédagogie qui m’ont permis de prendre plaisir à apprendre tout au long de ce parcours.
                Si vous voulez devenir automaticien, je vous recommande vivement ce parcours ! 
            </p>
            <div className="Comments_profil_image flex flex-row mt-[4%]">
                <img src={Fredy} alt="Fredy profil picture"/>
                <Link to='https://www.linkedin.com/in/frédy-mougon?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD8epoUBHLzu9eH642V4yIAtBGEqtlq5NmU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BJ%2BSKad2YQrqdhcDeTJRNmQ%3D%3D' className="text-black text-xl font-bold  flex self-center px-6" target="_blank">Fredy<span className="text-cyan-400 ms-1"> Mougon</span></Link>
            </div> 
        </div>
        
        </>
    )
}