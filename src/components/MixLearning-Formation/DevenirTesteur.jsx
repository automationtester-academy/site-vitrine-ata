import { Link } from "react-router-dom"

export default function DevenirTesteur(){
    return(
        <>
        <section className="flex justify-center items-center flex-col gap-2 ">
            <h1 className="text-[160%] leading-tight text-center font-bold w-[100%] pt-[3%] pb-[1%] text-cyan-400 max-sm:w-[96%] max-sm:py-[5%] max-lg:w-[96%] max-lg:py-[5%]">Devenir Testeur full stack <span className="text-white">en Mix Learning</span></h1>
            <div className="flex justify-center flex-col items-center pt-[3%]  gap-1">
                <h2 className="text-[160%] leading-tight text-center text-cyan-400 font-semibold w-[100%]">Notre objectif :</h2>
                <p className="text-center text-xl text-white  w-[90%] max-sm:text-justify">Faire de vous un testeur automaticien compétent et recruté.</p>
            </div>
            <p className="text-center text-xl text-white w-[73%]  max-lg:w-[100%] max-sm:text-justify max-sm:w-[90%]">Cette formation contient des modules techniques indispensables pour devenir <p className="text-center max-lg:w-[100%] max-lg:px-[2%] max-lg:text-center max-sm:text-justify">
            automaticien. La réussite de ton parcours en automatisation des tests logiciels repose sur l’acquisition de ces modules.Une fois ces modules techniques réalisés, tu pourras t’amuser en automatisant avec les dernières technologies en vogue. mais ne t’inquiète pas, nous allons t’accompagner grâce à la méthodologie mise en place.</p></p>
            <div className="w-[30%] flex justify-between mb-[4%] mt-[1.5%] max-xl:w-[40%] max-lg:w-[60%] max-sm:w-[100%] max-sm:mx-[1%] max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <div className="NavBarLinks_button flex flex-shrink-0 w-[50%] my-2.5 lg:my-0  max-lg:justify-center max-lg:items-center max-sm:w-[80%]">
                        <div className="relative inline-block w-[90%] p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md max-lg:w-[80%] ">
                            <Link to="/contact" className="Header-text text-center block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold" onClick={() => window.scrollTo(0, 0)}>
                            S’inscrire                            
                        </Link>
                        </div>
                </div>
                <div className="NavBarLinks_button flex flex-shrink-0 w-[50%] my-2.5 lg:my-0  max-lg:justify-center max-lg:items-center max-sm:w-[80%]">
                        <div className="relative inline-block w-[100%] p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md max-lg:w-[80%] max-xl:w-[100%] ">
                            <Link to="/contact" className="Header-text text-center block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold" onClick={() => window.scrollTo(0, 0)}>
                            Nous Contacter                            
                        </Link>
                        </div>
                </div>
   
            </div>
        </section>
        </>
    )
}