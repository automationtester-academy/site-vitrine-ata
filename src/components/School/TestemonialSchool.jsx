import CommentOfSaraYaakoubi from '../Home/User-Comments/CommentOfSaraYaakoubi.jsx'
import CommentOfYassineAllami from "../Home/User-Comments/CommentOfYassineAllami.jsx"
import CommentOfAnasBoukhari from "../Home/User-Comments/CommentOfAnasBoukhari.jsx"
import '../../assets/css/style.css'
import FirstImage from './testimonialsImages/FirstImage.jsx';
import SecondImage from './testimonialsImages/SecondImage.jsx';
import ThirdImage from  './testimonialsImages/ThirdImage.jsx';

export default function TestemonialSchool(){

    return(
        <>
        <section className="Comment_parent flex justify-center">
            <div className="Comment_container h-[100%] pb-20 w-full bg-slate-900  border-b-2 flex flex-col max-sm:h-fit">
                <div className="Comment_title flex justify-center  w-full  h-[35%] mb-10 max-sm:!px-[2%]">
                    <p className="text-white w-8/12 text-4xl text-center font-bold mt-16 max-sm:w-full  max-sm:h-fit max-sm:text-3xl max-sm:!mx-0">Pour vous faire votre propre avis,<br /> <span className="text-cyan-400 text-center ms-7">demandez celui des autres.</span></p>
                </div>
                <div className="testimonials mt-8 grid grid-cols-1 gap-4 md:grid-cols-3  md:gap-8 testimonialsContainer">
                <blockquote className="rounded-3xl bg-gray-50 p-[1.7rem] shadow-sm sm:p-[1.7rem]">
                    <div className="flex items-center gap-4  max-sm:flex-wrap ">
                        <div className="testimonials_image_profile small_image_container">
                            <FirstImage />
                        </div>
                        <div>
                            <p className="mt-0.5 text-lg font-medium text-gray-900">Les référents
                            admissions</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-700 text-content text-justify">
                    Les référents admissions sont là pour accompagner les apprenants dans chacune de leurs démarches administratives, et répondre à leurs questions sur les formations. Ils sont donc présents avant même que la formation n’ait commencé. Ce sont aussi eux qui remuent ciel et terre pour faire en sorte que chacun ait les bonnes cartes en main pour décrocher une solution de financement.
                    </p>
                </blockquote>

                <blockquote className="rounded-3xl bg-gray-50 p-[1.7rem] shadow-sm sm:p-[1.7rem]">
                    <div className="flex items-center gap-4  max-md:flex-wrap">
                        <div className="testimonials_image_profile small_image_container">
                            <SecondImage/>
                        </div>

                        <div>
                            <p className="mt-0.5 text-lg font-medium text-gray-900">L'ingénierie pédagogique</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-700 text-content text-justify">
                    Les référents admissions sont là pour accompagner les apprenants dans chacune de leurs démarches administratives, et répondre à leurs questions sur les formations. Ils sont donc présents avant même que la formation n’ait commencé. Ce sont aussi eux qui remuent ciel et terre pour faire en sorte que chacun ait les bonnes cartes en main pour décrocher une solution de financement.
                    </p>
                </blockquote>

                <blockquote className="rounded-3xl bg-gray-50 p-[1.7rem] shadow-sm sm:p-[1.7rem]">
                    <div className="flex items-center gap-4  max-md:flex-wrap small_image">
                        <div className="testimonials_image_profile testimonials_image_profile_custom">
                            <ThirdImage />
                        </div>

                    <div>
                        <p className="mt-0.5 text-lg font-medium text-gray-900">Les <br/> formateurs</p>
                    </div>
                    </div>

                    <p className="mt-4 text-gray-700 text-content text-justify">
                        Les référents admissions sont là pour accompagner les apprenants dans chacune de leurs démarches administratives, et répondre à leurs questions sur les formations. Ils sont donc présents avant même que la formation n’ait commencé. Ce sont aussi eux qui remuent ciel et terre pour faire en sorte que chacun ait les bonnes cartes en main pour décrocher une solution de financement.
                    </p>
                </blockquote>
                </div>
            </div>
        </section>
        
        </>
    )
}