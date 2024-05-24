export default function ProfilsBordereauCompoment() {
    return (
        <>
            <div className="relative">
                <div className="profils-background w-full h-full p-7"></div>
                <div className="button-container">
                    <div className="flex justify-evenly items-center flex-wrap w-3/4">
                        <div className="">
                            <button className="uppercase text-white font-bold font-bold py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#3390B2] hover:to-[#87E5EC]">DEMANDEUR D’EMPLOI</button>
                        </div>
                        <div className="">
                            <button className="uppercase text-white font-bold font-bold py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#3390B2] hover:to-[#87E5EC]">SALARIÉ</button>
                        </div>
                        <div className="">
                            <button className="uppercase text-white font-bold font-bold py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#3390B2] hover:to-[#87E5EC]">ÉTUDIANT</button>
                        </div>
                        <div className="">
                            <button className="uppercase text-white font-bold font-bold py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#3390B2] hover:to-[#87E5EC]">INDÉPENDANT</button>
                        </div>
                        <div className="">
                            <button className="uppercase text-white font-bold font-bold py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#3390B2] hover:to-[#87E5EC]">SITUATION DE HANDICAP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}