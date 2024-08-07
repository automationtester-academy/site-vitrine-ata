import React from 'react';

function PhoneNumber({ onInputChange }) {

    const handleChange = (event) => {
        onInputChange('phoneNumber', event.target.value);
    };

    return (
        <div className="flex-1 px-2">

            <div className="relative h-11 w-full min-w-[200px] mt-9">
                <input placeholder="" onChange={handleChange} type="text" name="phoneNumber"
                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"/>
                <label
                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px]  leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-semibold">
                    Téléphone <span className={'text-cyan-400 ml-1'}>*</span>
                </label>
            </div>
        </div>
    );
}

export default PhoneNumber;