import React from 'react';

function Message({ value, onChange }) {

    const handleChange = (event) => {
        onInputChange('message', event.target.value);
    };

    return (
        <div className="w-full mt-4">
            
            <textarea name="message"
                className=" mt-4 textarea block w-full px-5 py-3  placeholder-gray-400 bg-slate-900 bg-opacity-0  border-2  rounded border-gray-200
                                              text-white dark:border-gray-700 outline-none"
                placeholder="Message"
                onChange={onChange}
                value={value}
            ></textarea>
        </div>
    );
}

export default Message;