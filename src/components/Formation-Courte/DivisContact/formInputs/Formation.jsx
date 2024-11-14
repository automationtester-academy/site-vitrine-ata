import React from "react";

function Formation({ value, onChange }) {
  return (
    <div className="flex-1 px-2 max-sm:mb-12">
      <div className="relative h-11 w-full min-w-[200px]">
        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          name="formation"
          className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline outline-0 transition-all placeholder-shown:border-blue-white "
          value={value}
          onChange={onChange}
        >
          <option className="bg-[#071323]" value="" disabled>
            Formation souhaité
          </option>
          <option className="bg-[#071323]" value="Playwright">
            Playwright
          </option>
          <option className="bg-[#071323]" value="Cypress">
            Cypress
          </option>
          <option className="bg-[#071323]" value="Selenium">
            Selenium
          </option>
          <option className="bg-[#071323]" value="Postman">
            Postman
          </option>
          <option className="bg-[#071323]" value="Git">
            Git
          </option>
          <option className="bg-[#071323]" value="Robot Framework">
            Robot Framework
          </option>
          <option className="bg-[#071323]" value="Test Mobile">
            Test Mobile
          </option>
          <option className="bg-[#071323]" value="K6">
            K6
          </option>
        </select>
       
      </div>
    </div>
  );
}

export default Formation;
