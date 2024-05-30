import girl from "../../assets/images/Profils/girl.svg"
export default function CommentComponent(){

    return(
        <>
        <section className="flex justify-center">
            <div className="Comment_container h-[32.25rem] pb-20 w-full bg-slate-900  border-b-2 flex flex-col">
                <div className="Comment_title flex justify-center  w-full  h-[35%] mb-10">
                    <p className="text-white w-8/12 text-4xl text-center font-bold mt-16 ">Pour vous faire votre propre avis,<br /> <span className="text-cyan-400 text-center ms-7">demandez celui des autres.</span></p>
                </div>
                <div className="Comments flex justify-center  w-[100%]">
                    <div className="block w-[36%] px-6 pt-6 pb-2 bg-white border border-gray-200 rounded-3xl shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">        
                        <p class="font-medium text-neutral-500 dark:text-gray-400 ">Dans notre promo, on vient tous d’horizons professionnels complètement différents, c’est super enrichissant. On progresse tous ensemble, il y a énormément d’entraide aussi bien technique que morale. Et puis, travailler autant ensemble comme on le fait, je trouve que ça nous prépare bien à la réalité du terrain.</p>
                        <div className="Comments_profil_image flex flex-row mt-[4%]">
                            <img src={girl} alt="girl profil picture"/>
                            <p className="text-black text-xl font-bold  flex self-center px-6">SARA <span className="text-cyan-400">YAKOUBI</span></p>
                        </div>
                    </div>

                    

                </div>

            </div>

        </section>
        
        </>
    )
}