import BoyProfilPicture from '../../../assets/images/Profils/Boy1.svg'
export default function CommentOfAnasBoukhari(){
    return(
        <>
        <div className="block w-[36%] px-6 pt-6 pb-2 bg-white border border-gray-200 rounded-3xl shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-sm:w-[100%]">        
            <p class="font-medium text-neutral-500 dark:text-gray-400 ">Dans notre promo, on vient tous d’horizons professionnels complètement différents, c’est super enrichissant. On progresse tous ensemble, il y a énormément d’entraide aussi bien technique que morale. Et puis, travailler autant ensemble comme on le fait, je trouve que ça nous prépare bien à la réalité du terrain.</p>
            <div className="Comments_profil_image flex flex-row mt-[4%]">
                <img src={BoyProfilPicture} alt="girl profil picture"/>
                <p className="text-black text-xl font-bold  flex self-center px-6">Anas <span className="text-cyan-400 ms-1"> Boukhari</span></p>
            </div> 
        </div>
        
        </>
    )
}