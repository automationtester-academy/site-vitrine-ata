import React from 'react';

function Formation({ value, onChange }) {
    return (
        <div className="flex-1 px-2 max-sm:mb-12">
            <div className="relative h-11 w-full min-w-[200px]">
                <label for="underline_select" className="sr-only">Underline select</label>
                <select id="underline_select" name="formation"
                    className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline outline-0 transition-all placeholder-shown:border-blue-white "
                    value={value} 
                    onChange={onChange}>
                    <option className='bg-[#071323]' value="Postman">Postman</option>
                    <option className='bg-[#071323]' value="Cypress">Cypress</option>
                    <option className='bg-[#071323]' value="Selenium">Selenium</option>
                    <option className='bg-[#071323]' value="Selenium">Git</option>
                    <option className='bg-[#071323]' value="Selenium">Robot Framework</option>
                    <option className='bg-[#071323]' value="Selenium">Test Mobile</option>
                    <option className='bg-[#071323]' value="Selenium">Playwright</option>
                </select>
                <label
                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-white font-semibold">
                    Formation souhaité<span className={'text-cyan-400 ml-1'}>*</span>
                </label>
            </div>
        </div>
    );
}

export default Formation;