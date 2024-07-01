import React from 'react';

function ModeDeFormation() {
    return (
        <div className="flex-1 px-2">
            <div className="relative h-11 w-full min-w-[200px]">
                <label for="underline_select" class="sr-only">Underline select</label>
                <select id="underline_select" class="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline outline-0 transition-all placeholder-shown:border-blue-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-whiteplaceholder:opacity-0 focus:placeholder:opacity-100">
                    <option selected>Sélectionner</option>
                    <option value="US">Visioconference</option>
                    <option value="CA">Cypress</option>
                </select>
                <label
                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-white font-semibold">
                    Mode de formation<span className={'text-cyan-400 ml-1'}>*</span>
                </label>
            </div>
        </div>
    );
}

export default ModeDeFormation;