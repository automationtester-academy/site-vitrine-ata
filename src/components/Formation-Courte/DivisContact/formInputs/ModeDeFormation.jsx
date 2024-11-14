import React from 'react';

function ModeDeFormation({ value, onChange }) {
    return (
        <div className="flex-1 px-2">
            <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="underline_select" className="sr-only">
                    Underline select
                </label>
                <select
                    id="underline_select"
                    name="modeDeFormation"
                    className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline outline-0 transition-all placeholder-shown:border-blue-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-white placeholder:opacity-0 focus:placeholder:opacity-100"
                    value={value}
                    onChange={onChange}
                >
                    <option className="bg-[#071323]" value="" disabled>
                        Mode de formation
                    </option>
                    <option className="bg-[#071323]" value="Distanciel">
                        Distanciel
                    </option>
                    <option className="bg-[#071323]" value="Locaux d'entreprise">
                        Locaux d'entreprise
                    </option>
                    <option className="bg-[#071323]" value="Notre site">
                        Notre site
                    </option>
                </select>
                
            </div>
        </div>
    );
}

export default ModeDeFormation;
