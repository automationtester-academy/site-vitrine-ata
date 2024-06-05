export default function PrivacyPolicy(){


    return(
        <>
        <section className=" ">
            <div>
            <p className="mt-4 text-white text-sm mb-5">
                O'clock s'engage à protéger et à respecter votre vie privée. Nous n'utiliserons vos données personnelles que pour administrer votre compte et vous fournir les produits et services demandés. 
            </p>
            </div>

            <div className="checkbox_policy mb-5 ms-4">
                <div className="flex items-start">
                    <input id="link-checkbox" type="checkbox" value=""  className="w-4 h-4 !bg-slate-900 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="link-checkbox" className="ms-2 text-sm  text-white dark:text-gray-300">J'accepte de recevoir d'autres communications de O'clock.</label>
                </div>
                <div className="flex items-start required">
                    <input id="link-checkbox" type="checkbox" value="" className="!bg-slate-900 w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                    <label for="link-checkbox" className="ms-2 text-sm  text-white dark:text-gray-300 required">J'accepte d'être contacté par un conseiller pour recevoir une réponse.*</label>
                </div>
            </div>
            <div className="checkbox_policy">
                <p className="text-sm  mb-4">Vous pouvez vous désabonner de ces communications à tout moment. </p>
                <p className="text-sm  mb-4" id="ImportantCheck">En cliquant sur « Envoyer » ci-dessous, vous autorisez l’entreprise O'clock à stocker et traiter les données personnelles soumises ci-dessus afin qu’elle vous fournisse le contenu demandé.</p>
                <p className="font-medium text-sm">* les champs obligatoires</p>
            </div>

        </section>
        </>
    )
}