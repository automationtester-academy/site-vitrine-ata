import {Link} from "react-router-dom"
import ATALogo from "../assets/Images/ATALogo"

export default function Header(){
    return(
        <>


                <nav className="flex items-center justify-between flex-wrap bg-slate-900 px-36 py-5 border-b-2 border-white">
                <div className="flex items-center flex-shrink-0 text-white mr-6 px-1.5">
                    <ATALogo/>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow lg:flex  lg:justify-center lg:ml-36 ">
                    <a href="#responsive-header" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-semibold">
                        L’école
                    </a>
                    <a href="#responsive-header" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-semibold">
                        Formations
                    </a>
                    <a href="#responsive-header" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white font-semibold">
                        Financements
                    </a>
                    </div>
                    {/* <div className="flex-shrink-0">
                    <a href="#" className="inline-block px-8 text-lg py-3 leading-none border-2 border-gradient-to-r from-cyan-500 to-blue-500  rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-2 lg:mt-0 lg:mb-2 font-semibold">Nous Contacter</a>
                    </div> */}
                    <div className="flex-shrink-0">
                        <div className="relative inline-block p-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                            <a href="#" className="block px-8 text-lg py-3 leading-none bg-slate-900 text-white rounded-md hover:text-teal-500 hover:bg-white font-semibold">
                            Nous Contacter
                            </a>
                        </div>
                    </div>

                </div>
                </nav>
 
        
        </>
    )
}