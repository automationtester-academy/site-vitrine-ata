import Calendrier from "../../assets/icons/Calendrier";
import Evaluation from "../../assets/icons/Evaluation";

export default function ModaliteEvaluation(){
    return(
        <>
            <div className="InfoEvaluation w-[54%] flex-col max-sm:w-[100%]">
                <div className="Evaluation ">
                    <div className="flex flex-row gap-3 Evaluation-content">
                        <Evaluation/>
                        <p className="text-xl font-medium leading-tight w-[100%] pt-[1%] text-cyan-400 max-sm:text-lg max-sm:py-[5%] max-lg:w-[96%] max-lg:py-[5%]">MODALITÉS D’ÉVALUATION</p>
                    </div>
                        <ul className="list-disc pl-[5%] p-[2%] max-sm:pl-[20%]">
                            <li className="text-white text-lg max-sm:text-md">QUIZZ + KATA</li>
                        </ul>
                </div>

                <div className="Duration">
                    <div className="flex flex-row gap-3 Evaluation-content">
                        <Calendrier/>
                        <p className="text-xl font-medium leading-tight w-[100%] pt-[1%] text-cyan-400 max-sm:w-[96%] max-sm:py-[5%] max-lg:w-[96%] max-lg:py-[5%]">DÉLAI D’ACCÈS À LA FORMATION</p>
                    </div>
                    <ul className="list-disc pl-[5%] p-[2%] max-sm:pl-[20%]">
                        <li className="text-white text-md max-sm:text-md">Financement via Pôle Emploi : Durée flexible de 15 jours à 1 mois</li>
                        <li className="text-white text-md max-sm:text-md">Paiement personnel : 2 semaines avant la session visée</li>
                        <li className="text-white text-md max-sm:text-md">Préparation Opérationnelle à l'Emploi Individuelle (POEI) : un mois</li>
                    </ul>
                </div>
                    </div> 
        </>
    )
}