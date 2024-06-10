import SNCFLogo from '../../assets/logos/Recruiters/SNCFLogo'
import SarenzalLogo from '../../assets/logos/Recruiters/SarenzalLogo'
import AxaLogo from '../../assets/logos/Recruiters/AxaLogo'
import NaroutoLogo from '../../assets/logos/Recruiters/NaroutoLogo'
import AltranLogo from '../../assets/logos/Recruiters/AltranLogo'
import AccorLogo from '../../assets/logos/Recruiters/AccorLogo'
import RajaLogo from '../../assets/logos/Recruiters/RajaLogo'
import DataSolutionLogo from '../../assets/logos/Recruiters/DataSolutionLogo'

export default function Recruiters(){

    return(
        <>
        <section className="Recruiters h-[22.25rem] w-full bg-slate-900 border-b-2 max-sm:h-max ">
            <div className="Recruiters_Text flex justify-center mb-10">
                <p className="text-white text-4xl font-bold mt-16  max-sm:!text-center max-sm:px-3 max-sm:text-3xl">Ils ont recruté <span className="text-cyan-400">nos alumni</span></p>
            </div>
            <div className="carousel-container mx-[10%] h-[70%]  rounded-box max-sm:overflow-visible max-sm:!w-full max-sm:!mx-0 ">
            <div className="logo-scroller  flex gap-24 !w-[250%] h-full max-sm:gap-3 max-sm:!animate-none max-sm:!w-full   max-sm:flex-wrap max-sm:justify-center max-sm:pb-10">
                <SNCFLogo />
                <SarenzalLogo/>
                <AxaLogo/>
                <NaroutoLogo/>
                <AltranLogo/>
                <AccorLogo/>
                <RajaLogo/>
                <DataSolutionLogo/>

            </div>
            </div>

        </section>
        </>
    )
}