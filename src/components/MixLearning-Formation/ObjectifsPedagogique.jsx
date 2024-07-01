export default function ObjectifsPedagogique() {
    return (
        <>
            <div className="ObjectifsPedagogique border-2 border-cyan-400 h-[120vh] overflow-x-scroll w-[45%] pt-[3%] pb-[4%] flex justify-start flex-col rounded-xl max-xl:w-[100%] max-xl:h-[100%] max-lg:w-[100%] max-lg:h-[80%] max-lg:gap-2 max-lg:pb-[0%] max-sm:w-[100%]">
                <div className="flex justify-center items-center flex-col border-b-2 border-cyan-400 pb-[3%] mx-[2%] max-lg:pt-[4%]">
                    <h1 className="card_title text-cyan-400 text-2xl text-justify font-semibold max-sm:text-2xl flex max-sm:text-center max-sm:pt-[6%]">
                        Objectifs pédagogiques
                    </h1>
                    <h2 className="card_title text-white text-xl text-justify pt-[2%] font-semibold max-sm:text-2xl flex max-sm:text-center max-sm:pt-[1%]">
                        Vos ambitions, nos défis !
                    </h2>
                    <p className="text-center text-white font-normal text-xl max-sm:text-lg">
                        Ensemble, plongeons dans les dernières technologies de test, maîtrisons les frameworks les plus avancés et déployons des stratégies de test automatisé efficaces.
                    </p>
                    <p className="text-center text-white pt-[3%] font-normal text-xl max-sm:text-lg">
                        2024 sera l'année où nous transformerons vos aspirations en réalisations concrètes !
                    </p>
                </div>
                <div className="flex flex-col pb-[3%] pt-[2%] mx-[2%]">
                    <h1 className="card_title text-cyan-400 text-start text-2xl font-semibold pt-[4%] max-sm:text-2xl flex max-sm:justify-center max-sm:pt-[3%]">
                        Hard Skills
                    </h1>
                    <div className="list-disc pl-[5%]">
                        <li className="text-white text-xl max-sm:text-lg">Elaborer une stratégie complète d’automatisation des tests.</li>
                        <li className="text-white text-xl max-sm:text-lg">Acquérir une maitrise fondamentale des concepts de programmation nécessaires à l’automatisation</li>
                        <li className="text-white text-xl max-sm:text-lg">Approfondir la compréhension du fonctionnement des technologies web, notamment HTML et CSS</li>
                        <li className="text-white text-xl max-sm:text-lg">Savoir automatiser des tests d’interface utilisateur (UI) à l’aide de Cypress</li>
                        <li className="text-white text-xl max-sm:text-lg">Etre capable d’automatiser des tests API à l’aide de Postman</li>
                    </div>
                </div>
                <div className="flex flex-col pb-[1%] mx-[2%]">
                    <h1 className="card_title text-cyan-400 text-start text-2xl font-semibold pt-[4%] max-sm:text-2xl flex max-sm:justify-center max-sm:pt-[3%]">
                        Soft Skills
                    </h1>
                    <div className="list-disc pl-[5%]">
                        <li className="text-white text-xl max-sm:text-lg">Esprit d’équipe</li>
                        <li className="text-white text-xl max-sm:text-lg">Adaptation</li>
                        <li className="text-white text-xl max-sm:text-lg">Patience</li>
                        <li className="text-white text-xl max-sm:text-lg">Autonomie</li>
                        <li className="text-white text-xl max-sm:text-lg">Communication</li>
                        <li className="text-white text-xl max-sm:text-lg">Persévérance</li>
                    </div>
                </div>
            </div>
        </>
    );
}
