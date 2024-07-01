import notfound from '../assets/backgrounds/NotFoundBackground.png';
import decoration from '../assets/images/NotFound/decoration.png';
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <>
        <section className=" flex justify-center items-center ">
            <div className='Container_not  relative w-[100%] h-[40rem] max-sm:pb-[2%] max-xl:h-[90%]'>
                <div className='flex flex-row max-xl:h-[100%]'>
                        <div className='h-[40rem] w-[20%] max-sm:hidden max-lg:w-[40%] max-xl:h-[30rem] max-xl:w-[28%]'>
                            <img  className='object-fill h-[100%] w-[100%] ' src={decoration} alt=""  />
                        </div>
                        <div className='container_notfound relative w-[80%] max-sm:w-[100%] max-sm:h-[100%] max-sm:flex max-sm:justify-center max-xl:h-[30rem] max-lg:w-[100%] max-xl:flex max-xl:justify-center max-xl:items-center  max-xl:w-[100%]'>
                        <div className='flex justify-end w-[100%]'>
                            <img src={notfound} alt="" />
                        </div>
                        <div className='absolute top-[24%] left-0 w-[80%]  max-sm:w-[100%] max-sm:flex max-sm:items-center max-sm:flex-col max-xl:flex max-xl:!items-center max-xl:!justify-center max-xl:flex-col  max-xl:w-[90%]'>
                            <p className='text-center font-semibold text-white text-3xl max-sm:text-xl max-sm:px-[2%]'>
                            Page introuvable. Peut-être qu'elle suit un cours de développement. 
                            <span className='text-cyan-400 '> Rejoignez nos formations </span>en ligne 
                            pour éviter les erreurs 404 !
                            </p>
                            <div className=' flex flex-row w-[100%] justify-evenly items-center pt-[6%] max-lg:flex-col max-xl:w-[90%] '>
                            <div className="NavBarLinks_button flex flex-shrink-0  my-2.5 lg:my-0  max-lg:justify-center max-lg:items-center max-lg:w-[90%] max-xl:w-[50%] max-sm:w-[80%]">
                                <div className="relative inline-block  p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md max-lg:w-[80%] ">
                                    <Link to="/Formation" className="Header-text text-center block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                                            Explorer nos cours                            
                                    </Link>
                                </div>
                            </div>
                            <div className="NavBarLinks_button flex flex-shrink-0 my-2.5 lg:my-0  max-lg:justify-center max-lg:items-center max-lg:w-[90%] max-sm:w-[80%]">
                                <div className="relative inline-block  p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md max-lg:w-[80%] ">
                                    <Link to="/" className="Header-text text-center block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                                        Vers Page d'accueil                                    
                                    </Link>
                                </div>
                            </div>

                            </div>
                        </div>

                        </div>
 


                </div>
            </div>
            
        </section>
        </>
    );
}
