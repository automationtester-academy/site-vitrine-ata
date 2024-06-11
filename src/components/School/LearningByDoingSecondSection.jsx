import ImageAccounting from '../../assets/images/Maskgroup2.png'
import HomeHerosectionBackground from '../../assets/backgrounds/School_backgroundSectoin'


export default function LearningByDoingSecondSection(){
    return(
        <>
         <section className="ImproveUrSkills ">
            
            <div className="ImproveUrSkills_main flex justify-between  h-[65vh] mx-32 mt-3 mb-20  sm:max-lg:mx-0  max-sm:mx-0 max-sm:flex-col  max-sm:h-fit">
            <div className="ImproveUrSkills_main_parentImg ImproveUrSkills_main_parentImg_ecole mr-20 mt-10  w-[65vh] sm:max-lg:w-[70%] sm:max-lg:pl-4 max-sm:!w-[10%] max-sm:p-[3%]" alt="image of finance">
                <img className="ImproveUrSkills_main_Img w-full h-full sm:max-lg:h-[40%]  max-sm:object-scale-down" src={ImageAccounting} alt="two students are studiying together" />
            </div>
                <div className="ImproveUrSkills_image_container relative max-sm:w-full  max-sm:h-full max-sm:static ">
                <HomeHerosectionBackground />

                    <div className="ImproveUrSkills_text flex flex-col  text-overlay absolute left-0 top-0 sm:max-lg:mt-[5%] sm:max-lg:w-[115%] max-sm:top-[115vh] max-sm:w-full max-sm:static max-sm:h-fit">
                            <h1 className="ImproveUrSkills_Text_Title w-[30rem] mb-4 text-white text-center  text-[26px] font-bold mb-[3.5%] mt-[6.5%] leading-tight sm:max-lg:text-2xl sm:max-lg:w-full max-sm:w-full max-sm:px-[5%] ">Seul tout en 
                                <span className="ImproveUrSkills_Text_Title_span text-cyan-400 sm:max-lg:text-2xl"> étant accompagné</span></h1>
                            <p className=" ImproveUrSkills_Text_Title_paragraph mb-4 text-center text-white  w-[82%] text-lg leading-[119%]  ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]">Être confronté seul à l’apprentissage d’une nouvelle compétence peut s’avérer effrayant. N’ayez pas peur ! Chez ATA vous avancez de manière autonome tout en étant encadré. </p>
                            <p className=" ImproveUrSkills_Text_Title_paragraph mb-4 text-center text-white  w-[84%] text-lg leading-[119%] mb-[1.5%] ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Intégré à notre communauté slack, vous avez la possibilité d’échanger avec des formateurs experts, des anciennes élèves ou encore des élèves qui suivent la même formation. </p>
                            <p className=" ImproveUrSkills_Text_Title_paragraph mb-4 text-center text-white  w-[82%] text-lg leading-[119%]  ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Des points récurrents sont organisés avec nos référents techniques et pédagogiques afin de suivre vos avancements et vous conseillez au mieux lors de votre apprentissage.</p>
                            <p className=" ImproveUrSkills_Text_Title_paragraph mb-4 text-center text-white  w-[82%] text-lg leading-[119%]  ml-5 sm:max-lg:w-[90%] sm:max-lg:text-base max-sm:w-[90%] max-sm:px-[2%]"> Rejoindre Automation Tester Academy c’est un rejoindre tout un eco-système autour de la qualité logicielle grâce à nos partenariats.</p>
                    </div>
                </div>
            </div> 
      
        </section>
        </>
    )
}