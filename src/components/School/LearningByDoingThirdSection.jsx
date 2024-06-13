import ImageAccounting from '../../assets/images/Maskgroup2.png'
import HomeHerosectionBackground from '../../assets/backgrounds/School_backgroundSectoin'
import FirstIcon from './icons/firstIcon'
import SecondIcon from './icons/second';
import ThirdIcon from './icons/third';
import FourthIcon from './icons/fourth';


import "../../assets/css/style.css"
export default function LearningByDoingThirdSection(){
    return(
        <>
         <section className="Recruiters w-full   max-sm:h-max ">
            <div className="Recruiters_Text flex max-sm:flex-wrap justify-center mb-10">
                <p className="text-white text-4xl font-bold mt-16 text-center  max-sm:!text-center max-sm:px-3 max-sm:text-3xl">Pour vous faire votre propre avis,<br/><span className="text-cyan-400">demandez celui des autres.</span></p>
            </div>
            <div className='column_holder mt-[6rem] w-[100%] m-auto'>
            <div className='flex max-sm:flex-wrap mb-[3rem] w-[70%] max-sm:w-[90%] m-auto gap-[5rem]'>
                <div className="card_holder">
                    <div className="card-content relative w-[100%] m-auto">
                        <div className="card_image">
                            <img src="" alt="" />
                        </div>
                        <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl">
                            <div className="imageIcon exeption">
                               <FirstIcon />
                            </div>
                            <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                Live coding
                            </h6>
                            <p className='card_content text-white'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  enim ad minim veniam, quis nostrud ullamcorper suscipit lobortis nisl esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card_holder">
                    <div className="card-content relative">
                        <div className="card_image">
                            <img src="" alt="" />
                        </div>
                        <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl">
                            <div className="imageIcon">
                               <FourthIcon />

                            </div>
                            <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                Quête
                            </h6>
                            <p className='card_content text-white'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  enim ad minim veniam, quis nostrud ullamcorper suscipit lobortis nisl esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex max-sm:flex-wrap mb-4 w-[70%] max-sm:w-[90%] m-auto gap-[5rem]'>
                <div className="card_holder">
                    <div className="card-content relative">
                        <div className="card_image">
                            <img src="" alt="" />
                        </div>
                        <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl">
                        <div className="imageIcon">
                               <SecondIcon />
                            </div>
                            <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                KATA
                            </h6>
                            <p className='card_content text-white'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  enim ad minim veniam, quis nostrud ullamcorper suscipit lobortis nisl esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card_holder">
                    <div className="card-content relative">
                        <div className="card_image">
                            <img src="" alt="" />
                        </div>
                        <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl">
                        <div className="imageIcon">
                               <ThirdIcon />

                            </div>
                            <h6 className="card_title text-cyan-400 text-lg font-semibold">
                                DOJO
                            </h6>
                            <p className='card_content text-white'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  enim ad minim veniam, quis nostrud ullamcorper suscipit lobortis nisl esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}