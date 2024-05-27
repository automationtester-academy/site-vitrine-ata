export default function DemandeDeEmploiComponent(){
    return (
        <>
            <div className="flex flex-col items-center mb-3">
                <div>
                    <h2 className="text-4xl text-white font-bold p-7">Je suis demandeur / demandeuse d'emploi</h2>
                </div>
                <div className="p-0.5 bg-gradient-to-r from-[#3390B2] to-[#87E5EC] rounded-md hover:bg-cyan-600">
                    <button className="rounded-md font-bold bg-[#071323] text-white text-xl p-2 hover:bg-cyan-600">Je m'inscris pour être accompagné</button>
                </div>
            </div>
        </>
    );
}