export default function RightSection() {
    return (
        <>
            <div className="content-div flex flex-col items-center p-2 overflow-auto">
                <div className="">
                    <section className="mb-5">
                        <h4 className="text-3xl font-bold text-center text-[#39DDF5] reconversion-second-section-Right-title">
                            Objectifs pédagogique
                        </h4>
                    </section>
                    <section className=" mb-5">
                        <h5 className="text-2xl font-bold text-center text-white reconversion-second-section-Right-title-2">
                            Vos ambitions, nos défis !
                        </h5>
                    </section>
                    <section className=" mb-5">
                        <p className="text-white text-center text-2xl reconversion-second-section-text">
                            Appliquer des principes de la culture DevOps au sein d’une organisation agile pour optimiser le travail en équipe
                        </p>
                    </section>
                    <section className=" mb-5">
                        <p className="text-white text-2xl w-full text-center reconversion-second-section-text"> 
                        Diagnostiquer le cycle de vie d’une application

                        </p>
                        <br/>
                        <p className="text-white text-2xl w-full text-center reconversion-second-section-text">Mettre en place des méthodes d’amélioration continue du produit   
                        </p>
                    </section>
                </div>
                <div className="pt-6 pl-3" style={{borderTop: '2px solid #39DDF5', width: '95%'}}>
                    <div>
                        <h4 className="text-3xl font-bold text-start text-[#39DDF5] reconversion-second-section-Right-title">
                            Hard Skills
                        </h4>
                    </div>
                    <div className="pl-8 py-4">
                        <ul>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Participer à la définition de la stratégie de tests</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Concevoir les tests</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Définir des prérequis, jeux des données associées au test, résultats attendus, enchaînements des tests et besoins en moyens de test</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Réaliser de tests de bout en bout</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Rédiger des bilans de tests et participation active à l’enrichissement des référentiels de tests</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Mettre en place l’industrialisation des tests dans un environnement devops pour une automatisation efficace et intégrée</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-start text-[#39DDF5] reconversion-second-section-Right-title">
                            Soft Skills
                        </h4>
                    </div>
                     <div className="pl-8 py-4">
                        <ul>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Esprit d’équipe</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Adaptation</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Patience</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Autonomie</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Communication</li>
                            <li className="text-white text-2xl list-disc reconversion-second-section-text">Persévérance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}