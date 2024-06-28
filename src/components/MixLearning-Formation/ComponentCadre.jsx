import LeCadre from '../MixLearning-Formation/LeCadre'
import LesOutilsDispositifs from '../MixLearning-Formation/LesOutilsDispositifs'

export default function ComponentCadre(){
    return(
        <>
        <section className='flex justify-center'>
            <div className='flex flex-row justify-between w-[80%] py-[2%] pb-[3.5%] border-b-2 border-cyan-400  max-sm:flex-col max-sm:gap-2 max-sm:w-[90%]'>
            <LeCadre/>
            <LesOutilsDispositifs/>
            </div>
        </section>
        </>
    )
}