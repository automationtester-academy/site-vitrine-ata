import { Link } from "react-router-dom"
import Rocket from "../../assets/images/MixLearning/rocket.png"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchMixLearningFormation } from "./API";

export default function DetailsdeProgramme() {

    // const fetchMixLearningFormation = async (categoryId) => {
    //     const response = await axios.get(`http://127.0.0.1:8000/api/foration/by/category/${categoryId}`);
    //     return response.data;
    // }

    const {data} = useQuery({
        queryKey: ['Mix-Learning Formation', 3],
        queryFn: () => fetchMixLearningFormation(3),
        refetchOnWindowFocus: false,
        // refetchOnMount: false,
        cacheTime: 1000 * 60
    });

    console.log(data);
    return (
        <>
            <section className="w-[45%] flex flex-col gap-6 max-xl:w-[100%] max-lg:w-[100%] xl:max-2xl:h-[120vh]   max-sm:w-[100%]">
                <div className="border-2 border-cyan-400 pt-[9%] pb-[4%] flex  justify-center items-center flex-col rounded-xl xl:max-2xl:h-[40%]">
                    <h1 className="card_title text-cyan-400 text-2xl text-justify  font-semibold max-lg:text-center max-sm:text-2xl flex max-sm:text-center  max-sm:pt-[1%]">
                        Recevoir le programme détaillé
                    </h1>
                    <p className="text-white text-xl max-lg:px-[2%] max-lg:text-center max-sm:text-lg mb-[3%] max-sm:px-[2%]">
                        Découvrez notre programme
                    </p>

                    <div className="NavBarLinks_button flex flex-shrink-0   lg:my-0   max-lg:justify-center max-lg:items-center max-lg:w-[80%] max-sm:w-[80%]">
                        <div className="relative inline-block w-[100%] p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md max-lg:w-[80%] max-xl:w-[100%] ">
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
                <div className="border-2 border-cyan-400 pt-[9%] pb-[4%] flex  justify-center items-center flex-col rounded-xl xl:max-2xl:h-[80%]">
                    <h1 className="card_title text-cyan-400 text-2xl text-justify  font-semibold  max-sm:text-2xl flex max-sm:text-center max-sm:pt-[1%]">
                        Nos prochaines rentrées
                    </h1>
                    <p className="text-white text-center text-xl max-lg:px-[3%] max-sm:text-lg max-sm:text-center max-sm:px-[2%] mb-[3%]">
                        Démarrez à tout moment votre nouvelle carrière !  étudiez à votre rythme.
                    </p>
                    <div className="ProchaineRentréeImg pb-[5%]">
                        <img src={Rocket} alt="Improve your skills with ATA" />
                    </div>

                    <div className="NavBarLinks_button flex flex-shrink-0   lg:my-0  max-lg:justify-center max-lg:items-center max-lg:w-[40%] max-sm:w-[80%]">
                        <div className="relative inline-block w-[100%] p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md max-lg:w-[80%] max-xl:w-[100%] ">
                            <Link to={"/Contact"} className="Header-text text-center block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                                S’inscrire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}