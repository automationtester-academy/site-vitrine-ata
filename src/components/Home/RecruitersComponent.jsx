import SNCFLogo from '../../assets/logos/Recruiters/SNCFLogo'
import SarenzalLogo from '../../assets/logos/Recruiters/SarenzalLogo'
import AxaLogo from '../../assets/logos/Recruiters/AxaLogo'
import NaroutoLogo from '../../assets/logos/Recruiters/NaroutoLogo'
import AltranLogo from '../../assets/logos/Recruiters/AltranLogo'
import AccorLogo from '../../assets/logos/Recruiters/AccorLogo'
import RajaLogo from '../../assets/logos/Recruiters/RajaLogo'
import DataSolutionLogo from '../../assets/logos/Recruiters/DataSolutionLogo'

export default function Recruiters(){
    const LogosScrolling= [
        <SNCFLogo/>,
        <SarenzalLogo/>,
        <AxaLogo/>,
        <NaroutoLogo/>,
        <AltranLogo/>,
        <AccorLogo/>,
        <RajaLogo/>,
        <DataSolutionLogo/>,

    ];

    

    return(
        <>
        <section className="Recruiters h-[22.25rem] w-full bg-slate-900 border-b-2 ">
            <div className="Recruiters_Text flex justify-center">
                <p className="text-white text-4xl font-bold mt-16">Ils ont recruté <span className="text-cyan-400">nos alumni</span></p>
            </div>
            <div className="carousel-container mx-[10%] h-[70%] overflow-hidden rounded-box">
            <div className="logo-scroller flex gap-8 !w-[250%] h-full">
                <SNCFLogo/>
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