import WritingImg from "../../../../assets/images/formation_court/writing.png"
export default function CadreReglementaireLeftSection() {
    return (
        <div className="w-full">
            <div className="flex mb-6 container-title">
                <img src={WritingImg} width="54" height="56" alt="Writing Img" className="mr-3 h-14" />
                <h4 className="uppercase text-2xl font-medium text-[#39DDF5]">
                    MODALITÉS D’ÉVALUATION DANS<br /> LE CADRE DE LA CERTIFICATION
                </h4>
            </div>
            <div className="">
                <div className="mb-4">
                    <p className="text-white font-medium text-xl">Sur la base d’un cas d’entreprise réelle ou fictive, le candidat v doit présenter l’analyse des enjeux rencontrés par l’équipe DevOps afin d’identifier un ou des objectifs communs. Il doit décrire les ateliers mis en place pour y répondre, définir les pratiques, méthodologies et outils nécessaires à <br /> l’organisation du travail de l’équipe DevOps.</p>
                </div>
                <div className="mb-5">
                    <p className="text-white font-medium text-xl">
                    <span className="text-[#3390B2]">Rendus attendus:</span> Une présentation orale de 50 mn<br /> découpée en 3 parties
                    </p>
                </div>
                <div className="mb-3">
                    <p className="text-white font-medium text-xl">A partir d’un cas d’entreprise réelle, le candidat doit réaliser un projet professionnel comprenant une cartographique de processus de réalisation d'une application, une analyse d’une itération du cycle d’amélioration continue, la conception d'une démarche d'amélioration continue.</p>
                </div>
                <div className="">
                    <p className="text-white font-medium text-xl">
                    <span className="text-[#3390B2] block">Rendus attendus:</span> 
                    <span className="block">A l’écrit : Un rapport de 10 à 15 pages</span>
                    <span className="block">A l’oral : Une présentation orale de 30 mn</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
