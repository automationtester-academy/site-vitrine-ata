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

            <div className="relative m-auto w-[80%] overflow-hidden flex space-x-42 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LogosScrolling.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LogosScrolling.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>

        </section>
        </>
    )
}