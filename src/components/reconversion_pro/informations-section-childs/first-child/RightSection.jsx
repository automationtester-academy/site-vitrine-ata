export default function RightSection() {
    return (
        <>
            <div className="content-div flex flex-col items-center p-2 overflow-auto">
                <div className="">
                    <section className="mb-5">
                        <h4 className="text-3xl font-bold text-center text-[#39DDF5]">
                            Objectifs pédagogique
                        </h4>
                    </section>
                    <section className=" mb-5">
                        <h5 className="text-2xl font-bold text-center text-white">
                            Vos ambitions, nos défis !
                        </h5>
                    </section>
                    <section className=" mb-5">
                        <p className="text-white text-center text-2xl">
                            Ensemble, plongeons dans les dernières technologies de test, maîtrisons les frameworks les plus avancés et déployons des stratégies de test automatisé <br /> efficaces.
                        </p>
                    </section>
                    <section className=" mb-5">
                        <p className="text-white text-2xl w-full text-center"> 
                            2024 sera l'année où nous transformerons vos aspirations en réalisations concrètes !
                        </p>
                    </section>
                </div>
                <div className="pt-6 pl-3" style={{borderTop: '2px solid #39DDF5', width: '95%'}}>
                    <div>
                        <h4 className="text-3xl font-bold text-start text-[#39DDF5]">
                            Hard Skills
                        </h4>
                    </div>
                    <div className="pl-8 py-4">
                        <ul>
                            <li className="text-white text-2xl list-disc">Participer à la définition de la stratégie de tests</li>
                            <li className="text-white text-2xl list-disc">Concevoir les tests</li>
                            <li className="text-white text-2xl list-disc">Définir des prérequis, jeux des données associées au test, résultats attendus, enchaînements des tests et besoins en moyens de test</li>
                            <li className="text-white text-2xl list-disc">Réaliser de tests de bout en bout</li>
                            <li className="text-white text-2xl list-disc">Rédiger des bilans de tests et participation active à l’enrichissement des référentiels de tests</li>
                            <li className="text-white text-2xl list-disc">Mettre en place l’industrialisation des tests dans un environnement devops pour une automatisation efficace et intégrée</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-start text-[#39DDF5]">
                            Soft Skills
                        </h4>
                    </div>
                    <div className="pl-8 py-4">
                        <ul>
                            <li className="text-white text-2xl list-disc">Esprit d’équipe</li>
                            <li className="text-white text-2xl list-disc">Adaptation</li>
                            <li className="text-white text-2xl list-disc">Patience</li>
                            <li className="text-white text-2xl list-disc">Autonomie</li>
                            <li className="text-white text-2xl list-disc">Communication</li>
                            <li className="text-white text-2xl list-disc">Persévérance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}