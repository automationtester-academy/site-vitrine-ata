import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchMixLearningFormation } from "../API";

export default function LeftSectionFirstPart() {

    const {data} = useQuery({
        queryKey: ['Mix-Learning Formation', 2],
        queryFn: () => fetchMixLearningFormation(2),
        refetchOnWindowFocus: false,
        // refetchOnMount: false,
        cacheTime: 1000 * 60
    });

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
                            <div className="p-0.5 flex hover:bg-none hover:bg-cyan-600 bg-gradient-to-r  from-[#3390B2] to-[#87E5EC] rounded-md">
                                <a
                                    target="_blank"
                                    href={`https://drive.google.com/drive/folders/1x4tBH83a1-8itp6pE8EAB0kRBj6Cmwj-`}
                                    className="Header-text text-center block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold"
                                >
                                    Télécharger le programme
                                </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}