import WorkingTogetherImg from "../../assets/images/TwoMatesWorkingTogether.png"
import HomeHerosectionBackground from "../../assets/backgrounds/HomeHerosection-Background"
import {Link} from "react-router-dom"
export default function LearningByDoingComponent(){
    return(
        <>
        <section className="HeroSection_Learningbydoing border-b-[0.0001vh] border-slate-500 ">
            <div className="HeroSection_Learningbydoing_main flex justify-between  h-[65vh] ml-56 mt-10 mb-20 2xl:max-3xl:bg-red-300   lg:max-xl:mb-[0%] lg:max-xl:w-[100%] lg:max-xl:mx-[0%] lg:max-xl:h-[90%]  sm:max-lg:w-full sm:max-lg:mx-0  max-sm:mx-0 max-sm:flex-col  max-sm:h-fit">
                <div className="HeroSection_Learningbydoing_main_parentImg w-[65vh] lg:max-xl:w-[50%] sm:max-lg:w-[90%]   max-sm:w-[100%] max-sm:px-10" alt="image of two mates learning together">
                    <img className="HeroSection_Learningbydoing_main_Img w-full h-full max-sm:object-scale-down"src={WorkingTogetherImg} alt="two students are studiying together" />
                </div>
                <div className="HeroSection_Learningbydoing_image_container relative mr-16  max-sm:w-full  max-sm:h-full max-sm:static ">
                    <HomeHerosectionBackground />
                    <div className="HeroSection_Learningbydoing_text flex flex-col lg:max-xl:items-center  text-overlay absolute left-0 top-0 sm:max-lg:mt-[5%] sm:max-lg:w-[115%] max-sm:top-[115vh] max-sm:w-full max-sm:static max-sm:h-fit">
                        <h1 className="Herosection_Text_Title w-[30rem] text-white text-center  text-[26px] font-bold mb-[3.5%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full max-sm:text-2xl">Apprendre 
                            <span className="Herosection_Text_Title_span text-cyan-400 sm:max-lg:text-2xl"> en s'exerçant !</span></h1>
                        <p className=" Herosection_Text_Title_paragraph_learning text-center text-white w-10/12 text-lg leading-[119%] mb-[3.5%] ml-5 sm:max-lg:w-[90%] lg:max-xl:w-[100%]  sm:max-lg:text-base max-sm:w-[90%]">En quelques jours ou plusieurs mois, en intensif ou à  votre rythme, des formations accessibles de partout via notre plateforme de cours et nos formateurs experts.</p>
                        <p className="Herosection_Text_Title_paragraph_learning text-center w-10/12 text-white ml-3 text-lg leading-[119%] lg:max-xl:w-[100%] sm:max-lg:w-[90%] sm:max-lg:text-base  max-sm:w-[90%]">Peu importe votre parcours académique ou professionnel, UN seul objectif :  vous rendre opérationnel dans le monde de l'automatisation des tests logiciels.</p>
                        <div className="flex-shrink-0 mt-8 ml-32 flex lg:max-xl:justify-center lg:max-xl:w-[100%] lg:max-xl:mx-[0%]  sm:max-lg:justify-center sm:max-lg:w-full sm:max-lg:mx-0 max-sm:justify-center max-sm:my-5 max-sm:mx-0 max-sm:w-full">
                            <div className="Header_Box_border  relative inline-block p-[2px] pl-[1.75px] bg-gradient-to-r from-cyan-600 to-teal-200 rounded-md max-sm:w-[80%]  ">
                                <Link to="/formation"  className="Header-text w-full text-center block px-6 text-md py-1.5    text-white rounded-md hover:text-white font-semibold" onClick={() => window.scrollTo(0, 0)}>
                                Découvrer nos formations                            
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <br />
            <br /> 
        </section>
        </>
    )
}