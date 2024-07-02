import { Link } from "react-router-dom";

export default function NotreObjectifSection() {
    return (
        <>
            <div className="reconversion-second-section my-12 flex flex-col w-9/12 items-center">
                <div className="mb-9">
                    <h4 className="reconversion-second-section-title text-3xl font-bold text-white">
                        <span className="text-[#39DDF5]">3 mois </span>pour devenir Testeur Agile full stack
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
                            Faire de vous un testeur automaticien compétent,<br /> certifié, et recruté
                        </p>
                    </div>
                </div>
                <div className="mb-5 ">
                    <p className="text-2xl text-white text-center reconversion-second-section-text">
                        Un programme de reconversion complet, des perspectives et des stratégies qui <br /> transformeront votre approche de l'automatisation des tests.
                    </p>
                </div>
                <div className="mb-7 ">
                    <p className="text-2xl text-white text-center reconversion-second-section-text">
                        A la clés : une certification RS5044 “ Appliquer la méthode DevOps pour optimiser le cycle<br /> de vie des applications”. et un accompagnement RH intensif pour vous aider à décrocher<br /> votre premier contrat
                    </p>
                </div>
                <div className="flex justify-between w-full reconversion-second-section-buttons">
                    <div className="flex justify-end button-parent-container" style={{ width: '45%' }}>
                        <div className="p-0.5 flex bg-gradient-to-r w-3/6 from-[#3390B2] to-[#87E5EC] hover:bg-none hover:bg-cyan-600 rounded-md">
                            <Link to={'/'} className="rounded-md flex justify-center h-full font-bold bg-[#071323] w-full text-xl p-2 hover:bg-cyan-600">
                                <span className="text-white">
                                    S’inscrire
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-start button-parent-container" style={{ width: '45%' }}>
                        <div className=" p-0.5 hover:bg-cyan-600 w-3/6 bg-gradient-to-r from-[#3390B2] hover:bg-none to-[#87E5EC] rounded-md">
                            <Link to={'/contact'} className="rounded-md w-full flex justify-center font-bold bg-[#071323] text-xl p-2 hover:bg-cyan-600">
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