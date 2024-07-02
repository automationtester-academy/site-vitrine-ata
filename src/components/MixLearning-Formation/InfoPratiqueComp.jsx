import DetailsdeProgramme from "./DetailsdeProgramme";
import ObjectifsPedagogique from "./ObjectifsPedagogique";

export default function InfoPratiqueComp(){
    return(
        <>
        <section className="flex flex-row border-t-2 py-[3%] border-cyan-400 h-[135vh]  justify-between mx-[11%] max-xl:pt-[3%]  max-xl:flex-col max-xl:h-full max-xl:gap-3 max-lg:flex-col max-lg:h-full  max-lg:gap-3 max-sm:flex-col max-sm:h-full max-sm:gap-2">
        <DetailsdeProgramme/>
        <ObjectifsPedagogique/>
        </section>
        </>
    )
}