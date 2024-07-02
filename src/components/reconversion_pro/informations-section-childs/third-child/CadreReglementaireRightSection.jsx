import StatistixsImg from "../../../../assets/images/formation_court/statistics.png"
export default function CadreReglementaireRightSection() {
    return (
        <div className="p-3 h-100 overflow-auto">
            <div className="flex">
                <img src={StatistixsImg} alt="" className="w-14 h-14 self-center mr-6" />
                <h4 className="uppercase text-2xl font-medium text-[#39DDF5] cadre-reglementaire-titles">
                    TAUX D'OBTENTION <br /> 2022 / 2023
                </h4>
            </div>
            <div className="mt-4 pl-7">
                <ul>
                    <li className="list-disc text-xl font-medium text-white cadre-reglementaire-p">100% taux d'achèvement</li>
                    <li className="list-disc text-xl font-medium text-white cadre-reglementaire-p">100% taux de réussite de la <br /> certifications</li>
                </ul>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-white" style={{ fontSize: '18px' }}>TAUX DE SATISFACTION GLOBAL ANNUEL</h4>
                <div className="pl-8 mt-4">
                    <ul>
                        <li className="list-disc text-2xl font-semibold text-[#3390B2] cadre-reglementaire-p">100%</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-white" style={{ fontSize: '18px' }}>TAUX D'INSERTION PROFESSIONNELLE</h4>
                <div className="pl-8 mt-4">
                    <ul>
                        <li className="list-disc text-2xl font-semibold text-[#3390B2] cadre-reglementaire-p">100% <span className="text-xl font-medium text-white">3 mois post formation</span></li>
                    </ul>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex">
                    <img src={StatistixsImg} alt="" className="w-14 h-14 mr-6 self-center" />
                    <h4 className="uppercase text-2xl font-medium text-[#39DDF5] cadre-reglementaire-titles">
                        TAUX D'OBTENTION <br /> 2022 / 2023
                    </h4>
                </div>
                <div className="pl-8 mt-5">
                    <ul>
                        <li className="list-disc font-medium text-white cadre-reglementaire-p" style={{ fontSize: '18px' }}>
                            Inscription Via AIRE : 6 semaines
                        </li>
                        <li className="list-disc font-medium text-white cadre-reglementaire-p" style={{ fontSize: '18px' }}>
                            Inscription via Pôle Emploi : Durée flexible de 15 jours à 1 mois
                        </li>
                        <li className="list-disc font-medium text-white cadre-reglementaire-p" style={{ fontSize: '18px' }}>
                            Paiement personnel : 2 semaines avant la session visée
                        </li>
                        <li className="list-disc font-medium text-white cadre-reglementaire-p" style={{ fontSize: '18px' }}>
                            Inscription via Pôle Emploi : Durée flexible de 15 jours à 1 mois
                        </li>
                        <li className="list-disc font-medium text-white cadre-reglementaire-p" style={{ fontSize: '18px' }}>
                            Préparation Oppérationnelle à l'Emploi Individuelle (POEI) : un mois
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
