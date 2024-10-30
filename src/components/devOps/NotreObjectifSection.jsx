import { Link } from "react-router-dom";


export default function NotreObjectifSection() {
    return (
        <>
            <div className="reconversion-second-section my-12 flex flex-col w-9/12 items-center">
                <div className="mb-9">
                    <h4 className="reconversion-second-section-title text-3xl font-bold text-white text-center">
                        <span className="text-[#39DDF5]">Appliquer </span> la méthode DevOps pour optimiser le cycle
                        de vie des applications
                    </h4>
                </div>
                <div className="mb-5 reconversion-second-section-first-text">
                    <div>
                        <h4 className="text-3xl font-medium text-center text-[#39DDF5]">
                            Notre Objectif :
                        </h4>
                    </div>
                    <div>
                        <p className="text-2xl text-white text-center reconversion-second-section-text">
                        DevOps vise à réduire les cycles de déploiement d’application et à favoriser les mises en production <br /><br /> en continu de nouvelles fonctionnalités tout en améliorant la qualité, la stabilité et la sécurité des applications délivrées
                        </p>
                    </div>
                </div>
                <div className="mb-5 ">
                    <p className="text-2xl text-white text-center reconversion-second-section-text">
                    Cette compétence a pour finalité de pouvoir mettre en production rapidement afin de diminuer la pression des livraisons en production.<br/><br/> Dans le cadre de ce développement orienté client, cette compétence DevOps (ou double compétence : développeur et ingénieur système) 
                    </p>
                </div>
                <div className="mb-7 ">
                    <p className="text-2xl text-white text-center reconversion-second-section-text">
                    est de plus en plus recherchée par les entreprises. Ainsi, notre formation « Appliquer la méthode DevOps pour optimiser le cycle de vie des applications » <br/> répond aux enjeux identifiés par les entreprises et permet à chaque apprenant de réaliser un processus de déploiement plus fiable, plus auditable, plus fréquent.
                    </p>
                </div>
                <div className="flex justify-ccenter w-full reconversion-second-section-buttons">
                    {/* <div className="flex justify-end button-parent-container" style={{ width: '45%' }}>
                        <div className="p-0.5 flex bg-gradient-to-r w-3/6 from-[#3390B2] to-[#87E5EC] hover:bg-none hover:bg-cyan-600 rounded-md">
                            <Link to={'/'} className="rounded-md flex justify-center h-full font-bold bg-[#071323] w-full text-xl p-2 hover:bg-cyan-600">
                                <span className="text-white">
                                    S’inscrire
                                </span>
                            </Link>
                        </div>
                    </div> */}
                    <div className="flex justify-center button-parent-container w-full">
                        <div className=" p-0.5 hover:bg-cyan-600 w-2/6 bg-gradient-to-r from-[#3390B2] hover:bg-none to-[#87E5EC] rounded-md">
                            <Link to={'/contact'} 
                            className="rounded-md w-full flex justify-center font-bold bg-[#071323] text-xl p-2 hover:bg-cyan-600"
                            onClick={() => window.scrollTo(0, 0)}>
                                <span className="text-white">
                                    Nous Contacter
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}