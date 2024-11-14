import React from 'react';

function EmailAddress({ value, onChange }) {
    return (
        <div className="flex-1 px-2">
            <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Adresse mail" name="email" type="email" value={value}
                    onChange={onChange}
                    className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline outline-0 transition-all placeholder-shown:border-blue-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-white focus:placeholder:opacity-100" />
                
            </div>
        </div>
    );
}

export default EmailAddress;