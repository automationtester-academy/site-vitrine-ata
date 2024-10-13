import ImageAccounting from '../../assets/images/Maskgroup2.png'
import HomeHerosectionBackground from '../../assets/backgrounds/School_backgroundSectoin'
import FirstIcon from './icons/firstIcon'
import SecondIcon from './icons/second';
import ThirdIcon from './icons/third';
import FourthIcon from './icons/fourth';


import "../../assets/css/style.css"
export default function LearningByDoingThirdSection() {
    return (
        <>
            <section className="Recruiters w-full   max-sm:h-max ">
                <div className="Recruiters_Text flex max-sm:flex-wrap justify-center mb-10">
                    <p className="text-white text-4xl font-bold mt-16 text-center  max-sm:!text-center max-sm:px-3 max-sm:text-3xl">LES POINTS FORT DE NOTRE PROGRAMME</p>
                </div>
                <div className='column_holder mt-[6rem] w-[100%] m-auto  '>
                <div className='flex max-sm:flex-col mb-[3rem] w-[70%] max-sm:w-[90%] m-auto gap-[5rem]'>
                    <div className="card_holder w-[50%] max-sm:w-[100%] flex">
                        <div className="card-content relative w-[100%] m-auto flex flex-col" style={{ height: '100%' }}>
                            <div className="card_image">
                                <img src="" alt="" />
                            </div>
                            <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl flex-grow flex flex-col justify-between">
                                <div className="imageIcon exeption">
                                    <FirstIcon />
                                </div>
                                <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                    Live coding
                                </h6>
                                <p className='card_content text-white'>
                                    Participez à nos sessions de live coding et apprenez à automatiser vos tests en temps réel. Nos experts vous montreront comment :
                                    <ul className='pl-10 my-3'>
                                        <li className='list-outside list-disc'>Écrire et exécuter des scripts de test</li>
                                        <li className='list-outside list-disc'>Configurer des environnements de test</li>
                                        <li className='list-outside list-disc'>Diagnostiquer et corriger les erreurs</li>
                                    </ul>
                                    Posez vos questions en direct et obtenez des réponses instantanées. Une expérience d'apprentissage pratique et immersive pour maîtriser l'automatisation des tests.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card_holder w-[50%] max-sm:w-[100%] flex">
                        <div className="card-content relative w-[100%] m-auto flex flex-col" style={{ height: '100%' }}>
                            <div className="card_image">
                                <img src="" alt="" />
                            </div>
                            <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl flex-grow flex flex-col justify-between">
                                <div className="imageIcon">
                                    <ThirdIcon />
                                </div>
                                <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                    DOJO
                                </h6>
                                <p className='card_content text-white  mb-[2rem]'>
                                    Le Dojo est un espace de pratique collaboratif dans notre formation. Les apprenants y travaillent ensemble sur des exercices de codage en temps limité, favorisant l'échange de connaissances et l'apprentissage par la pratique. Cette approche encourage la collaboration, l'entraide et la communication, tout en permettant de renforcer les compétences techniques et de développer une pensée critique face aux défis de l'automatisation des tests.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex max-sm:flex-col mb-4 w-[70%] max-sm:w-[90%] m-auto gap-[5rem]'>
                    <div className="card_holder w-[50%] max-sm:w-[100%] flex kata">
                        <div className="card-content relative w-[100%] m-auto flex flex-col" style={{ height: '100%' }}>
                            <div className="card_image">
                                <img src="" alt="" />
                            </div>
                            <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl flex-grow flex flex-col justify-between">
                                <div className="imageIcon">
                                    <SecondIcon />
                                </div>
                                <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                    KATA
                                </h6>
                                <p className='card_content text-white mb-[2rem]'>
                                    Des mises en situations pratiques inspirées des situations réelles en entreprise, permettant à la maîtrise complète des techniques de l’automatisation des tests grâce au learning by doing et la répétition.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card_holder w-[50%] max-sm:w-[100%] flex">
                        <div className="card-content relative w-[100%] m-auto flex flex-col" style={{ height: '100%' }}>
                            <div className="card_image">
                                <img src="" alt="" />
                            </div>
                            <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl flex-grow flex flex-col justify-between">
                                <div className="imageIcon">
                                    <FourthIcon />
                                </div>
                                <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                    Quête
                                </h6>
                                <p className='card_content text-white'>
                                    Une série de défis et d'objectifs conçus pour aider les participants à maîtriser les compétences nécessaires à l'automatisation des tests logiciels. À travers cette quête, les participants doivent accomplir diverses tâches pratiques qui les guident progressivement vers la compétence et l'expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </section>
        </>
    )
}