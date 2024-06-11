import React, { useRef } from "react";
import BootcampSection from "./BootcampSection";
import FormationCourteSection from "./FormationCourteSection";
import AbonnementSection from "./AbonnementSection";
import ReconversionProSection from "./ReconversionProSection";
import MixLearningSection from "./MixLearningSection";

export default function CategoriesSection() {
    const bootcampRef = useRef(null);
    const formationCourteRef = useRef(null);
    const abonnementRef = useRef(null);
    const reconversionProRef = useRef(null);
    const mixLearningRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="relative">
                <div className="formation-background w-full h-full p-7"></div>
                <div className="button-container">
                    <div className="flex justify-evenly items-center flex-wrap w-3/4">
                        <button
                            onClick={() => scrollToSection(bootcampRef)}
                            className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"
                            aria-label="Aller à la section Bootcamp"
                        >
                            Bootcamp
                        </button>
                        <button
                            onClick={() => scrollToSection(formationCourteRef)}
                            className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"
                            aria-label="Aller à la section Formation courte"
                        >
                            Formation courte
                        </button>
                        <button
                            onClick={() => scrollToSection(abonnementRef)}
                            className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"
                            aria-label="Aller à la section Abonnement"
                        >
                            Abonnement
                        </button>
                        <button
                            onClick={() => scrollToSection(reconversionProRef)}
                            className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"
                            aria-label="Aller à la section Reconversion pro"
                        >
                            Reconversion pro
                        </button>
                        <button
                            onClick={() => scrollToSection(mixLearningRef)}
                            className="text-white font-bold py-2 px-4 rounded hover:bg-cyan-600"
                            aria-label="Aller à la section Mix-learning"
                        >
                            Mix-learning
                        </button>
                    </div>
                </div>
            </div>
            <div ref={bootcampRef}>
                <BootcampSection />
            </div>
            <div ref={formationCourteRef}>
                <FormationCourteSection />
            </div>
            <div ref={abonnementRef}>
                <AbonnementSection />
            </div>
            <div ref={reconversionProRef}>
                <ReconversionProSection />
            </div>
            <div ref={mixLearningRef}>
                <MixLearningSection />
            </div>
        </>
    );
}
