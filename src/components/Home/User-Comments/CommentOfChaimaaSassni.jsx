import { Link } from "react-router-dom";
import Chaimaa from "../../../assets/images/Profils/Chaimaa.svg"

export default function CommentOfChaimaaSassni() {
    return (
        <>
            <div className="Comment_content block w-[36%] px-6 pt-6 pb-2 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-sm:w-[100%]">        
                <p className="Commeny_content_text font-medium text-neutral-500 dark:text-gray-400 h-[65%] max-h-40 overflow-y-auto">
                J'ai récemment suivi la formation chez ATA en blended learning et je suis très satisfaite de cette expérience. La combinaison de cours en ligne a parfaitement répondu à mes besoins. Les modules en ligne m'ont permis d'apprendre à mon propre rythme, tout en bénéficiant de ressources interactives et de vidéos explicatives de grande qualité.
                Sachant que la formation demande beaucoup d’énergie et de temps pour pouvoir terminer à temps mais il suffit de rester motiver et impliquer .
                J’ai été chaque semaine accompagnée par Meryem pour garder la meme motivation. 
                Je recommande à toutes personnes veulent se former en automatisation de suivre la formation chez ATA.
                </p>
                <div className="Comments_profil_image flex flex-row mt-[4%]">
                    <img src={Chaimaa} alt="girl profil picture"/>
                    <Link to='https://www.linkedin.com/in/chaimaa-sasni-bba17316b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAChszf4B5EsBSZoCEnLFjh6yq_CyVNRCsIY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BO4zWs%2Fx%2FRlmPd04xfffxUw%3D%3D' target="_blank" className="text-black text-xl font-bold flex self-center px-6">
                    Chaimaa<span className="text-cyan-400 ms-1"> Sassni</span>
                    </Link>
                </div> 
            </div>
        </>
    );
}
