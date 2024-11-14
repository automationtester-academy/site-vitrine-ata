import React from "react";

function NumberOfCondidates({ value, onChange }) {
  return (
    <div className="flex-1 px-2">
      <div className="relative h-11 w-full min-w-[200px] max-sm:mb-10">
        <input
          placeholder="Nombre de candidats"
          name="numberOfCondidates"
          type="tele"
          value={value}
          onChange={onChange}
          className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline-none transition-all placeholder-blue-gray-500 focus:border-white focus:outline-none disabled:border-0"
        />
      </div>
    </div>
  );
}

export default NumberOfCondidates;
