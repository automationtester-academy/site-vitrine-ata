import HomeCompBackground from "../../assets/backgrounds/HomeCompBackground"
import ATAHeroSec from "../../assets/images/ATAHeroSec"
import { Link } from "react-router-dom";
export default function HerosectionCompnent(){
    return(
        <>
        <section className="herosection_parent border-b-[0.0001vh] border-slate-500 flex  max-sm:w-full  sm:max-lg:w-full sm:max-lg:justify-center max-sm:justify-center ">
        <div className="hero_main_section ml-[9rem] flex lg:flex-row my-5 lg:justify-between sm:max-lg:pl-6 max-sm:mx-0   sm:max-lg:m-0 max-sm:justify-center max-sm:mb-16">
            <div className="Herosection  relative w-5/12 sm:max-lg:w-full sm:max-lg:h-full sm:max-lg:mb-36   max-sm:w-full   ">
                <div className="Herosection_firstcomp w-1/3 sm:max-lg:w-full   max-sm:w-full">
                    <div className="Herosection_underbackground_img w-[30rem] sm:max-lg:w-full  max-sm:hidden">
                        <HomeCompBackground />
                    </div>
                    <div className="Herosection_Text w-[31rem] 2 mr-10 sm:max-lg:w-full  max-sm:w-full max-sm:!relative">
                        <h1 className="Herosection_Text_Title w-[30rem] text-white   text-[26px] font-bold mb-[2.7%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full ">Lancez votre carrière avec nos formations tremplin, 
                        <span className="Herosection_Text_Title_span text-cyan-400 sm:max-lg:text-2xl"> votre passeport vers l’automatisation des tests !</span></h1>
                        <p className=" Herosection_Text_Title_paragraph text-white text-lg leading-[119%] mb-[2.8%] ml-1 sm:max-lg:text-base">En quelques jours ou plusieurs mois, en intensif ou à  votre rythme, des formations accessibles de partout via notre plateforme de cours et nos formateurs experts.</p>
                        <p className="Herosection_Text_Title_paragraph text-white text-lg leading-[119%] sm:max-lg:text-base">Peu importe votre parcours académique ou professionnel, UN seul objectif :  vous rendre opérationnel dans le monde de l'automatisation des tests logiciels.</p>
                        <div className="flex-shrink-0 mt-6">
                        <div className="Header_Box_border relative inline-block p-[2px] pl-[1.75px] bg-gradient-to-r from-cyan-600 to-teal-200 rounded-md max-sm:w-full ">
                            <Link to="" className="Header-text w-full block px-6 text-md py-1.5  text-white rounded-md hover:text-white font-semibold">
                            Découvrer nos formations                            
                            </Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
                <div className="Herosection_image flex sm:max-lg:justify-start sm:max-lg:w-full  max-sm:hidden w-7/12  ml-10">
                    <ATAHeroSec />
                </div>

            
        </div>
        </section>
        </>
    )
}