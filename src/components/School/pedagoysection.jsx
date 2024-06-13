
import SchoolImageChild from "./thirdSecondImage";
import SchoolTextChild from "./pedagoyText";

export default function LearningByDoingThirdSection(){
    return(
        <>
         <section className="Recruiters w-full  max-sm:h-max pedagogie ">
            <div className="Recruiters_Text flex max-sm:flex-wrap justify-center mb-10">
                <p className="text-white text-4xl font-bold mt-16 text-center  max-sm:!text-center max-sm:px-3 max-sm:text-3xl">Les fondations de notre<br/><span className="text-cyan-400">pédagogie</span></p>
            </div>
            <div className="financement-first-section edited flex justify-evenly pt-10 pb-10">
            <div className="text-child-container w-3/5 flex justify-center items-center">
                    <SchoolTextChild />
                </div>
                <div className="img-child-container w-2/5 flex justify-start">
                    <SchoolImageChild />
                </div>
                
            </div>
            </section>
        </>
    )
}