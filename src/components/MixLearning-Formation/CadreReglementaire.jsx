
import ModaliteEvaluation from "./ModaliteEvaluation";
import Statistics from "./Statistics";

export default function CadreReglementaire(){
    return (
        <>
        <section className="flex justify-center ">
            <div className="border-2 border-cyan-400 w-[80%] px-[3%] rounded-2xl max-sm:my-[4%] ">
                    <h1 className="text-[160%] leading-tight text-center font-bold w-[100%] pt-[3%] pb-[2%] text-cyan-400 max-sm:w-[100%] max-sm:text-2xl  max-sm:py-[5%] max-lg:w-[96%] max-lg:py-[5%]">Cadre <span className="text-white">règlementaire</span></h1> 
                    <div className="flex flex-row w-[100%] justify-between py-[3%] max-sm:flex-col max-sm:gap-5 max-sm:">
                        <ModaliteEvaluation/>
                        <Statistics/>
                    </div>
                           
            </div>

        </section>
        </>
    )
}