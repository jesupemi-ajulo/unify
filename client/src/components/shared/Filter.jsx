import React from "react";

const Filter = ({ options, active, onChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 md:mb-8 ">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`shrink-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border transition ${active === option ? "bg-[#7c6ff7] text-white border-[#7c6ff7]" : "bg-white text-[#6b6b80] border-gray-200 hover:border-[#7c6ff7] hover:text-[#7c6ff7] transition"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Filter;
