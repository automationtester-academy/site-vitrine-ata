import CommentOfSaraYaakoubi from '../Home/User-Comments/CommentOfChaimaaSassni.jsx'
import CommentOfYassineAllami from "../Home/User-Comments/CommentOfMougonFredy.jsx"
import CommentOfAnasBoukhari from "../Home/User-Comments/CommentOfKemalCherifi.jsx"
import '../../assets/css/style.css'
import FirstImage from '../../assets/images/asma.jpeg';
import FourthImage from '../../assets/images/Samira.jpeg';
import ThirdImage from  '../../assets/images/mimoun.jpeg';
import SecondImage from "../../assets/images/ali.jpeg";


export default function TestemonialSchool(){

    return(
        <>
        <section className="Comment_parent flex justify-center">
            <div className="Comment_container h-[100%] pb-20 w-full bg-slate-900  border-b-2 flex flex-col max-sm:h-fit">
                <div className="Comment_title flex justify-center  w-full  h-[35%] mb-10 max-sm:!px-[2%]">
                    <p className="text-white w-8/12 text-4xl text-center font-bold mt-16 max-sm:w-full  max-sm:h-fit max-sm:text-3xl max-sm:!mx-0">Notre équipe aux petits soins de<span className="text-cyan-400 text-center "> Qualité </span></p>
                </div>
                <div className="testimonials mt-8 grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8 testimonialsContainer">
                <blockquote className="rounded-3xl bg-gray-50 p-[1.7rem] shadow-sm sm:p-[1.7rem]">
                    <div className='d-flex'>
                        <div className="flex items-center gap-4  max-sm:flex-wrap mb-4">
                            <div className="testimonials_image_profile small_image_container ">
                                {/* <FirstImage /> */}
                                <img src={FourthImage} className='w-[100%] h-[100%]' alt="" />
                            </div>
                            <div className="loading-4">
                                <p className="mt-0.5 text-lg font-medium text-gray-900">Samira Ladghami</p>
                                <span className='mt-[-4rem]'>Gestionnaire Formation  </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4  max-sm:flex-wrap ">
                        <div className="testimonials_image_profile small_image_container">
                            {/* <FirstImage /> */}
                            <img src={FirstImage} className='w-[100%]' alt="" />
                        </div>
                        <div className="loading-4">
                            <p className="mt-0.5 text-lg font-medium text-gray-900">Asmaa BENNOUF</p>
                            <span className='mt-[-4rem]'>Directrice commercial</span>
                        </div>
                    </div>
                    </div>

                    <p className="mt-4 text-gray-700 text-content text-justify">
                    Les référents admissions sont là pour accompagner les apprenants dans chacune de leurs démarches administratives, et répondre à leurs questions sur les formations. Ils sont donc présents avant même que la formation n’ait commencé. Ce sont aussi eux qui remuent ciel et terre pour faire en sorte que chacun ait les bonnes cartes en main pour décrocher une solution de financement.
                    </p>
                </blockquote>


                <blockquote className="rounded-3xl bg-gray-50 p-[1.7rem] shadow-sm sm:p-[1.7rem] h-[30rem] overflow-scroll">
                    <div className='d-flex'>
                        <div className="flex items-center gap-4  max-sm:flex-wrap mb-4">
                            <div className="testimonials_image_profile small_image_container">
                                {/* <FirstImage /> */}
                                <img src={ThirdImage} className='w-[100%]' alt="" />
                            </div>
                            <div className="loading-4">
                                <p className="mt-0.5 text-lg font-medium text-gray-900">Mimoun Kissi</p>
                                <span className='mt-[-4rem]'>CEO + Responsable Pédagogiques</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4  max-sm:flex-wrap ">
                        <div className="testimonials_image_profile small_image_container">
                            {/* <FirstImage /> */}
                            <img src={SecondImage} className='w-[100%]' alt="" />
                        </div>
                        <div className="loading-4">
                            <p className="mt-0.5 text-lg font-medium text-gray-900">Mohammed Ali EL MALHOUFF</p>
                            <span className='mt-[-4rem]'>Head Of Training </span>
                        </div>
                    </div>
                    </div>

                    <p className="mt-4 text-gray-700 text-content text-justify">
                    Notre équipe réunit des professionnels passionnés, Nous nous engageons à concevoir des expériences d'apprentissage innovantes, engageantes et personnalisées.
Nous collaborons de manière étroite et cohérente, en combinant nos forces pour créer des programmes qui ne se limitent pas à transmettre des connaissances, mais qui motivent les apprenants à se dépasser. Que ce soit à travers des modules interactifs, des outils numériques immersifs ou des méthodes pédagogiques innovantes, nous veillons à ce que chaque expérience soit non seulement éducative mais aussi inspirante.
Notre objectif est de rendre l’apprentissage accessible à tous, de le dynamiser grâce à des outils modernes, et surtout, d’en faire une expérience plaisante et enrichissante, où chaque apprenant se sent soutenu et valorisé dans sa progression.
                    </p>
                </blockquote>

                
                </div>
            </div>
        </section>
        
        </>
    )
}