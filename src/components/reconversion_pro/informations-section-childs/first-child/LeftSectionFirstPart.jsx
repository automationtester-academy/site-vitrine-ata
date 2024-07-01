import { Link } from "react-router-dom";

export default function LeftSectionFirstPart() {
    return (
        <>
            <div className="content-div py-8">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center mb-7">
                        <div className="mb-5">
                            <h4 className="text-3xl text-center font-bold text-[#39DDF5] reconversion-second-section-firstLeft-title">
                                Recevoir le programme détaillé
                            </h4>
                        </div>
                        <div>
                            <p className="text-white text-center text-2xl reconversion-second-section-text">
                                Nos formations vous permettent d'apprendre par la pratique
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-5">
                            <h5 className="text-2xl text-center text-[#39DDF5]">
                                Découvrez notre programme
                            </h5>
                        </div>
                        <div className="telecharger-le-programme-button">
                            <div className="p-0.5 flex hover:bg-cyan-600 bg-gradient-to-r  from-[#3390B2] to-[#87E5EC] rounded-md">
                                <Link to={'/'} className="rounded-md flex justify-center h-full bg-[#071323] w-full text-xl p-2 hover:bg-cyan-600">
                                    <span className="text-white text-center">
                                        Télécharger le programme
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}