import kemal from '../../../assets/images/Profils/KemalCherifi.svg'
export default function CommentOfKemalCherifi(){
    return(
        <>
        <div className="Comment_content block w-[36%] px-6 pt-6 pb-2 bg-white border border-gray-200 rounded-3xl shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-sm:w-[100%] flex-col">        
            <p class="Commeny_content_text font-medium text-neutral-500 dark:text-gray-400 h-[65%] max-h-40 overflow-y-auto">Formation efficace et rentabilisée rapidement !Le format est génial et permet d’avancer à son rythme, tout en ayant un formateur à disposition sur les temps choisis. Le contenu est simple à comprendre, et permet une montée en compétence rapide qui se traduit par une bonne ( voire très bonne ) augmentation de salaire qui se justifie grâce à cet apprentissage.Merci encore !</p>
            <div className="Comments_profil_image flex flex-row mt-[4%]">
                <img src={kemal} alt="girl profil picture"/>
                <p className="text-black text-xl font-bold  flex self-center px-6">Kemal <span className="text-cyan-400 ms-1"> Cherifi  </span></p>
            </div> 
        </div>
        
        </>
    )
}