import FormationHero from "../../assets/images/FormationHero.jpg";

export default function HeroSection() {
    return (
        <>
             <div className="formation-hero-container">
                <div className="formation-hero-img">
                    <img src={FormationHero} alt="Formation Hero" />
                </div>
                <div className="formation-hero-title flex justify-center">
                    <h2 className="uppercase text-white text-7xl font-bold">
                        <span className="text-[#39DDF5]">Nos</span> Formation
                    </h2>
                </div>
            </div>
        </>
    );
}
