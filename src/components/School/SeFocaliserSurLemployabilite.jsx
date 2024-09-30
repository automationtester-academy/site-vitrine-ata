
import SchoolImageChild from "./sixedImage";
import SchoolTextChild from "./seFocaliserSureLemployabilite__Text";

export default function wSeFocaliserSurLemployabilite(){
    return(
        <>
         <section className="Recruiters w-full  max-sm:h-max ">
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