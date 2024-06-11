import {Link} from 'react-router-dom'
import ImageAccounting from '../../assets/images/Maskgroup.png'
import HomeHerosectionBackground from '../../assets/backgrounds/School_backgroundSectoin'


export default function LearningByDoing(){
    return(
        <>
         <section className="ImproveUrSkills ">
            <div className="ImproveUrSkills_main flex justify-between  h-[65vh] mx-32 mt-3 mb-20  sm:max-lg:mx-0  max-sm:mx-0 max-sm:flex-col  max-sm:h-fit">
                <div className="ImproveUrSkills_image_container relative mr-16  max-sm:w-full  max-sm:h-full max-sm:static ">
                <HomeHerosectionBackground />

                            <div className="ImproveUrSkills_text flex flex-col  text-overlay absolute left-0 top-0 sm:max-lg:mt-[5%] sm:max-lg:w-[115%] max-sm:top-[115vh] max-sm:w-full max-sm:static max-sm:h-fit">
                                    <h1 className="ImproveUrSkills_Text_Title w-[30rem] mb-4 text-white text-center  text-[26px] font-bold mb-[3.5%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full max-sm:px-[5%] ">Learning 
                                        <span className="ImproveUrSkills_Text_Title_span text-cyan-400 sm:max-lg:text-2xl"> By Doing !</span></h1>
                                    <p className=" ImproveUrSkills_Text_Title_paragraph mb-4 text-center text-white  w-[82%] text-lg leading-[119%]  ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Notre objectif : vous permettre de donner un nouvel élan à votre carrière en vous aidant à développer de nouvelles compétences ! </p>
                                    <p className=" ImproveUrSkills_Text_Title_paragraph mb-6 text-center text-white  w-[84%] text-lg leading-[119%] mb-[1.5%] ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Notre pari ? Le faire en développant des liens étroits entre apprenants et formateurs pour renforcer la qualité de l’enseignement.</p>
                                    <p className=" ImproveUrSkills_Text_Title_paragraph mb-8 text-center text-white  w-[82%] text-lg leading-[119%]  ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Comment ? Grâce à un apprentissage basé sur la pratique. Fini les cours théoriques à en perdre son latin. En pratiquant sur des projets concrets à travers divers types d’exercices, ensemble nous allons arriver à notre objectif commun. </p>
                            </div>
                </div>
            <div className="ImproveUrSkills_main_parentImg ImproveUrSkills_main_parentImg_ecole ImproveUrSkills_main_parentImg_ecolemr-20 mt-10  w-[65vh] sm:max-lg:w-[70%] sm:max-lg:pl-4 max-sm:!w-[100%] max-sm:p-[3%]" alt="image of finance">
                <img className="ImproveUrSkills_main_Img w-full h-full sm:max-lg:h-[40%]  max-sm:object-scale-down" src={ImageAccounting} alt="two students are studiying together" />
            </div>

            </div> 
      
        </section>
        </>
    )
}