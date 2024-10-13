import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png"
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png"

export default function DemandeDeEmploiFourthDropDown() {
    const [isActive, setActive] = useState(false);

    const activeDropDown = () => {
        setActive(!isActive);
    }

    const textColor = isActive ? "text-[#39DDF5]" : "text-white";
    const dropDownStyle = isActive ? "flex text-white font-bold py-5 px-4 w-11/12 items-center" : "drop-down-style flex items-center text-white font-bold py-5 px-4 w-11/12";

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <button
                    className={`${dropDownStyle}`}
                    onClick={activeDropDown}
                >
                    {isActive ? <img src={CartIcon2} alt="" /> : <img src={CartIcon} alt="" />}
                    <span className={`ml-4 text-xl ${textColor}`}>LE CSP</span>
                </button>
                {isActive && (
                    <div className="mt-4 w-11/12 p-4 drop-down-style">
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Définition :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Contrat de sécurisation professionnelle. C’est un dispositif d’accompagnement renforcé avec un suivi individualisé en cas de licenciement économique</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Conditions :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Être salarié dans un cas de licenciement économique dans une entreprise de moins de 1000 salariés, cette entreprise doit te proposer le CSP. Il n’y a pas de conditions d’ancienneté pour en bénéficier. Tu dois simplement justifier que tu rentres bien dans les cases de la Convention du 14 avril 2017. C’est-à-dire, être éligible à l’allocation de retour à l’emploi ARE et être physiquement apte à travailler.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">AVANTAGES :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Si tu es dans cette situation, le CSP fait office de filet de sécurité et prévoit ton retour à l’emploi. Tu auras donc des rendez-vous avec un conseiller attitré et <strong>la possibilité de suivre des formations</strong> pour une éventuelle reconversion, le tout, <strong>en étant payé, pendant 12 mois.,</strong></p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Demander un financement alors qu’on est en CSP, c’est avoir bien plus de chance d’obtenir une réponse positive qu’en demandant un financement hors dispositif CSP.</p>
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">Démarches à suivre :</h2>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">Prendre contact avec notre équipe pour vous aidez à préparer votre dossier.</p>
                            </div>
                        </div>
                        <div>
                           
                            <div className="my-2">
                                <p className="text-xl text-white">1 : Choisir votre formation et votre date de rentrée</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">2 : Remplir notre formulaire de contact, notre équipe prendra contact avec vous pour définir vos besoins et le mode de financement le plus adéquat en fonction de votre situation, la demande de financement AIRE sera saisie par Automation Tester Academy via le portail mes démarches Région Ile-De-France.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">3 : Préparez votre rendez-vous avec votre conseillère ou conseiller France Travail afin de lui informer de votre projet et pour une éventuelle prise en charge du reste à charge de 20% de la formation.</p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">4 : Fournir les documents nécessaires à la demande de financement à notre gestionnaire formation, qui aura pris contact en amont avec vous,
                                    Le délai de réponse de la Région Ile-De-France est de 6 semaines
                                </p>
                            </div>
                            <div className="my-2">
                                <p className="text-xl text-white">5 : Signer votre convention de formation</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}