import HomeCompBackground from "../../assets/backgrounds/HomeCompBackground"
export default function HerosectionCompnent(){
    return(
        <>
        <section className="w-10/12  mx-24 my-16 bg-red-300">
            <div className="Herosection relative w-5/12">
                <div className="Herosection_firstcomp w-1/3">
                    <div className="Herosection_underbackground_img_ w-[30rem]">
                        <HomeCompBackground />
                    </div>
                    <div className="Herosection_Text w-[30rem] mr-10">
                        <h1 className="text-white  text-[30px] font-bold mb-[0.70rem] leading-tight">Lancez votre carrière avec nos formations tremplin, 
                        <span className="text-cyan-400">votre passeport vers l’automatisation des tests !</span></h1>
                        <p className="text-white text-lg leading-tight mb-[1rem]">En quelques jours ou plusieurs mois, en intensif ou à  votre rythme, des formations accessibles de partout via notre plateforme de cours et nos formateurs experts.</p>
                        <p className="text-white text-lg leading-tight">Peu importe votre parcours académique ou professionnel, UN seul objectif :  vous rendre opérationnel dans le monde de l'automatisation des tests logiciels.</p>
                    </div>
                </div>

                <div className="Herosection_image">

                </div>

            </div>
        </section>
        </>
    )
}