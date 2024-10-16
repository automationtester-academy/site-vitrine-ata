import {useState } from "react";

import checkbox from "../../../assets/icons/checkbox.png";
import CheckedCheckbox from "../../../assets/icons/checkedCheckbox.png";

export default function PrivacyPolicy({ isChecked1, setChecked1, isChecked, setChecked }) {
    // const [isChecked, setChecked] = useState(false);

    const checkingBox = () => {
        setChecked(!isChecked);
    };

    const checkingBox1 = () => {
        setChecked1(!isChecked1);
    };

    return (
        <>
            <section>
                <div>
                    <p className="mt-4 text-white text-sm mb-5">
                        Automation Tester Academy s'engage à protéger et à respecter votre vie privée. Nous n'utiliserons vos données personnelles que pour administrer votre compte et vous fournir les produits et services demandés.
                    </p>
                </div>

                <div className="checkbox_policy mb-5 ms-4">
                    <div className="flex items-start">
                        <input id="link-checkbox1" name="isChecked" type="checkbox" className="hidden" checked={isChecked} onChange={checkingBox}/>
                        <a onClick={checkingBox} id="link-checkbox1" type="checkbox">
                            {isChecked ? <img src={CheckedCheckbox} alt="" /> : <img src={checkbox} alt="" />}
                        </a>
                        <label htmlFor="link-checkbox1" className="ms-2 text-sm text-white dark:text-gray-300">
                            J'accepte de recevoir d'autres communications de Automation Tester Academy.
                        </label>
                    </div>
                    <div className="flex items-start required">
                        <input id="link-checkbox2" name="isChecked1" type="checkbox" className="hidden" checked={isChecked1} onChange={checkingBox1}/>
                        <a onClick={checkingBox1} id="link-checkbox2" type="checkbox">
                            {isChecked1 ? <img src={CheckedCheckbox} alt="" /> : <img src={checkbox} alt="" />}
                        </a>
                        <label htmlFor="link-checkbox2" className="ms-2 text-sm text-white dark:text-gray-300 required">
                            J'accepte d'être contacté par un conseiller pour recevoir une réponse.*
                        </label>
                    </div>
                </div>
                <div className="checkbox_policy">
                    <p className="text-sm mb-4">Vous pouvez vous désabonner de ces communications à tout moment.</p>
                    <p className="text-sm mb-4" id="ImportantCheck">En cliquant sur « Envoyer » ci-dessous, vous autorisez l’entreprise Automation Tester Academy à stocker et traiter les données personnelles soumises ci-dessus afin qu’elle vous fournisse le contenu demandé.</p>
                    <p className="font-medium text-sm">* les champs obligatoires</p>
                </div>
            </section>
        </>
    );
}
