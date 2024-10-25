import AnalyseetRecherche from "../../assets/icons/AnalyseetRecherche";

export default function Statistics(){

    const currentYear = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(currentYear.getFullYear() + 1);

    return(
        <>
        <section>
        <div className="Statistics bg-slate-900 rounded-r-xl w-[99%] pb-[4%] px-[4%] pt-[8%] max-sm:rounded-l-xl">
                    <div className="flex flex-row gap-3 Evaluation-content">
                        <AnalyseetRecherche/>
                        <p className="text-xl font-medium leading-tight w-[100%] pt-[1%] text-cyan-400 max-sm:w-[96%] max-sm:py-[5%] max-lg:w-[96%] max-lg:py-[5%]">TAUX D'OBTENTION {currentYear.getFullYear()}/{nextYear.getFullYear()}</p>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <div>
                        <ul className="list-disc pl-[8%] p-[2%] max-sm:pl-[14%]">
                            <li className="text-cyan-500 text-md max-sm:text-lg font-bold"><span  style={{color:'#3adef5'}}>90% </span><span className="text-white font-normal">taux d'achèvement</span></li>
                        </ul>
                        </div>
                        <div className="max-sm:w-[100%]">
                            <p className="text-white font-medium max-sm:text-base ">TAUX DE SATISFACTION GLOBAL ANNUEL</p>
                            <ul className="list-disc pl-[8%]  p-[2%] max-sm:pl-[14%]">
                                <li className="text-cyan-500 font-bold text-md max-sm:text-lg"><span  style={{color:'#3adef5'}}>95%</span></li>
                            </ul>
                        </div>
                        <div className="max-sm:w-[100%]">
                            <p className="text-white font-medium max-sm:text-base">TAUX D'INSERTION PROFESSIONNELLE</p>
                            <ul className="list-disc pl-[8%] p-[2%] max-sm:pl-[14%]">
                                <li className="text-cyan-500 font-bold text-md max-sm:text-lg"><span  style={{color:'#3adef5'}}>70% </span> <span className="text-white font-normal">3 mois post formation</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
        </section>
        </>
    )
}