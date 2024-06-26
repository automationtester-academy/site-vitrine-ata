import { useState } from "react";
import { Link } from "react-router-dom";
import ATALogo from "../../assets/logos/ATALogo";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar flex items-center justify-between flex-wrap bg-slate-900 p-4 lg:px-36 py-2 border-b-2 border-white">
                <Link to="/" className="navbar-logo flex items-center flex-shrink-0 text-white">
                    <ATALogo />
                </Link>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> </svg>
                    </button>
                </div>
                <div className={`NavbarLinks w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'} lg:block`}>
                    <div className="NavbarLinks_menu text-sm lg:flex-grow lg:flex lg:justify-center lg:ml-36 mt-3 lg:mt-0">
                        <Link to="/ecole" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-cyan-600 hover:underline mr-4 font-semibold">
                            L’école
                        </Link>
                        <Link to="/Formation" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-cyan-600 mr-4 hover:underline font-semibold">
                            Formations
                        </Link>
                        <Link to="/financement" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-cyan-600 hover:underline font-semibold">
                            Financements
                        </Link>
                    </div>
                    <div className="NavBarLinks_button flex-shrink-0 my-2.5 lg:my-0">
                        <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r hover:bg-none hover:bg-[#3390B2] from-[#3390B2] to-[#87E5EC] rounded-md">
                            <Link to="/contact" className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                                Nous Contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
