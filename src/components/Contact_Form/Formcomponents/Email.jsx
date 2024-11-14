import React from 'react';

function Email({ value, onChange }) {

    const handleChange = (event) => {
        onInputChange('email', event.target.value);
    };

    return (
        <div className="flex-1 px-2 mt-4 md:mt-0">
            <div className="relative h-11 w-full min-w-[200px] mt-9">
                <input placeholder="Email" onChange={onChange} value={value} type={"email"} name="email"
                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  focus:placeholder:opacity-100"/>
                
            </div>
        </div>
    );
}

export default Email;