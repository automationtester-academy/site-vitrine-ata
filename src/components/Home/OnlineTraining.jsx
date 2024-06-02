import {Link} from 'react-router-dom'
import HomeHerosectionBackground from '../../assets/backgrounds/ImproveyourSkills'
import ImageAccounting from '../../assets/images/AccountingOnlineTraining.png'

export default function OnlineTraning(){
    return(
        <>
         <section className="ImproveUrSkills border-b-[0.0001vh] border-slate-500 ">
            <div className="ImproveUrSkills_main flex justify-between  h-[65vh] mx-32 mt-3 mb-20  sm:max-lg:mx-0  max-sm:mx-0 max-sm:flex-col  max-sm:h-fit">
                <div className="ImproveUrSkills_image_container relative mr-16  max-sm:w-full  max-sm:h-full max-sm:static ">
                    <HomeHerosectionBackground />
                            <div className="ImproveUrSkills_text flex flex-col  text-overlay absolute left-0 top-0 sm:max-lg:mt-[5%] sm:max-lg:w-[115%] max-sm:top-[115vh] max-sm:w-full max-sm:static max-sm:h-fit">
                                    <h1 className="ImproveUrSkills_Text_Title w-[30rem] text-white text-center  text-[26px] font-bold mb-[3.5%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full max-sm:px-[5%] ">Développez vos compétences grâce
                                        <span className="ImproveUrSkills_Text_Title_span text-cyan-400 sm:max-lg:text-2xl"> à des formations jusqu'à 100% financées. </span></h1>
                                    <p className=" ImproveUrSkills_Text_Title_paragraph text-center text-white  w-[82%] text-lg leading-[119%]  ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> ATA dispose d’une équipe entièrement dédiée à l’accompagnement sur le financement !</p>
                                    <p className=" ImproveUrSkills_Text_Title_paragraph text-center text-white  w-[84%] text-lg leading-[119%] mb-[3.5%] ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Cette équipe, experte dans le financement des formations, vous orientera efficacement vers le dispositif le mieux adapté à votre situation, agrémenté de conseils judicieux pour faciliter vos démarches.</p>

                                    <div className="flex-shrink-0 mt-8 ml-32 flex  sm:max-lg:justify-center sm:max-lg:w-full sm:max-lg:mx-0 max-sm:justify-center max-sm:my-5 max-sm:mx-0 max-sm:w-full">
                                        <div className="Header_Box_border  relative inline-block p-[2px] pl-[1.75px] bg-gradient-to-r from-cyan-600 to-teal-200 rounded-md max-sm:w-[80%]  ">
                                            <Link to="" className="Header-text w-full text-center block px-6 text-md py-1.5   text-white rounded-md hover:text-white font-semibold">
                                            Découvrer nos formations                            
                                            </Link>
                                        </div>
                                    </div>
                            </div>
                </div>
            <div className="ImproveUrSkills_main_parentImg mr-20 mt-10  w-[65vh] sm:max-lg:w-[70%] sm:max-lg:pl-4  max-sm:w-full max-sm:px-10  " alt="image of finance">
                <img className="ImproveUrSkills_main_Img w-full h-full sm:max-lg:h-[40%] max-sm:!h-auto" src={ImageAccounting} alt="two students are studiying together" />
            </div>

            </div> 
      
        </section>
        </>
    )
}