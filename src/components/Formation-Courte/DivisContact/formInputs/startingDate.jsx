import React from 'react';

function StartingDate({ value, onChange }) {
    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="flex-1 px-2">
            <div className="relative h-11 w-full min-w-[200px]">
                <div className="relative">
                    <input 
                        type="date" 
                        name="startingDate"
                        className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline-none transition-all placeholder-shown:border-blue-white focus:border-white focus:outline-none disabled:border-0 date-input"
                        placeholder="Select date"
                        min={today}
                        value={value}
                        onChange={onChange} 
                    />
                </div>
                <label
                    className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-white font-semibold">
                    Date de début souhaitée<span className="text-cyan-400 ml-1">*</span>
                </label>
            </div>
        </div>
    );
}

export default StartingDate;
