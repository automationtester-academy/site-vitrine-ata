export default function LesOutilsDispositifs(){
    return(
        <>
            <div className="card_content w-[45%] border-2 border-cyan-400 pt-[5%] pb-[8%] px-[2%] rounded-3xl max-sm:w-[100%] max-sm:my-[4%]">
                <h6 className="card_title text-cyan-400 text-2xl font-semibold max-sm:text-2xl flex max-sm:justify-center max-sm:pt-[1%]">
                    Les outils à disposition                
                </h6>
                <div className="list-disc pl-[2%]">
                    <li className=' text-white text-xl max-sm:text-lg'> Une plateforme accessible 24h / 24 et 7j / 7</li>
                    <li className=' text-white text-xl max-sm:text-lg'> Un parcours de formation structuré</li>
                    <li className=' text-white text-xl max-sm:text-lg'> Des contenus pédagogiques interactifs et digitalisés</li>
                    <li className=' text-white text-xl max-sm:text-lg'> Un accès à notre messagerie privé</li>
                    <li className=' text-white text-xl max-sm:text-lg'> Des one-to-one avec notre formateur via des visio-conférence</li>
                </div>
            </div>
        </>
    )
}